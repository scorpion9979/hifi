import { expect } from "chai";

export default function shouldBehaveLikeNonRecoverableTokensGetter(): void {
  it("retrieves the non-recoverable tokens", async function () {
    const underlying: string = await this.contracts.hTokens[0].nonRecoverableTokens(0);
    expect(underlying).to.equal(this.mocks.usdc.address);

    await expect(this.contracts.hTokens[0].nonRecoverableTokens(1)).to.be.reverted;
  });
}