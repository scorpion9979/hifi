/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IOwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnableUpgradeable__factory>;
    getContractFactory(
      name: "IBalanceSheetV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBalanceSheetV2__factory>;
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
      name: "HifiPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HifiPool__factory>;
    getContractFactory(
      name: "HifiPoolRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HifiPoolRegistry__factory>;
    getContractFactory(
      name: "IHifiPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHifiPool__factory>;
    getContractFactory(
      name: "IHifiPoolRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHifiPoolRegistry__factory>;
    getContractFactory(
      name: "YieldSpace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldSpace__factory>;
    getContractFactory(
      name: "GodModeErc20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeErc20__factory>;
    getContractFactory(
      name: "GodModeHifiPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeHifiPool__factory>;
    getContractFactory(
      name: "GodModeHifiPoolRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeHifiPoolRegistry__factory>;
    getContractFactory(
      name: "GodModeHToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GodModeHToken__factory>;
    getContractFactory(
      name: "YieldSpaceMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldSpaceMock__factory>;

    getContractAt(
      name: "IOwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnableUpgradeable>;
    getContractAt(
      name: "IBalanceSheetV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBalanceSheetV2>;
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
      name: "HifiPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HifiPool>;
    getContractAt(
      name: "HifiPoolRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HifiPoolRegistry>;
    getContractAt(
      name: "IHifiPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHifiPool>;
    getContractAt(
      name: "IHifiPoolRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHifiPoolRegistry>;
    getContractAt(
      name: "YieldSpace",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldSpace>;
    getContractAt(
      name: "GodModeErc20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeErc20>;
    getContractAt(
      name: "GodModeHifiPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeHifiPool>;
    getContractAt(
      name: "GodModeHifiPoolRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeHifiPoolRegistry>;
    getContractAt(
      name: "GodModeHToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GodModeHToken>;
    getContractAt(
      name: "YieldSpaceMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldSpaceMock>;

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
