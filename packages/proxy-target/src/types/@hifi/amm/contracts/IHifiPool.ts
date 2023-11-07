/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IHifiPoolInterface extends utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "PERMIT_TYPEHASH()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "buyHToken(address,uint256)": FunctionFragment;
    "buyUnderlying(address,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "getBurnOutputs(uint256)": FunctionFragment;
    "getMintInputs(uint256)": FunctionFragment;
    "getNormalizedUnderlyingReserves()": FunctionFragment;
    "getQuoteForBuyingHToken(uint256)": FunctionFragment;
    "getQuoteForBuyingUnderlying(uint256)": FunctionFragment;
    "getQuoteForSellingHToken(uint256)": FunctionFragment;
    "getQuoteForSellingUnderlying(uint256)": FunctionFragment;
    "getVirtualHTokenReserves()": FunctionFragment;
    "hToken()": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "maturity()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "sellHToken(address,uint256)": FunctionFragment;
    "sellUnderlying(address,uint256)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "underlying()": FunctionFragment;
    "underlyingPrecisionScalar()": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DOMAIN_SEPARATOR"
      | "PERMIT_TYPEHASH"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "burn"
      | "buyHToken"
      | "buyUnderlying"
      | "decimals"
      | "decreaseAllowance"
      | "getBurnOutputs"
      | "getMintInputs"
      | "getNormalizedUnderlyingReserves"
      | "getQuoteForBuyingHToken"
      | "getQuoteForBuyingUnderlying"
      | "getQuoteForSellingHToken"
      | "getQuoteForSellingUnderlying"
      | "getVirtualHTokenReserves"
      | "hToken"
      | "increaseAllowance"
      | "maturity"
      | "mint"
      | "name"
      | "nonces"
      | "permit"
      | "sellHToken"
      | "sellUnderlying"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "underlying"
      | "underlyingPrecisionScalar"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERMIT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "buyHToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "buyUnderlying",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBurnOutputs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMintInputs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNormalizedUnderlyingReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getQuoteForBuyingHToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getQuoteForBuyingUnderlying",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getQuoteForSellingHToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getQuoteForSellingUnderlying",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVirtualHTokenReserves",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "maturity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nonces",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sellHToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sellUnderlying",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingPrecisionScalar",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERMIT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyHToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBurnOutputs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMintInputs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNormalizedUnderlyingReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQuoteForBuyingHToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQuoteForBuyingUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQuoteForSellingHToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQuoteForSellingUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVirtualHTokenReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maturity", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sellHToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sellUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "underlyingPrecisionScalar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "AddLiquidity(uint256,address,uint256,uint256,uint256)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
    "RemoveLiquidity(uint256,address,uint256,uint256,uint256)": EventFragment;
    "Trade(uint256,address,address,int256,int256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Trade"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface AddLiquidityEventObject {
  maturity: BigNumber;
  provider: string;
  underlyingAmount: BigNumber;
  hTokenAmount: BigNumber;
  poolTokenAmount: BigNumber;
}
export type AddLiquidityEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber],
  AddLiquidityEventObject
>;

export type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  amount: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface RemoveLiquidityEventObject {
  maturity: BigNumber;
  provider: string;
  underlyingAmount: BigNumber;
  hTokenAmount: BigNumber;
  poolTokenAmount: BigNumber;
}
export type RemoveLiquidityEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber],
  RemoveLiquidityEventObject
>;

export type RemoveLiquidityEventFilter = TypedEventFilter<RemoveLiquidityEvent>;

export interface TradeEventObject {
  maturity: BigNumber;
  from: string;
  to: string;
  underlyingAmount: BigNumber;
  hTokenAmount: BigNumber;
}
export type TradeEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber],
  TradeEventObject
>;

