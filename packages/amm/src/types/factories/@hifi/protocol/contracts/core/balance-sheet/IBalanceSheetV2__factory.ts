/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBalanceSheetV2,
  IBalanceSheetV2Interface,
} from "../../../../../../@hifi/protocol/contracts/core/balance-sheet/IBalanceSheetV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "BalanceSheet__BondMatured",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newBondListLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxBonds",
        type: "uint256",
      },
    ],
    name: "BalanceSheet__BorrowMaxBonds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "BalanceSheet__BorrowNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceSheet__BorrowZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newTotalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debtCeiling",
        type: "uint256",
      },
    ],
    name: "BalanceSheet__CollateralCeilingOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newCollateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debtCeiling",
        type: "uint256",
      },
    ],
    name: "BalanceSheet__DebtCeilingOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "BalanceSheet__DepositCollateralNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceSheet__DepositCollateralZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newCollateralListLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCollaterals",
        type: "uint256",
      },
    ],
    name: "BalanceSheet__DepositMaxCollaterals",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceSheet__FintrollerZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultCollateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "seizableAmount",
        type: "uint256",
      },
    ],
    name: "BalanceSheet__LiquidateBorrowInsufficientCollateral",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "BalanceSheet__LiquidateBorrowNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "BalanceSheet__LiquidateBorrowSelf",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shortfallLiquidity",
        type: "uint256",
      },
    ],
    name: "BalanceSheet__LiquidityShortfall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "BalanceSheet__NoLiquidityShortfall",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceSheet__OracleZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hTokenBalance",
        type: "uint256",
      },
    ],
    name: "BalanceSheet__RepayBorrowInsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debtAmount",
        type: "uint256",
      },
    ],
    name: "BalanceSheet__RepayBorrowInsufficientDebt",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "BalanceSheet__RepayBorrowNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceSheet__RepayBorrowZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultCollateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
    ],
    name: "BalanceSheet__WithdrawCollateralUnderflow",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceSheet__WithdrawCollateralZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "OwnableUpgradeable__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnableUpgradeable__OwnerZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
    ],
    name: "Borrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    name: "DepositCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "seizedCollateralAmount",
        type: "uint256",
      },
    ],
    name: "LiquidateBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDebtAmount",
        type: "uint256",
      },
    ],
    name: "RepayBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldFintroller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newFintroller",
        type: "address",
      },
    ],
    name: "SetFintroller",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOracle",
        type: "address",
      },
    ],
    name: "SetOracle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "TransferOwnership",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    name: "WithdrawCollateral",
    type: "event",
  },
  {
    inputs: [],
    name: "_renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "_transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
    ],
    name: "depositCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getBondList",
    outputs: [
      {
        internalType: "contract IHToken[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "getCollateralAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCollateralList",
    outputs: [
      {
        internalType: "contract IErc20[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentAccountLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "excessLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shortfallLiquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "getDebtAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "debtAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "contract IErc20",
        name: "collateralModify",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmountModify",
        type: "uint256",
      },
      {
        internalType: "contract IHToken",
        name: "bondModify",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "debtAmountModify",
        type: "uint256",
      },
    ],
    name: "getHypotheticalAccountLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "excessLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shortfallLiquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "seizableCollateralAmount",
        type: "uint256",
      },
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "getRepayAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "getSeizableCollateralAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "seizableCollateralAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "liquidateBorrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
    ],
    name: "repayBorrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
    ],
    name: "repayBorrowBehalf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IFintroller",
        name: "newFintroller",
        type: "address",
      },
    ],
    name: "setFintroller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IChainlinkOperator",
        name: "newOracle",
        type: "address",
      },
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
    ],
    name: "withdrawCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IBalanceSheetV2__factory {
  static readonly abi = _abi;
  static createInterface(): IBalanceSheetV2Interface {
    return new utils.Interface(_abi) as IBalanceSheetV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBalanceSheetV2 {
    return new Contract(address, _abi, signerOrProvider) as IBalanceSheetV2;
  }
}
