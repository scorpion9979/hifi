/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  SBalanceSheetV2,
  SBalanceSheetV2Interface,
} from "../../../../contracts/core/balance-sheet/SBalanceSheetV2";

const _abi = [
  {
    inputs: [],
    name: "fintroller",
    outputs: [
      {
        internalType: "contract IFintroller",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract IChainlinkOperator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class SBalanceSheetV2__factory {
  static readonly abi = _abi;
  static createInterface(): SBalanceSheetV2Interface {
    return new utils.Interface(_abi) as SBalanceSheetV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SBalanceSheetV2 {
    return new Contract(address, _abi, signerOrProvider) as SBalanceSheetV2;
  }
}