export type TradeEventFilter = TypedEventFilter<TradeEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  amount: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface IHifiPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IHifiPoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      poolTokensBurned: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyHToken(
      to: PromiseOrValue<string>,
      hTokenOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyUnderlying(
      to: PromiseOrValue<string>,
      underlyingOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBurnOutputs(
      poolTokensBurned: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        underlyingReturned: BigNumber;
        hTokenReturned: BigNumber;
      }
    >;

    getMintInputs(
      underlyingOffered: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        hTokenRequired: BigNumber;
        poolTokensMinted: BigNumber;
      }
    >;

    getNormalizedUnderlyingReserves(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { normalizedUnderlyingReserves: BigNumber }>;

    getQuoteForBuyingHToken(
      hTokenOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { underlyingIn: BigNumber }>;

    getQuoteForBuyingUnderlying(
      underlyingOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { hTokenIn: BigNumber }>;

    getQuoteForSellingHToken(
      hTokenIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { underlyingOut: BigNumber }>;

    getQuoteForSellingUnderlying(
      underlyingIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { hTokenOut: BigNumber }>;

    getVirtualHTokenReserves(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { virtualHTokenReserves: BigNumber }>;

    hToken(overrides?: CallOverrides): Promise<[string]>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    maturity(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      underlyingOffered: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nonces(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sellHToken(
      to: PromiseOrValue<string>,
      hTokenIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sellUnderlying(
      to: PromiseOrValue<string>,
      underlyingIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    underlying(overrides?: CallOverrides): Promise<[string]>;

    underlyingPrecisionScalar(overrides?: CallOverrides): Promise<[BigNumber]>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    poolTokensBurned: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyHToken(
    to: PromiseOrValue<string>,
    hTokenOut: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyUnderlying(
    to: PromiseOrValue<string>,
    underlyingOut: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: PromiseOrValue<string>,
    subtractedAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBurnOutputs(
    poolTokensBurned: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      underlyingReturned: BigNumber;
      hTokenReturned: BigNumber;
    }
  >;

  getMintInputs(
    underlyingOffered: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      hTokenRequired: BigNumber;
      poolTokensMinted: BigNumber;
    }
  >;

  getNormalizedUnderlyingReserves(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getQuoteForBuyingHToken(
    hTokenOut: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getQuoteForBuyingUnderlying(
    underlyingOut: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getQuoteForSellingHToken(
    hTokenIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getQuoteForSellingUnderlying(
    underlyingIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVirtualHTokenReserves(overrides?: CallOverrides): Promise<BigNumber>;

  hToken(overrides?: CallOverrides): Promise<string>;

  increaseAllowance(
    spender: PromiseOrValue<string>,
    addedAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  maturity(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    underlyingOffered: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nonces(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  permit(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sellHToken(
    to: PromiseOrValue<string>,
    hTokenIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sellUnderlying(
    to: PromiseOrValue<string>,
    underlyingIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  underlying(overrides?: CallOverrides): Promise<string>;

  underlyingPrecisionScalar(overrides?: CallOverrides): Promise<BigNumber>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      poolTokensBurned: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        underlyingReturned: BigNumber;
        hTokenReturned: BigNumber;
      }
    >;

    buyHToken(
      to: PromiseOrValue<string>,
      hTokenOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyUnderlying(
      to: PromiseOrValue<string>,
      underlyingOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getBurnOutputs(
      poolTokensBurned: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        underlyingReturned: BigNumber;
        hTokenReturned: BigNumber;
      }
    >;

    getMintInputs(
      underlyingOffered: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        hTokenRequired: BigNumber;
        poolTokensMinted: BigNumber;
      }
    >;

    getNormalizedUnderlyingReserves(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQuoteForBuyingHToken(
      hTokenOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQuoteForBuyingUnderlying(
      underlyingOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQuoteForSellingHToken(
      hTokenIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQuoteForSellingUnderlying(
      underlyingIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVirtualHTokenReserves(overrides?: CallOverrides): Promise<BigNumber>;

    hToken(overrides?: CallOverrides): Promise<string>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maturity(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      underlyingOffered: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    nonces(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    sellHToken(
      to: PromiseOrValue<string>,
      hTokenIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sellUnderlying(
      to: PromiseOrValue<string>,
      underlyingIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    underlying(overrides?: CallOverrides): Promise<string>;

    underlyingPrecisionScalar(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AddLiquidity(uint256,address,uint256,uint256,uint256)"(
      maturity?: null,
      provider?: PromiseOrValue<string> | null,
      underlyingAmount?: null,
      hTokenAmount?: null,
      poolTokenAmount?: null
    ): AddLiquidityEventFilter;
    AddLiquidity(
      maturity?: null,
      provider?: PromiseOrValue<string> | null,
      underlyingAmount?: null,
      hTokenAmount?: null,
      poolTokenAmount?: null
    ): AddLiquidityEventFilter;

    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      amount?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      amount?: null
    ): ApprovalEventFilter;

    "RemoveLiquidity(uint256,address,uint256,uint256,uint256)"(
      maturity?: null,
      provider?: PromiseOrValue<string> | null,
      underlyingAmount?: null,
      hTokenAmount?: null,
      poolTokenAmount?: null
    ): RemoveLiquidityEventFilter;
    RemoveLiquidity(
      maturity?: null,
      provider?: PromiseOrValue<string> | null,
      underlyingAmount?: null,
      hTokenAmount?: null,
      poolTokenAmount?: null
    ): RemoveLiquidityEventFilter;

    "Trade(uint256,address,address,int256,int256)"(
      maturity?: null,
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      underlyingAmount?: null,
      hTokenAmount?: null
    ): TradeEventFilter;
    Trade(
      maturity?: null,
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      underlyingAmount?: null,
      hTokenAmount?: null
    ): TradeEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      poolTokensBurned: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyHToken(
      to: PromiseOrValue<string>,
      hTokenOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyUnderlying(
      to: PromiseOrValue<string>,
      underlyingOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBurnOutputs(
      poolTokensBurned: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMintInputs(
      underlyingOffered: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNormalizedUnderlyingReserves(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQuoteForBuyingHToken(
      hTokenOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQuoteForBuyingUnderlying(
      underlyingOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQuoteForSellingHToken(
      hTokenIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQuoteForSellingUnderlying(
      underlyingIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVirtualHTokenReserves(overrides?: CallOverrides): Promise<BigNumber>;

    hToken(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    maturity(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      underlyingOffered: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sellHToken(
      to: PromiseOrValue<string>,
      hTokenIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sellUnderlying(
      to: PromiseOrValue<string>,
      underlyingIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingPrecisionScalar(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      poolTokensBurned: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyHToken(
      to: PromiseOrValue<string>,
      hTokenOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyUnderlying(
      to: PromiseOrValue<string>,
      underlyingOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBurnOutputs(
      poolTokensBurned: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMintInputs(
      underlyingOffered: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNormalizedUnderlyingReserves(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getQuoteForBuyingHToken(
      hTokenOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getQuoteForBuyingUnderlying(
      underlyingOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getQuoteForSellingHToken(
      hTokenIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getQuoteForSellingUnderlying(
      underlyingIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVirtualHTokenReserves(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    maturity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      underlyingOffered: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sellHToken(
      to: PromiseOrValue<string>,
      hTokenIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sellUnderlying(
      to: PromiseOrValue<string>,
      underlyingIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlyingPrecisionScalar(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
