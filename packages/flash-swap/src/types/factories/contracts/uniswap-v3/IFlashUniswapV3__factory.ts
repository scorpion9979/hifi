/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IFlashUniswapV3,
  IFlashUniswapV3Interface,
} from "../../../contracts/uniswap-v3/IFlashUniswapV3";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "FlashUniswapV3__CallNotAuthorized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    name: "FlashUniswapV3__LiquidateUnderlyingBackedVault",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "seizeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "turnout",
        type: "int256",
      },
    ],
    name: "FlashUniswapV3__TurnoutNotSatisfied",
    type: "error",
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
        internalType: "address",
        name: "bond",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "underlyingAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "seizeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
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
        name: "subsidyAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "profitAmount",
        type: "uint256",
      },
    ],
    name: "FlashLoanAndLiquidateBorrow",
    type: "event",
  },
  {
    inputs: [],
    name: "balanceSheet",
    outputs: [
      {
        internalType: "contract IBalanceSheetV2",
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
        components: [
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
            internalType: "address",
            name: "collateral",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "poolFee",
            type: "uint24",
          },
          {
            internalType: "int256",
            name: "turnout",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "underlyingAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IFlashUniswapV3.FlashLiquidateParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "flashLiquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniV3Factory",
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
    inputs: [],
    name: "uniV3Quoter",
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
    inputs: [],
    name: "uniV3SwapRouter",
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
        internalType: "uint256",
        name: "fee0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3FlashCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFlashUniswapV3__factory {
  static readonly abi = _abi;
  static createInterface(): IFlashUniswapV3Interface {
    return new utils.Interface(_abi) as IFlashUniswapV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFlashUniswapV3 {
    return new Contract(address, _abi, signerOrProvider) as IFlashUniswapV3;
  }
}
