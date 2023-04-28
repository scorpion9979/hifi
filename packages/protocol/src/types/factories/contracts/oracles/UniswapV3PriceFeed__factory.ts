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
        name: "quoteAsset_",
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
        name: "quoteAsset",
        type: "address",
      },
    ],
    name: "IUniswapV3PriceFeed__QuoteAssetNotInPool",
    type: "error",
  },
  {
    inputs: [],
    name: "IUniswapV3PriceFeed__TwapCriteriaNotSatisfied",
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
    name: "quoteAsset",
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
  "0x61018060405234620000b057620000206200001962000124565b916200032f565b60405161130d90816200079d82396080518181816101490152610568015260a05181818161029c0152610c3b015260c05181818160f4015281816105a70152610cab015260e05181818161022d0152610ba601526101005181505061012051818181610d080152610d8c01526101405181610cce015261016051818181610d4301528181610dc20152610dfa0152f35b600080fd5b601f909101601f19168101906001600160401b03821190821017620000d957604052565b5050634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811614156200010457565b50600080fd5b519063ffffffff82168214156200011d57565b5050600080fd5b62001aaa9060608238039283604051948592620001428285620000b5565b8339810103126200011d578151906200015b82620000f1565b6200017960406020850151946200017286620000f1565b016200010a565b91929190565b908160209103126200011d57516200019781620000f1565b90565b506040513d6000823e3d90fd5b519061ffff82168214156200011d57565b519060ff82168214156200011d57565b51908115158214156200011d57565b908160e09103126200011d578051620001f081620000f1565b9160208201518060020b8114156200024c57916200021160408201620001a7565b916200022060608301620001a7565b916200022f60808201620001a7565b916200019760c06200024460a08501620001b8565b9301620001c8565b50505050600080fd5b50634e487b7160e01b600052601160045260246000fd5b61ffff6001911661fffe811162000281570190565b6200028b62000255565b0190565b9061ffff809116918215620002a357160690565b50505050634e487b7160e01b600052601260045260246000fd5b91908260809103126200011d57620002d5826200010a565b9160208101518060060b8114156200024c579162000197606060408401516200024481620000f1565b8181106200030a570390565b6200031462000255565b0390565b908160209103126200011d576200019790620001b8565b60c09190915260408051630dfe168160e01b815290916001600160a01b0391600491838116906020838581855afa9283156200078c575b60009362000771575b50846101009316835284865163d21220a760e01b81526020818781875afa90811562000761575b6000916200073e575b501661014081815260c051909691906001600160a01b03168551909190620003d7906001600160a01b03165b6001600160a01b031690565b9083831691821415918262000732575b5050620006f9575060c051859360e093909290916001600160a01b031688516001600160a01b031691808316911614600014620006f3575084516001600160a01b03165b60805260a052865192838092633850c7bd851b82525afa908115620006e3575b6000908192620006b7575b5060a0516200048790839062000481906200047a906001600160a01b0316620003cb565b936200026c565b6200028f565b6080875180938180620004b263252c09d760e01b968783528b830191909161ffff6020820193169052565b03915afa918215620006a7575b600090819362000686575b509115620005f9575b50620004e763ffffffff80921642620002fe565b90871611908115620005e9575b50620005d6575160209291906200055490620003cb906200051b906001600160a01b031682565b9386518681868163313ce56760e01b998a82525afa908115620005c6575b600091620005ad575b5061012052516001600160a01b031690565b93518094819382525afa9081156200059d575b6000916200057a575b506101605260e052565b6200059691506200058c3d82620000b5565b3d81019062000318565b3862000570565b620005a76200019a565b62000567565b620005bf91506200058c3d82620000b5565b3862000542565b620005d06200019a565b62000539565b5093505090505163a99e764f60e01b8152fd5b905061ffff8091161038620004f4565b60a05190915060809062000616906001600160a01b0316620003cb565b9187519283918252818062000632898201906000602083019252565b03915afa90811562000676575b60009162000650575b5038620004d3565b6200066c9150620006623d82620000b5565b3d810190620002bd565b5050503862000648565b620006806200019a565b6200063f565b90506200069b919250620006623d82620000b5565b939291505038620004ca565b620006b16200019a565b620004bf565b9050620006d59150620006cb3d82620000b5565b3d810190620001d7565b505050925090503862000456565b620006ed6200019a565b6200044b565b6200042b565b965163449d059d60e01b81526001600160a01b039097169487019485525094965086955050602090910192506200072e915050565b0390fd5b141590503880620003e7565b6200075a9150620007503d82620000b5565b3d8101906200017f565b386200039f565b6200076b6200019a565b62000396565b62000784919350620007503d82620000b5565b91386200036f565b620007966200019a565b6200036656fe6040608081526004361015610015575b50600080fd5b600090813560e01c806316f0115b14610274578063313ce567146102595780633c1d5df01461021957806354fd4d50146101fe5780637284e416146101d75780639a6fc8f514610185578063cdf456e114610135578063fdf262b7146100e05763feaf968c14610085575061000f565b346100dc576100d89150610098366102ea565b6100a06106a3565b945169ffffffffffffffffffff94851681526020810193909352604083019190915260608201529116608082015290819060a0820190565b0390f35b5080fd5b50903461013057506100f1366102ea565b517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168152602090f35b809150fd5b5090346101305750610146366102ea565b517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168152602090f35b509034610130575061019636610395565b6100d86101a1610b88565b925192839283608090600092949369ffffffffffffffffffff60a083019616825260208201528260408201528260608201520152565b50346100dc576100d891506101eb366102ea565b6101f361051e565b90519182918261034b565b509034610130575061020f366102ea565b5160018152602090f35b509034610130575061022a366102ea565b517f000000000000000000000000000000000000000000000000000000000000000063ffffffff168152602090f35b509034610130575061026a366102ea565b5160088152602090f35b5050346102e75750610285366102ea565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166080527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060a0016080f35b80fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc600091011261000f57565b918091926000905b82821061033657501161032f575050565b6000910152565b9150806020918301518186015201829161031e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6040936020845261038e8151809281602088015260208888019101610316565b0116010190565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc602091011261000f5760043569ffffffffffffffffffff81168114156103d95790565b5050600080fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761045157604052565b6104596103e0565b604052565b60208183031261050957805167ffffffffffffffff918282116104ff57019082601f830112156104e95781519081116104f2575b604051926104c860207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160185610410565b818452602082840101116104e9576104e69160208085019101610316565b90565b50505050600080fd5b6104fa6103e0565b610492565b5050505050600080fd5b505050600080fd5b506040513d6000823e3d90fd5b6040517f95d89b4100000000000000000000000000000000000000000000000000000000908181526000918273ffffffffffffffffffffffffffffffffffffffff918184600481867f0000000000000000000000000000000000000000000000000000000000000000165afa938415610696575b829461067b575b5060046040518094819382527f0000000000000000000000000000000000000000000000000000000000000000165afa92831561066e575b8093610643575b505060236104e69160405193816105f9869351809260208087019101610316565b82017f202f20000000000000000000000000000000000000000000000000000000000060208201526106348251809360208785019101610316565b01036003810184520182610410565b6104e6929350602391610667913d90823e61065e3d82610410565b3d81019061045e565b92916105d8565b610676610511565b6105d1565b61068f9194503d83823e61065e3d82610410565b9238610599565b61069e610511565b610592565b6106ab610b88565b600091829042908290565b60209067ffffffffffffffff81116106d0575b60051b0190565b6106d86103e0565b6106c9565b604051906060820182811067ffffffffffffffff82111761070b575b60405260028252604082602036910137565b6107136103e0565b6106f9565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602090805115610756570190565b61075e610718565b0190565b604090805160011015610756570190565b81601f820112156105095780519161078a836106b6565b926107986040519485610410565b808452602092838086019260051b8201019283116107fb578301905b8282106107c2575050505090565b815173ffffffffffffffffffffffffffffffffffffffff81168114156107ef5781529083019083016107b4565b50505050505050600080fd5b505050505050600080fd5b9190916040818403126105095780519267ffffffffffffffff938481116104ff5782019381601f860112156104ff57845194610841866106b6565b9061084f6040519283610410565b868252602096878084019160051b830101918583116108b4578801905b82821061088b57505050948301519081116104ff576104e69201610773565b81518060060b8114156108a557815290880190880161086c565b50505050505050505050600080fd5b505050505050505050600080fd5b6020908160408183019282815285518094520193019160005b8281106108e9575050505090565b835163ffffffff16855293810193928101926001016108db565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60060b9060060b9060008212827fffffffffffffffffffffffffffffffffffffffffffffffffff8000000000000001821281151661098d575b82667fffffffffffff01821316610981570390565b610989610903565b0390565b610995610903565b61096c565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60060b9060060b908115610a34575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82147fffffffffffffffffffffffffffffffffffffffffffffffffff80000000000000821416610a28570590565b610a30610903565b0590565b610a3c61099a565b6109d9565b60ff168060ff03600811610a56575b60080190565b610a5e610903565b610a50565b60ff168060ff03601011610a78575b60100190565b610a80610903565b610a72565b60ff16604d8111610a97575b600a0a90565b610a9f610903565b610a91565b8015610ac9575b78010000000000000000000000000000000000000000000000000490565b610ad161099a565b610aab565b8015610b02575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0490565b610b0a61099a565b610add565b8115610b19570490565b610b2161099a565b0490565b8115610b7b575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82147f8000000000000000000000000000000000000000000000000000000000000000821416610a28570590565b610b8361099a565b610b2c565b610c1c610ca9610ca4610c9e610b9c6106dd565b63ffffffff610c937f000000000000000000000000000000000000000000000000000000000000000092610bde84610bd383610748565b9063ffffffff169052565b6000610be982610762565b526040519788917f883bdbfd000000000000000000000000000000000000000000000000000000008352600483016108c2565b039660008173ffffffffffffffffffffffffffffffffffffffff99818b7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610e40575b600091610e1e575b50610c8d610c80610c87610c8084610762565b5160060b90565b92610748565b90610933565b911660030b906109ca565b60020b90565b610f62565b7f000000000000000000000000000000000000000000000000000000000000000082167f000000000000000000000000000000000000000000000000000000000000000083161415610d7d57610d3e90610d6d92610d36610d31610d2c7f0000000000000000000000000000000000000000000000000000000000000000610a41565b610a85565b610aa4565b911680610e54565b610d677f0000000000000000000000000000000000000000000000000000000000000000610a85565b90610b0f565b905b8115610d7757565b60019150565b610db091610d36610d31610d2c7f0000000000000000000000000000000000000000000000000000000000000000610a41565b8015610df157610deb90610de6610d2c7f0000000000000000000000000000000000000000000000000000000000000000610a63565b610b25565b90610d6f565b506104e6610d2c7f0000000000000000000000000000000000000000000000000000000000000000610a63565b610e39913d90823e610e303d82610410565b3d810190610806565b5038610c6d565b610e48610511565b610c65565b1561000f57565b90917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8383099280830292838086109503948086039514610eed57908291610e9d868411610e4d565b096001821901821680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b50509150610b21821515610e4d565b15610f0357565b5060646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600160248201527f54000000000000000000000000000000000000000000000000000000000000006044820152fd5b73ffffffffffffffffffffffffffffffffffffffff9060020b60008112156112ec5780600003905b610f99620d89e8831115610efc565b60018216156112c35770ffffffffffffffffffffffffffffffffff6ffffcb933bd6fad37aa2d162d1a5940015b1691600281166112a7575b6004811661128b575b6008811661126f575b60108116611253575b60208116611237575b6040811661121b575b608090818116611200575b61010081166111e5575b61020081166111ca575b61040081166111af575b6108008116611194575b6110008116611179575b612000811661115e575b6140008116611143575b6180008116611128575b62010000811661110d575b6202000081166110f3575b6204000081166110d9575b62080000166110be575b506000126110b0575b63ffffffff81166110a75760ff60005b169060201c011690565b60ff600161109d565b6110b990610ad6565b61108d565b6b048a170391f7dc42444e8fa26000929302901c9190611084565b6d2216e584f5fa1ea926041bedfe98909302811c9261107a565b926e5d6af8dedb81196699c329225ee60402811c9261106f565b926f09aa508b5b7a84e1c677de54f3e99bc902811c92611064565b926f31be135f97d08fd981231505542fcfa602811c92611059565b926f70d869a156d2a1b890bb3df62baf32f702811c9261104f565b926fa9f746462d870fdf8a65dc1f90e061e502811c92611045565b926fd097f3bdfd2022b8845ad8f792aa582502811c9261103b565b926fe7159475a2c29b7443b29c7fa6e889d902811c92611031565b926ff3392b0822b70005940c7a398e4b70f302811c92611027565b926ff987a7253ac413176f2b074cf7815e5402811c9261101d565b926ffcbe86c7900a88aedcffc83b479aa3a402811c92611013565b926ffe5dee046a99a2a811c461f1969c305302811c92611009565b916fff2ea16466c96a3843ec78b326b528610260801c91610ffe565b916fff973b41fa98c081472e6896dfb254c00260801c91610ff5565b916fffcb9843d60f6159c9db58835c9266440260801c91610fec565b916fffe5caca7e10e4e61c3624eaa0941cd00260801c91610fe3565b916ffff2e50f5f656932ef12357cf3c7fdcc0260801c91610fda565b916ffff97272373d413259a46990580e213a0260801c91610fd1565b70ffffffffffffffffffffffffffffffffff700100000000000000000000000000000000610fc6565b80610f8a56fea26c6578706572696d656e74616cf564736f6c634300080c0018";

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
    quoteAsset_: string,
    twapInterval_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV3PriceFeed> {
    return super.deploy(
      pool_,
      quoteAsset_,
      twapInterval_,
      overrides || {}
    ) as Promise<UniswapV3PriceFeed>;
  }
  override getDeployTransaction(
    pool_: string,
    quoteAsset_: string,
    twapInterval_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      pool_,
      quoteAsset_,
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
