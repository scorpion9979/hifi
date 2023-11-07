/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Fintroller,
  FintrollerInterface,
} from "../../../../contracts/core/fintroller/Fintroller";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Fintroller__BondBorrowAllowedWithLiquidateBorrowDisallowed",
    type: "error",
  },
  {
    inputs: [],
    name: "Fintroller__BondLiquidateBorrowAllowedWithRepayBorrowDisallowed",
    type: "error",
  },
  {
    inputs: [],
    name: "Fintroller__BondLiquidateBorrowDisallowedWithBorrowAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "Fintroller__BondNotListed",
    type: "error",
  },
  {
    inputs: [],
    name: "Fintroller__BondRepayBorrowDisallowedWithLiquidateBorrowAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "Fintroller__CollateralDecimalsOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "Fintroller__CollateralDecimalsZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "Fintroller__CollateralNotListed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newCollateralRatio",
        type: "uint256",
      },
    ],
    name: "Fintroller__CollateralRatioBelowLiquidationIncentive",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newCollateralRatio",
        type: "uint256",
      },
    ],
    name: "Fintroller__CollateralRatioOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newCollateralRatio",
        type: "uint256",
      },
    ],
    name: "Fintroller__CollateralRatioUnderflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDebtCeiling",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
    ],
    name: "Fintroller__DebtCeilingUnderflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newLiquidationIncentive",
        type: "uint256",
      },
    ],
    name: "Fintroller__LiquidationIncentiveAboveCollateralRatio",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newLiquidationIncentive",
        type: "uint256",
      },
    ],
    name: "Fintroller__LiquidationIncentiveOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newLiquidationIncentive",
        type: "uint256",
      },
    ],
    name: "Fintroller__LiquidationIncentiveUnderflow",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "ListBond",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "ListCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "SetBorrowAllowed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldCollateralCeiling",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newCollateralCeiling",
        type: "uint256",
      },
    ],
    name: "SetCollateralCeiling",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldCollateralRatio",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newCollateralRatio",
        type: "uint256",
      },
    ],
    name: "SetCollateralRatio",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDebtCeiling",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDebtCeiling",
        type: "uint256",
      },
    ],
    name: "SetDebtCeiling",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "SetDepositCollateralAllowed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "SetDepositUnderlyingAllowed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "SetLiquidateBorrowAllowed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldLiquidationIncentive",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newLiquidationIncentive",
        type: "uint256",
      },
    ],
    name: "SetLiquidationIncentive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldMaxBonds",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMaxBonds",
        type: "uint256",
      },
    ],
    name: "SetMaxBonds",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldMaxCollaterals",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMaxCollaterals",
        type: "uint256",
      },
    ],
    name: "SetMaxCollaterals",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "SetRepayBorrowAllowed",
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
    inputs: [
      {
        internalType: "contract IHToken",
        name: "hToken",
        type: "address",
      },
    ],
    name: "getBond",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "debtCeiling",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isBorrowAllowed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isDepositUnderlyingAllowed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isLiquidateBorrowAllowed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isListed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isRepayBorrowAllowed",
            type: "bool",
          },
        ],
        internalType: "struct IFintroller.Bond",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "getBorrowAllowed",
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
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "getCollateral",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ceiling",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ratio",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationIncentive",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isDepositCollateralAllowed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isListed",
            type: "bool",
          },
        ],
        internalType: "struct IFintroller.Collateral",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "getCollateralCeiling",
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
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "getCollateralRatio",
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
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "getDebtCeiling",
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
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "getDepositCollateralAllowed",
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
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "getDepositUnderlyingAllowed",
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
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "getLiquidateBorrowAllowed",
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
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "getLiquidationIncentive",
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
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "getRepayBorrowAllowed",
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
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "isBondListed",
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
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "isCollateralListed",
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
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
    ],
    name: "listBond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
    ],
    name: "listCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxBonds",
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
    name: "maxCollaterals",
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
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setBorrowAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newCollateralCeiling",
        type: "uint256",
      },
    ],
    name: "setCollateralCeiling",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newCollateralRatio",
        type: "uint256",
      },
    ],
    name: "setCollateralRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newDebtCeiling",
        type: "uint256",
      },
    ],
    name: "setDebtCeiling",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setDepositCollateralAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setDepositUnderlyingAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setLiquidateBorrowAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IErc20",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newLiquidationIncentive",
        type: "uint256",
      },
    ],
    name: "setLiquidationIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMaxBonds",
        type: "uint256",
      },
    ],
    name: "setMaxBonds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMaxCollaterals",
        type: "uint256",
      },
    ],
    name: "setMaxCollaterals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHToken",
        name: "bond",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setRepayBorrowAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916339081178255604051909182917f5c486528ec3e3f0ea91181cff8116f02bfa350e03b8b6f12e00765adbb5af85c908290a350600a6001819055600255611b4b8061006b6000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80638da5cb5b1161010f578063ce8f6d3e116100a2578063e3ee6e4711610071578063e3ee6e4714610601578063e60f07731461060a578063eecb855d1461061d578063fd0ff4b91461063057600080fd5b8063ce8f6d3e1461059c578063d29d44ee146105af578063d59f3f53146105c2578063d686e9ee146105d557600080fd5b8063aeb4fcc1116100de578063aeb4fcc114610550578063b60b825714610563578063bb23ffec14610576578063c0273a211461058957600080fd5b80638da5cb5b146104905780639b56d6c9146104bb5780639bd8f6e8146105145780639d7385561461052757600080fd5b80633c7981091161018757806363efc2281161015657806363efc228146104215780637922911f1461045757806381a7bc971461046a5780638559d20d1461047d57600080fd5b80633c798109146103ca57806342a4e064146103f35780634b3f2889146104065780635054d1501461040e57600080fd5b806315a3ba43116101c357806315a3ba4314610330578063227661cb1461036a578063298f7b181461037d578063309071a7146103c157600080fd5b806302b5bda7146101ea57806305e18c9d146101ff5780630d8912f314610212575b600080fd5b6101fd6101f8366004611a64565b610643565b005b6101fd61020d366004611a99565b6107e3565b6102d1610220366004611ab2565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152506001600160a01b0316600090815260036020908152604091829020825160c0810184528154815260019091015460ff808216151593830193909352610100810483161515938201939093526201000083048216151560608201526301000000830482161515608082015264010000000090920416151560a082015290565b6040516103279190600060c0820190508251825260208301511515602083015260408301511515604083015260608301511515606083015260808301511515608083015260a0830151151560a083015292915050565b60405180910390f35b61035c61033e366004611ab2565b6001600160a01b031660009081526004602052604090206001015490565b604051908152602001610327565b6101fd610378366004611a64565b610878565b6103b161038b366004611ab2565b6001600160a01b0316600090815260046020526040902060030154610100900460ff1690565b6040519015158152602001610327565b61035c60025481565b61035c6103d8366004611ab2565b6001600160a01b031660009081526003602052604090205490565b6101fd610401366004611a64565b6109b7565b6101fd610aae565b6103b161041c366004611ab2565b610b45565b6103b161042f366004611ab2565b6001600160a01b03166000908152600360205260409020600101546301000000900460ff1690565b6101fd610465366004611a64565b610bba565b6103b1610478366004611ab2565b610caa565b6101fd61048b366004611ab2565b610d1a565b6000546104a3906001600160a01b031681565b6040516001600160a01b039091168152602001610327565b6104ce6104c9366004611ab2565b610e4e565b6040516103279190600060a08201905082518252602083015160208301526040830151604083015260608301511515606083015260808301511515608083015292915050565b6101fd610522366004611ad6565b610ee7565b61035c610535366004611ab2565b6001600160a01b031660009081526004602052604090205490565b6101fd61055e366004611ad6565b611077565b6101fd610571366004611ad6565b611204565b6103b1610584366004611ab2565b6112fd565b6101fd610597366004611ab2565b611373565b6103b16105aa366004611ab2565b611524565b6101fd6105bd366004611ab2565b611592565b6101fd6105d0366004611a64565b611661565b61035c6105e3366004611ab2565b6001600160a01b031660009081526004602052604090206002015490565b61035c60015481565b6103b1610618366004611ab2565b6117ab565b6101fd61062b366004611a99565b611823565b6101fd61063e366004611ad6565b6118b0565b6000546001600160a01b031633146106885760005460405163cc6bdb1d60e01b81526001600160a01b0390911660048201523360248201526044015b60405180910390fd5b6001600160a01b0382166000908152600360205260409020600101546301000000900460ff166106d65760405163216a460f60e11b81526001600160a01b038316600482015260240161067f565b80801561070757506001600160a01b038216600090815260036020526040902060010154640100000000900460ff16155b15610725576040516313ad546f60e31b815260040160405180910390fd5b8015801561074e57506001600160a01b03821660009081526003602052604090206001015460ff165b1561076c57604051632ed3d4a760e21b815260040160405180910390fd5b6001600160a01b038083166000818152600360205260408082206001018054861515620100000262ff00001990911617905590549051919216907f71dc0d35e1b9ee171f1b8ac9511d05e460ed7416cc401fe4d33978c44f1ca35b906107d790851515815260200190565b60405180910390a35050565b6000546001600160a01b031633146108235760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b600180549082905560005460408051838152602081018590526001600160a01b03909216917ffdc6136113b0185cc0d7209bef28516dcabeae2ebd769f707fcf8710e565656791015b60405180910390a25050565b6000546001600160a01b031633146108b85760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b6001600160a01b0382166000908152600360205260409020600101546301000000900460ff166109065760405163216a460f60e11b81526001600160a01b038316600482015260240161067f565b80801561093557506001600160a01b03821660009081526003602052604090206001015462010000900460ff16155b1561095357604051630eae82a960e11b815260040160405180910390fd5b6001600160a01b03808316600081815260036020526040808220600101805486151560ff1990911617905590549051919216907fb415ca45b135e3d2eb232571276198ac50330743ec23e7745c78a5b78a0a1b51906107d790851515815260200190565b6000546001600160a01b031633146109f75760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b6001600160a01b0382166000908152600360205260409020600101546301000000900460ff16610a455760405163216a460f60e11b81526001600160a01b038316600482015260240161067f565b6001600160a01b0380831660008181526003602052604080822060010180548615156101000261ff001990911617905590549051919216907fc55893173627fb718b33144ccc6045fe1b2be87d4f4ab1b4e0460abbfe617c5f906107d790851515815260200190565b6000546001600160a01b03163314610aee5760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b600080546040516001600160a01b03909116907f5c486528ec3e3f0ea91181cff8116f02bfa350e03b8b6f12e00765adbb5af85c908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6001600160a01b0381166000908152600360205260408120600101546301000000900460ff16610b935760405163216a460f60e11b81526001600160a01b038316600482015260240161067f565b506001600160a01b0316600090815260036020526040902060010154610100900460ff1690565b6000546001600160a01b03163314610bfa5760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b6001600160a01b038216600090815260046020526040902060030154610100900460ff16610c4657604051630141c9a760e01b81526001600160a01b038316600482015260240161067f565b6001600160a01b03808316600081815260046020526040808220600301805486151560ff1990911617905590549051919216907f0f3b9071297b60393e9906170c1e2262c9f49e48683463c2268e6b2214a02c82906107d790851515815260200190565b6001600160a01b0381166000908152600360205260408120600101546301000000900460ff16610cf85760405163216a460f60e11b81526001600160a01b038316600482015260240161067f565b506001600160a01b031660009081526003602052604090206001015460ff1690565b6000546001600160a01b03163314610d5a5760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b6040805160c081018252600080825260016020808401828152848601838152606086018481526080870185815260a088018681526001600160a01b038b8116808a5260039097528a892099518a559451989096018054935192519151965161ffff1990941698151561ff00191698909817610100921515929092029190911763ffff00001916620100009115159190910263ff0000001916176301000000941515949094029390931764ff000000001916640100000000931515939093029290921790935581549351929316917fd81bca3d01ee48c675a3635409a0de9f165d21de38d1b30566de2b764b96cd129190a350565b610e846040518060a001604052806000815260200160008152602001600081526020016000151581526020016000151581525090565b506001600160a01b0316600090815260046020908152604091829020825160a0810184528154815260018201549281019290925260028101549282019290925260039091015460ff80821615156060840152610100909104161515608082015290565b6000546001600160a01b03163314610f275760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b6001600160a01b038216600090815260046020526040902060030154610100900460ff16610f7357604051630141c9a760e01b81526001600160a01b038316600482015260240161067f565b6714d1120d7b160000811115610f9f5760405163ba4e26f960e01b81526004810182905260240161067f565b670de0b6b3a7640000811015610fcb57604051633c292c4d60e11b81526004810182905260240161067f565b6001600160a01b03821660009081526004602052604090206001015481111561100a57604051637ab9833b60e01b81526004810182905260240161067f565b6001600160a01b038281166000818152600460209081526040808320600201805490879055925481519485529184018390528301859052909216907f344a32babe164e447da4243dd7af4572ba3e0db01b3644c0fca84ecfb3e66c9f9060600160405180910390a2505050565b6000546001600160a01b031633146110b75760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b6001600160a01b0382166000908152600360205260409020600101546301000000900460ff166111055760405163216a460f60e11b81526001600160a01b038316600482015260240161067f565b6000826001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611145573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111699190611b02565b90508082101561119657604051635a6bd6d160e01b8152600481018390526024810182905260440161067f565b6001600160a01b0380841660008181526003602052604080822080549087905591549051919316907f722c25b91b159fac5bf2699329b2651dcbf7e2e9470fb0261243e801b9d271b3906111f69085908890918252602082015260400190565b60405180910390a350505050565b6000546001600160a01b031633146112445760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b6001600160a01b038216600090815260046020526040902060030154610100900460ff1661129057604051630141c9a760e01b81526001600160a01b038316600482015260240161067f565b6001600160a01b0380831660008181526004602052604080822080549086905591549051919316907f1bb3ad18b0ca1c3aed435a2d1b4caf5ecce0ef121e229a73034dd22815703d4c906112f09085908790918252602082015260400190565b60405180910390a3505050565b6001600160a01b0381166000908152600360205260408120600101546301000000900460ff1661134b5760405163216a460f60e11b81526001600160a01b038316600482015260240161067f565b506001600160a01b031660009081526003602052604090206001015462010000900460ff1690565b6000546001600160a01b031633146113b35760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b6000816001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114179190611b1b565b60ff1690508061143a576040516314a5ea3560e11b815260040160405180910390fd5b601281111561145f576040516315432fa560e21b81526004810182905260240161067f565b6040805160a08101825260008082526714d1120d7b1600006020808401918252670f43fc2c04ee0000848601908152600160608601818152608087018281526001600160a01b038b811680895260049096528988209851895595519288019290925591516002870155905160039095018054915161ffff1990921695151561ff00191695909517610100911515919091021790935581549351929316917f6232505455ee4aa22dab92c1da7c3890a53b8f120c0c4e759173b9e33446e2e09190a35050565b6001600160a01b038116600090815260046020526040812060030154610100900460ff1661157057604051630141c9a760e01b81526001600160a01b038316600482015260240161067f565b506001600160a01b031660009081526004602052604090206003015460ff1690565b6000546001600160a01b031633146115d25760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b6001600160a01b0381166115f957604051634208fc5d60e01b815260040160405180910390fd5b600080546040516001600160a01b03808516939216917f5c486528ec3e3f0ea91181cff8116f02bfa350e03b8b6f12e00765adbb5af85c91a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031633146116a15760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b6001600160a01b0382166000908152600360205260409020600101546301000000900460ff166116ef5760405163216a460f60e11b81526001600160a01b038316600482015260240161067f565b8015801561171e57506001600160a01b03821660009081526003602052604090206001015462010000900460ff165b1561173c576040516335a8f47160e01b815260040160405180910390fd5b6001600160a01b0380831660008181526003602052604080822060010180548615156401000000000264ff000000001990911617905590549051919216907f10424d34f926d4dd41e2f901147ab7b042eac6bf6d1e86205bce22c3744cc426906107d790851515815260200190565b6001600160a01b0381166000908152600360205260408120600101546301000000900460ff166117f95760405163216a460f60e11b81526001600160a01b038316600482015260240161067f565b506001600160a01b0316600090815260036020526040902060010154640100000000900460ff1690565b6000546001600160a01b031633146118635760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b600280549082905560005460408051838152602081018590526001600160a01b03909216917fc3fa55da3d00e91f363615e63306100388093bb3ba58877972aa9b84a7dc1959910161086c565b6000546001600160a01b031633146118f05760005460405163cc6bdb1d60e01b81526001600160a01b03909116600482015233602482015260440161067f565b6001600160a01b038216600090815260046020526040902060030154610100900460ff1661193c57604051630141c9a760e01b81526001600160a01b038316600482015260240161067f565b68056bc75e2d63100000811115611969576040516321acffb360e11b81526004810182905260240161067f565b670de0b6b3a764000081101561199557604051637444adfb60e11b81526004810182905260240161067f565b6001600160a01b0382166000908152600460205260409020600201548110156119d457604051633c674d3f60e11b81526004810182905260240161067f565b6001600160a01b0380831660008181526004602052604080822060010180549086905591549051919316907f3352e03805e9a22af9ab02ba260864857143dc41b53213d78e1451b98d472ee4906112f09085908790918252602082015260400190565b6001600160a01b0381168114611a4c57600080fd5b50565b80358015158114611a5f57600080fd5b919050565b60008060408385031215611a7757600080fd5b8235611a8281611a37565b9150611a9060208401611a4f565b90509250929050565b600060208284031215611aab57600080fd5b5035919050565b600060208284031215611ac457600080fd5b8135611acf81611a37565b9392505050565b60008060408385031215611ae957600080fd5b8235611af481611a37565b946020939093013593505050565b600060208284031215611b1457600080fd5b5051919050565b600060208284031215611b2d57600080fd5b815160ff81168114611acf57600080fdfea164736f6c634300080c000a";

type FintrollerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FintrollerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Fintroller__factory extends ContractFactory {
  constructor(...args: FintrollerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Fintroller> {
    return super.deploy(overrides || {}) as Promise<Fintroller>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Fintroller {
    return super.attach(address) as Fintroller;
  }
  override connect(signer: Signer): Fintroller__factory {
    return super.connect(signer) as Fintroller__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FintrollerInterface {
    return new utils.Interface(_abi) as FintrollerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Fintroller {
    return new Contract(address, _abi, signerOrProvider) as Fintroller;
  }
}
