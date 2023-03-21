/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  CurveAddressProvider,
  CurveAddressProviderInterface,
} from "../CurveAddressProvider";

const _abi = [
  {
    inputs: [],
    name: "get_registry",
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

export class CurveAddressProvider__factory {
  static readonly abi = _abi;
  static createInterface(): CurveAddressProviderInterface {
    return new utils.Interface(_abi) as CurveAddressProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveAddressProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CurveAddressProvider;
  }
}