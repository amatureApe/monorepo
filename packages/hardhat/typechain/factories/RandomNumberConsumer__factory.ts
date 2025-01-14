/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RandomNumberConsumer,
  RandomNumberConsumerInterface,
} from "../RandomNumberConsumer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_VRFCoordinator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_LinkToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "LinkToken",
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
    name: "VRFCoordinator",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_electionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getRandomNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "electionId",
        type: "uint256",
      },
    ],
    name: "getRandomResult",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "randomResult",
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
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
    ],
    name: "rawFulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161070b38038061070b83398101604081905261002f91610072565b6001600160a01b0392831660a052911660805260035567016345785d8a00006004556100ae565b80516001600160a01b038116811461006d57600080fd5b919050565b60008060006060848603121561008757600080fd5b61009084610056565b925061009e60208501610056565b9150604084015190509250925092565b60805160a05161062a6100e16000396000818161027a015261034f0152600081816101760152610320015261062a6000f3fe6080604052600436106100605760003560e01c806333b60863146100655780634f8e2fdf146100a25780636e68fc0a146100c25780637900905c146100e457806394985ddd14610112578063aea2035f14610132578063d0e30db0146100e2575b600080fd5b34801561007157600080fd5b50600154610085906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100ae57600080fd5b50600254610085906001600160a01b031681565b3480156100ce57600080fd5b506100e26100dd3660046104db565b610152565b005b3480156100f057600080fd5b506101046100ff3660046104fd565b61024e565b604051908152602001610099565b34801561011e57600080fd5b506100e261012d3660046104db565b61026f565b34801561013e57600080fd5b5061010461014d3660046104fd565b6102f5565b600480546040516370a0823160e01b81523092810192909252906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156101bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e19190610516565b10156102265760405162461bcd60e51b815260206004820152600f60248201526e4e6f7420656e6f756768204c494e4b60881b60448201526064015b60405180910390fd5b816006600061023960035460045461031c565b81526020810191909152604001600020555050565b6005818154811061025e57600080fd5b600091825260209091200154905081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102e75760405162461bcd60e51b815260206004820152601f60248201527f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c00604482015260640161021d565b6102f18282610497565b5050565b60006005828154811061030a5761030a61052f565b90600052602060002001549050919050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634000aea07f00000000000000000000000000000000000000000000000000000000000000008486600060405160200161038c929190918252602082015260400190565b6040516020818303038152906040526040518463ffffffff1660e01b81526004016103b993929190610545565b6020604051808303816000875af11580156103d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fc91906105aa565b5060008381526020818152604080832054815180840188905280830185905230606082015260808082018390528351808303909101815260a0909101909252815191830191909120868452929091526104569060016105d3565b600085815260208181526040918290209290925580518083018790528082019390935280518084038201815260609093019052815191012090505b92915050565b6104a28160016105d3565b90508060056006600085815260200190815260200160002054815481106104cb576104cb61052f565b6000918252602090912001555050565b600080604083850312156104ee57600080fd5b50508035926020909101359150565b60006020828403121561050f57600080fd5b5035919050565b60006020828403121561052857600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b60018060a01b038416815260006020848184015260606040840152835180606085015260005b818110156105875785810183015185820160800152820161056b565b506000608082860101526080601f19601f83011685010192505050949350505050565b6000602082840312156105bc57600080fd5b815180151581146105cc57600080fd5b9392505050565b8082018082111561049157634e487b7160e01b600052601160045260246000fdfea2646970667358221220e9e5b033892f12e00734a4bc8b35624228a84e87a5a55608694572925a0c0ff664736f6c63430008110033";

export class RandomNumberConsumer__factory extends ContractFactory {
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
    _VRFCoordinator: string,
    _LinkToken: string,
    _keyHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RandomNumberConsumer> {
    return super.deploy(
      _VRFCoordinator,
      _LinkToken,
      _keyHash,
      overrides || {}
    ) as Promise<RandomNumberConsumer>;
  }
  getDeployTransaction(
    _VRFCoordinator: string,
    _LinkToken: string,
    _keyHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _VRFCoordinator,
      _LinkToken,
      _keyHash,
      overrides || {}
    );
  }
  attach(address: string): RandomNumberConsumer {
    return super.attach(address) as RandomNumberConsumer;
  }
  connect(signer: Signer): RandomNumberConsumer__factory {
    return super.connect(signer) as RandomNumberConsumer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RandomNumberConsumerInterface {
    return new utils.Interface(_abi) as RandomNumberConsumerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RandomNumberConsumer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RandomNumberConsumer;
  }
}
