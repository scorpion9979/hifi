/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FlashUniswapV3,
  FlashUniswapV3Interface,
} from "../../../contracts/uniswap-v3/FlashUniswapV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IBalanceSheetV2",
        name: "balanceSheet_",
        type: "address",
      },
      {
        internalType: "address",
        name: "uniV3Factory_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        name: "repayAmount",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "SafeErc20__CallToNonContract",
    type: "error",
  },
  {
    inputs: [],
    name: "SafeErc20__NoReturnData",
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
        internalType: "address",
        name: "collateral",
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
    name: "FlashSwapAndLiquidateBorrow",
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
            internalType: "contract IErc20",
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
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051620016653803806200166583398101604081905261003191610060565b6001600160a01b039182166080521660a05261009a565b6001600160a01b038116811461005d57600080fd5b50565b6000806040838503121561007357600080fd5b825161007e81610048565b602084015190925061008f81610048565b809150509250929050565b60805160a051611584620000e16000396000818160ae01526106e1015260008181605601528181610a2b01528181610aca01528181610b620152610c9a01526115846000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806322285cf6146100515780635fd3acc214610094578063705e474b146100a9578063fa461e33146100d0575b600080fd5b6100787f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6100a76100a236600461100e565b6100e3565b005b6100787f000000000000000000000000000000000000000000000000000000000000000081565b6100a76100de3660046110b6565b61034b565b6040805160c0810182526000606082018181526080830182905260a083018290528252602082018190529181019190915281602001516001600160a01b0316636f307dc36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610156573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061017a9190611136565b6001600160a01b0390811660208301819052604084015190911614156101d257815160208201516040516356c284cb60e11b81526001600160a01b039283166004820152911660248201526044015b60405180910390fd5b6101e98260400151826020015184606001516105cc565b808252602080820151908301516001600160a01b03908116911614604083015261021290610643565b6001600160a01b031663128acb083083604001518560a001516000196102389190611169565b856040015161026557610260600173fffd8963efd1fc6a506488495d951d5263988d266111f0565b610275565b6102756401000276a36001611218565b6040805160e0810182526020808b01516001600160a01b0390811683528b518116828401528b840151168284015289516060830152336080808401919091528b015160a0808401919091528b015160c083015291516102d49201611243565b6040516020818303038152906040526040518663ffffffff1660e01b815260040161030395949392919061132a565b60408051808303816000875af1158015610321573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610345919061136f565b50505050565b61037d6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b600061038b83850185611414565b905061039a8160600151610643565b6001600160a01b0316336001600160a01b0316146103cd57604051639b2d751d60e01b81523360048201526024016101c9565b6103df81600001518260c00151610763565b8083526020820151825160408401516103f7936109ff565b60608301526000861361040a578461040c565b855b6040830181905260a0820151610421916114cd565b8260600151121561046257606082015160408084015160a08401519151636d0db81160e01b81526004810193909352602483015260448201526064016101c9565b8160600151826040015111156104ac576060820151604080840151919091036080808501829052830151918301516104a7926001600160a01b03909116913090610d76565b6104ed565b8160400151826060015111156104ed57604080830151606084015103602084018190526080830151918301516104ed926001600160a01b0390911691610e0e565b61051333836040015183604001516001600160a01b0316610e0e9092919063ffffffff16565b80600001516001600160a01b031681602001516001600160a01b031682608001516001600160a01b03167f612c4a3d511ecc6d0a51d965cc76c7ed6a97215ac56d9a290c17c501ac7c643684604001518560c001518760600151886040015189608001518a602001516040516105bc969594939291906001600160a01b03969096168652602086019490945260408501929092526060840152608083015260a082015260c00190565b60405180910390a4505050505050565b6040805160608101825260008082526020820181905291810191909152826001600160a01b0316846001600160a01b03161115610607579192915b6040518060600160405280856001600160a01b03168152602001846001600160a01b031681526020018362ffffff1681525090505b9392505050565b600081602001516001600160a01b031682600001516001600160a01b03161061066b57600080fd5b815160208084015160408086015181516001600160a01b0395861681860152949092168482015262ffffff90911660608085019190915281518085038201815260808501909252815191909201207fff0000000000000000000000000000000000000000000000000000000000000060a08401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff191660a183015260b58201527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d582015260f50160408051601f19818403018152919052805160209091012092915050565b600080836001600160a01b0316636f307dc36040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c89190611136565b604051636eb1769f60e11b81523060048201526001600160a01b03868116602483015291925060009183169063dd62ed3e90604401602060405180830381865afa15801561081a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083e919061150d565b9050838110156108be5760405163095ea7b360e01b81526001600160a01b038681166004830152600019602483015283169063095ea7b3906044016020604051808303816000875af1158015610898573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bc9190611526565b505b6040516370a0823160e01b81523060048201526000906001600160a01b038716906370a0823190602401602060405180830381865afa158015610905573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610929919061150d565b60405163b9f5be4160e01b8152600481018790529091506001600160a01b0387169063b9f5be4190602401600060405180830381600087803b15801561096e57600080fd5b505af1158015610982573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092506001600160a01b03891691506370a0823190602401602060405180830381865afa1580156109cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f1919061150d565b919091039695505050505050565b604051630f20729d60e11b81526001600160a01b038581166004830152838116602483015260009182917f00000000000000000000000000000000000000000000000000000000000000001690631e40e53a90604401602060405180830381865afa158015610a72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a96919061150d565b60405163f37765c760e01b81526001600160a01b0386811660048301526024820183905287811660448301529192506000917f0000000000000000000000000000000000000000000000000000000000000000169063f37765c790606401602060405180830381865afa158015610b11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b35919061150d565b604051634d7c892f60e01b81526001600160a01b03898116600483015288811660248301529192506000917f00000000000000000000000000000000000000000000000000000000000000001690634d7c892f90604401602060405180830381865afa158015610ba9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcd919061150d565b90506000818311610bde5782610be0565b815b90506000818711610bf15786610bf3565b815b6040516370a0823160e01b81523060048201529091506000906001600160a01b038a16906370a0823190602401602060405180830381865afa158015610c3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c61919061150d565b604051630c9fae0f60e31b81526001600160a01b038d811660048301528c81166024830152604482018590528b811660648301529192507f0000000000000000000000000000000000000000000000000000000000000000909116906364fd707890608401600060405180830381600087803b158015610ce057600080fd5b505af1158015610cf4573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092506001600160a01b038c1691506370a0823190602401602060405180830381865afa158015610d3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d63919061150d565b919091039b9a5050505050505050505050565b6040516001600160a01b03808516602483015283166044820152606481018290526103459085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610e43565b6040516001600160a01b038316602482015260448101829052610e3e90849063a9059cbb60e01b90606401610daa565b505050565b6000610e8583836040518060400160405280601581526020017f5361666545726332304c6f774c6576656c43616c6c0000000000000000000000815250610ec0565b805190915015610e3e5780806020019051810190610ea39190611526565b610e3e576040516364d6fc4d60e01b815260040160405180910390fd5b6060610ed4846001600160a01b0316610f97565b610efc57604051638201cc0560e01b81526001600160a01b03851660048201526024016101c9565b600080856001600160a01b031685604051610f179190611548565b6000604051808303816000865af19150503d8060008114610f54576040519150601f19603f3d011682016040523d82523d6000602084013e610f59565b606091505b50915091508115610f6d57915061063c9050565b805115610f7d5780518082602001fd5b8360405162461bcd60e51b81526004016101c99190611564565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590610fcb57508115155b949350505050565b6001600160a01b0381168114610fe857600080fd5b50565b8035610ff681610fd3565b919050565b803562ffffff81168114610ff657600080fd5b600060c0828403121561102057600080fd5b60405160c0810181811067ffffffffffffffff8211171561105157634e487b7160e01b600052604160045260246000fd5b604052823561105f81610fd3565b8152602083013561106f81610fd3565b6020820152604083013561108281610fd3565b604082015261109360608401610ffb565b60608201526080830135608082015260a083013560a08201528091505092915050565b600080600080606085870312156110cc57600080fd5b8435935060208501359250604085013567ffffffffffffffff808211156110f257600080fd5b818701915087601f83011261110657600080fd5b81358181111561111557600080fd5b88602082850101111561112757600080fd5b95989497505060200194505050565b60006020828403121561114857600080fd5b815161063c81610fd3565b634e487b7160e01b600052601160045260246000fd5b60006001600160ff1b0360008413600084138583048511828216161561119157611191611153565b600160ff1b60008712828116878305891216156111b0576111b0611153565b600087129250878205871284841616156111cc576111cc611153565b878505871281841616156111e2576111e2611153565b505050929093029392505050565b60006001600160a01b038381169083168181101561121057611210611153565b039392505050565b60006001600160a01b0380831681851680830382111561123a5761123a611153565b01949350505050565b6000610120820190506001600160a01b03808451168352806020850151166020840152806040850151166040840152606084015181815116606085015281602082015116608085015262ffffff60408201511660a0850152505060808301516112b760c08401826001600160a01b03169052565b5060a083015160e083015260c0909201516101009091015290565b60005b838110156112ed5781810151838201526020016112d5565b838111156103455750506000910152565b600081518084526113168160208601602086016112d2565b601f01601f19169290920160200192915050565b60006001600160a01b038088168352861515602084015285604084015280851660608401525060a0608083015261136460a08301846112fe565b979650505050505050565b6000806040838503121561138257600080fd5b505080516020909101519092909150565b6000606082840312156113a557600080fd5b6040516060810181811067ffffffffffffffff821117156113d657634e487b7160e01b600052604160045260246000fd5b60405290508082356113e781610fd3565b815260208301356113f781610fd3565b602082015261140860408401610ffb565b60408201525092915050565b6000610120828403121561142757600080fd5b60405160e0810181811067ffffffffffffffff8211171561145857634e487b7160e01b600052604160045260246000fd5b604052823561146681610fd3565b8152602083013561147681610fd3565b6020820152604083013561148981610fd3565b604082015261149b8460608501611393565b60608201526114ac60c08401610feb565b608082015260e083013560a08201526101009092013560c083015250919050565b6000808212826001600160ff1b03038413811516156114ee576114ee611153565b600160ff1b839003841281161561150757611507611153565b50500190565b60006020828403121561151f57600080fd5b5051919050565b60006020828403121561153857600080fd5b8151801515811461063c57600080fd5b6000825161155a8184602087016112d2565b9190910192915050565b60208152600061063c60208301846112fe56fea164736f6c634300080c000a";

type FlashUniswapV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlashUniswapV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FlashUniswapV3__factory extends ContractFactory {
  constructor(...args: FlashUniswapV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    balanceSheet_: PromiseOrValue<string>,
    uniV3Factory_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FlashUniswapV3> {
    return super.deploy(
      balanceSheet_,
      uniV3Factory_,
      overrides || {}
    ) as Promise<FlashUniswapV3>;
  }
  override getDeployTransaction(
    balanceSheet_: PromiseOrValue<string>,
    uniV3Factory_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      balanceSheet_,
      uniV3Factory_,
      overrides || {}
    );
  }
  override attach(address: string): FlashUniswapV3 {
    return super.attach(address) as FlashUniswapV3;
  }
  override connect(signer: Signer): FlashUniswapV3__factory {
    return super.connect(signer) as FlashUniswapV3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlashUniswapV3Interface {
    return new utils.Interface(_abi) as FlashUniswapV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashUniswapV3 {
    return new Contract(address, _abi, signerOrProvider) as FlashUniswapV3;
  }
}
