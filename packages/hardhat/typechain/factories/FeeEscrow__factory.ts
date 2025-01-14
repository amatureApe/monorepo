/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FeeEscrow, FeeEscrowInterface } from "../FeeEscrow";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "burnerAddress",
        type: "address",
      },
    ],
    name: "BurnerAddressAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "burnerAddress",
        type: "address",
      },
    ],
    name: "BurnerAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
    ],
    name: "BurnerAddressRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnAmount",
        type: "uint256",
      },
    ],
    name: "FeesBurned",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_burnerAddress",
        type: "address",
      },
    ],
    name: "addBurnerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_burnerAddress",
        type: "address",
      },
    ],
    name: "changeBurnerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "feeTokenToBurnerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToken",
        type: "address",
      },
    ],
    name: "getBurnerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToken",
        type: "address",
      },
    ],
    name: "removeBurnerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_burnAmount",
        type: "uint256",
      },
    ],
    name: "transferFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610672806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630ede76c514610067578063285fc8aa146100ac57806334da1617146100bf5780636cae4d20146100d4578063d2d292b0146100e7578063e49a12dc146100fa575b600080fd5b6100906100753660046104fa565b6000602081905290815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100906100ba3660046104fa565b61010d565b6100d26100cd36600461051c565b61019a565b005b6100d26100e236600461051c565b61023d565b6100d26100f53660046104fa565b610317565b6100d261010836600461054f565b61038c565b6001600160a01b0381811660009081526020819052604081205490911661017b5760405162461bcd60e51b815260206004820152601d60248201527f6275726e65722061646472657373206e6f74207265676973746572656400000060448201526064015b60405180910390fd5b506001600160a01b039081166000908152602081905260409020541690565b6001600160a01b0382166101c05760405162461bcd60e51b815260040161017290610579565b6001600160a01b0381166101e65760405162461bcd60e51b8152600401610172906105ac565b6001600160a01b0382811660008181526020819052604080822080546001600160a01b0319169486169485179055517fd999fcc4b553fb146888ec6cb5904214c4ebbc62add3b9808b0bd21191e5d1849190a35050565b6001600160a01b0382166102635760405162461bcd60e51b815260040161017290610579565b6001600160a01b0381166102895760405162461bcd60e51b8152600401610172906105ac565b6001600160a01b03828116600090815260208190526040902054166102c05760405162461bcd60e51b8152600401610172906105e3565b6001600160a01b0382811660008181526020819052604080822080546001600160a01b0319169486169485179055517fe47178a077f1415c13c80ca77eba0ad659995aed80d467d34304fbacaff631e59190a35050565b6001600160a01b03811661033d5760405162461bcd60e51b815260040161017290610579565b6001600160a01b03811660008181526020819052604080822080546001600160a01b0319169055517f3e2393d9184b52bb5c6f83328cbc01730873980054f1c0273d382d4dea9e75d29190a250565b6001600160a01b03828116600090815260208190526040902054166103c35760405162461bcd60e51b8152600401610172906105e3565b6000811161040d5760405162461bcd60e51b815260206004820152601760248201527606275726e20616d6f756e74206d757374206265203e203604c1b6044820152606401610172565b6001600160a01b03828116600081815260208190526040908190205490516323b872dd60e01b81523360048201529216602483015260448201839052906323b872dd906064016020604051808303816000875af1158015610472573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610496919061061a565b50816001600160a01b03167f0d9575a73e2a7da16cfde907df749d23d901528ff2e7c832b731babdecca000b826040516104d291815260200190565b60405180910390a25050565b80356001600160a01b03811681146104f557600080fd5b919050565b60006020828403121561050c57600080fd5b610515826104de565b9392505050565b6000806040838503121561052f57600080fd5b610538836104de565b9150610546602084016104de565b90509250929050565b6000806040838503121561056257600080fd5b61056b836104de565b946020939093013593505050565b6020808252601990820152783732b2b2103a379039b832b1b4b33c903332b2903a37b5b2b760391b604082015260600190565b6020808252601e908201527f6e65656420746f2073706563696679206275726e657220616464726573730000604082015260600190565b6020808252601c908201527f6e6f206275726e65722061646472657373207265676973746572656400000000604082015260600190565b60006020828403121561062c57600080fd5b8151801515811461051557600080fdfea2646970667358221220fa7838c418871c99a3c85cc2fb03c7c673f099675cc58b38e1634d10073ebb9664736f6c63430008110033";

export class FeeEscrow__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FeeEscrow> {
    return super.deploy(overrides || {}) as Promise<FeeEscrow>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FeeEscrow {
    return super.attach(address) as FeeEscrow;
  }
  connect(signer: Signer): FeeEscrow__factory {
    return super.connect(signer) as FeeEscrow__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeEscrowInterface {
    return new utils.Interface(_abi) as FeeEscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeEscrow {
    return new Contract(address, _abi, signerOrProvider) as FeeEscrow;
  }
}
