/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { PUniswapPoolRecipe } from "./PUniswapPoolRecipe";

export class PUniswapPoolRecipeFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<PUniswapPoolRecipe> {
    return super.deploy() as Promise<PUniswapPoolRecipe>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): PUniswapPoolRecipe {
    return super.attach(address) as PUniswapPoolRecipe;
  }
  connect(signer: Signer): PUniswapPoolRecipeFactory {
    return super.connect(signer) as PUniswapPoolRecipeFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PUniswapPoolRecipe {
    return new Contract(address, _abi, signerOrProvider) as PUniswapPoolRecipe;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_bought",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
      }
    ],
    name: "ethToTokenSwapOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_sold",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_bought",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      }
    ],
    name: "ethToTokenTransferOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_sold",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_bought",
        type: "uint256"
      }
    ],
    name: "getEthToTokenOutputPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_sold",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_sold",
        type: "uint256"
      }
    ],
    name: "getTokenToEthInputPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_bought",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address"
      },
      {
        internalType: "address",
        name: "_uniswapFactory",
        type: "address"
      }
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_sold",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_min_eth",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
      }
    ],
    name: "tokenToEthSwapInput",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_bought",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens_sold",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_min_eth",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      }
    ],
    name: "tokenToEthTransferInput",
    outputs: [
      {
        internalType: "uint256",
        name: "eth_bought",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "uprSlot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611d37806100206000396000f3fe60806040526004361061008a5760003560e01c80637237e031116100595780637237e031146101f45780637da8ca171461027757806395b68fe7146102a257806395e3c50b146102f1578063f09a40161461035457610091565b80630b5736381461009657806316f0115b1461010257806359e94862146101595780636b1d4db7146101a857610091565b3661009157005b600080fd5b6100ec600480360360608110156100ac57600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103c5565b6040518082815260200191505060405180910390f35b34801561010e57600080fd5b506101176109dc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016557600080fd5b506101926004803603602081101561017c57600080fd5b8101908080359060200190929190505050610a0f565b6040518082815260200191505060405180910390f35b6101de600480360360408110156101be57600080fd5b810190808035906020019092919080359060200190929190505050610dc3565b6040518082815260200191505060405180910390f35b34801561020057600080fd5b506102616004803603608081101561021757600080fd5b81019080803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dd8565b6040518082815260200191505060405180910390f35b34801561028357600080fd5b5061028c6112a0565b6040518082815260200191505060405180910390f35b3480156102ae57600080fd5b506102db600480360360208110156102c557600080fd5b81019080803590602001909291905050506112bc565b6040518082815260200191505060405180910390f35b3480156102fd57600080fd5b5061033e6004803603606081101561031457600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050611670565b6040518082815260200191505060405180910390f35b34801561036057600080fd5b506103c36004803603604081101561037757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611687565b005b6000806103d06117e4565b9050428410156103df57600080fd5b6060808260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663371babdc886040518263ffffffff1660e01b81526004018082815260200191505060006040518083038186803b15801561045757600080fd5b505afa15801561046b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250604081101561049557600080fd5b81019080805160405193929190846401000000008211156104b557600080fd5b838201915060208201858111156104cb57600080fd5b82518660208202830111640100000000821117156104e857600080fd5b8083526020830192505050908051906020019060200280838360005b8381101561051f578082015181840152602081019050610504565b505050509050016040526020018051604051939291908464010000000082111561054857600080fd5b8382019150602082018581111561055e57600080fd5b825186602082028301116401000000008211171561057b57600080fd5b8083526020830192505050908051906020019060200280838360005b838110156105b2578082015181840152602081019050610597565b50505050905001604052505050915091506000935060008090505b8251811015610731576106068382815181106105e557fe5b60200260200101518383815181106105f957fe5b6020026020010151611809565b8501945082818151811061061657fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663095ea7b38560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156106e857600080fd5b505af11580156106fc573d6000803e3d6000fd5b505050506040513d602081101561071257600080fd5b81019080805190602001909291905050505080806001019150506105cd565b5047340393503373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561077d573d6000803e3d6000fd5b508260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166334e7a19f886040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156107f557600080fd5b505af1158015610809573d6000803e3d6000fd5b505050508260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb868560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156108ef57600080fd5b505afa158015610903573d6000803e3d6000fd5b505050506040513d602081101561091957600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561099357600080fd5b505af11580156109a7573d6000803e3d6000fd5b505050506040513d60208110156109bd57600080fd5b8101908080519060200190929190505050508393505050509392505050565b60006109e66117e4565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080610a1a6117e4565b90506060808260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663371babdc866040518263ffffffff1660e01b81526004018082815260200191505060006040518083038186803b158015610a9457600080fd5b505afa158015610aa8573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506040811015610ad257600080fd5b8101908080516040519392919084640100000000821115610af257600080fd5b83820191506020820185811115610b0857600080fd5b8251866020820283011164010000000082111715610b2557600080fd5b8083526020830192505050908051906020019060200280838360005b83811015610b5c578082015181840152602081019050610b41565b5050505090500160405260200180516040519392919084640100000000821115610b8557600080fd5b83820191506020820185811115610b9b57600080fd5b8251866020820283011164010000000082111715610bb857600080fd5b8083526020830192505050908051906020019060200280838360005b83811015610bef578082015181840152602081019050610bd4565b50505050905001604052505050915091506000935060008090505b8251811015610db75760008460010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306f2bf62858481518110610c6157fe5b60200260200101516040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610cc957600080fd5b505afa158015610cdd573d6000803e3d6000fd5b505050506040513d6020811015610cf357600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff166359e94862848481518110610d2e57fe5b60200260200101516040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610d6a57600080fd5b505afa158015610d7e573d6000803e3d6000fd5b505050506040513d6020811015610d9457600080fd5b810190808051906020019092919050505086019550508080600101915050610c0a565b50839350505050919050565b6000610dd08383336103c5565b905092915050565b600080610de36117e4565b905042841015610df257600080fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330896040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610ed157600080fd5b505af1158015610ee5573d6000803e3d6000fd5b505050506040513d6020811015610efb57600080fd5b8101908080519060200190929190505050610f61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603f815260200180611c66603f913960400191505060405180910390fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663be1d24ad876040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610fd857600080fd5b505af1158015610fec573d6000803e3d6000fd5b5050505060608160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aa6ca8086040518163ffffffff1660e01b815260040160006040518083038186803b15801561105c57600080fd5b505afa158015611070573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561109a57600080fd5b81019080805160405193929190846401000000008211156110ba57600080fd5b838201915060208201858111156110d057600080fd5b82518660208202830111640100000000821117156110ed57600080fd5b8083526020830192505050908051906020019060200280838360005b83811015611124578082015181840152602081019050611109565b505050509050016040525050509050600080905060008090505b825181101561123957600083828151811061115557fe5b6020026020010151905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156111de57600080fd5b505afa1580156111f2573d6000803e3d6000fd5b505050506040513d602081101561120857600080fd5b8101908080519060200190929190505050905061122682828a6119b7565b840193505050808060010191505061113e565b50868111611292576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180611ca5603a913960400191505060405180910390fd5b809350505050949350505050565b6040518080611cdf602391396023019050604051809103902081565b6000806112c76117e4565b90506060808260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663371babdc866040518263ffffffff1660e01b81526004018082815260200191505060006040518083038186803b15801561134157600080fd5b505afa158015611355573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250604081101561137f57600080fd5b810190808051604051939291908464010000000082111561139f57600080fd5b838201915060208201858111156113b557600080fd5b82518660208202830111640100000000821117156113d257600080fd5b8083526020830192505050908051906020019060200280838360005b838110156114095780820151818401526020810190506113ee565b505050509050016040526020018051604051939291908464010000000082111561143257600080fd5b8382019150602082018581111561144857600080fd5b825186602082028301116401000000008211171561146557600080fd5b8083526020830192505050908051906020019060200280838360005b8381101561149c578082015181840152602081019050611481565b50505050905001604052505050915091506000935060008090505b82518110156116645760008460010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306f2bf6285848151811061150e57fe5b60200260200101516040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561157657600080fd5b505afa15801561158a573d6000803e3d6000fd5b505050506040513d60208110156115a057600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff166395b68fe78484815181106115db57fe5b60200260200101516040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561161757600080fd5b505afa15801561162b573d6000803e3d6000fd5b505050506040513d602081101561164157600080fd5b8101908080519060200190929190505050860195505080806001019150506114b7565b50839350505050919050565b600061167e84848433610dd8565b90509392505050565b60006116916117e4565b9050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611759576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f616c726561647920696e697469616c697365640000000000000000000000000081525060200191505060405180910390fd5b828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000806040518080611cdf602391396023019050604051809103902090508091505090565b6000806118146117e4565b905060008160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306f2bf62866040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156118b957600080fd5b505afa1580156118cd573d6000803e3d6000fd5b505050506040513d60208110156118e357600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff16636b1d4db747867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518463ffffffff1660e01b815260040180838152602001828152602001925050506020604051808303818588803b15801561197157600080fd5b505af1158015611985573d6000803e3d6000fd5b50505050506040513d602081101561199c57600080fd5b81019080805190602001909291905050509250505092915050565b6000806119c26117e4565b905060008160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306f2bf62876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611a6757600080fd5b505afa158015611a7b573d6000803e3d6000fd5b505050506040513d6020811015611a9157600080fd5b810190808051906020019092919050505090508573ffffffffffffffffffffffffffffffffffffffff1663095ea7b382876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015611b2b57600080fd5b505af1158015611b3f573d6000803e3d6000fd5b505050506040513d6020811015611b5557600080fd5b8101908080519060200190929190505050508073ffffffffffffffffffffffffffffffffffffffff16637237e0318660017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff886040518563ffffffff1660e01b8152600401808581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001945050505050602060405180830381600087803b158015611c1f57600080fd5b505af1158015611c33573d6000803e3d6000fd5b505050506040513d6020811015611c4957600080fd5b810190808051906020019092919050505092505050939250505056fe50556e6973776170506f6f6c5265636970652e746f6b656e546f4574685472616e73666572496e7075743a207472616e7366657246726f6d206661696c656450556e6973776170506f6f6c5265636970652e746f6b656e546f4574685472616e73666572496e7075743a206e6f7420656e6f7567682045544850556e6973776170506f6f6c5265636970652e73746f726167652e6c6f636174696f6ea2646970667358221220f5482e9ef164624c6edc84676d0818b7eb51e05a02b05088ff9494d6a0fea31764736f6c63430006040033";