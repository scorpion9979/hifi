/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  GodModeUniswapV3PriceFeed,
  GodModeUniswapV3PriceFeedInterface,
} from "../../../contracts/test/GodModeUniswapV3PriceFeed";
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "newPool",
        type: "address",
      },
    ],
    name: "__godMode_setPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "newRefAsset",
        type: "address",
      },
    ],
    name: "__godMode_setRefAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "newTwapInterval",
        type: "uint32",
      },
    ],
    name: "__godMode_setTwapInterval",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "view",
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
        name: "_roundId",
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
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516200406738038062004067833981016040819052610031916100d0565b828282604051610040906100aa565b6001600160a01b03938416815292909116602083015263ffffffff166040820152606001604051809103906000f080158015610080573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b039290921691909117905550610126915050565b6118ec806200277b83390190565b6001600160a01b03811681146100cd57600080fd5b50565b6000806000606084860312156100e557600080fd5b83516100f0816100b8565b6020850151909350610101816100b8565b604085015190925063ffffffff8116811461011b57600080fd5b809150509250925092565b61264580620001366000396000f3fe608060405260043610620000d25760003560e01c80637284e416116200007f5780639e868b4e11620000555780639e868b4e14620002e5578063a66a3ec4146200030a578063feaf968c146200032f5762000149565b80637284e416146200023a57806396fce27714620002615780639a6fc8f514620002885762000149565b8063313ce56711620000b5578063313ce56714620001ba5780633c1d5df014620001e557806354fd4d5014620002135762000149565b80628b32f7146200016d57806316f0115b14620001a25762000149565b366200014957600080546040516001600160a01b039091169034905b60006040518083038185875af1925050503d80600081146200012d576040519150601f19603f3d011682016040523d82523d6000602084013e62000132565b606091505b505090508062000146576200014662000a67565b50005b600080546040516001600160a01b03909116903490620000ee908490369062000a7d565b3480156200017a57600080fd5b506200018562000347565b6040516001600160a01b0390911681526020015b60405180910390f35b348015620001af57600080fd5b5062000185620003c6565b348015620001c757600080fd5b50620001d26200041b565b60405160ff909116815260200162000199565b348015620001f257600080fd5b50620001fd62000496565b60405163ffffffff909116815260200162000199565b3480156200022057600080fd5b506200022b62000511565b60405190815260200162000199565b3480156200024757600080fd5b50620002526200058c565b60405162000199919062000ac0565b3480156200026e57600080fd5b50620002866200028036600462000b0b565b62000600565b005b3480156200029557600080fd5b50620002ad620002a736600462000b4b565b6200077b565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a00162000199565b348015620002f257600080fd5b50620002866200030436600462000b81565b62000811565b3480156200031757600080fd5b50620002866200032936600462000b81565b62000905565b3480156200033c57600080fd5b50620002ad620009c7565b60008060009054906101000a90046001600160a01b03166001600160a01b0316628b32f76040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200039b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003c1919062000ba1565b905090565b60008060009054906101000a90046001600160a01b03166001600160a01b03166316f0115b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200039b573d6000803e3d6000fd5b60008060009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000470573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003c1919062000bc1565b60008060009054906101000a90046001600160a01b03166001600160a01b0316633c1d5df06040518163ffffffff1660e01b8152600401602060405180830381865afa158015620004eb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003c1919062000be6565b60008060009054906101000a90046001600160a01b03166001600160a01b03166354fd4d506040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000566573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003c1919062000c06565b6000805460408051633942720b60e11b815290516060936001600160a01b0390931692637284e41692600480820193918290030181865afa158015620005d6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003c1919081019062000c36565b60008054906101000a90046001600160a01b03166001600160a01b03166316f0115b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000652573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000678919062000ba1565b60008054906101000a90046001600160a01b03166001600160a01b0316628b32f76040518163ffffffff1660e01b8152600401602060405180830381865afa158015620006c9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006ef919062000ba1565b82604051620006fe9062000a59565b6001600160a01b03938416815292909116602083015263ffffffff166040820152606001604051809103906000f0801580156200073f573d6000803e3d6000fd5b50600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b039290921691909117905550565b60008054604051639a6fc8f560e01b815269ffffffffffffffffffff8416600482015282918291829182916001600160a01b0390911690639a6fc8f59060240160a060405180830381865afa158015620007d9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007ff919062000cef565b939a9299509097509550909350915050565b60005460408051628b32f760e01b8152905183926001600160a01b031691628b32f79160048083019260209291908290030181865afa15801562000859573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200087f919062000ba1565b60008054906101000a90046001600160a01b03166001600160a01b0316633c1d5df06040518163ffffffff1660e01b8152600401602060405180830381865afa158015620008d1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620008f7919062000be6565b604051620006fe9062000a59565b60008054906101000a90046001600160a01b03166001600160a01b03166316f0115b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000957573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200097d919062000ba1565b600054604080516303c1d5df60e41b8152905184926001600160a01b031691633c1d5df09160048083019260209291908290030181865afa158015620008d1573d6000803e3d6000fd5b60008060008060008060009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa15801562000a22573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a48919062000cef565b945094509450945094509091929394565b6118ec8062000d4d83390190565b634e487b7160e01b600052600160045260246000fd5b8183823760009101908152919050565b60005b8381101562000aaa57818101518382015260200162000a90565b8381111562000aba576000848401525b50505050565b602081526000825180602084015262000ae181604085016020870162000a8d565b601f01601f19169190910160400192915050565b63ffffffff8116811462000b0857600080fd5b50565b60006020828403121562000b1e57600080fd5b813562000b2b8162000af5565b9392505050565b69ffffffffffffffffffff8116811462000b0857600080fd5b60006020828403121562000b5e57600080fd5b813562000b2b8162000b32565b6001600160a01b038116811462000b0857600080fd5b60006020828403121562000b9457600080fd5b813562000b2b8162000b6b565b60006020828403121562000bb457600080fd5b815162000b2b8162000b6b565b60006020828403121562000bd457600080fd5b815160ff8116811462000b2b57600080fd5b60006020828403121562000bf957600080fd5b815162000b2b8162000af5565b60006020828403121562000c1957600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121562000c4957600080fd5b815167ffffffffffffffff8082111562000c6257600080fd5b818401915084601f83011262000c7757600080fd5b81518181111562000c8c5762000c8c62000c20565b604051601f8201601f19908116603f0116810190838211818310171562000cb75762000cb762000c20565b8160405282815287602084870101111562000cd157600080fd5b62000ce483602083016020880162000a8d565b979650505050505050565b600080600080600060a0868803121562000d0857600080fd5b855162000d158162000b32565b80955050602086015193506040860151925060608601519150608086015162000d3e8162000b32565b80915050929550929590935056fe6101606040523480156200001257600080fd5b50604051620018ec380380620018ec8339810160408190526200003591620004dc565b6001600160a01b0380831660a0528316620000635760405163ac88cda360e01b815260040160405180910390fd5b826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000a2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c891906200052b565b6001600160a01b031660e0816001600160a01b031681525050826001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000120573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014691906200052b565b6001600160a01b039081166101205260e05160a0518216911614801590620001855750610120516001600160a01b031660a0516001600160a01b031614155b15620001b75760a051604051639202155760e01b81526001600160a01b03909116600482015260240160405180910390fd5b826001600160a01b03166080816001600160a01b0316815250506000806080516001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562000215573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023b919062000588565b5050509350935050506000806080516001600160a01b031663252c09d7848660016200026891906200063e565b62000274919062000667565b6040516001600160e01b031960e084901b16815261ffff9091166004820152602401608060405180830381865afa158015620002b4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002da919062000697565b935050509150806200035d5760805160405163252c09d760e01b8152600060048201526001600160a01b039091169063252c09d790602401608060405180830381865afa15801562000330573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000356919062000697565b5091935050505b6000620003714263ffffffff8516620006fe565b90508563ffffffff168110806200038d575061ffff8461ffff16105b15620003ac5760405163a99e764f60e01b815260040160405180910390fd5b60e0516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015620003ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000413919062000718565b60ff166101008160ff1681525050610120516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000463573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000489919062000718565b60ff166101405250505063ffffffff90921660c052506200073692505050565b6001600160a01b0381168114620004bf57600080fd5b50565b805163ffffffff81168114620004d757600080fd5b919050565b600080600060608486031215620004f257600080fd5b8351620004ff81620004a9565b60208501519093506200051281620004a9565b91506200052260408501620004c2565b90509250925092565b6000602082840312156200053e57600080fd5b81516200054b81620004a9565b9392505050565b805161ffff81168114620004d757600080fd5b805160ff81168114620004d757600080fd5b80518015158114620004d757600080fd5b600080600080600080600060e0888a031215620005a457600080fd5b8751620005b181620004a9565b8097505060208801518060020b8114620005ca57600080fd5b9550620005da6040890162000552565b9450620005ea6060890162000552565b9350620005fa6080890162000552565b92506200060a60a0890162000565565b91506200061a60c0890162000577565b905092959891949750929550565b634e487b7160e01b600052601160045260246000fd5b600061ffff8083168185168083038211156200065e576200065e62000628565b01949350505050565b600061ffff808416806200068b57634e487b7160e01b600052601260045260246000fd5b92169190910692915050565b60008060008060808587031215620006ae57600080fd5b620006b985620004c2565b935060208501518060060b8114620006d057600080fd5b6040860151909350620006e381620004a9565b9150620006f36060860162000577565b905092959194509250565b60008282101562000713576200071362000628565b500390565b6000602082840312156200072b57600080fd5b6200054b8262000565565b60805160a05160c05160e051610100516101205161014051611110620007dc600039600081816105fe015281816106e601526107260152600081816101bc0152818161034701526105a101526000818161063701526106b40152600061021601526000818161010b0152818161041301526105240152600081816091015281816101e60152818161029c01526105cb01526000818160d501526104a301526111106000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c806354fd4d501161005b57806354fd4d50146101425780637284e416146101515780639a6fc8f514610166578063feaf968c146101b057600080fd5b80628b32f71461008c57806316f0115b146100d0578063313ce567146100f75780633c1d5df014610106575b600080fd5b6100b37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b37f000000000000000000000000000000000000000000000000000000000000000081565b604051600881526020016100c7565b61012d7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016100c7565b604051600181526020016100c7565b6101596101b8565b6040516100c79190610ba4565b610179610174366004610bd7565b6103a3565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a0016100c7565b6101796103c8565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161415610345577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610272573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261029a9190810190610c4a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156102f8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103209190810190610c4a565b604051602001610331929190610cde565b604051602081830303815290604052905090565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610272573d6000803e3d6000fd5b6000806000806000856103b46103ec565b909790965060009550859450849350915050565b6000806000806000806103d96103ec565b9096909550600094504293508492509050565b604080516002808252606082018352600092839291906020830190803683370190505090507f00000000000000000000000000000000000000000000000000000000000000008160008151811061044557610445610d1c565b602002602001019063ffffffff16908163ffffffff168152505060008160018151811061047457610474610d1c565b63ffffffff9092166020928302919091019091015260405163883bdbfd60e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063883bdbfd906104d8908590600401610d32565b600060405180830381865afa1580156104f5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261051d9190810190610e21565b50905060007f000000000000000000000000000000000000000000000000000000000000000060030b8260008151811061055957610559610d1c565b60200260200101518360018151811061057457610574610d1c565b60200260200101516105869190610f03565b6105909190610f69565b9050600061059d8261077b565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614156106a1576106247f0000000000000000000000000000000000000000000000000000000000000000600a61108d565b6106906001600160a01b0383168061065d7f0000000000000000000000000000000000000000000000000000000000000000600861109c565b61066890600a61108d565b61068b9078010000000000000000000000000000000000000000000000006110c1565b610abf565b61069a91906110c1565b9450610764565b6106da6001600160a01b0382168061065d7f0000000000000000000000000000000000000000000000000000000000000000600861109c565b9450846107205761070c7f0000000000000000000000000000000000000000000000000000000000000000601061109c565b61071790600a61108d565b94505050505090565b8461074c7f0000000000000000000000000000000000000000000000000000000000000000601061109c565b61075790600a61108d565b61076191906110d5565b94505b8461077457600194505050505090565b5050505090565b60008060008360020b12610792578260020b61079a565b8260020b6000035b9050620d89e88111156107d75760405162461bcd60e51b81526020600482015260016024820152601560fa1b604482015260640160405180910390fd5b6000600182166107f85770010000000000000000000000000000000061080a565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561083e576ffff97272373d413259a46990580e213a0260801c5b600482161561085d576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b600882161561087c576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b601082161561089b576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156108ba576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156108d9576fff2ea16466c96a3843ec78b326b528610260801c5b60808216156108f8576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615610918576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615610938576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615610958576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615610978576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615610998576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156109b8576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156109d8576f70d869a156d2a1b890bb3df62baf32f70260801c5b6180008216156109f8576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615610a19576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615610a39576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615610a58576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615610a75576b048a170391f7dc42444e8fa20260801c5b60008460020b1315610a96578060001981610a9257610a92610f53565b0490505b640100000000810615610aaa576001610aad565b60005b60ff16602082901c0192505050919050565b600080806000198587098587029250828110838203039150508060001415610af95760008411610aee57600080fd5b508290049050610b6d565b808411610b0557600080fd5b600084868809851960019081018716968790049682860381900495909211909303600082900391909104909201919091029190911760038402600290811880860282030280860282030280860282030280860282030280860282030280860290910302029150505b9392505050565b60005b83811015610b8f578181015183820152602001610b77565b83811115610b9e576000848401525b50505050565b6020815260008251806020840152610bc3816040850160208701610b74565b601f01601f19169190910160400192915050565b600060208284031215610be957600080fd5b813569ffffffffffffffffffff81168114610b6d57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610c4257610c42610c03565b604052919050565b600060208284031215610c5c57600080fd5b815167ffffffffffffffff80821115610c7457600080fd5b818401915084601f830112610c8857600080fd5b815181811115610c9a57610c9a610c03565b610cad601f8201601f1916602001610c19565b9150808252856020828501011115610cc457600080fd5b610cd5816020840160208601610b74565b50949350505050565b60008351610cf0818460208801610b74565b6201017960ed1b9083019081528351610d10816003840160208801610b74565b01600301949350505050565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b81811015610d7057835163ffffffff1683529284019291840191600101610d4e565b50909695505050505050565b600067ffffffffffffffff821115610d9657610d96610c03565b5060051b60200190565b600082601f830112610db157600080fd5b81516020610dc6610dc183610d7c565b610c19565b82815260059290921b84018101918181019086841115610de557600080fd5b8286015b84811015610e165780516001600160a01b0381168114610e095760008081fd5b8352918301918301610de9565b509695505050505050565b60008060408385031215610e3457600080fd5b825167ffffffffffffffff80821115610e4c57600080fd5b818501915085601f830112610e6057600080fd5b81516020610e70610dc183610d7c565b82815260059290921b84018101918181019089841115610e8f57600080fd5b948201945b83861015610ebd5785518060060b8114610eae5760008081fd5b82529482019490820190610e94565b91880151919650909350505080821115610ed657600080fd5b50610ee385828601610da0565b9150509250929050565b634e487b7160e01b600052601160045260246000fd5b60008160060b8360060b6000811281667fffffffffffff1901831281151615610f2e57610f2e610eed565b81667fffffffffffff018313811615610f4957610f49610eed565b5090039392505050565b634e487b7160e01b600052601260045260246000fd5b60008160060b8360060b80610f8057610f80610f53565b667fffffffffffff19821460001982141615610f9e57610f9e610eed565b90059392505050565b600181815b80851115610fe2578160001904821115610fc857610fc8610eed565b80851615610fd557918102915b93841c9390800290610fac565b509250929050565b600082610ff957506001611087565b8161100657506000611087565b816001811461101c576002811461102657611042565b6001915050611087565b60ff84111561103757611037610eed565b50506001821b611087565b5060208310610133831016604e8410600b8410161715611065575081810a611087565b61106f8383610fa7565b806000190482111561108357611083610eed565b0290505b92915050565b6000610b6d60ff841683610fea565b600060ff821660ff84168060ff038211156110b9576110b9610eed565b019392505050565b6000826110d0576110d0610f53565b500490565b6000826110e4576110e4610f53565b600160ff1b8214600019841416156110fe576110fe610eed565b50059056fea164736f6c634300080c000aa164736f6c634300080c000a6101606040523480156200001257600080fd5b50604051620018ec380380620018ec8339810160408190526200003591620004dc565b6001600160a01b0380831660a0528316620000635760405163ac88cda360e01b815260040160405180910390fd5b826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000a2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c891906200052b565b6001600160a01b031660e0816001600160a01b031681525050826001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000120573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014691906200052b565b6001600160a01b039081166101205260e05160a0518216911614801590620001855750610120516001600160a01b031660a0516001600160a01b031614155b15620001b75760a051604051639202155760e01b81526001600160a01b03909116600482015260240160405180910390fd5b826001600160a01b03166080816001600160a01b0316815250506000806080516001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa15801562000215573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023b919062000588565b5050509350935050506000806080516001600160a01b031663252c09d7848660016200026891906200063e565b62000274919062000667565b6040516001600160e01b031960e084901b16815261ffff9091166004820152602401608060405180830381865afa158015620002b4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002da919062000697565b935050509150806200035d5760805160405163252c09d760e01b8152600060048201526001600160a01b039091169063252c09d790602401608060405180830381865afa15801562000330573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000356919062000697565b5091935050505b6000620003714263ffffffff8516620006fe565b90508563ffffffff168110806200038d575061ffff8461ffff16105b15620003ac5760405163a99e764f60e01b815260040160405180910390fd5b60e0516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015620003ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000413919062000718565b60ff166101008160ff1681525050610120516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000463573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000489919062000718565b60ff166101405250505063ffffffff90921660c052506200073692505050565b6001600160a01b0381168114620004bf57600080fd5b50565b805163ffffffff81168114620004d757600080fd5b919050565b600080600060608486031215620004f257600080fd5b8351620004ff81620004a9565b60208501519093506200051281620004a9565b91506200052260408501620004c2565b90509250925092565b6000602082840312156200053e57600080fd5b81516200054b81620004a9565b9392505050565b805161ffff81168114620004d757600080fd5b805160ff81168114620004d757600080fd5b80518015158114620004d757600080fd5b600080600080600080600060e0888a031215620005a457600080fd5b8751620005b181620004a9565b8097505060208801518060020b8114620005ca57600080fd5b9550620005da6040890162000552565b9450620005ea6060890162000552565b9350620005fa6080890162000552565b92506200060a60a0890162000565565b91506200061a60c0890162000577565b905092959891949750929550565b634e487b7160e01b600052601160045260246000fd5b600061ffff8083168185168083038211156200065e576200065e62000628565b01949350505050565b600061ffff808416806200068b57634e487b7160e01b600052601260045260246000fd5b92169190910692915050565b60008060008060808587031215620006ae57600080fd5b620006b985620004c2565b935060208501518060060b8114620006d057600080fd5b6040860151909350620006e381620004a9565b9150620006f36060860162000577565b905092959194509250565b60008282101562000713576200071362000628565b500390565b6000602082840312156200072b57600080fd5b6200054b8262000565565b60805160a05160c05160e051610100516101205161014051611110620007dc600039600081816105fe015281816106e601526107260152600081816101bc0152818161034701526105a101526000818161063701526106b40152600061021601526000818161010b0152818161041301526105240152600081816091015281816101e60152818161029c01526105cb01526000818160d501526104a301526111106000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c806354fd4d501161005b57806354fd4d50146101425780637284e416146101515780639a6fc8f514610166578063feaf968c146101b057600080fd5b80628b32f71461008c57806316f0115b146100d0578063313ce567146100f75780633c1d5df014610106575b600080fd5b6100b37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b37f000000000000000000000000000000000000000000000000000000000000000081565b604051600881526020016100c7565b61012d7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016100c7565b604051600181526020016100c7565b6101596101b8565b6040516100c79190610ba4565b610179610174366004610bd7565b6103a3565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a0016100c7565b6101796103c8565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161415610345577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610272573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261029a9190810190610c4a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156102f8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103209190810190610c4a565b604051602001610331929190610cde565b604051602081830303815290604052905090565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610272573d6000803e3d6000fd5b6000806000806000856103b46103ec565b909790965060009550859450849350915050565b6000806000806000806103d96103ec565b9096909550600094504293508492509050565b604080516002808252606082018352600092839291906020830190803683370190505090507f00000000000000000000000000000000000000000000000000000000000000008160008151811061044557610445610d1c565b602002602001019063ffffffff16908163ffffffff168152505060008160018151811061047457610474610d1c565b63ffffffff9092166020928302919091019091015260405163883bdbfd60e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063883bdbfd906104d8908590600401610d32565b600060405180830381865afa1580156104f5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261051d9190810190610e21565b50905060007f000000000000000000000000000000000000000000000000000000000000000060030b8260008151811061055957610559610d1c565b60200260200101518360018151811061057457610574610d1c565b60200260200101516105869190610f03565b6105909190610f69565b9050600061059d8261077b565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614156106a1576106247f0000000000000000000000000000000000000000000000000000000000000000600a61108d565b6106906001600160a01b0383168061065d7f0000000000000000000000000000000000000000000000000000000000000000600861109c565b61066890600a61108d565b61068b9078010000000000000000000000000000000000000000000000006110c1565b610abf565b61069a91906110c1565b9450610764565b6106da6001600160a01b0382168061065d7f0000000000000000000000000000000000000000000000000000000000000000600861109c565b9450846107205761070c7f0000000000000000000000000000000000000000000000000000000000000000601061109c565b61071790600a61108d565b94505050505090565b8461074c7f0000000000000000000000000000000000000000000000000000000000000000601061109c565b61075790600a61108d565b61076191906110d5565b94505b8461077457600194505050505090565b5050505090565b60008060008360020b12610792578260020b61079a565b8260020b6000035b9050620d89e88111156107d75760405162461bcd60e51b81526020600482015260016024820152601560fa1b604482015260640160405180910390fd5b6000600182166107f85770010000000000000000000000000000000061080a565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561083e576ffff97272373d413259a46990580e213a0260801c5b600482161561085d576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b600882161561087c576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b601082161561089b576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156108ba576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156108d9576fff2ea16466c96a3843ec78b326b528610260801c5b60808216156108f8576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615610918576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615610938576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615610958576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615610978576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615610998576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156109b8576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156109d8576f70d869a156d2a1b890bb3df62baf32f70260801c5b6180008216156109f8576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615610a19576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615610a39576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615610a58576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615610a75576b048a170391f7dc42444e8fa20260801c5b60008460020b1315610a96578060001981610a9257610a92610f53565b0490505b640100000000810615610aaa576001610aad565b60005b60ff16602082901c0192505050919050565b600080806000198587098587029250828110838203039150508060001415610af95760008411610aee57600080fd5b508290049050610b6d565b808411610b0557600080fd5b600084868809851960019081018716968790049682860381900495909211909303600082900391909104909201919091029190911760038402600290811880860282030280860282030280860282030280860282030280860282030280860290910302029150505b9392505050565b60005b83811015610b8f578181015183820152602001610b77565b83811115610b9e576000848401525b50505050565b6020815260008251806020840152610bc3816040850160208701610b74565b601f01601f19169190910160400192915050565b600060208284031215610be957600080fd5b813569ffffffffffffffffffff81168114610b6d57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610c4257610c42610c03565b604052919050565b600060208284031215610c5c57600080fd5b815167ffffffffffffffff80821115610c7457600080fd5b818401915084601f830112610c8857600080fd5b815181811115610c9a57610c9a610c03565b610cad601f8201601f1916602001610c19565b9150808252856020828501011115610cc457600080fd5b610cd5816020840160208601610b74565b50949350505050565b60008351610cf0818460208801610b74565b6201017960ed1b9083019081528351610d10816003840160208801610b74565b01600301949350505050565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b81811015610d7057835163ffffffff1683529284019291840191600101610d4e565b50909695505050505050565b600067ffffffffffffffff821115610d9657610d96610c03565b5060051b60200190565b600082601f830112610db157600080fd5b81516020610dc6610dc183610d7c565b610c19565b82815260059290921b84018101918181019086841115610de557600080fd5b8286015b84811015610e165780516001600160a01b0381168114610e095760008081fd5b8352918301918301610de9565b509695505050505050565b60008060408385031215610e3457600080fd5b825167ffffffffffffffff80821115610e4c57600080fd5b818501915085601f830112610e6057600080fd5b81516020610e70610dc183610d7c565b82815260059290921b84018101918181019089841115610e8f57600080fd5b948201945b83861015610ebd5785518060060b8114610eae5760008081fd5b82529482019490820190610e94565b91880151919650909350505080821115610ed657600080fd5b50610ee385828601610da0565b9150509250929050565b634e487b7160e01b600052601160045260246000fd5b60008160060b8360060b6000811281667fffffffffffff1901831281151615610f2e57610f2e610eed565b81667fffffffffffff018313811615610f4957610f49610eed565b5090039392505050565b634e487b7160e01b600052601260045260246000fd5b60008160060b8360060b80610f8057610f80610f53565b667fffffffffffff19821460001982141615610f9e57610f9e610eed565b90059392505050565b600181815b80851115610fe2578160001904821115610fc857610fc8610eed565b80851615610fd557918102915b93841c9390800290610fac565b509250929050565b600082610ff957506001611087565b8161100657506000611087565b816001811461101c576002811461102657611042565b6001915050611087565b60ff84111561103757611037610eed565b50506001821b611087565b5060208310610133831016604e8410600b8410161715611065575081810a611087565b61106f8383610fa7565b806000190482111561108357611083610eed565b0290505b92915050565b6000610b6d60ff841683610fea565b600060ff821660ff84168060ff038211156110b9576110b9610eed565b019392505050565b6000826110d0576110d0610f53565b500490565b6000826110e4576110e4610f53565b600160ff1b8214600019841416156110fe576110fe610eed565b50059056fea164736f6c634300080c000a";

type GodModeUniswapV3PriceFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GodModeUniswapV3PriceFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GodModeUniswapV3PriceFeed__factory extends ContractFactory {
  constructor(...args: GodModeUniswapV3PriceFeedConstructorParams) {
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
  ): Promise<GodModeUniswapV3PriceFeed> {
    return super.deploy(
      pool_,
      refAsset_,
      twapInterval_,
      overrides || {}
    ) as Promise<GodModeUniswapV3PriceFeed>;
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
  override attach(address: string): GodModeUniswapV3PriceFeed {
    return super.attach(address) as GodModeUniswapV3PriceFeed;
  }
  override connect(signer: Signer): GodModeUniswapV3PriceFeed__factory {
    return super.connect(signer) as GodModeUniswapV3PriceFeed__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GodModeUniswapV3PriceFeedInterface {
    return new utils.Interface(_abi) as GodModeUniswapV3PriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GodModeUniswapV3PriceFeed {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GodModeUniswapV3PriceFeed;
  }
}
