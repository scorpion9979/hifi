/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  UniswapV3PriceFeed,
  UniswapV3PriceFeedInterface,
} from "../../../contracts/oracles/UniswapV3PriceFeed";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "pool_",
        type: "address",
      },
      {
        internalType: "contract IErc20",
        name: "refAsset_",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "twapInterval_",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "refAsset",
        type: "address",
      },
    ],
    name: "IUniswapV3PriceFeed__RefAssetNotInPool",
    type: "error",
  },
  {
    inputs: [],
    name: "IUniswapV3PriceFeed__TwapCriteriaNotSatisfied",
    type: "error",
  },
  {
    inputs: [],
    name: "IUniswapV3PriceFeed__ZeroAddressPool",
    type: "error",
  },
  {
    inputs: [],
    name: "baseAsset",
    outputs: [
      {
        internalType: "contract IErc20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "roundId_",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refAsset",
    outputs: [
      {
        internalType: "contract IErc20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "twapInterval",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61018060405234620000b057620000206200001962000124565b916200032f565b60405161130c9081620007ba823960805181818160f30152610567015260a0518181816102370152610c3a015260c05181818161029b015281816105a60152610caa015260e0518181816101dc0152610ba501526101005181505061012051818181610d070152610d8b01526101405181610ccd015261016051818181610d4201528181610dc10152610df90152f35b600080fd5b601f909101601f19168101906001600160401b03821190821017620000d957604052565b5050634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811614156200010457565b50600080fd5b519063ffffffff82168214156200011d57565b5050600080fd5b62001ac69060608238039283604051948592620001428285620000b5565b8339810103126200011d578151906200015b82620000f1565b6200017960406020850151946200017286620000f1565b016200010a565b91929190565b908160209103126200011d57516200019781620000f1565b90565b506040513d6000823e3d90fd5b519061ffff82168214156200011d57565b519060ff82168214156200011d57565b51908115158214156200011d57565b908160e09103126200011d578051620001f081620000f1565b9160208201518060020b8114156200024c57916200021160408201620001a7565b916200022060608301620001a7565b916200022f60808201620001a7565b916200019760c06200024460a08501620001b8565b9301620001c8565b50505050600080fd5b50634e487b7160e01b600052601160045260246000fd5b61ffff6001911661fffe811162000281570190565b6200028b62000255565b0190565b9061ffff809116918215620002a357160690565b50505050634e487b7160e01b600052601260045260246000fd5b91908260809103126200011d57620002d5826200010a565b9160208101518060060b8114156200024c579162000197606060408401516200024481620000f1565b8181106200030a570390565b6200031462000255565b0390565b908160209103126200011d576200019790620001b8565b60c0919091526001600160a01b03808216918215620007a35760408051630dfe168160e01b815290936004926020838581855afa92831562000793575b60009362000778575b50846101009316835284865163d21220a760e01b81526020818781875afa90811562000768575b60009162000745575b501661014081815260c051909691906001600160a01b03168551909190620003dd906001600160a01b03165b6001600160a01b031690565b9083831691821415918262000739575b505062000700575060c051859360e093909290916001600160a01b031688516001600160a01b031691808316911614600014620006fa575084516001600160a01b03165b60805260a052865192838092633850c7bd851b82525afa908115620006ea575b6000908192620006be575b5060a0516200048d908390620004879062000480906001600160a01b0316620003d1565b936200026c565b6200028f565b6080875180938180620004b863252c09d760e01b968783528b830191909161ffff6020820193169052565b03915afa918215620006ae575b60009081936200068d575b50911562000600575b50620004ee63ffffffff9182429116620002fe565b90871611908115620005f0575b50620005dd575160209291906200055b90620003d19062000522906001600160a01b031682565b9386518681868163313ce56760e01b998a82525afa908115620005cd575b600091620005b4575b5061012052516001600160a01b031690565b93518094819382525afa908115620005a4575b60009162000581575b506101605260e052565b6200059d9150620005933d82620000b5565b3d81019062000318565b3862000577565b620005ae6200019a565b6200056e565b620005c69150620005933d82620000b5565b3862000549565b620005d76200019a565b62000540565b5093505090505163a99e764f60e01b8152fd5b905061ffff8091161038620004fb565b60a0519091506080906200061d906001600160a01b0316620003d1565b9187519283918252818062000639898201906000602083019252565b03915afa9081156200067d575b60009162000657575b5038620004d9565b620006739150620006693d82620000b5565b3d810190620002bd565b505050386200064f565b620006876200019a565b62000646565b9050620006a2919250620006693d82620000b5565b939291505038620004d0565b620006b86200019a565b620004c5565b9050620006dc9150620006d23d82620000b5565b3d810190620001d7565b50505092509050386200045c565b620006f46200019a565b62000451565b62000431565b9651639202155760e01b81526001600160a01b0390971694870194855250949650869550506020909101925062000735915050565b0390fd5b141590503880620003ed565b620007619150620007573d82620000b5565b3d8101906200017f565b38620003a5565b620007726200019a565b6200039c565b6200078b919350620007573d82620000b5565b913862000375565b6200079d6200019a565b6200036c565b5050505050600460405163ac88cda360e01b8152fdfe6040608081526004361015610015575b50600080fd5b600090813560e01c80628b32f71461027357806316f0115b14610223578063313ce567146102085780633c1d5df0146101c857806354fd4d50146101ad5780637284e416146101865780639a6fc8f514610134578063cdf456e1146100df5763feaf968c14610084575061000f565b346100db576100d79150610097366102e9565b61009f6106a2565b945169ffffffffffffffffffff94851681526020810193909352604083019190915260608201529116608082015290819060a0820190565b0390f35b5080fd5b50903461012f57506100f0366102e9565b517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168152602090f35b809150fd5b50903461012f575061014536610394565b6100d7610150610b87565b925192839283608090600092949369ffffffffffffffffffff60a083019616825260208201528260408201528260608201520152565b50346100db576100d7915061019a366102e9565b6101a261051d565b90519182918261034a565b50903461012f57506101be366102e9565b5160018152602090f35b50903461012f57506101d9366102e9565b517f000000000000000000000000000000000000000000000000000000000000000063ffffffff168152602090f35b50903461012f5750610219366102e9565b5160088152602090f35b50903461012f5750610234366102e9565b517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168152602090f35b5050346102e65750610284366102e9565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166080527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060a0016080f35b80fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc600091011261000f57565b918091926000905b82821061033557501161032e575050565b6000910152565b9150806020918301518186015201829161031d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6040936020845261038d8151809281602088015260208888019101610315565b0116010190565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc602091011261000f5760043569ffffffffffffffffffff81168114156103d85790565b5050600080fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761045057604052565b6104586103df565b604052565b60208183031261050857805167ffffffffffffffff918282116104fe57019082601f830112156104e85781519081116104f1575b604051926104c760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f850116018561040f565b818452602082840101116104e8576104e59160208085019101610315565b90565b50505050600080fd5b6104f96103df565b610491565b5050505050600080fd5b505050600080fd5b506040513d6000823e3d90fd5b6040517f95d89b4100000000000000000000000000000000000000000000000000000000908181526000918273ffffffffffffffffffffffffffffffffffffffff918184600481867f0000000000000000000000000000000000000000000000000000000000000000165afa938415610695575b829461067a575b5060046040518094819382527f0000000000000000000000000000000000000000000000000000000000000000165afa92831561066d575b8093610642575b505060236104e59160405193816105f8869351809260208087019101610315565b82017f202f20000000000000000000000000000000000000000000000000000000000060208201526106338251809360208785019101610315565b0103600381018452018261040f565b6104e5929350602391610666913d90823e61065d3d8261040f565b3d81019061045d565b92916105d7565b610675610510565b6105d0565b61068e9194503d83823e61065d3d8261040f565b9238610598565b61069d610510565b610591565b6106aa610b87565b600091829042908290565b60209067ffffffffffffffff81116106cf575b60051b0190565b6106d76103df565b6106c8565b604051906060820182811067ffffffffffffffff82111761070a575b60405260028252604082602036910137565b6107126103df565b6106f8565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602090805115610755570190565b61075d610717565b0190565b604090805160011015610755570190565b81601f8201121561050857805191610789836106b5565b92610797604051948561040f565b808452602092838086019260051b8201019283116107fa578301905b8282106107c1575050505090565b815173ffffffffffffffffffffffffffffffffffffffff81168114156107ee5781529083019083016107b3565b50505050505050600080fd5b505050505050600080fd5b9190916040818403126105085780519267ffffffffffffffff938481116104fe5782019381601f860112156104fe57845194610840866106b5565b9061084e604051928361040f565b868252602096878084019160051b830101918583116108b3578801905b82821061088a57505050948301519081116104fe576104e59201610772565b81518060060b8114156108a457815290880190880161086b565b50505050505050505050600080fd5b505050505050505050600080fd5b6020908160408183019282815285518094520193019160005b8281106108e8575050505090565b835163ffffffff16855293810193928101926001016108da565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60060b9060060b9060008212827fffffffffffffffffffffffffffffffffffffffffffffffffff8000000000000001821281151661098c575b82667fffffffffffff01821316610980570390565b610988610902565b0390565b610994610902565b61096b565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60060b9060060b908115610a33575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82147fffffffffffffffffffffffffffffffffffffffffffffffffff80000000000000821416610a27570590565b610a2f610902565b0590565b610a3b610999565b6109d8565b60ff168060ff03600811610a55575b60080190565b610a5d610902565b610a4f565b60ff168060ff03601011610a77575b60100190565b610a7f610902565b610a71565b60ff16604d8111610a96575b600a0a90565b610a9e610902565b610a90565b8015610ac8575b78010000000000000000000000000000000000000000000000000490565b610ad0610999565b610aaa565b8015610b01575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0490565b610b09610999565b610adc565b8115610b18570490565b610b20610999565b0490565b8115610b7a575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82147f8000000000000000000000000000000000000000000000000000000000000000821416610a27570590565b610b82610999565b610b2b565b610c1b610ca8610ca3610c9d610b9b6106dc565b63ffffffff610c927f000000000000000000000000000000000000000000000000000000000000000092610bdd84610bd283610747565b9063ffffffff169052565b6000610be882610761565b526040519788917f883bdbfd000000000000000000000000000000000000000000000000000000008352600483016108c1565b039660008173ffffffffffffffffffffffffffffffffffffffff99818b7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610e3f575b600091610e1d575b50610c8c610c7f610c86610c7f84610761565b5160060b90565b92610747565b90610932565b911660030b906109c9565b60020b90565b610f61565b7f000000000000000000000000000000000000000000000000000000000000000082167f000000000000000000000000000000000000000000000000000000000000000083161415610d7c57610d3d90610d6c92610d35610d30610d2b7f0000000000000000000000000000000000000000000000000000000000000000610a40565b610a84565b610aa3565b911680610e53565b610d667f0000000000000000000000000000000000000000000000000000000000000000610a84565b90610b0e565b905b8115610d7657565b60019150565b610daf91610d35610d30610d2b7f0000000000000000000000000000000000000000000000000000000000000000610a40565b8015610df057610dea90610de5610d2b7f0000000000000000000000000000000000000000000000000000000000000000610a62565b610b24565b90610d6e565b506104e5610d2b7f0000000000000000000000000000000000000000000000000000000000000000610a62565b610e38913d90823e610e2f3d8261040f565b3d810190610805565b5038610c6c565b610e47610510565b610c64565b1561000f57565b90917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8383099280830292838086109503948086039514610eec57908291610e9c868411610e4c565b096001821901821680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b50509150610b20821515610e4c565b15610f0257565b5060646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600160248201527f54000000000000000000000000000000000000000000000000000000000000006044820152fd5b73ffffffffffffffffffffffffffffffffffffffff9060020b60008112156112eb5780600003905b610f98620d89e8831115610efb565b60018216156112c25770ffffffffffffffffffffffffffffffffff6ffffcb933bd6fad37aa2d162d1a5940015b1691600281166112a6575b6004811661128a575b6008811661126e575b60108116611252575b60208116611236575b6040811661121a575b6080908181166111ff575b61010081166111e4575b61020081166111c9575b61040081166111ae575b6108008116611193575b6110008116611178575b612000811661115d575b6140008116611142575b6180008116611127575b62010000811661110c575b6202000081166110f2575b6204000081166110d8575b62080000166110bd575b506000126110af575b63ffffffff81166110a65760ff60005b169060201c011690565b60ff600161109c565b6110b890610ad5565b61108c565b6b048a170391f7dc42444e8fa26000929302901c9190611083565b6d2216e584f5fa1ea926041bedfe98909302811c92611079565b926e5d6af8dedb81196699c329225ee60402811c9261106e565b926f09aa508b5b7a84e1c677de54f3e99bc902811c92611063565b926f31be135f97d08fd981231505542fcfa602811c92611058565b926f70d869a156d2a1b890bb3df62baf32f702811c9261104e565b926fa9f746462d870fdf8a65dc1f90e061e502811c92611044565b926fd097f3bdfd2022b8845ad8f792aa582502811c9261103a565b926fe7159475a2c29b7443b29c7fa6e889d902811c92611030565b926ff3392b0822b70005940c7a398e4b70f302811c92611026565b926ff987a7253ac413176f2b074cf7815e5402811c9261101c565b926ffcbe86c7900a88aedcffc83b479aa3a402811c92611012565b926ffe5dee046a99a2a811c461f1969c305302811c92611008565b916fff2ea16466c96a3843ec78b326b528610260801c91610ffd565b916fff973b41fa98c081472e6896dfb254c00260801c91610ff4565b916fffcb9843d60f6159c9db58835c9266440260801c91610feb565b916fffe5caca7e10e4e61c3624eaa0941cd00260801c91610fe2565b916ffff2e50f5f656932ef12357cf3c7fdcc0260801c91610fd9565b916ffff97272373d413259a46990580e213a0260801c91610fd0565b70ffffffffffffffffffffffffffffffffff700100000000000000000000000000000000610fc5565b80610f8956fea26c6578706572696d656e74616cf564736f6c634300080c0018";

type UniswapV3PriceFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3PriceFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3PriceFeed__factory extends ContractFactory {
  constructor(...args: UniswapV3PriceFeedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    pool_: string,
    refAsset_: string,
    twapInterval_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV3PriceFeed> {
    return super.deploy(
      pool_,
      refAsset_,
      twapInterval_,
      overrides || {}
    ) as Promise<UniswapV3PriceFeed>;
  }
  override getDeployTransaction(
    pool_: string,
    refAsset_: string,
    twapInterval_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      pool_,
      refAsset_,
      twapInterval_,
      overrides || {}
    );
  }
  override attach(address: string): UniswapV3PriceFeed {
    return super.attach(address) as UniswapV3PriceFeed;
  }
  override connect(signer: Signer): UniswapV3PriceFeed__factory {
    return super.connect(signer) as UniswapV3PriceFeed__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3PriceFeedInterface {
    return new utils.Interface(_abi) as UniswapV3PriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3PriceFeed {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3PriceFeed;
  }
}
