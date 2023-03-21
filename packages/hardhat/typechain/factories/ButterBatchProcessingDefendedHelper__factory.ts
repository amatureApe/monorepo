/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ButterBatchProcessingDefendedHelper,
  ButterBatchProcessingDefendedHelperInterface,
} from "../ButterBatchProcessingDefendedHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IButterBatchProcessing",
        name: "_batchContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "batchContract",
    outputs: [
      {
        internalType: "contract IButterBatchProcessing",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositRedeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516101e83803806101e883398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610155806100936000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806322b6cb93146100465780635e66bdb31461005057806360b7521f1461007f575b600080fd5b61004e610087565b005b600054610063906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b61004e6100e8565b600080546040516327360d6960e01b815260048101929092526001600160a01b0316906327360d69906024015b600060405180830381600087803b1580156100ce57600080fd5b505af11580156100e2573d6000803e3d6000fd5b50505050565b60008054604051634b0dbec360e11b815260048101929092523360248301526001600160a01b03169063961b7d86906044016100b456fea26469706673582212200dad5fb811f2fef468c344d4bd11a7aef431df4849d9add5f5105e443e327b5664736f6c63430008110033";

export class ButterBatchProcessingDefendedHelper__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _batchContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ButterBatchProcessingDefendedHelper> {
    return super.deploy(
      _batchContract,
      overrides || {}
    ) as Promise<ButterBatchProcessingDefendedHelper>;
  }
  getDeployTransaction(
    _batchContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_batchContract, overrides || {});
  }
  attach(address: string): ButterBatchProcessingDefendedHelper {
    return super.attach(address) as ButterBatchProcessingDefendedHelper;
  }
  connect(signer: Signer): ButterBatchProcessingDefendedHelper__factory {
    return super.connect(
      signer
    ) as ButterBatchProcessingDefendedHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ButterBatchProcessingDefendedHelperInterface {
    return new utils.Interface(
      _abi
    ) as ButterBatchProcessingDefendedHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ButterBatchProcessingDefendedHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ButterBatchProcessingDefendedHelper;
  }
}