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

interface AbstractBatchStorageInterface extends ethers.utils.Interface {
  functions: {
    "acceptClientAccess(address)": FunctionFragment;
    "accountBalances(bytes32,address)": FunctionFragment;
    "accountBatches(address,uint256)": FunctionFragment;
    "addClient(address)": FunctionFragment;
    "allowances(address,address,bytes32,address)": FunctionFragment;
    "approve(address,address,bytes32,uint256)": FunctionFragment;
    "batchIds(uint256)": FunctionFragment;
    "batches(bytes32)": FunctionFragment;
    "claim(bytes32,address,uint256,address)": FunctionFragment;
    "clients(address)": FunctionFragment;
    "createBatch(uint8,(address,address))": FunctionFragment;
    "delegates(address,address)": FunctionFragment;
    "deposit(bytes32,address,uint256)": FunctionFragment;
    "depositTargetTokensIntoBatch(bytes32,uint256)": FunctionFragment;
    "getAccountBalance(bytes32,address)": FunctionFragment;
    "getAccountBatches(address)": FunctionFragment;
    "getBatch(bytes32)": FunctionFragment;
    "getBatchType(bytes32)": FunctionFragment;
    "grantClientAccess(address)": FunctionFragment;
    "initialized()": FunctionFragment;
    "moveUnclaimedIntoCurrentBatch(bytes32,bytes32,address,uint256)": FunctionFragment;
    "pendingClientAccessGrants(address,address)": FunctionFragment;
    "previewClaim(bytes32,address,uint256)": FunctionFragment;
    "removeClient(address)": FunctionFragment;
    "revokeClientAccess(address)": FunctionFragment;
    "withdraw(bytes32,address,uint256,address)": FunctionFragment;
    "withdrawSourceTokenFromBatch(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptClientAccess",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "accountBalances",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "accountBatches",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "addClient", values: [string]): string;
  encodeFunctionData(
    functionFragment: "allowances",
    values: [string, string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "batches", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BytesLike, string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "clients", values: [string]): string;
  encodeFunctionData(
    functionFragment: "createBatch",
    values: [BigNumberish, { targetToken: string; sourceToken: string }]
  ): string;
  encodeFunctionData(
    functionFragment: "delegates",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositTargetTokensIntoBatch",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountBalance",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountBatches",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getBatch", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getBatchType",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantClientAccess",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "moveUnclaimedIntoCurrentBatch",
    values: [BytesLike, BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingClientAccessGrants",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "previewClaim",
    values: [BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeClient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeClientAccess",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BytesLike, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawSourceTokenFromBatch",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptClientAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accountBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accountBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addClient", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "batchIds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "batches", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "clients", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositTargetTokensIntoBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBatchType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantClientAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moveUnclaimedIntoCurrentBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingClientAccessGrants",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeClient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeClientAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawSourceTokenFromBatch",
    data: BytesLike
  ): Result;

  events: {};
}

export class AbstractBatchStorage extends BaseContract {
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

  interface: AbstractBatchStorageInterface;

  functions: {
    acceptClientAccess(
      grantingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    accountBalances(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    accountBatches(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    addClient(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowances(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      token: string,
      delegatee: string,
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    batches(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        number,
        string,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string
      ] & {
        id: string;
        batchType: number;
        batchId: string;
        claimable: boolean;
        unclaimedShares: BigNumber;
        sourceTokenBalance: BigNumber;
        targetTokenBalance: BigNumber;
        sourceToken: string;
        targetToken: string;
        owner: string;
      }
    >;

    claim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    clients(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    createBatch(
      _batchType: BigNumberish,
      _tokens: { targetToken: string; sourceToken: string },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegates(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    deposit(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositTargetTokensIntoBatch(
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccountBalance(
      batchId: BytesLike,
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAccountBatches(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getBatch(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          number,
          string,
          boolean,
          BigNumber,
          BigNumber,
          BigNumber,
          string,
          string,
          string
        ] & {
          id: string;
          batchType: number;
          batchId: string;
          claimable: boolean;
          unclaimedShares: BigNumber;
          sourceTokenBalance: BigNumber;
          targetTokenBalance: BigNumber;
          sourceToken: string;
          targetToken: string;
          owner: string;
        }
      ]
    >;

    getBatchType(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    grantClientAccess(
      newClient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    moveUnclaimedIntoCurrentBatch(
      _sourceBatch: BytesLike,
      _destinationBatch: BytesLike,
      owner: string,
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pendingClientAccessGrants(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    previewClaim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    removeClient(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeClientAccess(
      client: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawSourceTokenFromBatch(
      batchId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptClientAccess(
    grantingAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  accountBalances(
    arg0: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  accountBatches(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  addClient(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowances(
    arg0: string,
    arg1: string,
    arg2: BytesLike,
    arg3: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    token: string,
    delegatee: string,
    batchId: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  batches(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      number,
      string,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      string
    ] & {
      id: string;
      batchType: number;
      batchId: string;
      claimable: boolean;
      unclaimedShares: BigNumber;
      sourceTokenBalance: BigNumber;
      targetTokenBalance: BigNumber;
      sourceToken: string;
      targetToken: string;
      owner: string;
    }
  >;

  claim(
    batchId: BytesLike,
    owner: string,
    shares: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  clients(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  createBatch(
    _batchType: BigNumberish,
    _tokens: { targetToken: string; sourceToken: string },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegates(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  deposit(
    batchId: BytesLike,
    owner: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositTargetTokensIntoBatch(
    batchId: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccountBalance(
    batchId: BytesLike,
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAccountBatches(
    _account: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getBatch(
    batchId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      number,
      string,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      string
    ] & {
      id: string;
      batchType: number;
      batchId: string;
      claimable: boolean;
      unclaimedShares: BigNumber;
      sourceTokenBalance: BigNumber;
      targetTokenBalance: BigNumber;
      sourceToken: string;
      targetToken: string;
      owner: string;
    }
  >;

  getBatchType(batchId: BytesLike, overrides?: CallOverrides): Promise<number>;

  grantClientAccess(
    newClient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  moveUnclaimedIntoCurrentBatch(
    _sourceBatch: BytesLike,
    _destinationBatch: BytesLike,
    owner: string,
    shares: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pendingClientAccessGrants(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  previewClaim(
    batchId: BytesLike,
    owner: string,
    shares: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  removeClient(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeClientAccess(
    client: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    batchId: BytesLike,
    owner: string,
    amount: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawSourceTokenFromBatch(
    batchId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptClientAccess(
      grantingAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    accountBalances(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    accountBatches(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    addClient(_address: string, overrides?: CallOverrides): Promise<void>;

    allowances(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      token: string,
      delegatee: string,
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    batchIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    batches(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        number,
        string,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string
      ] & {
        id: string;
        batchType: number;
        batchId: string;
        claimable: boolean;
        unclaimedShares: BigNumber;
        sourceTokenBalance: BigNumber;
        targetTokenBalance: BigNumber;
        sourceToken: string;
        targetToken: string;
        owner: string;
      }
    >;

    claim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    clients(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    createBatch(
      _batchType: BigNumberish,
      _tokens: { targetToken: string; sourceToken: string },
      overrides?: CallOverrides
    ): Promise<string>;

    delegates(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deposit(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositTargetTokensIntoBatch(
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAccountBalance(
      batchId: BytesLike,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountBatches(
      _account: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getBatch(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        number,
        string,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string
      ] & {
        id: string;
        batchType: number;
        batchId: string;
        claimable: boolean;
        unclaimedShares: BigNumber;
        sourceTokenBalance: BigNumber;
        targetTokenBalance: BigNumber;
        sourceToken: string;
        targetToken: string;
        owner: string;
      }
    >;

    getBatchType(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    grantClientAccess(
      newClient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    moveUnclaimedIntoCurrentBatch(
      _sourceBatch: BytesLike,
      _destinationBatch: BytesLike,
      owner: string,
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingClientAccessGrants(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewClaim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    removeClient(_address: string, overrides?: CallOverrides): Promise<void>;

    revokeClientAccess(
      client: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawSourceTokenFromBatch(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    acceptClientAccess(
      grantingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    accountBalances(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    accountBatches(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addClient(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowances(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      token: string,
      delegatee: string,
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    batches(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    clients(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    createBatch(
      _batchType: BigNumberish,
      _tokens: { targetToken: string; sourceToken: string },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegates(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositTargetTokensIntoBatch(
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccountBalance(
      batchId: BytesLike,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountBatches(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBatch(batchId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getBatchType(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantClientAccess(
      newClient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    moveUnclaimedIntoCurrentBatch(
      _sourceBatch: BytesLike,
      _destinationBatch: BytesLike,
      owner: string,
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pendingClientAccessGrants(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewClaim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeClient(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeClientAccess(
      client: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawSourceTokenFromBatch(
      batchId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptClientAccess(
      grantingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    accountBalances(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    accountBatches(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addClient(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowances(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      token: string,
      delegatee: string,
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    batches(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    clients(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createBatch(
      _batchType: BigNumberish,
      _tokens: { targetToken: string; sourceToken: string },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegates(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositTargetTokensIntoBatch(
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccountBalance(
      batchId: BytesLike,
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountBatches(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBatch(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBatchType(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantClientAccess(
      newClient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    moveUnclaimedIntoCurrentBatch(
      _sourceBatch: BytesLike,
      _destinationBatch: BytesLike,
      owner: string,
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pendingClientAccessGrants(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    previewClaim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeClient(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeClientAccess(
      client: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawSourceTokenFromBatch(
      batchId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}