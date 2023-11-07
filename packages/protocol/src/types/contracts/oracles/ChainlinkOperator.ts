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
} from "../../common";

export interface ChainlinkOperatorInterface extends utils.Interface {
  functions: {
    "_renounceOwnership()": FunctionFragment;
    "_transferOwnership(address)": FunctionFragment;
    "deleteFeed(string)": FunctionFragment;
    "getFeed(string)": FunctionFragment;
    "getNormalizedPrice(string)": FunctionFragment;
    "getPrice(string)": FunctionFragment;
    "owner()": FunctionFragment;
    "pricePrecision()": FunctionFragment;
    "pricePrecisionScalar()": FunctionFragment;
    "priceStalenessThreshold()": FunctionFragment;
    "setFeed(address,address)": FunctionFragment;
    "setPriceStalenessThreshold(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_renounceOwnership"
      | "_transferOwnership"
      | "deleteFeed"
      | "getFeed"
      | "getNormalizedPrice"
      | "getPrice"
      | "owner"
      | "pricePrecision"
      | "pricePrecisionScalar"
      | "priceStalenessThreshold"
      | "setFeed"
      | "setPriceStalenessThreshold"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteFeed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNormalizedPrice",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pricePrecision",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pricePrecisionScalar",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceStalenessThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeed",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceStalenessThreshold",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "_renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deleteFeed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNormalizedPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pricePrecision",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pricePrecisionScalar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceStalenessThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPriceStalenessThreshold",
    data: BytesLike
  ): Result;

  events: {
    "DeleteFeed(address,address)": EventFragment;
    "SetFeed(address,address)": EventFragment;
    "SetPriceStalenessThreshold(uint256,uint256)": EventFragment;
    "TransferOwnership(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeleteFeed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPriceStalenessThreshold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferOwnership"): EventFragment;
}

export interface DeleteFeedEventObject {
  asset: string;
  feed: string;
}
export type DeleteFeedEvent = TypedEvent<
  [string, string],
  DeleteFeedEventObject
>;

export type DeleteFeedEventFilter = TypedEventFilter<DeleteFeedEvent>;

export interface SetFeedEventObject {
  asset: string;
  feed: string;
}
export type SetFeedEvent = TypedEvent<[string, string], SetFeedEventObject>;

export type SetFeedEventFilter = TypedEventFilter<SetFeedEvent>;

export interface SetPriceStalenessThresholdEventObject {
  oldPriceStalenessThreshold: BigNumber;
  newPriceStalenessThreshold: BigNumber;
}
export type SetPriceStalenessThresholdEvent = TypedEvent<
  [BigNumber, BigNumber],
  SetPriceStalenessThresholdEventObject
>;

export type SetPriceStalenessThresholdEventFilter =
  TypedEventFilter<SetPriceStalenessThresholdEvent>;

export interface TransferOwnershipEventObject {
  oldOwner: string;
  newOwner: string;
}
export type TransferOwnershipEvent = TypedEvent<
  [string, string],
  TransferOwnershipEventObject
>;

export type TransferOwnershipEventFilter =
  TypedEventFilter<TransferOwnershipEvent>;

export interface ChainlinkOperator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChainlinkOperatorInterface;

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
    _renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteFeed(
      symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFeed(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string, boolean]>;

    getNormalizedPrice(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPrice(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pricePrecision(overrides?: CallOverrides): Promise<[BigNumber]>;

    pricePrecisionScalar(overrides?: CallOverrides): Promise<[BigNumber]>;

    priceStalenessThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    setFeed(
      asset: PromiseOrValue<string>,
      feed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPriceStalenessThreshold(
      newPriceStalenessThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteFeed(
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFeed(
    symbol: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, string, boolean]>;

  getNormalizedPrice(
    symbol: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPrice(
    symbol: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pricePrecision(overrides?: CallOverrides): Promise<BigNumber>;

  pricePrecisionScalar(overrides?: CallOverrides): Promise<BigNumber>;

  priceStalenessThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  setFeed(
    asset: PromiseOrValue<string>,
    feed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPriceStalenessThreshold(
    newPriceStalenessThreshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _renounceOwnership(overrides?: CallOverrides): Promise<void>;

    _transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteFeed(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getFeed(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string, boolean]>;

    getNormalizedPrice(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pricePrecision(overrides?: CallOverrides): Promise<BigNumber>;

    pricePrecisionScalar(overrides?: CallOverrides): Promise<BigNumber>;

    priceStalenessThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    setFeed(
      asset: PromiseOrValue<string>,
      feed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceStalenessThreshold(
      newPriceStalenessThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DeleteFeed(address,address)"(
      asset?: PromiseOrValue<string> | null,
      feed?: PromiseOrValue<string> | null
    ): DeleteFeedEventFilter;
    DeleteFeed(
      asset?: PromiseOrValue<string> | null,
      feed?: PromiseOrValue<string> | null
    ): DeleteFeedEventFilter;

    "SetFeed(address,address)"(
      asset?: PromiseOrValue<string> | null,
      feed?: PromiseOrValue<string> | null
    ): SetFeedEventFilter;
    SetFeed(
      asset?: PromiseOrValue<string> | null,
      feed?: PromiseOrValue<string> | null
    ): SetFeedEventFilter;

    "SetPriceStalenessThreshold(uint256,uint256)"(
      oldPriceStalenessThreshold?: null,
      newPriceStalenessThreshold?: null
    ): SetPriceStalenessThresholdEventFilter;
    SetPriceStalenessThreshold(
      oldPriceStalenessThreshold?: null,
      newPriceStalenessThreshold?: null
    ): SetPriceStalenessThresholdEventFilter;

    "TransferOwnership(address,address)"(
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): TransferOwnershipEventFilter;
    TransferOwnership(
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): TransferOwnershipEventFilter;
  };

  estimateGas: {
    _renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteFeed(
      symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFeed(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNormalizedPrice(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pricePrecision(overrides?: CallOverrides): Promise<BigNumber>;

    pricePrecisionScalar(overrides?: CallOverrides): Promise<BigNumber>;

    priceStalenessThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    setFeed(
      asset: PromiseOrValue<string>,
      feed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPriceStalenessThreshold(
      newPriceStalenessThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteFeed(
      symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFeed(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNormalizedPrice(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      symbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pricePrecision(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pricePrecisionScalar(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceStalenessThreshold(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFeed(
      asset: PromiseOrValue<string>,
      feed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPriceStalenessThreshold(
      newPriceStalenessThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
