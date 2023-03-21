/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KeeperIncentiveV1,
  KeeperIncentiveV1Interface,
} from "../KeeperIncentiveV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IContractRegistry",
        name: "_contractRegistry",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_burnRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_requiredKeeperStake",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "contractName",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "openToEveryone",
        type: "bool",
      },
    ],
    name: "ApprovalToggled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "BurnRateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "contractName",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "ControllerContractAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "contractName",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldReward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newReward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "oldOpenToEveryone",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "newOpenToEveryone",
        type: "bool",
      },
    ],
    name: "IncentiveChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "contractName",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "openToEveryone",
        type: "bool",
      },
    ],
    name: "IncentiveCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "IncentiveFunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "contractName",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "IncentiveToggled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRequirement",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRequirement",
        type: "uint256",
      },
    ],
    name: "RequiredKeeperStakeChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_contractName",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "contract_",
        type: "address",
      },
    ],
    name: "addControllerContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "burnRate",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "controllerContracts",
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
        name: "_contractName",
        type: "bytes32",
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
    ],
    name: "createIncentive",
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
    name: "fundIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_contractName",
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
    inputs: [],
    name: "incentiveBudget",
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
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "incentives",
    outputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "openToEveryone",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "requiredKeeperStake",
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
        name: "_contractName",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "_contractName",
        type: "bytes32",
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
        name: "_burnRate",
        type: "uint256",
      },
    ],
    name: "updateBurnRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_contractName",
        type: "bytes32",
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

