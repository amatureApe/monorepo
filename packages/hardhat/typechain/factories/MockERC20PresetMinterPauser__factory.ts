/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockERC20PresetMinterPauser,
  MockERC20PresetMinterPauserInterface,
} from "../MockERC20PresetMinterPauser";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "MINTER_ROLE",
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
    name: "PAUSER_ROLE",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "pause",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001c4a38038062001c4a8339810160408190526200003491620002fb565b818181816005620000468382620003f3565b506006620000558282620003f3565b50506007805460ff19169055506200006f600033620000d1565b6200009b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000d1565b620000c77f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000d1565b50505050620004bf565b620000dd8282620000e1565b5050565b620000f882826200012460201b620008281760201c565b60008281526001602090815260409091206200011f918390620008ac620001c4821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000dd576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001803390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001db836001600160a01b038416620001e4565b90505b92915050565b60008181526001830160205260408120546200022d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001de565b506000620001de565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200025e57600080fd5b81516001600160401b03808211156200027b576200027b62000236565b604051601f8301601f19908116603f01168101908282118183101715620002a657620002a662000236565b81604052838152602092508683858801011115620002c357600080fd5b600091505b83821015620002e75785820183015181830184015290820190620002c8565b600093810190920192909252949350505050565b600080604083850312156200030f57600080fd5b82516001600160401b03808211156200032757600080fd5b62000335868387016200024c565b935060208501519150808211156200034c57600080fd5b506200035b858286016200024c565b9150509250929050565b600181811c908216806200037a57607f821691505b6020821081036200039b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011f57600081815260208120601f850160051c81016020861015620003ca5750805b601f850160051c820191505b81811015620003eb57828155600101620003d6565b505050505050565b81516001600160401b038111156200040f576200040f62000236565b620004278162000420845462000365565b84620003a1565b602080601f8311600181146200045f5760008415620004465750858301515b600019600386901b1c1916600185901b178555620003eb565b600085815260208120601f198616915b8281101562000490578886015182559484019460019091019084016200046f565b5085821015620004af5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61177b80620004cf6000396000f3fe608060405234801561001057600080fd5b50600436106101845760003560e01c806370a08231116100d9578063a457c2d711610087578063a457c2d714610336578063a9059cbb14610349578063ca15c8731461035c578063d53913931461036f578063d547741f14610396578063dd62ed3e146103a9578063e63ab1e9146103bc57600080fd5b806370a08231146102a457806379cc6790146102cd5780638456cb59146102e05780639010d07c146102e857806391d148541461031357806395d89b4114610326578063a217fddf1461032e57600080fd5b8063313ce56711610136578063313ce5671461023657806336568abe1461024557806339509351146102585780633f4ba83a1461026b57806340c10f191461027357806342966c68146102865780635c975abb1461029957600080fd5b806301ffc9a71461018957806306fdde03146101b1578063095ea7b3146101c657806318160ddd146101d957806323b872dd146101eb578063248a9ca3146101fe5780632f2ff15d14610221575b600080fd5b61019c610197366004611401565b6103d1565b60405190151581526020015b60405180910390f35b6101b96103fc565b6040516101a8919061144f565b61019c6101d436600461149e565b61048e565b6004545b6040519081526020016101a8565b61019c6101f93660046114c8565b6104a6565b6101dd61020c366004611504565b60009081526020819052604090206001015490565b61023461022f36600461151d565b6104ca565b005b604051601281526020016101a8565b61023461025336600461151d565b6104f4565b61019c61026636600461149e565b610577565b610234610599565b61023461028136600461149e565b610629565b610234610294366004611504565b610633565b60075460ff1661019c565b6101dd6102b2366004611549565b6001600160a01b031660009081526002602052604090205490565b6102346102db36600461149e565b610640565b610234610655565b6102fb6102f6366004611564565b6106e1565b6040516001600160a01b0390911681526020016101a8565b61019c61032136600461151d565b610700565b6101b9610729565b6101dd600081565b61019c61034436600461149e565b610738565b61019c61035736600461149e565b6107b3565b6101dd61036a366004611504565b6107c1565b6101dd7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102346103a436600461151d565b6107d8565b6101dd6103b7366004611586565b6107fd565b6101dd60008051602061170683398151915281565b60006001600160e01b03198216635a05180f60e01b14806103f657506103f6826108c1565b92915050565b60606005805461040b906115b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610437906115b0565b80156104845780601f1061045957610100808354040283529160200191610484565b820191906000526020600020905b81548152906001019060200180831161046757829003601f168201915b5050505050905090565b60003361049c8185856108f6565b5060019392505050565b6000336104b4858285610a1a565b6104bf858585610a94565b506001949350505050565b6000828152602081905260409020600101546104e581610c38565b6104ef8383610c42565b505050565b6001600160a01b03811633146105695760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6105738282610c64565b5050565b60003361049c81858561058a83836107fd565b6105949190611600565b6108f6565b6105b160008051602061170683398151915233610700565b61061f5760405162461bcd60e51b815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527876652070617573657220726f6c6520746f20756e706175736560381b6064820152608401610560565b610627610c86565b565b6105738282610cd8565b61063d3382610d93565b50565b61064b823383610a1a565b6105738282610d93565b61066d60008051602061170683398151915233610700565b6106d95760405162461bcd60e51b815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527676652070617573657220726f6c6520746f20706175736560481b6064820152608401610560565b610627610ec1565b60008281526001602052604081206106f99083610efe565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60606006805461040b906115b0565b6000338161074682866107fd565b9050838110156107a65760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610560565b6104bf82868684036108f6565b60003361049c818585610a94565b60008181526001602052604081206103f690610f0a565b6000828152602081905260409020600101546107f381610c38565b6104ef8383610c64565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b6108328282610700565b610573576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556108683390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006106f9836001600160a01b038416610f14565b60006001600160e01b03198216637965db0b60e01b14806103f657506301ffc9a760e01b6001600160e01b03198316146103f6565b6001600160a01b0383166109585760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610560565b6001600160a01b0382166109b95760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610560565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610a2684846107fd565b90506000198114610a8e5781811015610a815760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610560565b610a8e84848484036108f6565b50505050565b6001600160a01b038316610af85760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610560565b6001600160a01b038216610b5a5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610560565b610b65838383610f63565b6001600160a01b03831660009081526002602052604090205481811015610bdd5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610560565b6001600160a01b03808516600081815260026020526040808220868603905592861680825290839020805486019055915160008051602061172683398151915290610c2b9086815260200190565b60405180910390a3610a8e565b61063d8133610f6e565b610c4c8282610828565b60008281526001602052604090206104ef90826108ac565b610c6e8282610fc7565b60008281526001602052604090206104ef908261102c565b610c8e611041565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610d2e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610560565b610d3a60008383610f63565b8060046000828254610d4c9190611600565b90915550506001600160a01b038216600081815260026020908152604080832080548601905551848152600080516020611726833981519152910160405180910390a35050565b6001600160a01b038216610df35760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610560565b610dff82600083610f63565b6001600160a01b03821660009081526002602052604090205481811015610e735760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610560565b6001600160a01b0383166000818152600260209081526040808320868603905560048054879003905551858152919291600080516020611726833981519152910160405180910390a3505050565b610ec961108a565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610cbb3390565b60006106f983836110d0565b60006103f6825490565b6000818152600183016020526040812054610f5b575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103f6565b5060006103f6565b6104ef8383836110fa565b610f788282610700565b61057357610f8581611160565b610f90836020611172565b604051602001610fa1929190611613565b60408051601f198184030181529082905262461bcd60e51b82526105609160040161144f565b610fd18282610700565b15610573576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006106f9836001600160a01b03841661130e565b60075460ff166106275760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610560565b60075460ff16156106275760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610560565b60008260000182815481106110e7576110e7611682565b9060005260206000200154905092915050565b60075460ff16156104ef5760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b6064820152608401610560565b60606103f66001600160a01b03831660145b60606000611181836002611698565b61118c906002611600565b67ffffffffffffffff8111156111a4576111a46116af565b6040519080825280601f01601f1916602001820160405280156111ce576020820181803683370190505b509050600360fc1b816000815181106111e9576111e9611682565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061121857611218611682565b60200101906001600160f81b031916908160001a905350600061123c846002611698565b611247906001611600565b90505b60018111156112bf576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061127b5761127b611682565b1a60f81b82828151811061129157611291611682565b60200101906001600160f81b031916908160001a90535060049490941c936112b8816116c5565b905061124a565b5083156106f95760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610560565b600081815260018301602052604081205480156113f75760006113326001836116dc565b8554909150600090611346906001906116dc565b90508181146113ab57600086600001828154811061136657611366611682565b906000526020600020015490508087600001848154811061138957611389611682565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806113bc576113bc6116ef565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506103f6565b60009150506103f6565b60006020828403121561141357600080fd5b81356001600160e01b0319811681146106f957600080fd5b60005b8381101561144657818101518382015260200161142e565b50506000910152565b602081526000825180602084015261146e81604085016020870161142b565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461149957600080fd5b919050565b600080604083850312156114b157600080fd5b6114ba83611482565b946020939093013593505050565b6000806000606084860312156114dd57600080fd5b6114e684611482565b92506114f460208501611482565b9150604084013590509250925092565b60006020828403121561151657600080fd5b5035919050565b6000806040838503121561153057600080fd5b8235915061154060208401611482565b90509250929050565b60006020828403121561155b57600080fd5b6106f982611482565b6000806040838503121561157757600080fd5b50508035926020909101359150565b6000806040838503121561159957600080fd5b6115a283611482565b915061154060208401611482565b600181811c908216806115c457607f821691505b6020821081036115e457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103f6576103f66115ea565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b81526000835161164581601785016020880161142b565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161167681602884016020880161142b565b01602801949350505050565b634e487b7160e01b600052603260045260246000fd5b80820281158282048414176103f6576103f66115ea565b634e487b7160e01b600052604160045260246000fd5b6000816116d4576116d46115ea565b506000190190565b818103818111156103f6576103f66115ea565b634e487b7160e01b600052603160045260246000fdfe65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862addf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122018d057ecc096d0b97c31f8678fd65a62123efe404bff095e09c87bff86bf804064736f6c63430008110033";

export class MockERC20PresetMinterPauser__factory extends ContractFactory {
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
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockERC20PresetMinterPauser> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<MockERC20PresetMinterPauser>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): MockERC20PresetMinterPauser {
    return super.attach(address) as MockERC20PresetMinterPauser;
  }
  connect(signer: Signer): MockERC20PresetMinterPauser__factory {
    return super.connect(signer) as MockERC20PresetMinterPauser__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20PresetMinterPauserInterface {
    return new utils.Interface(_abi) as MockERC20PresetMinterPauserInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC20PresetMinterPauser {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockERC20PresetMinterPauser;
  }
}