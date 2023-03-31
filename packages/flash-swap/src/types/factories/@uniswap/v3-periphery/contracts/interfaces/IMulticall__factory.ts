/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IMulticall,
  IMulticallInterface,
} from "../../../../../@uniswap/v3-periphery/contracts/interfaces/IMulticall";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class IMulticall__factory {
  static readonly abi = _abi;
  static createInterface(): IMulticallInterface {
    return new utils.Interface(_abi) as IMulticallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMulticall {
    return new Contract(address, _abi, signerOrProvider) as IMulticall;
  }
}
