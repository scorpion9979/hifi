/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import * as Contracts from ".";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";
import { ethers } from "ethers";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IOwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnableUpgradeable__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "BalanceSheetV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalanceSheetV2__factory>;
    getContractFactory(
      name: "IBalanceSheetV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBalanceSheetV2__factory>;
    getContractFactory(
      name: "SBalanceSheetV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SBalanceSheetV1__factory>;
    getContractFactory(
      name: "SBalanceSheetV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SBalanceSheetV2__factory>;
    getContractFactory(
      name: "Fintroller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Fintroller__factory>;
    getContractFactory(
      name: "IFintroller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFintroller__factory>;
    getContractFactory(
      name: "HToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HToken__factory>;
    getContractFactory(
      name: "IHToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHToken__factory>;
    getContractFactory(
      name: "IAggregatorV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAggregatorV3__factory>;
    getContractFactory(
      name: "ChainlinkOperator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkOperator__factory>;
    getContractFactory(
      name: "IChainlinkOperator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChainlinkOperator__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Erc20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Erc20__factory>;
    getContractFactory(
      name: "Erc20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Erc20Permit__factory>;
    getContractFactory(
      name: "Erc20Recover",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Erc20Recover__factory>;
    getContractFactory(
      name: "IErc20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IErc20__factory>;
    getContractFactory(
      name: "IErc20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IErc20Permit__factory>;
    getContractFactory(
      name: "IErc20Recover",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IErc20Recover__factory>;
    getContractFactory(
      name: "IUniswapV2Callee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Callee__factory>;
    getContractFactory(
      name: "IUniswapV2ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2ERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "UniswapV2ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2ERC20__factory>;
    getContractFactory(
      name: "IUniswapV3FlashCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3FlashCallback__factory>;
    getContractFactory(
      name: "IUniswapV3MintCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3MintCallback__factory>;
    getContractFactory(
      name: "IUniswapV3SwapCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;
    getContractFactory(
      name: "IERC20Minimal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Minimal__factory>;
    getContractFactory(
      name: "IUniswapV3Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Factory__factory>;
    getContractFactory(
      name: "IUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDeployer__factory>;
    getContractFactory(
      name: "IUniswapV3PoolActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: "IUniswapV3PoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: "IUniswapV3PoolImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: "IUniswapV3PoolOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: "GodModeErc20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeErc20__factory>;
    getContractFactory(
      name: "GodModeHToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeHToken__factory>;
    getContractFactory(
      name: "SimplePriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimplePriceFeed__factory>;
    getContractFactory(
      name: "FlashUniswapV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlashUniswapV2__factory>;
    getContractFactory(
      name: "IFlashUniswapV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFlashUniswapV2__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "GodModeUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeUniswapV2Factory__factory>;
    getContractFactory(
      name: "GodModeUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeUniswapV2Pair__factory>;
    getContractFactory(
      name: "MaliciousPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MaliciousPair__factory>;
    getContractFactory(
      name: "Erc20Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Erc20Interface__factory>;
    getContractFactory(
      name: "UniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Pair__factory>;
    getContractFactory(
      name: "FlashUniswapV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlashUniswapV3__factory>;
    getContractFactory(
      name: "IFlashUniswapV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFlashUniswapV3__factory>;
    getContractFactory(
      name: "GodModeUniswapV3Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeUniswapV3Factory__factory>;
    getContractFactory(
      name: "GodModeUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeUniswapV3Pool__factory>;
    getContractFactory(
      name: "MaliciousPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MaliciousPool__factory>;
    getContractFactory(
      name: "UniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3Pool__factory>;

    getContractAt(
      name: "IOwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnableUpgradeable>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "BalanceSheetV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BalanceSheetV2>;
    getContractAt(
      name: "IBalanceSheetV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBalanceSheetV2>;
    getContractAt(
      name: "SBalanceSheetV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SBalanceSheetV1>;
    getContractAt(
      name: "SBalanceSheetV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SBalanceSheetV2>;
    getContractAt(
      name: "Fintroller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Fintroller>;
    getContractAt(
      name: "IFintroller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFintroller>;
    getContractAt(
      name: "HToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HToken>;
    getContractAt(
      name: "IHToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHToken>;
    getContractAt(
      name: "IAggregatorV3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAggregatorV3>;
    getContractAt(
      name: "ChainlinkOperator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkOperator>;
    getContractAt(
      name: "IChainlinkOperator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IChainlinkOperator>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Erc20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Erc20>;
    getContractAt(
      name: "Erc20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Erc20Permit>;
    getContractAt(
      name: "Erc20Recover",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Erc20Recover>;
    getContractAt(
      name: "IErc20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IErc20>;
    getContractAt(
      name: "IErc20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IErc20Permit>;
    getContractAt(
      name: "IErc20Recover",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IErc20Recover>;
    getContractAt(
      name: "IUniswapV2Callee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Callee>;
    getContractAt(
      name: "IUniswapV2ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2ERC20>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "UniswapV2ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2ERC20>;
    getContractAt(
      name: "IUniswapV3FlashCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3FlashCallback>;
    getContractAt(
      name: "IUniswapV3MintCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3MintCallback>;
    getContractAt(
      name: "IUniswapV3SwapCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3SwapCallback>;
    getContractAt(
      name: "IERC20Minimal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Minimal>;
    getContractAt(
      name: "IUniswapV3Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Factory>;
    getContractAt(
      name: "IUniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Pool>;
    getContractAt(
      name: "IUniswapV3PoolDeployer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDeployer>;
    getContractAt(
      name: "IUniswapV3PoolActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolActions>;
    getContractAt(
      name: "IUniswapV3PoolDerivedState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDerivedState>;
    getContractAt(
      name: "IUniswapV3PoolEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolEvents>;
    getContractAt(
      name: "IUniswapV3PoolImmutables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolImmutables>;
    getContractAt(
      name: "IUniswapV3PoolOwnerActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolOwnerActions>;
    getContractAt(
      name: "IUniswapV3PoolState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolState>;
    getContractAt(
      name: "GodModeErc20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeErc20>;
    getContractAt(
      name: "GodModeHToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeHToken>;
    getContractAt(
      name: "SimplePriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimplePriceFeed>;
    getContractAt(
      name: "FlashUniswapV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlashUniswapV2>;
    getContractAt(
      name: "IFlashUniswapV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFlashUniswapV2>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "GodModeUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeUniswapV2Factory>;
    getContractAt(
      name: "GodModeUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeUniswapV2Pair>;
    getContractAt(
      name: "MaliciousPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MaliciousPair>;
    getContractAt(
      name: "Erc20Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Erc20Interface>;
    getContractAt(
      name: "UniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Pair>;
    getContractAt(
      name: "FlashUniswapV3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlashUniswapV3>;
    getContractAt(
      name: "IFlashUniswapV3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFlashUniswapV3>;
    getContractAt(
      name: "GodModeUniswapV3Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeUniswapV3Factory>;
    getContractAt(
      name: "GodModeUniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeUniswapV3Pool>;
    getContractAt(
      name: "MaliciousPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MaliciousPool>;
    getContractAt(
      name: "UniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV3Pool>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
