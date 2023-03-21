/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IRegionInterface extends ethers.utils.Interface {
  functions: {
    "addRegion(bytes32,address)": FunctionFragment;
    "defaultRegion()": FunctionFragment;
    "getAllRegions()": FunctionFragment;
    "getAllVaults()": FunctionFragment;
    "regionExists(bytes32)": FunctionFragment;
    "regionVaults(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addRegion",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultRegion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllRegions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllVaults",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "regionExists",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "regionVaults",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "addRegion", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "defaultRegion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllRegions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "regionExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "regionVaults",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRegion extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IRegionInterface;

  functions: {
    addRegion(
      region: BytesLike,
      beneficiaryVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    defaultRegion(overrides?: CallOverrides): Promise<[string]>;

    getAllRegions(overrides?: CallOverrides): Promise<[string[]]>;

    getAllVaults(overrides?: CallOverrides): Promise<[string[]]>;

    regionExists(
      region: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    regionVaults(
      region: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  addRegion(
    region: BytesLike,
    beneficiaryVault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  defaultRegion(overrides?: CallOverrides): Promise<string>;

  getAllRegions(overrides?: CallOverrides): Promise<string[]>;

  getAllVaults(overrides?: CallOverrides): Promise<string[]>;

  regionExists(region: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  regionVaults(region: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addRegion(
      region: BytesLike,
      beneficiaryVault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    defaultRegion(overrides?: CallOverrides): Promise<string>;

    getAllRegions(overrides?: CallOverrides): Promise<string[]>;

    getAllVaults(overrides?: CallOverrides): Promise<string[]>;

    regionExists(
      region: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    regionVaults(region: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addRegion(
      region: BytesLike,
      beneficiaryVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    defaultRegion(overrides?: CallOverrides): Promise<BigNumber>;

    getAllRegions(overrides?: CallOverrides): Promise<BigNumber>;

    getAllVaults(overrides?: CallOverrides): Promise<BigNumber>;

    regionExists(
      region: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    regionVaults(
      region: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRegion(
      region: BytesLike,
      beneficiaryVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    defaultRegion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllRegions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllVaults(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    regionExists(
      region: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    regionVaults(
      region: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}