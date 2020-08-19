import { BigNumber } from "@ethersproject/bignumber";
import { expect } from "chai";

import { FintrollerErrors, YTokenErrors } from "../../../helpers/errors";
import { TenTokens } from "../../../helpers/constants";

export default function shouldBehaveLikeLockCollateral(): void {
  describe("when the vault is open", function () {
    beforeEach(async function () {
      await this.yToken.connect(this.brad).openVault();
    });

    describe("when the user deposited collateral", function () {
      beforeEach(async function () {
        await this.fintroller.connect(this.admin).listBond(this.yToken.address);
        await this.fintroller.connect(this.admin).setDepositAllowed(this.yToken.address, true);
        await this.collateral.connect(this.brad).approve(this.yToken.address, TenTokens);
        await this.yToken.connect(this.brad).depositCollateral(TenTokens);
      });

      it("it locks the collateral", async function () {
        const preVault = await this.yToken.getVault(this.bradAddress);
        await this.yToken.connect(this.brad).lockCollateral(TenTokens);
        const postVault = await this.yToken.getVault(this.bradAddress);
        expect(preVault.freeCollateral).to.equal(postVault.freeCollateral.add(TenTokens));
        expect(preVault.lockedCollateral).to.equal(postVault.lockedCollateral.sub(TenTokens));
      });

      it("emits a LockCollateral event", async function () {
        await expect(this.yToken.connect(this.brad).lockCollateral(TenTokens))
          .to.emit(this.yToken, "LockCollateral")
          .withArgs(this.bradAddress, TenTokens);
      });
    });

    describe("when the user did not deposit any collateral", function () {
      it("reverts", async function () {
        await expect(this.yToken.connect(this.brad).lockCollateral(TenTokens)).to.be.revertedWith(
          YTokenErrors.LockCollateralInsufficientFreeCollateral,
        );
      });
    });
  });

  describe("when the vault is not open", function () {
    it("reverts", async function () {
      await expect(this.yToken.connect(this.brad).lockCollateral(TenTokens)).to.be.revertedWith(
        YTokenErrors.VaultNotOpen,
      );
    });
  });
}