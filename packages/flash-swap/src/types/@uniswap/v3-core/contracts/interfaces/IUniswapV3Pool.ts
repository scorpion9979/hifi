/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
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

export interface IUniswapV3PoolInterface extends utils.Interface {
  functions: {
    "burn(int24,int24,uint128)": FunctionFragment;
    "collect(address,int24,int24,uint128,uint128)": FunctionFragment;
    "collectProtocol(address,uint128,uint128)": FunctionFragment;
    "factory()": FunctionFragment;
    "fee()": FunctionFragment;
    "feeGrowthGlobal0X128()": FunctionFragment;
    "feeGrowthGlobal1X128()": FunctionFragment;
    "flash(address,uint256,uint256,bytes)": FunctionFragment;
    "increaseObservationCardinalityNext(uint16)": FunctionFragment;
    "initialize(uint160)": FunctionFragment;
    "liquidity()": FunctionFragment;
    "maxLiquidityPerTick()": FunctionFragment;
    "mint(address,int24,int24,uint128,bytes)": FunctionFragment;
    "observations(uint256)": FunctionFragment;
    "observe(uint32[])": FunctionFragment;
    "positions(bytes32)": FunctionFragment;
    "protocolFees()": FunctionFragment;
    "setFeeProtocol(uint8,uint8)": FunctionFragment;
    "slot0()": FunctionFragment;
    "snapshotCumulativesInside(int24,int24)": FunctionFragment;
    "swap(address,bool,int256,uint160,bytes)": FunctionFragment;
    "tickBitmap(int16)": FunctionFragment;
    "tickSpacing()": FunctionFragment;
    "ticks(int24)": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "burn"
      | "collect"
      | "collectProtocol"
      | "factory"
      | "fee"
      | "feeGrowthGlobal0X128"
      | "feeGrowthGlobal1X128"
      | "flash"
      | "increaseObservationCardinalityNext"
      | "initialize"
      | "liquidity"
      | "maxLiquidityPerTick"
      | "mint"
      | "observations"
      | "observe"
      | "positions"
      | "protocolFees"
      | "setFeeProtocol"
      | "slot0"
      | "snapshotCumulativesInside"
      | "swap"
      | "tickBitmap"
      | "tickSpacing"
      | "ticks"
      | "token0"
      | "token1"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collect",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collectProtocol",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeGrowthGlobal0X128",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeGrowthGlobal1X128",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "flash",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseObservationCardinalityNext",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxLiquidityPerTick",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "observations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "observe",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeProtocol",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "slot0", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "snapshotCumulativesInside",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, boolean, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tickBitmap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tickSpacing",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collectProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeGrowthGlobal0X128",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGrowthGlobal1X128",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseObservationCardinalityNext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxLiquidityPerTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "observations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "slot0", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "snapshotCumulativesInside",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tickBitmap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tickSpacing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;

  events: {
    "Burn(address,int24,int24,uint128,uint256,uint256)": EventFragment;
    "Collect(address,address,int24,int24,uint128,uint128)": EventFragment;
    "CollectProtocol(address,address,uint128,uint128)": EventFragment;
    "Flash(address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "IncreaseObservationCardinalityNext(uint16,uint16)": EventFragment;
    "Initialize(uint160,int24)": EventFragment;
    "Mint(address,address,int24,int24,uint128,uint256,uint256)": EventFragment;
    "SetFeeProtocol(uint8,uint8,uint8,uint8)": EventFragment;
    "Swap(address,address,int256,int256,uint160,uint128,int24)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Collect"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectProtocol"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Flash"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "IncreaseObservationCardinalityNext"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeeProtocol"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export interface BurnEventObject {
  owner: string;
  tickLower: number;
  tickUpper: number;
  amount: BigNumber;
  amount0: BigNumber;
  amount1: BigNumber;
}
export type BurnEvent = TypedEvent<
  [string, number, number, BigNumber, BigNumber, BigNumber],
  BurnEventObject
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface CollectEventObject {
  owner: string;
  recipient: string;
  tickLower: number;
  tickUpper: number;
  amount0: BigNumber;
  amount1: BigNumber;
}
export type CollectEvent = TypedEvent<
  [string, string, number, number, BigNumber, BigNumber],
  CollectEventObject
>;

export type CollectEventFilter = TypedEventFilter<CollectEvent>;

export interface CollectProtocolEventObject {
  sender: string;
  recipient: string;
  amount0: BigNumber;
  amount1: BigNumber;
}
export type CollectProtocolEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  CollectProtocolEventObject
>;

export type CollectProtocolEventFilter = TypedEventFilter<CollectProtocolEvent>;

export interface FlashEventObject {
  sender: string;
  recipient: string;
  amount0: BigNumber;
  amount1: BigNumber;
  paid0: BigNumber;
  paid1: BigNumber;
}
export type FlashEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  FlashEventObject
>;

export type FlashEventFilter = TypedEventFilter<FlashEvent>;

export interface IncreaseObservationCardinalityNextEventObject {
  observationCardinalityNextOld: number;
  observationCardinalityNextNew: number;
}
export type IncreaseObservationCardinalityNextEvent = TypedEvent<
  [number, number],
  IncreaseObservationCardinalityNextEventObject
>;

export type IncreaseObservationCardinalityNextEventFilter =
  TypedEventFilter<IncreaseObservationCardinalityNextEvent>;

export interface InitializeEventObject {
  sqrtPriceX96: BigNumber;
  tick: number;
}
export type InitializeEvent = TypedEvent<
  [BigNumber, number],
  InitializeEventObject
>;

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>;

export interface MintEventObject {
  sender: string;
  owner: string;
  tickLower: number;
  tickUpper: number;
  amount: BigNumber;
  amount0: BigNumber;
  amount1: BigNumber;
}
export type MintEvent = TypedEvent<
  [string, string, number, number, BigNumber, BigNumber, BigNumber],
  MintEventObject
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface SetFeeProtocolEventObject {
  feeProtocol0Old: number;
  feeProtocol1Old: number;
  feeProtocol0New: number;
  feeProtocol1New: number;
}
export type SetFeeProtocolEvent = TypedEvent<
  [number, number, number, number],
  SetFeeProtocolEventObject
>;

export type SetFeeProtocolEventFilter = TypedEventFilter<SetFeeProtocolEvent>;

export interface SwapEventObject {
  sender: string;
  recipient: string;
  amount0: BigNumber;
  amount1: BigNumber;
  sqrtPriceX96: BigNumber;
  liquidity: BigNumber;
  tick: number;
}
export type SwapEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber, number],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface IUniswapV3Pool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IUniswapV3PoolInterface;

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
    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collect(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    fee(overrides?: CallOverrides): Promise<[number]>;

    feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<[BigNumber]>;

    flash(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseObservationCardinalityNext(
      observationCardinalityNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, boolean] & {
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulativeX128: BigNumber;
        initialized: boolean;
      }
    >;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        tickCumulatives: BigNumber[];
        secondsPerLiquidityCumulativeX128s: BigNumber[];
      }
    >;

    positions(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _liquidity: BigNumber;
        feeGrowthInside0LastX128: BigNumber;
        feeGrowthInside1LastX128: BigNumber;
        tokensOwed0: BigNumber;
        tokensOwed1: BigNumber;
      }
    >;

    protocolFees(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { token0: BigNumber; token1: BigNumber }
    >;

    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    slot0(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, number, number, boolean] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        observationIndex: number;
        observationCardinality: number;
        observationCardinalityNext: number;
        feeProtocol: number;
        unlocked: boolean;
      }
    >;

    snapshotCumulativesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number] & {
        tickCumulativeInside: BigNumber;
        secondsPerLiquidityInsideX128: BigNumber;
        secondsInside: number;
      }
    >;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tickSpacing(overrides?: CallOverrides): Promise<[number]>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
      }
    >;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;
  };

  burn(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collect(
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount0Requested: BigNumberish,
    amount1Requested: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collectProtocol(
    recipient: string,
    amount0Requested: BigNumberish,
    amount1Requested: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  fee(overrides?: CallOverrides): Promise<number>;

  feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;

  feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;

  flash(
    recipient: string,
    amount0: BigNumberish,
    amount1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseObservationCardinalityNext(
    observationCardinalityNext: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    sqrtPriceX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidity(overrides?: CallOverrides): Promise<BigNumber>;

  maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  observations(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, BigNumber, boolean] & {
      blockTimestamp: number;
      tickCumulative: BigNumber;
      secondsPerLiquidityCumulativeX128: BigNumber;
      initialized: boolean;
    }
  >;

  observe(
    secondsAgos: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber[]] & {
      tickCumulatives: BigNumber[];
      secondsPerLiquidityCumulativeX128s: BigNumber[];
    }
  >;

  positions(
    key: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      _liquidity: BigNumber;
      feeGrowthInside0LastX128: BigNumber;
      feeGrowthInside1LastX128: BigNumber;
      tokensOwed0: BigNumber;
      tokensOwed1: BigNumber;
    }
  >;

  protocolFees(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { token0: BigNumber; token1: BigNumber }>;

  setFeeProtocol(
    feeProtocol0: BigNumberish,
    feeProtocol1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  slot0(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, number, number, number, boolean] & {
      sqrtPriceX96: BigNumber;
      tick: number;
      observationIndex: number;
      observationCardinality: number;
      observationCardinalityNext: number;
      feeProtocol: number;
      unlocked: boolean;
    }
  >;

  snapshotCumulativesInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number] & {
      tickCumulativeInside: BigNumber;
      secondsPerLiquidityInsideX128: BigNumber;
      secondsInside: number;
    }
  >;

  swap(
    recipient: string,
    zeroForOne: boolean,
    amountSpecified: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tickBitmap(
    wordPosition: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tickSpacing(overrides?: CallOverrides): Promise<number>;

  ticks(
    tick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      boolean
    ] & {
      liquidityGross: BigNumber;
      liquidityNet: BigNumber;
      feeGrowthOutside0X128: BigNumber;
      feeGrowthOutside1X128: BigNumber;
      tickCumulativeOutside: BigNumber;
      secondsPerLiquidityOutsideX128: BigNumber;
      secondsOutside: number;
      initialized: boolean;
    }
  >;

  token0(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    collect(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    factory(overrides?: CallOverrides): Promise<string>;

    fee(overrides?: CallOverrides): Promise<number>;

    feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;

    flash(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseObservationCardinalityNext(
      observationCardinalityNext: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, boolean] & {
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulativeX128: BigNumber;
        initialized: boolean;
      }
    >;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        tickCumulatives: BigNumber[];
        secondsPerLiquidityCumulativeX128s: BigNumber[];
      }
    >;

    positions(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _liquidity: BigNumber;
        feeGrowthInside0LastX128: BigNumber;
        feeGrowthInside1LastX128: BigNumber;
        tokensOwed0: BigNumber;
        tokensOwed1: BigNumber;
      }
    >;

    protocolFees(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { token0: BigNumber; token1: BigNumber }
    >;

    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    slot0(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, number, number, boolean] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        observationIndex: number;
        observationCardinality: number;
        observationCardinalityNext: number;
        feeProtocol: number;
        unlocked: boolean;
      }
    >;

    snapshotCumulativesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number] & {
        tickCumulativeInside: BigNumber;
        secondsPerLiquidityInsideX128: BigNumber;
        secondsInside: number;
      }
    >;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<number>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
      }
    >;

    token0(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Burn(address,int24,int24,uint128,uint256,uint256)"(
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null,
      amount0?: null,
      amount1?: null
    ): BurnEventFilter;
    Burn(
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null,
      amount0?: null,
      amount1?: null
    ): BurnEventFilter;

    "Collect(address,address,int24,int24,uint128,uint128)"(
      owner?: string | null,
      recipient?: null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount0?: null,
      amount1?: null
    ): CollectEventFilter;
    Collect(
      owner?: string | null,
      recipient?: null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount0?: null,
      amount1?: null
    ): CollectEventFilter;

    "CollectProtocol(address,address,uint128,uint128)"(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null
    ): CollectProtocolEventFilter;
    CollectProtocol(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null
    ): CollectProtocolEventFilter;

    "Flash(address,address,uint256,uint256,uint256,uint256)"(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null,
      paid0?: null,
      paid1?: null
    ): FlashEventFilter;
    Flash(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null,
      paid0?: null,
      paid1?: null
    ): FlashEventFilter;

    "IncreaseObservationCardinalityNext(uint16,uint16)"(
      observationCardinalityNextOld?: null,
      observationCardinalityNextNew?: null
    ): IncreaseObservationCardinalityNextEventFilter;
    IncreaseObservationCardinalityNext(
      observationCardinalityNextOld?: null,
      observationCardinalityNextNew?: null
    ): IncreaseObservationCardinalityNextEventFilter;

    "Initialize(uint160,int24)"(
      sqrtPriceX96?: null,
      tick?: null
    ): InitializeEventFilter;
    Initialize(sqrtPriceX96?: null, tick?: null): InitializeEventFilter;

    "Mint(address,address,int24,int24,uint128,uint256,uint256)"(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null,
      amount0?: null,
      amount1?: null
    ): MintEventFilter;
    Mint(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null,
      amount0?: null,
      amount1?: null
    ): MintEventFilter;

    "SetFeeProtocol(uint8,uint8,uint8,uint8)"(
      feeProtocol0Old?: null,
      feeProtocol1Old?: null,
      feeProtocol0New?: null,
      feeProtocol1New?: null
    ): SetFeeProtocolEventFilter;
    SetFeeProtocol(
      feeProtocol0Old?: null,
      feeProtocol1Old?: null,
      feeProtocol0New?: null,
      feeProtocol1New?: null
    ): SetFeeProtocolEventFilter;

    "Swap(address,address,int256,int256,uint160,uint128,int24)"(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null,
      sqrtPriceX96?: null,
      liquidity?: null,
      tick?: null
    ): SwapEventFilter;
    Swap(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null,
      sqrtPriceX96?: null,
      liquidity?: null,
      tick?: null
    ): SwapEventFilter;
  };

  estimateGas: {
    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collect(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;

    flash(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseObservationCardinalityNext(
      observationCardinalityNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    positions(key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    protocolFees(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    slot0(overrides?: CallOverrides): Promise<BigNumber>;

    snapshotCumulativesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<BigNumber>;

    ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collect(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGrowthGlobal0X128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeGrowthGlobal1X128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    flash(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseObservationCardinalityNext(
      observationCardinalityNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxLiquidityPerTick(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    positions(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocolFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    slot0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    snapshotCumulativesInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tickSpacing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
