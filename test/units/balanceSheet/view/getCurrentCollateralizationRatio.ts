import { BigNumber } from "@ethersproject/bignumber";
import { expect } from "chai";

import { Percentages, TokenAmounts } from "../../../../helpers/constants";

export default function shouldBehaveLikeGetCurrentCollateralizationRatio(): void {
  const debt: BigNumber = TokenAmounts.OneHundred;
  const lockedCollateral: BigNumber = TokenAmounts.Ten;

  beforeEach(async function () {
    await this.contracts.balanceSheet.connect(this.signers.borrower).openVault(this.stubs.fyToken.address);
    await this.contracts.balanceSheet.__godMode_setVaultLockedCollateral(
      this.stubs.fyToken.address,
      this.accounts.borrower,
      lockedCollateral,
    );
    await this.contracts.balanceSheet.__godMode_setVaultDebt(this.stubs.fyToken.address, this.accounts.borrower, debt);
  });

  it("returns the current collateralization ratio mantissa", async function () {
    const currentCollateralizationRatioMantissa: BigNumber = await this.contracts.balanceSheet.getCurrentCollateralizationRatio(
      this.stubs.fyToken.address,
      this.accounts.borrower,
    );
    expect(currentCollateralizationRatioMantissa).to.equal(Percentages.OneThousand);
  });
}
