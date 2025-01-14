/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IKeeperIncentiveV2,
  IKeeperIncentiveV2Interface,
} from "../IKeeperIncentiveV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "incentiveAccountIds",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_openToEveryone",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cooldown",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_burnPercentage",
        type: "uint256",
      },
    ],
    name: "createIncentive",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_i",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "fundIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getAccounts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "accountId",
            type: "bytes32",
          },
        ],
        internalType: "struct IKeeperIncentiveV2.Account[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getControllerContracts",
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
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_i",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
    ],
    name: "handleKeeperIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_i",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
    ],
    name: "handleKeeperIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "keeper",
        type: "address",
      },
    ],
    name: "hasClaimableBalance",
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
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_i",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
    ],
    name: "incentiveAccountId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_i",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "tip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_i",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_burnPercentage",
        type: "uint256",
      },
    ],
    name: "tipWithBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_i",
        type: "uint8",
      },
    ],
    name: "toggleApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_i",
        type: "uint8",
      },
    ],
    name: "toggleIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_burnPercentage",
        type: "uint256",
      },
    ],
    name: "updateBurnPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_i",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_openToEveryone",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cooldown",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_burnPercentage",
        type: "uint256",
      },
    ],
    name: "updateIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "updateRequiredKeeperStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IKeeperIncentiveV2__factory {
  static readonly abi = _abi;
  static createInterface(): IKeeperIncentiveV2Interface {
    return new utils.Interface(_abi) as IKeeperIncentiveV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKeeperIncentiveV2 {
    return new Contract(address, _abi, signerOrProvider) as IKeeperIncentiveV2;
  }
}
