import { BigNumber } from "@ethersproject/bignumber";
import { expect } from "chai";
import fp from "evm-fp";
import forEach from "mocha-each";

import { FY_TOKEN_EXPIRATION_TIME, MAX_UD60x18 } from "../../../../helpers/constants";
import { bn, usdc } from "../../../../helpers/numbers";

export default function shouldBehaveLikeMint(): void {
  context("when the underlying offered is 0", function () {
    it("reverts", async function () {
      const underlyingOffered: BigNumber = bn("0");
      await expect(this.contracts.hifiPool.mint(underlyingOffered)).to.be.revertedWith(
        "HifiPool: cannot offer zero underlying",
      );
    });
  });

  context("when the underlying offered is not 0", function () {
    context("when the total supply is 0", function () {
      const testSets = [
        ["1e-6"],
        ["100"],
        ["1729"],
        ["31415.92"],
        ["115792089237316195423570985008687907853269984665640564039457.584007"],
      ];

      forEach(testSets).it("takes %e and mints the LP tokens", async function (underlyingOffered: string) {
        await this.mocks.underlying.mock.transferFrom
          .withArgs(this.signers.alice.address, this.contracts.hifiPool.address, usdc(underlyingOffered))
          .returns(true);

        const underlyingAmount: BigNumber = usdc(underlyingOffered);
        const hTokenRequired: BigNumber = bn("0");
        const poolTokensMinted: BigNumber = fp(underlyingOffered);

        await expect(this.contracts.hifiPool.connect(this.signers.alice).mint(usdc(underlyingOffered)))
          .to.emit(this.contracts.hifiPool, "AddLiquidity")
          .withArgs(
            FY_TOKEN_EXPIRATION_TIME,
            this.signers.alice.address,
            underlyingAmount,
            hTokenRequired,
            poolTokensMinted,
          );
      });
    });

    context("when the total supply is not 0", function () {
      const initialNormalizedUnderlyingDeposit: BigNumber = fp("100");
      const initialLpTokenSupply: BigNumber = fp("100");
      const initialUnderlyingDeposit: BigNumber = usdc("100");

      beforeEach(async function () {
        await this.mocks.underlying.mock.balanceOf
          .withArgs(this.contracts.hifiPool.address)
          .returns(initialUnderlyingDeposit);
        await this.contracts.hifiPool.connect(this.signers.alice).__godMode_mint(initialLpTokenSupply);
        await this.contracts.hifiPool.connect(this.signers.alice).__godMode_setTotalSupply(initialLpTokenSupply);
      });

      context("when there is phantom overflow", function () {
        const testSets = [
          // Makes "supply * normalizedUnderlyingOffered" overflow.
          [bn("0"), usdc("1157920892373161954235709850086879078532.699847")],
          // Makes "hTokenReserves * poolTokensMinted" overflow.
          [fp("1157920892373161954235709850086879078532.699846656405640395"), usdc("100")],
        ];

        forEach(testSets).it(
          "takes %e and %e and reverts",
          async function (hTokenBalance: BigNumber, underlyingOffered: BigNumber) {
            await this.mocks.hToken.mock.balanceOf.withArgs(this.contracts.hifiPool.address).returns(hTokenBalance);
            await expect(this.contracts.hifiPool.connect(this.signers.alice).mint(underlyingOffered)).to.be.reverted;
          },
        );
      });

      context("when there is no phantom overflow", function () {
        context("when there are no hToken reserves", function () {
          beforeEach(async function () {
            await this.mocks.hToken.mock.balanceOf.withArgs(this.contracts.hifiPool.address).returns(bn("0"));
          });

          const testSets = [
            ["1e-6"],
            ["100"],
            ["1729"],
            ["31415.92"],
            ["1157920892373161954235709850086879078532.699846"], // First number for which "poolTokensMinted" does not overflow
          ];

          forEach(testSets).it("takes %e and mints the LP tokens", async function (underlyingOffered: string) {
            // Calculate the arguments emitted in the event.
            const underlyingAmount: BigNumber = usdc(underlyingOffered);
            const hTokenRequired: BigNumber = bn("0");
            const poolTokensMinted: BigNumber = initialLpTokenSupply
              .mul(fp(underlyingOffered))
              .div(initialNormalizedUnderlyingDeposit);

            // Mock the necessary methods.
            await this.mocks.underlying.mock.transferFrom
              .withArgs(this.signers.alice.address, this.contracts.hifiPool.address, underlyingAmount)
              .returns(true);

            // Mint
            await expect(this.contracts.hifiPool.connect(this.signers.alice).mint(usdc(underlyingOffered)))
              .to.emit(this.contracts.hifiPool, "AddLiquidity")
              .withArgs(
                FY_TOKEN_EXPIRATION_TIME,
                this.signers.alice.address,
                underlyingAmount,
                hTokenRequired,
                poolTokensMinted,
              );
          });
        });

        context("when there are hToken reserves", function () {
          const initialHTokenReserves: BigNumber = fp("100");
          beforeEach(async function () {
            await this.mocks.hToken.mock.balanceOf
              .withArgs(this.contracts.hifiPool.address)
              .returns(initialHTokenReserves);
          });

          const testSets = [
            ["1e-6"],
            ["100"],
            ["1729"],
            ["31415.92"],
            ["1157920892373161954235709850086879078532.699846"], // First number for which "poolTokensMinted" does not overflow
          ];

          forEach(testSets).it("takes %e and mints the LP tokens", async function (underlyingOffered: string) {
            // Calculate the arguments emitted in the event.
            const underlyingAmount: BigNumber = usdc(underlyingOffered);
            const poolTokensMinted: BigNumber = initialLpTokenSupply
              .mul(fp(underlyingOffered))
              .div(initialNormalizedUnderlyingDeposit);
            const hTokenRequired: BigNumber = initialHTokenReserves.mul(poolTokensMinted).div(initialLpTokenSupply);

            // Mock the necessary methods.
            await this.mocks.underlying.mock.transferFrom
              .withArgs(this.signers.alice.address, this.contracts.hifiPool.address, underlyingAmount)
              .returns(true);
            await this.mocks.hToken.mock.transferFrom
              .withArgs(this.signers.alice.address, this.contracts.hifiPool.address, hTokenRequired)
              .returns(true);

            // Mint
            await expect(this.contracts.hifiPool.connect(this.signers.alice).mint(usdc(underlyingOffered)))
              .to.emit(this.contracts.hifiPool, "AddLiquidity")
              .withArgs(
                FY_TOKEN_EXPIRATION_TIME,
                this.signers.alice.address,
                underlyingAmount,
                hTokenRequired,
                poolTokensMinted,
              );
          });
        });
      });
    });
  });
}