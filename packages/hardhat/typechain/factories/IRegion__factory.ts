/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRegion, IRegionInterface } from "../IRegion";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "region",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "beneficiaryVault",
        type: "address",
      },
    ],
    name: "addRegion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultRegion",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllRegions",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllVaults",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "region",
        type: "bytes32",
      },
    ],
    name: "regionExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "region",
        type: "bytes32",
      },
    ],
    name: "regionVaults",
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
];

export class IRegion__factory {
  static readonly abi = _abi;
  static createInterface(): IRegionInterface {
    return new utils.Interface(_abi) as IRegionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRegion {
    return new Contract(address, _abi, signerOrProvider) as IRegion;
  }
}
