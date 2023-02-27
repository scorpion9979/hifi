/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IUniswapV3FlashCallback,
  IUniswapV3FlashCallbackInterface,
} from "../../../../../../@uniswap/v3-core/contracts/interfaces/callback/IUniswapV3FlashCallback";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
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

export class IUniswapV3FlashCallback__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV3FlashCallbackInterface {
    return new utils.Interface(_abi) as IUniswapV3FlashCallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV3FlashCallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUniswapV3FlashCallback;
  }
}
