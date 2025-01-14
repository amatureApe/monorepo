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

interface IMerkleOrchardInterface extends ethers.utils.Interface {
  functions: {
    "claimDistributions(address,tuple[],address[])": FunctionFragment;
    "createDistribution(address,bytes32,uint256,uint256)": FunctionFragment;
    "verifyClaim(address,address,uint256,address,uint256,bytes32[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimDistributions",
    values: [
      string,
      {
        distributionId: BigNumberish;
        balance: BigNumberish;
        distributor: string;
        tokenIndex: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      string[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createDistribution",
    values: [string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyClaim",
    values: [string, string, BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimDistributions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyClaim",
    data: BytesLike
  ): Result;

  events: {};
}

export class IMerkleOrchard extends BaseContract {
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

  interface: IMerkleOrchardInterface;

  functions: {
    claimDistributions(
      claimer: string,
      claims: {
        distributionId: BigNumberish;
        balance: BigNumberish;
        distributor: string;
        tokenIndex: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createDistribution(
      token: string,
      merkleRoot: BytesLike,
      amount: BigNumberish,
      distributionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifyClaim(
      token: string,
      distributor: string,
      distributionId: BigNumberish,
      claimer: string,
      claimedBalance: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  claimDistributions(
    claimer: string,
    claims: {
      distributionId: BigNumberish;
      balance: BigNumberish;
      distributor: string;
      tokenIndex: BigNumberish;
      merkleProof: BytesLike[];
    }[],
    tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createDistribution(
    token: string,
    merkleRoot: BytesLike,
    amount: BigNumberish,
    distributionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifyClaim(
    token: string,
    distributor: string,
    distributionId: BigNumberish,
    claimer: string,
    claimedBalance: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    claimDistributions(
      claimer: string,
      claims: {
        distributionId: BigNumberish;
        balance: BigNumberish;
        distributor: string;
        tokenIndex: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    createDistribution(
      token: string,
      merkleRoot: BytesLike,
      amount: BigNumberish,
      distributionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyClaim(
      token: string,
      distributor: string,
      distributionId: BigNumberish,
      claimer: string,
      claimedBalance: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    claimDistributions(
      claimer: string,
      claims: {
        distributionId: BigNumberish;
        balance: BigNumberish;
        distributor: string;
        tokenIndex: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createDistribution(
      token: string,
      merkleRoot: BytesLike,
      amount: BigNumberish,
      distributionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifyClaim(
      token: string,
      distributor: string,
      distributionId: BigNumberish,
      claimer: string,
      claimedBalance: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimDistributions(
      claimer: string,
      claims: {
        distributionId: BigNumberish;
        balance: BigNumberish;
        distributor: string;
        tokenIndex: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createDistribution(
      token: string,
      merkleRoot: BytesLike,
      amount: BigNumberish,
      distributionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifyClaim(
      token: string,
      distributor: string,
      distributionId: BigNumberish,
      claimer: string,
      claimedBalance: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
