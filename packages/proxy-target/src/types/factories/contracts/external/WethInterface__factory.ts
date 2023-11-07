/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  WethInterface,
  WethInterfaceInterface,
} from "../../../contracts/external/WethInterface";

const _abi = [
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class WethInterface__factory {
  static readonly abi = _abi;
  static createInterface(): WethInterfaceInterface {
    return new utils.Interface(_abi) as WethInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WethInterface {
    return new Contract(address, _abi, signerOrProvider) as WethInterface;
  }
}