const _bytecode =
  "0x60a060405261dead60805234801561001657600080fd5b50604051611353380380611353833981016040819052610035916100ae565b826001600160a01b03811661007f5760405162461bcd60e51b815260206004820152600c60248201526b5a65726f206164647265737360a01b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055600491909155600555506100f1565b6000806000606084860312156100c357600080fd5b83516001600160a01b03811681146100da57600080fd5b602085015160409095015190969495509392505050565b60805161124761010c6000396000610b1301526112476000f3fe608060405234801561001057600080fd5b50600436106100ca5760003560e01c806344027e461161007c57806344027e461461018d57806355b8efcc146101a0578063a8d58496146101b3578063bcd0dbc9146101bc578063bed99850146101ec578063e96a262d146101f5578063f18086a51461020857600080fd5b806319e1f454146100cf5780631c5f82eb146101155780632b6f6f8d1461012a5780632b7887871461013d5780632e3ea85a146101505780633d9f49951461016357806341267de514610176575b600080fd5b6100f86100dd366004610ec2565b6003602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610128610123366004610ec2565b61021b565b005b610128610138366004610ef1565b610291565b61012861014b366004610ec2565b610342565b61012861015e366004610f32565b61039c565b610128610171366004610ef1565b61041b565b61017f60015481565b60405190815260200161010c565b61012861019b366004610ec2565b6104ca565b6101286101ae366004610f62565b610524565b61017f60055481565b6101cf6101ca366004610fa2565b6107cd565b60408051938452911515602084015215159082015260600161010c565b61017f60045481565b610128610203366004610fd2565b610815565b61012861021636600461101c565b6108e7565b6102493330836102386000805160206111f28339815191526109c1565b6001600160a01b03169291906109d2565b80600154610257919061108f565b6001556040518181527f9ad4c05cff4861564f4d1572799ac5d03d82f40ea702646c7b3bfd552f570cde906020015b60405180910390a150565b6000805160206111d28339815191526102a981610a3d565b6000838152600260205260408120805460ff85169081106102cc576102cc6110a2565b600091825260209091206001600290920201908101805460ff19811660ff918216159081179092556040519293507f12da359f5c0e3be0f99345920ec462d30c20b61db9290817368a28851439008b9261033492889216909182521515602082015260400190565b60405180910390a150505050565b6000805160206111d283398151915261035a81610a3d565b60045460408051918252602082018490527f229952885149023c7b324c7187b4b260b1a8e44dfee2bf619ef6f1296d52706d910160405180910390a150600455565b6000805160206111d28339815191526103b481610a3d565b60008381526003602090815260409182902080546001600160a01b0319166001600160a01b0386169081179091558251868152918201527ff6c4dabf3ee4c924bd9069622cd7d390b44d0f38fe8742cf5fdf8f5c5a6be5f8910160405180910390a1505050565b6000805160206111d283398151915261043381610a3d565b6000838152600260205260408120805460ff8516908110610456576104566110a2565b600091825260209182902060029091020160018101805461ff001981166101009182900460ff9081161583029190911792839055604080518a815292909304161515938101939093529092507f8e7eb7be6cb0d1a07f05197e6d857593753decc27b9d7294da4c6ee65c3191f69101610334565b6000805160206111d28339815191526104e281610a3d565b60055460408051918252602082018490527f7620b5c06aea6c6af1f14fed9558f4c9b0f13656c3041e8dc17a5f912af7652d910160405180910390a150600555565b6000838152600360205260409020546001600160a01b031633146105a65760405162461bcd60e51b815260206004820152602e60248201527f43616e206f6e6c792062652063616c6c65642062792074686520636f6e74726f60448201526d1b1b1a5b99c818dbdb9d1c9858dd60921b60648201526084015b60405180910390fd5b6005546105d27f38a6e0bdcff6b04d1bd98667daca6a67523771b5349ab8d745d59aab1469e15c6109c1565b6040516370a0823160e01b81526001600160a01b03848116600483015291909116906370a0823190602401602060405180830381865afa15801561061a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063e91906110b8565b10156106865760405162461bcd60e51b81526020600482015260176024820152766e6f7420656e6f75676820706f70206174207374616b6560481b604482015260640161059d565b6000838152600260205260408120805460ff85169081106106a9576106a96110a2565b6000918252602091829020604080516060810182526002909302909101805483526001015460ff80821615159484019490945261010090049092161515918101829052915061071c5761071c7f4f78afe9dfc9a0cb0441c27b9405070cd2a48b490636a7bdd09f355e33a5d7de83610a4a565b806020015180156107305750600154815111155b801561073c5750805115155b156107c757805160015461075091906110d1565b6001556004548151600091670de0b6b3a76400009161076f91906110e4565b61077991906110fb565b9050600081836000015161078d91906110d1565b90506107bb84826107ab6000805160206111f28339815191526109c1565b6001600160a01b03169190610ab0565b6107c482610ae5565b50505b50505050565b600260205281600052604060002081815481106107e957600080fd5b60009182526020909120600290910201805460019091015490925060ff80821692506101009091041683565b6000805160206111d283398151915261082d81610a3d565b60008581526002602081815260408084208151606080820184528a8252891515828601908152891515838601818152855460018082018855968b529988902094519990980290930197885551969092018054955115156101000261ff00199715159790971661ffff19909616959095179590951790935580518981529182018890528101929092527f880fd3397515485fabc2f3d44892d2dabbc45bc79a356562afe1b34f1301a870910160405180910390a15050505050565b6000805160206111d28339815191526108ff81610a3d565b6000868152600260205260408120805460ff8816908110610922576109226110a2565b6000918252602091829020600290910201805460018201805489845561ffff19811689151561ff0019161761010089151581810292909217909355604080518e815296870185905286018b905291900460ff1680151560608601526080850191909152919350917f248e6a6ffe6039c6908db49d17064442179a7e2854e33d9f55c7eaacdde06b239060a00160405180910390a1505050505050505050565b60006109cc82610bc2565b92915050565b6040516001600160a01b03808516602483015283166044820152606481018290526107c79085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610c30565b610a478133610a4a565b50565b610a52610d02565b60405163d09a20c560e01b8152600481018490526001600160a01b038381166024830152919091169063d09a20c59060440160006040518083038186803b158015610a9c57600080fd5b505afa1580156107c4573d6000803e3d6000fd5b6040516001600160a01b038316602482015260448101829052610ae090849063a9059cbb60e01b90606401610a06565b505050565b610afc6000805160206111f28339815191526109c1565b60405163a9059cbb60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015260248201849052919091169063a9059cbb906044016020604051808303816000875af1158015610b6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b91919061111d565b506040518181527fd83c63197e8e676d80ab0122beba9a9d20f3828839e9a1d6fe81d242e9cd7e6e90602001610286565b60008054604051631c2d8fb360e31b8152600481018490526001600160a01b039091169063e16c7d9890602401602060405180830381865afa158015610c0c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190611141565b6000610c85826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610d329092919063ffffffff16565b805190915015610ae05780806020019051810190610ca3919061111d565b610ae05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161059d565b6000610d2d7f15fa0125f52e5705da1148bfcf00974823c4381bee4314203ede255f9477b73e6109c1565b905090565b6060610d418484600085610d49565b949350505050565b606082471015610daa5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161059d565b600080866001600160a01b03168587604051610dc69190611182565b60006040518083038185875af1925050503d8060008114610e03576040519150601f19603f3d011682016040523d82523d6000602084013e610e08565b606091505b5091509150610e1987838387610e24565b979650505050505050565b60608315610e93578251600003610e8c576001600160a01b0385163b610e8c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161059d565b5081610d41565b610d418383815115610ea85781518083602001fd5b8060405162461bcd60e51b815260040161059d919061119e565b600060208284031215610ed457600080fd5b5035919050565b803560ff81168114610eec57600080fd5b919050565b60008060408385031215610f0457600080fd5b82359150610f1460208401610edb565b90509250929050565b6001600160a01b0381168114610a4757600080fd5b60008060408385031215610f4557600080fd5b823591506020830135610f5781610f1d565b809150509250929050565b600080600060608486031215610f7757600080fd5b83359250610f8760208501610edb565b91506040840135610f9781610f1d565b809150509250925092565b60008060408385031215610fb557600080fd5b50508035926020909101359150565b8015158114610a4757600080fd5b60008060008060808587031215610fe857600080fd5b8435935060208501359250604085013561100181610fc4565b9150606085013561101181610fc4565b939692955090935050565b600080600080600060a0868803121561103457600080fd5b8535945061104460208701610edb565b935060408601359250606086013561105b81610fc4565b9150608086013561106b81610fc4565b809150509295509295909350565b634e487b7160e01b600052601160045260246000fd5b808201808211156109cc576109cc611079565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156110ca57600080fd5b5051919050565b818103818111156109cc576109cc611079565b80820281158282048414176109cc576109cc611079565b60008261111857634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561112f57600080fd5b815161113a81610fc4565b9392505050565b60006020828403121561115357600080fd5b815161113a81610f1d565b60005b83811015611179578181015183820152602001611161565b50506000910152565b6000825161119481846020870161115e565b9190910192915050565b60208152600082518060208401526111bd81604085016020870161115e565b601f01601f1916919091016040019291505056fed0a4ad96d49edb1c33461cebc6fb2609190f32c904e3c3f5877edb4488dee91e69e547947a4514871bf84679401f91758bd0fe92e4c005143f6d0e5213dab0cba2646970667358221220a5e10c9beecaa5bc69619c2135d3f9a571b59e097364336553fb0613c4aa594564736f6c63430008110033";

export class KeeperIncentiveV1__factory extends ContractFactory {
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
    _contractRegistry: string,
    _burnRate: BigNumberish,
    _requiredKeeperStake: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KeeperIncentiveV1> {
    return super.deploy(
      _contractRegistry,
      _burnRate,
      _requiredKeeperStake,
      overrides || {}
    ) as Promise<KeeperIncentiveV1>;
  }
  getDeployTransaction(
    _contractRegistry: string,
    _burnRate: BigNumberish,
    _requiredKeeperStake: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _contractRegistry,
      _burnRate,
      _requiredKeeperStake,
      overrides || {}
    );
  }
  attach(address: string): KeeperIncentiveV1 {
    return super.attach(address) as KeeperIncentiveV1;
  }
  connect(signer: Signer): KeeperIncentiveV1__factory {
    return super.connect(signer) as KeeperIncentiveV1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KeeperIncentiveV1Interface {
    return new utils.Interface(_abi) as KeeperIncentiveV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KeeperIncentiveV1 {
    return new Contract(address, _abi, signerOrProvider) as KeeperIncentiveV1;
  }
}