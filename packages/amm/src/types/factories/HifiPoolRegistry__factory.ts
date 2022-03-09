/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HifiPoolRegistry,
  HifiPoolRegistryInterface,
} from "../HifiPoolRegistry";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "contract IHifiPool",
        name: "pool",
        type: "address",
      },
    ],
    name: "HifiPoolRegistry__PoolAlreadyTracked",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IHifiPool",
        name: "pool",
        type: "address",
      },
    ],
    name: "HifiPoolRegistry__PoolNotTracked",
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
    name: "Ownable__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__OwnerZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IHifiPool",
        name: "pool",
        type: "address",
      },
    ],
    name: "TrackPool",
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
        internalType: "contract IHifiPool",
        name: "pool",
        type: "address",
      },
    ],
    name: "UntrackPool",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHifiPool",
        name: "pool",
        type: "address",
      },
    ],
    name: "trackPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHifiPool",
        name: "pool",
        type: "address",
      },
    ],
    name: "untrackPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916339081178255604051909182917f5c486528ec3e3f0ea91181cff8116f02bfa350e03b8b6f12e00765adbb5af85c908290a350610472806100616000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80638da5cb5b116100505780638da5cb5b146100a7578063a4063dbc146100d7578063d29d44ee1461010a57600080fd5b80630277d5df146100775780634b3f28891461008c578063861ef29114610094575b600080fd5b61008a610085366004610441565b61011d565b005b61008a6101ef565b61008a6100a2366004610441565b610286565b6000546100ba906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100fa6100e5366004610441565b60016020526000908152604090205460ff1681565b60405190151581526020016100ce565b61008a610118366004610441565b61035a565b6000546001600160a01b031633146101625760005460405163cc6bdb1d60e01b81526001600160a01b0390911660048201523360248201526044015b60405180910390fd5b6001600160a01b03811660009081526001602052604090205460ff166101a657604051633a1250a960e11b81526001600160a01b0382166004820152602401610159565b6001600160a01b038116600081815260016020526040808220805460ff19169055517fdf0dec6038d4ee9ad1e3d2d6f7d3ec2787a65b573ed732119739e6b84314e48c9190a250565b6000546001600160a01b0316331461022f5760005460405163cc6bdb1d60e01b81526001600160a01b039091166004820152336024820152604401610159565b600080546040516001600160a01b03909116907f5c486528ec3e3f0ea91181cff8116f02bfa350e03b8b6f12e00765adbb5af85c908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031633146102c65760005460405163cc6bdb1d60e01b81526001600160a01b039091166004820152336024820152604401610159565b6001600160a01b03811660009081526001602052604090205460ff161561030b57604051631815cc3160e01b81526001600160a01b0382166004820152602401610159565b6001600160a01b0381166000818152600160208190526040808320805460ff1916909217909155517ff08e1bd32e520cc014e93234b65a1349b95dd125a050ea5a70dcb8ae856921629190a250565b6000546001600160a01b0316331461039a5760005460405163cc6bdb1d60e01b81526001600160a01b039091166004820152336024820152604401610159565b6001600160a01b0381166103c157604051634208fc5d60e01b815260040160405180910390fd5b600080546040516001600160a01b03808516939216917f5c486528ec3e3f0ea91181cff8116f02bfa350e03b8b6f12e00765adbb5af85c91a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001600160a01b038116811461043e57600080fd5b50565b60006020828403121561045357600080fd5b813561045e81610429565b939250505056fea164736f6c634300080c000a";

type HifiPoolRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HifiPoolRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HifiPoolRegistry__factory extends ContractFactory {
  constructor(...args: HifiPoolRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "HifiPoolRegistry";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HifiPoolRegistry> {
    return super.deploy(overrides || {}) as Promise<HifiPoolRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HifiPoolRegistry {
    return super.attach(address) as HifiPoolRegistry;
  }
  connect(signer: Signer): HifiPoolRegistry__factory {
    return super.connect(signer) as HifiPoolRegistry__factory;
  }
  static readonly contractName: "HifiPoolRegistry";
  public readonly contractName: "HifiPoolRegistry";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HifiPoolRegistryInterface {
    return new utils.Interface(_abi) as HifiPoolRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HifiPoolRegistry {
    return new Contract(address, _abi, signerOrProvider) as HifiPoolRegistry;
  }
}