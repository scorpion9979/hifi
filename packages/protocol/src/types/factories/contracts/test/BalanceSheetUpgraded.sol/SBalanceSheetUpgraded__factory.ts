/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  SBalanceSheetUpgraded,
  SBalanceSheetUpgradedInterface,
} from "../../../../contracts/test/BalanceSheetUpgraded.sol/SBalanceSheetUpgraded";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

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
    name: "lastBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
];

export class SBalanceSheetUpgraded__factory {
  static readonly abi = _abi;
  static createInterface(): SBalanceSheetUpgradedInterface {
    return new utils.Interface(_abi) as SBalanceSheetUpgradedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SBalanceSheetUpgraded {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SBalanceSheetUpgraded;
  }
}