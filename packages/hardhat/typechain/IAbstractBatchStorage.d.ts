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

interface IAbstractBatchStorageInterface extends ethers.utils.Interface {
  functions: {
    "acceptClientAccess(address)": FunctionFragment;
    "addClient(address)": FunctionFragment;
    "approve(address,address,bytes32,uint256)": FunctionFragment;
    "claim(bytes32,address,uint256,address)": FunctionFragment;
    "createBatch(uint8,(address,address))": FunctionFragment;
    "deposit(bytes32,address,uint256)": FunctionFragment;
    "depositTargetTokensIntoBatch(bytes32,uint256)": FunctionFragment;
    "getBatchType(bytes32)": FunctionFragment;
    "grantClientAccess(address)": FunctionFragment;
    "moveUnclaimedIntoCurrentBatch(bytes32,bytes32,address,uint256)": FunctionFragment;
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
  encodeFunctionData(functionFragment: "addClient", values: [string]): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BytesLike, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createBatch",
    values: [BigNumberish, { targetToken: string; sourceToken: string }]
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
    functionFragment: "getBatchType",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantClientAccess",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "moveUnclaimedIntoCurrentBatch",
    values: [BytesLike, BytesLike, string, BigNumberish]
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
  decodeFunctionResult(functionFragment: "addClient", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositTargetTokensIntoBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBatchType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantClientAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moveUnclaimedIntoCurrentBatch",
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

export class IAbstractBatchStorage extends BaseContract {
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

  interface: IAbstractBatchStorageInterface;

  functions: {
    acceptClientAccess(
      grantingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addClient(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approve(
      token: string,
      delegatee: string,
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createBatch(
      _batchType: BigNumberish,
      _tokens: { targetToken: string; sourceToken: string },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositTargetTokensIntoBatch(
      id: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBatchType(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    grantClientAccess(
      newClient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    moveUnclaimedIntoCurrentBatch(
      _sourceBatch: BytesLike,
      _destinationBatch: BytesLike,
      owner: string,
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

  addClient(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approve(
    token: string,
    delegatee: string,
    batchId: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    batchId: BytesLike,
    owner: string,
    shares: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createBatch(
    _batchType: BigNumberish,
    _tokens: { targetToken: string; sourceToken: string },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    batchId: BytesLike,
    owner: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositTargetTokensIntoBatch(
    id: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBatchType(batchId: BytesLike, overrides?: CallOverrides): Promise<number>;

  grantClientAccess(
    newClient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  moveUnclaimedIntoCurrentBatch(
    _sourceBatch: BytesLike,
    _destinationBatch: BytesLike,
    owner: string,
    shares: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

    addClient(_address: string, overrides?: CallOverrides): Promise<void>;

    approve(
      token: string,
      delegatee: string,
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    createBatch(
      _batchType: BigNumberish,
      _tokens: { targetToken: string; sourceToken: string },
      overrides?: CallOverrides
    ): Promise<string>;

    deposit(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositTargetTokensIntoBatch(
      id: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getBatchType(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    grantClientAccess(
      newClient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    moveUnclaimedIntoCurrentBatch(
      _sourceBatch: BytesLike,
      _destinationBatch: BytesLike,
      owner: string,
      shares: BigNumberish,
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

    addClient(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approve(
      token: string,
      delegatee: string,
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createBatch(
      _batchType: BigNumberish,
      _tokens: { targetToken: string; sourceToken: string },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositTargetTokensIntoBatch(
      id: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBatchType(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantClientAccess(
      newClient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    moveUnclaimedIntoCurrentBatch(
      _sourceBatch: BytesLike,
      _destinationBatch: BytesLike,
      owner: string,
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    addClient(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      token: string,
      delegatee: string,
      batchId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      batchId: BytesLike,
      owner: string,
      shares: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createBatch(
      _batchType: BigNumberish,
      _tokens: { targetToken: string; sourceToken: string },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      batchId: BytesLike,
      owner: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositTargetTokensIntoBatch(
      id: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBatchType(
      batchId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantClientAccess(
      newClient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    moveUnclaimedIntoCurrentBatch(
      _sourceBatch: BytesLike,
      _destinationBatch: BytesLike,
      owner: string,
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
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