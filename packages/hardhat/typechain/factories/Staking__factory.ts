/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "contract IRewardsEscrow",
        name: "_rewardsEscrow",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "nonTransferable",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_previousDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newDuration",
        type: "uint256",
      },
    ],
    name: "EscrowDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "RewardDistributorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "RewardsDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "RewardsEscrowUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_distributor",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "approveRewardDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "escrowDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardForDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "pauseContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [],
    name: "periodFinish",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
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
    name: "rewardDistributors",
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
    inputs: [],
    name: "rewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsEscrow",
    outputs: [
      {
        internalType: "contract IRewardsEscrow",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "setEscrowDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardsDuration",
        type: "uint256",
      },
    ],
    name: "setRewardsDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardsEscrow",
        type: "address",
      },
    ],
    name: "setRewardsEscrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "stakeFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpauseContract",
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
    name: "userRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "withdrawFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600b556000600c5562093a80600d553480156200002257600080fd5b506040516200285d3803806200285d8339810160408190526200004591620005f0565b816001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa15801562000084573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000ae919081019062000680565b604051602001620000c091906200072d565b604051602081830303815290604052826001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156200010e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000138919081019062000680565b6040516020016200014a919062000773565b60408051808303601f19018152919052620001653362000216565b600180556002805460ff19169055600662000181838262000832565b50600762000190828262000832565b5050600880546001600160a01b038087166001600160a01b0319928316811790935560098054878316908416179055600a805491861691909216179055336000908152601360209081526040909120805460ff191660011790556301e133806010556200020d925083906000199062000fce62000266821b17901c565b505050620009be565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015620002b8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002de9190620008fe565b620002ea919062000918565b604080516001600160a01b038616602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b1790915291925062000346918691906200034c16565b50505050565b6000620003a8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166200043360201b620010ab179092919060201c565b8051909150156200042e5780806020019051810190620003c9919062000940565b6200042e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b505050565b60606200044484846000856200044c565b949350505050565b606082471015620004af5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840162000425565b600080866001600160a01b03168587604051620004cd91906200096b565b60006040518083038185875af1925050503d80600081146200050c576040519150601f19603f3d011682016040523d82523d6000602084013e62000511565b606091505b509092509050620005258783838762000530565b979650505050505050565b60608315620005a45782516000036200059c576001600160a01b0385163b6200059c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640162000425565b508162000444565b620004448383815115620005bb5781518083602001fd5b8060405162461bcd60e51b815260040162000425919062000989565b6001600160a01b0381168114620005ed57600080fd5b50565b6000806000606084860312156200060657600080fd5b83516200061381620005d7565b60208501519093506200062681620005d7565b60408501519092506200063981620005d7565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620006775781810151838201526020016200065d565b50506000910152565b6000602082840312156200069357600080fd5b81516001600160401b0380821115620006ab57600080fd5b818401915084601f830112620006c057600080fd5b815181811115620006d557620006d562000644565b604051601f8201601f19908116603f0116810190838211818310171562000700576200070062000644565b816040528281528760208487010111156200071a57600080fd5b620005258360208301602088016200065a565b6902837b831b7b9371016960b51b8152600082516200075481600a8501602087016200065a565b67205374616b696e6760c01b600a939091019283015250601201919050565b66706f702d73742d60c81b815260008251620007978160078501602087016200065a565b9190910160070192915050565b600181811c90821680620007b957607f821691505b602082108103620007da57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200042e57600081815260208120601f850160051c81016020861015620008095750805b601f850160051c820191505b818110156200082a5782815560010162000815565b505050505050565b81516001600160401b038111156200084e576200084e62000644565b62000866816200085f8454620007a4565b84620007e0565b602080601f8311600181146200089e5760008415620008855750858301515b600019600386901b1c1916600185901b1785556200082a565b600085815260208120601f198616915b82811015620008cf57888601518255948401946001909101908401620008ae565b5085821015620008ee5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200091157600080fd5b5051919050565b808201808211156200093a57634e487b7160e01b600052601160045260246000fd5b92915050565b6000602082840312156200095357600080fd5b815180151581146200096457600080fd5b9392505050565b600082516200097f8184602087016200065a565b9190910192915050565b6020815260008251806020840152620009aa8160408501602087016200065a565b601f01601f19169190910160400192915050565b611e8f80620009ce6000396000f3fe608060405234801561001057600080fd5b506004361061027e5760003560e01c806372f702f31161015c578063b33712c5116100ce578063df136d6511610087578063df136d651461052a578063e465fe8014610533578063e9fad8ee14610546578063ebe2b12b1461054e578063f215793214610557578063f2fde38b1461056a57600080fd5b8063b33712c5146104d8578063c8f33c91146104e0578063cc1a378f146104e9578063cd3daf9d146104fc578063d1af0c7d14610504578063dd62ed3e1461051757600080fd5b80638da5cb5b116101205780638da5cb5b1461046357806395d89b4114610474578063a457c2d71461047c578063a694fc3a1461048f578063a9059cbb146104a2578063a9c12f0c146104b557600080fd5b806372f702f3146103ff5780637b0a47ee1461041f57806380faa57d146104285780638980f11f146104305780638b8763471461044357600080fd5b806339509351116101f557806351746bb2116101b957806351746bb2146103ad57806356c90955146103c057806357c2c2ba146103d35780635c975abb146103dc57806370a08231146103e4578063715018a6146103f757600080fd5b806339509351146103645780633c6b16ab146103775780633d18b9121461038a578063439766ce146103925780634fb15b3f1461039a57600080fd5b80631c1f78eb116102475780631c1f78eb1461030957806323b872dd146103115780632e1a7d4d14610324578063313ce56714610339578063321bc34714610348578063386a95251461035b57600080fd5b80628cc2621461028357806306fdde03146102a95780630700037d146102be578063095ea7b3146102de57806318160ddd14610301575b600080fd5b610296610291366004611b5c565b61057d565b6040519081526020015b60405180910390f35b6102b16105ea565b6040516102a09190611ba2565b6102966102cc366004611b5c565b60126020526000908152604090205481565b6102f16102ec366004611bd5565b61067c565b60405190151581526020016102a0565b600554610296565b610296610694565b6102f161031f366004611bff565b6106ab565b610337610332366004611c3b565b6106cf565b005b604051601281526020016102a0565b610337610356366004611c3b565b6106dd565b610296600d5481565b6102f1610372366004611bd5565b610726565b610337610385366004611c3b565b610748565b61033761093b565b610337610a5d565b6103376103a8366004611c54565b610a6d565b6103376103bb366004611c90565b610a97565b6103376103ce366004611cca565b610aa5565b61029660105481565b6102f1610b1d565b6102966103f2366004611b5c565b610b2b565b610337610b49565b600954610412906001600160a01b031681565b6040516102a09190611d01565b610296600c5481565b610296610b5b565b61033761043e366004611bd5565b610b72565b610296610451366004611b5c565b60116020526000908152604090205481565b6000546001600160a01b0316610412565b6102b1610cad565b6102f161048a366004611bd5565b610cbc565b61033761049d366004611c3b565b610d37565b6102f16104b0366004611bd5565b610d41565b6102f16104c3366004611b5c565b60136020526000908152604090205460ff1681565b610337610d4f565b610296600e5481565b6103376104f7366004611c3b565b610d5f565b610296610e3a565b600854610412906001600160a01b031681565b610296610525366004611d15565b610ea1565b610296600f5481565b610337610541366004611b5c565b610ecc565b610337610f3d565b610296600b5481565b600a54610412906001600160a01b031681565b610337610578366004611b5c565b610f58565b6001600160a01b0381166000908152601260209081526040808320546011909252822054670de0b6b3a7640000906105b3610e3a565b6105bd9190611d55565b6105c685610b2b565b6105d09190611d68565b6105da9190611d7f565b6105e49190611da1565b92915050565b6060600680546105f990611db4565b80601f016020809104026020016040519081016040528092919081815260200182805461062590611db4565b80156106725780601f1061064757610100808354040283529160200191610672565b820191906000526020600020905b81548152906001019060200180831161065557829003601f168201915b5050505050905090565b60003361068a8185856110c2565b5060019392505050565b6000600d54600c546106a69190611d68565b905090565b6000336106b98582856111e6565b6106c485858561125a565b506001949350505050565b6106da813333611272565b50565b6106e5611360565b60105460408051918252602082018390527f21c46a061cb9c101660f51f5c9fc9768c5f6e8cf5dea8ca5cd03cb6db13956f3910160405180910390a1601055565b60003361068a8185856107398383610ea1565b6107439190611da1565b6110c2565b6000610753816113ba565b3360009081526013602052604090205460ff166107a85760405162461bcd60e51b815260206004820152600e60248201526d1b9bdd08185d5d1a1bdc9a5e995960921b60448201526064015b60405180910390fd5b600b5442106107c657600d546107be9083611d7f565b600c55610808565b600042600b546107d69190611d55565b90506000600c54826107e89190611d68565b600d549091506107f88286611da1565b6108029190611d7f565b600c5550505b600854610820906001600160a01b0316333085611416565b6008546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610851903090600401611d01565b602060405180830381865afa15801561086e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108929190611dee565b9050600d54816108a29190611d7f565b600c5411156108ee5760405162461bcd60e51b81526020600482015260186024820152770a0e4deecd2c8cac840e4caeec2e4c840e8dede40d0d2ced60431b604482015260640161079f565b42600e819055600d5461090091611da1565b600b556040518381527fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d9060200160405180910390a1505050565b61094361144e565b3361094d816113ba565b336000908152601260205260409020548015610a5057336000908152601260205260408120819055610980600a83611d7f565b9050600061098f600983611d68565b6008549091506109a9906001600160a01b031633846114a7565b600a5460105460405163e2ab691d60e01b81523360048201526024810184905260448101919091526001600160a01b039091169063e2ab691d90606401600060405180830381600087803b158015610a0057600080fd5b505af1158015610a14573d6000803e3d6000fd5b50506040518581523392507fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486915060200160405180910390a250505b5050610a5b60018055565b565b610a65611360565b610a5b6114c6565b610a87823385610a7d8633610ea1565b6107439190611d55565b610a92838383611272565b505050565b610aa1828261151a565b5050565b610aad611360565b816001600160a01b03167fa852210219105cdf51ee9a33c11dd3d37ec6ea85e55ecff0b25dec123a05667a82604051610aea911515815260200190565b60405180910390a26001600160a01b03919091166000908152601360205260409020805460ff1916911515919091179055565b60006106a660025460ff1690565b6001600160a01b0381166000908152600360205260408120546105e4565b610b51611360565b610a5b60006115e4565b6000600b544210610b6d5750600b5490565b504290565b610b7a611360565b6009546001600160a01b0390811690831603610be25760405162461bcd60e51b815260206004820152602160248201527f43616e6e6f7420776974686472617720746865207374616b696e6720746f6b656044820152603760f91b606482015260840161079f565b6008546001600160a01b0390811690831603610c4a5760405162461bcd60e51b815260206004820152602160248201527f43616e6e6f7420776974686472617720746865207265776172647320746f6b656044820152603760f91b606482015260840161079f565b610c70610c5f6000546001600160a01b031690565b6001600160a01b03841690836114a7565b7f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa288282604051610ca1929190611e07565b60405180910390a15050565b6060600780546105f990611db4565b60003381610cca8286610ea1565b905083811015610d2a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161079f565b6106c482868684036110c2565b6106da813361151a565b60003361068a81858561125a565b610d57611360565b610a5b611634565b610d67611360565b600b544211610dff5760405162461bcd60e51b815260206004820152605860248201527f50726576696f7573207265776172647320706572696f64206d7573742062652060448201527f636f6d706c657465206265666f7265206368616e67696e672074686520647572606482015277185d1a5bdb88199bdc881d1a19481b995dc81c195c9a5bd960421b608482015260a40161079f565b600d8190556040518181527ffb46ca5a5e06d4540d6387b930a7c978bce0db5f449ec6b3f5d07c6e1d44f2d39060200160405180910390a150565b6000610e4560055490565b600003610e535750600f5490565b600554600c54600e54610e64610b5b565b610e6e9190611d55565b610e789190611d68565b610e8a90670de0b6b3a7640000611d68565b610e949190611d7f565b600f546106a69190611da1565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b610ed4611360565b600a54604080516001600160a01b03928316815291831660208301527fee4ec82b92f0e1fe230e6604a4752fa407a28069f106dc41e53edc28c4bc504e910160405180910390a1600a80546001600160a01b0319166001600160a01b0392909216919091179055565b610f50610f4933610b2b565b3333611272565b610a5b61093b565b610f60611360565b6001600160a01b038116610fc55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161079f565b6106da816115e4565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561101f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110439190611dee565b61104d9190611da1565b90506110a58463095ea7b360e01b858460405160240161106e929190611e07565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261166d565b50505050565b60606110ba848460008561173f565b949350505050565b6001600160a01b0383166111245760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161079f565b6001600160a01b0382166111855760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161079f565b6001600160a01b0383811660008181526004602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006111f28484610ea1565b905060001981146110a5578181101561124d5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161079f565b6110a584848484036110c2565b604051627d216160e91b815260040160405180910390fd5b61127a61144e565b61128261181a565b8161128c816113ba565b600084116112d05760405162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b604482015260640161079f565b816001600160a01b0316836001600160a01b0316146112f2576112f2826113ba565b6112fc8385611862565b600954611313906001600160a01b031683866114a7565b826001600160a01b03167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d58560405161134e91815260200190565b60405180910390a250610a9260018055565b6000546001600160a01b03163314610a5b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161079f565b6113c2610e3a565b600f556113cd610b5b565b600e556001600160a01b038116156106da576113e88161057d565b6001600160a01b038216600090815260126020908152604080832093909355600f5460119091529190205550565b6040516001600160a01b03808516602483015283166044820152606481018290526110a59085906323b872dd60e01b9060840161106e565b6002600154036114a05760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161079f565b6002600155565b610a928363a9059cbb60e01b848460405160240161106e929190611e07565b6114ce61181a565b6002805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586115033390565b6040516115109190611d01565b60405180910390a1565b61152261144e565b61152a61181a565b80611534816113ba565b600083116115755760405162461bcd60e51b815260206004820152600e60248201526d043616e6e6f74207374616b6520360941b604482015260640161079f565b61157f8284611996565b600954611597906001600160a01b0316333086611416565b816001600160a01b03167f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d846040516115d291815260200190565b60405180910390a250610aa160018055565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61163c611a57565b6002805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33611503565b60006116c2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166110ab9092919063ffffffff16565b805190915015610a9257808060200190518101906116e09190611e20565b610a925760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161079f565b6060824710156117a05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161079f565b600080866001600160a01b031685876040516117bc9190611e3d565b60006040518083038185875af1925050503d80600081146117f9576040519150601f19603f3d011682016040523d82523d6000602084013e6117fe565b606091505b509150915061180f87838387611aa2565b979650505050505050565b611822610b1d565b15610a5b5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161079f565b6001600160a01b0382166118c25760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161079f565b6001600160a01b038216600090815260036020526040902054818110156119365760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161079f565b6001600160a01b03831660008181526003602090815260408083208686039055600580548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b6001600160a01b0382166119ec5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161079f565b80600560008282546119fe9190611da1565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b611a5f610b1d565b610a5b5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161079f565b60608315611b11578251600003611b0a576001600160a01b0385163b611b0a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161079f565b50816110ba565b6110ba8383815115611b265781518083602001fd5b8060405162461bcd60e51b815260040161079f9190611ba2565b80356001600160a01b0381168114611b5757600080fd5b919050565b600060208284031215611b6e57600080fd5b611b7782611b40565b9392505050565b60005b83811015611b99578181015183820152602001611b81565b50506000910152565b6020815260008251806020840152611bc1816040850160208701611b7e565b601f01601f19169190910160400192915050565b60008060408385031215611be857600080fd5b611bf183611b40565b946020939093013593505050565b600080600060608486031215611c1457600080fd5b611c1d84611b40565b9250611c2b60208501611b40565b9150604084013590509250925092565b600060208284031215611c4d57600080fd5b5035919050565b600080600060608486031215611c6957600080fd5b83359250611c7960208501611b40565b9150611c8760408501611b40565b90509250925092565b60008060408385031215611ca357600080fd5b82359150611cb360208401611b40565b90509250929050565b80151581146106da57600080fd5b60008060408385031215611cdd57600080fd5b611ce683611b40565b91506020830135611cf681611cbc565b809150509250929050565b6001600160a01b0391909116815260200190565b60008060408385031215611d2857600080fd5b611d3183611b40565b9150611cb360208401611b40565b634e487b7160e01b600052601160045260246000fd5b818103818111156105e4576105e4611d3f565b80820281158282048414176105e4576105e4611d3f565b600082611d9c57634e487b7160e01b600052601260045260246000fd5b500490565b808201808211156105e4576105e4611d3f565b600181811c90821680611dc857607f821691505b602082108103611de857634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611e0057600080fd5b5051919050565b6001600160a01b03929092168252602082015260400190565b600060208284031215611e3257600080fd5b8151611b7781611cbc565b60008251611e4f818460208701611b7e565b919091019291505056fea264697066735822122095407362fa147db5a26219b657e054a096c5eefaaee027c3808c70dbbc1a4f1d64736f6c63430008110033";

export class Staking__factory extends ContractFactory {
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
    _rewardsToken: string,
    _stakingToken: string,
    _rewardsEscrow: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(
      _rewardsToken,
      _stakingToken,
      _rewardsEscrow,
      overrides || {}
    ) as Promise<Staking>;
  }
  getDeployTransaction(
    _rewardsToken: string,
    _stakingToken: string,
    _rewardsEscrow: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardsToken,
      _stakingToken,
      _rewardsEscrow,
      overrides || {}
    );
  }
  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}