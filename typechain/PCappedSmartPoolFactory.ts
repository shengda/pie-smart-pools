/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { PCappedSmartPool } from "./PCappedSmartPool";

export class PCappedSmartPoolFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<PCappedSmartPool> {
    return super.deploy() as Promise<PCappedSmartPool>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): PCappedSmartPool {
    return super.attach(address) as PCappedSmartPool;
  }
  connect(signer: Signer): PCappedSmartPoolFactory {
    return super.connect(signer) as PCappedSmartPoolFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PCappedSmartPool {
    return new Contract(address, _abi, signerOrProvider) as PCappedSmartPool;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenOut",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256"
      }
    ],
    name: "LOG_EXIT",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenIn",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256"
      }
    ],
    name: "LOG_JOIN",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "BONE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_BALANCE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_BOUND_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_TOTAL_WEIGHT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_WEIGHT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MIN_BALANCE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MIN_POOL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MIN_WEIGHT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "_src",
        type: "address"
      },
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_whom",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "decreaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "exitPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getBPool",
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
    inputs: [],
    name: "getCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getController",
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
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "increaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bPool",
        type: "address"
      },
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256"
      }
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "joinPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pbsSlot",
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
    inputs: [],
    name: "pcsSlot",
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
    inputs: [],
    name: "ptSlot",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_cap",
        type: "uint256"
      }
    ],
    name: "setCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_controller",
        type: "address"
      }
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613718806100206000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c806370a0823111610104578063be1d24ad116100a2578063dd62ed3e11610071578063dd62ed3e14610905578063def92c691461097d578063e4a28a521461099b578063ec565ffe146109b9576101da565b8063be1d24ad1461075b578063c36596a614610789578063d2209ad9146107a7578063d73dd6231461089f576101da565b806392eefe9b116100de57806392eefe9b1461061057806395d89b4114610654578063a9059cbb146106d7578063b0e0d1361461073d576101da565b806370a082311461057c5780637e88781c146105d4578063867378c5146105f2576101da565b80632c500bc81161017c57806347786d371161014b57806347786d37146104ac578063554d578d146104da578063652062c5146104f85780636618846314610516576101da565b80632c500bc8146103c65780633018205f14610410578063313ce5671461045a57806334e7a19f1461047e576101da565b806309a3bbe4116101b857806309a3bbe4146102e657806318160ddd14610304578063218b53821461032257806323b872dd14610340576101da565b806306fdde03146101df578063095ea7b314610262578063099e9e2a146102c8575b600080fd5b6101e76109d7565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561022757808201518184015260208101905061020c565b50505050905090810190601f1680156102545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102ae6004803603604081101561027857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a82565b604051808215151515815260200191505060405180910390f35b6102d0610b7d565b6040518082815260200191505060405180910390f35b6102ee610bb6565b6040518082815260200191505060405180910390f35b61030c610bc5565b6040518082815260200191505060405180910390f35b61032a610bd8565b6040518082815260200191505060405180910390f35b6103ac6004803603606081101561035657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610be4565b604051808215151515815260200191505060405180910390f35b6103ce610fff565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610418611032565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610462611065565b604051808260ff1660ff16815260200191505060405180910390f35b6104aa6004803603602081101561049457600080fd5b810190808035906020019092919050505061106a565b005b6104d8600480360360208110156104c257600080fd5b81019080803590602001909291905050506110e0565b005b6104e26111bf565b6040518082815260200191505060405180910390f35b6105006111d2565b6040518082815260200191505060405180910390f35b6105626004803603604081101561052c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061120b565b604051808215151515815260200191505060405180910390f35b6105be6004803603602081101561059257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114a8565b6040518082815260200191505060405180910390f35b6105dc6114fa565b6040518082815260200191505060405180910390f35b6105fa611506565b6040518082815260200191505060405180910390f35b6106526004803603602081101561062657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061151e565b005b61065c611637565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561069c578082015181840152602081019050610681565b50505050905090810190601f1680156106c95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610723600480360360408110156106ed57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116e2565b604051808215151515815260200191505060405180910390f35b6107456116f9565b6040518082815260200191505060405180910390f35b6107876004803603602081101561077157600080fd5b81019080803590602001909291905050506116fe565b005b610791611acf565b6040518082815260200191505060405180910390f35b61089d600480360360808110156107bd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156107fa57600080fd5b82018360208201111561080c57600080fd5b8035906020019184600183028401116401000000008311171561082e57600080fd5b90919293919293908035906020019064010000000081111561084f57600080fd5b82018360208201111561086157600080fd5b8035906020019184600183028401116401000000008311171561088357600080fd5b909192939192939080359060200190929190505050611adb565b005b6108eb600480360360408110156108b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611c68565b604051808215151515815260200191505060405180910390f35b6109676004803603604081101561091b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611e6d565b6040518082815260200191505060405180910390f35b610985611efd565b6040518082815260200191505060405180910390f35b6109a3611f10565b6040518082815260200191505060405180910390f35b6109c1611f1f565b6040518082815260200191505060405180910390f35b60606109e1611f58565b6000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a785780601f10610a4d57610100808354040283529160200191610a78565b820191906000526020600020905b815481529060010190602001808311610a5b57829003601f168201915b5050505050905090565b600081610a8d611f58565b60040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60405180807f504261736963536d617274506f6f6c2e73746f726167652e6c6f636174696f6e8152506020019050604051809103902081565b6032670de0b6b3a76400000281565b6000610bcf611f58565b60020154905090565b670de0b6b3a764000081565b600080610bef611f58565b90508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610ca957508060040160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548311155b610d1b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f4552525f5043544f4b454e5f4241445f43414c4c45520000000000000000000081525060200191505060405180910390fd5b610d26858585611f9a565b8473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614158015610e0057507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8160040160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414155b15610ff357610e8d8160040160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054846121e8565b8160040160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360040160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a35b60019150509392505050565b600061100961227a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600061103c61227a565b60010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b601281565b611073816122bc565b61107b61268d565b60000154611087610bc5565b106110dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d81526020018061368d602d913960400191505060405180910390fd5b50565b6110e861227a565b60010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146111ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f504261736963536d617274506f6f6c2e696e69743a206e6f74206f776e65720081525060200191505060405180910390fd5b806111b561268d565b6000018190555050565b60006111c961268d565b60000154905090565b60405180807f504261736963536d617274506f6f6c2e73746f726167652e6c6f636174696f6e8152506020019050604051809103902081565b600080611216611f58565b905060008160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508084111561132c5760008260040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113b9565b61133681856121e8565b8260040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a360019250505092915050565b60006114b2611f58565b60030160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b670de0b6b3a764000081565b620f4240670de0b6b3a76400008161151a57fe5b0481565b61152661227a565b60010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146115ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f504261736963536d617274506f6f6c2e696e69743a206e6f74206f776e65720081525060200191505060405180910390fd5b806115f361227a565b60010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6060611641611f58565b6001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116d85780601f106116ad576101008083540402835291602001916116d8565b820191906000526020600020905b8154815290600101906020018083116116bb57829003601f168201915b5050505050905090565b60006116ef338484611f9a565b6001905092915050565b600881565b600073ffffffffffffffffffffffffffffffffffffffff1661171e61227a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156117cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f504261736963536d617274506f6f6c2e72656164793a206e6f7420726561647981525060200191505060405180910390fd5b60006117d661227a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000611806610bc5565b9050600061181484836126cf565b9050600081141561182457600080fd5b61182e3385612888565b61183784612896565b60608373ffffffffffffffffffffffffffffffffffffffff1663cc77828d6040518163ffffffff1660e01b815260040160006040518083038186803b15801561187f57600080fd5b505afa158015611893573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060208110156118bd57600080fd5b81019080805160405193929190846401000000008211156118dd57600080fd5b838201915060208201858111156118f357600080fd5b825186602082028301116401000000008211171561191057600080fd5b8083526020830192505050908051906020019060200280838360005b8381101561194757808201518184015260208101905061192c565b50505050905001604052505050905060008090505b8151811015611ac757600082828151811061197357fe5b6020026020010151905060008673ffffffffffffffffffffffffffffffffffffffff1663f8b2cb4f836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156119fc57600080fd5b505afa158015611a10573d6000803e3d6000fd5b505050506040513d6020811015611a2657600080fd5b810190808051906020019092919050505090506000611a4586836128a2565b90508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe74c91552b64c2e2e7bd255639e004e693bd3e1d01cc33e65610b86afcc1ffed836040518082815260200191505060405180910390a3611ab78333836129e4565b505050808060010191505061195c565b505050505050565b670de0b6b3a764000081565b6000611ae561227a565b9050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611b90576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806136ba6029913960400191505060405180910390fd5b868160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550338160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508585611c20611f58565b6000019190611c309291906135e7565b508383611c3b611f58565b6001019190611c4b9291906135e7565b50611c5582612d7e565b611c5f3383612d8a565b50505050505050565b600080611c73611f58565b9050611cfd8160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484612d98565b8160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000611e77611f58565b60040160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b64e8d4a51000670de0b6b3a76400000281565b6032670de0b6b3a76400000281565b60405180807f5043546f6b656e2e73746f726167652e6c6f636174696f6e00000000000000008152506018019050604051809103902081565b60008060405180807f5043546f6b656e2e73746f726167652e6c6f636174696f6e00000000000000008152506018019050604051809103902090508091505090565b6000611fa4611f58565b9050818160030160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561205d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4552525f494e53554646494349454e545f42414c00000000000000000000000081525060200191505060405180910390fd5b6120a88160030160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836121e8565b8160030160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506121388160030160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483612d98565b8160030160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b60008060006121f78585612e20565b91509150801561226f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f4552525f5355425f554e444552464c4f5700000000000000000000000000000081525060200191505060405180910390fd5b819250505092915050565b60008060405180807f504261736963536d617274506f6f6c2e73746f726167652e6c6f636174696f6e8152506020019050604051809103902090508091505090565b600073ffffffffffffffffffffffffffffffffffffffff166122dc61227a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561238a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f504261736963536d617274506f6f6c2e72656164793a206e6f7420726561647981525060200191505060405180910390fd5b600061239461227a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006123c4610bc5565b905060006123d284836126cf565b905060008114156123e257600080fd5b60608373ffffffffffffffffffffffffffffffffffffffff1663cc77828d6040518163ffffffff1660e01b815260040160006040518083038186803b15801561242a57600080fd5b505afa15801561243e573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561246857600080fd5b810190808051604051939291908464010000000082111561248857600080fd5b8382019150602082018581111561249e57600080fd5b82518660208202830111640100000000821117156124bb57600080fd5b8083526020830192505050908051906020019060200280838360005b838110156124f25780820151818401526020810190506124d7565b50505050905001604052505050905060008090505b815181101561267257600082828151811061251e57fe5b6020026020010151905060008673ffffffffffffffffffffffffffffffffffffffff1663f8b2cb4f836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156125a757600080fd5b505afa1580156125bb573d6000803e3d6000fd5b505050506040513d60208110156125d157600080fd5b8101908080519060200190929190505050905060006125f086836128a2565b90508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f63982df10efd8dfaaaa0fcc7f50b2d93b7cba26ccc48adee2873220d485dc39a836040518082815260200191505060405180910390a3612662833383612e49565b5050508080600101915050612507565b5061267c85612d7e565b6126863386612d8a565b5050505050565b60008060405180807f504261736963536d617274506f6f6c2e73746f726167652e6c6f636174696f6e8152506020019050604051809103902090508091505090565b600080821415612747576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f4552525f4449565f5a45524f000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000670de0b6b3a76400008402905060008414806127755750670de0b6b3a764000084828161277257fe5b04145b6127e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4552525f4449565f494e5445524e414c0000000000000000000000000000000081525060200191505060405180910390fd5b6000600284816127f357fe5b04820190508181101561286e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4552525f4449565f494e5445524e414c0000000000000000000000000000000081525060200191505060405180910390fd5b600084828161287957fe5b04905080935050505092915050565b61289282826132da565b5050565b61289f816132e9565b50565b600080828402905060008414806128c15750828482816128be57fe5b04145b612933576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4552525f4d554c5f4f564552464c4f570000000000000000000000000000000081525060200191505060405180910390fd5b60006002670de0b6b3a76400008161294757fe5b0482019050818110156129c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4552525f4d554c5f4f564552464c4f570000000000000000000000000000000081525060200191505060405180910390fd5b6000670de0b6b3a764000082816129d557fe5b04905080935050505092915050565b60006129ee61227a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff1663f8b2cb4f866040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612a9357600080fd5b505afa158015612aa7573d6000803e3d6000fd5b505050506040513d6020811015612abd57600080fd5b8101908080519060200190929190505050905060008273ffffffffffffffffffffffffffffffffffffffff1663948d8ce6876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612b4f57600080fd5b505afa158015612b63573d6000803e3d6000fd5b505050506040513d6020811015612b7957600080fd5b810190808051906020019092919050505090508273ffffffffffffffffffffffffffffffffffffffff16633fdddaa287612bb385886121e8565b846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050600060405180830381600087803b158015612c2457600080fd5b505af1158015612c38573d6000803e3d6000fd5b5050505060008673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb87876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015612cc557600080fd5b505af1158015612cd9573d6000803e3d6000fd5b505050506040513d6020811015612cef57600080fd5b8101908080519060200190929190505050905080612d75576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f4552525f45524332305f46414c5345000000000000000000000000000000000081525060200191505060405180910390fd5b50505050505050565b612d87816134bc565b50565b612d9482826135d8565b5050565b600080828401905083811015612e16576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4552525f4144445f4f564552464c4f570000000000000000000000000000000081525060200191505060405180910390fd5b8091505092915050565b600080828410612e3857828403600091509150612e42565b8383036001915091505b9250929050565b6000612e5361227a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff1663f8b2cb4f866040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612ef857600080fd5b505afa158015612f0c573d6000803e3d6000fd5b505050506040513d6020811015612f2257600080fd5b8101908080519060200190929190505050905060008273ffffffffffffffffffffffffffffffffffffffff1663948d8ce6876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612fb457600080fd5b505afa158015612fc8573d6000803e3d6000fd5b505050506040513d6020811015612fde57600080fd5b8101908080519060200190929190505050905060008673ffffffffffffffffffffffffffffffffffffffff166323b872dd8730886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156130ae57600080fd5b505af11580156130c2573d6000803e3d6000fd5b505050506040513d60208110156130d857600080fd5b810190808051906020019092919050505090508673ffffffffffffffffffffffffffffffffffffffff1663095ea7b385876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561317257600080fd5b505af1158015613186573d6000803e3d6000fd5b505050506040513d602081101561319c57600080fd5b81019080805190602001909291905050505080613221576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f4552525f45524332305f46414c5345000000000000000000000000000000000081525060200191505060405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff16633fdddaa2886132488689612d98565b856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050600060405180830381600087803b1580156132b957600080fd5b505af11580156132cd573d6000803e3d6000fd5b5050505050505050505050565b6132e5823083611f9a565b5050565b60006132f3611f58565b9050818160030160003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156133ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4552525f494e53554646494349454e545f42414c00000000000000000000000081525060200191505060405180910390fd5b6133f78160030160003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836121e8565b8160030160003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061344a8160020154836121e8565b8160020181905550600073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a35050565b60006134c6611f58565b90506135138160030160003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483612d98565b8160030160003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550613566816002015483612d98565b81600201819055503073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a35050565b6135e3308383611f9a565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061362857803560ff1916838001178555613656565b82800160010185558215613656579182015b8281111561365557823582559160200191906001019061363a565b5b5090506136639190613667565b5090565b61368991905b8082111561368557600081600090555060010161366d565b5090565b9056fe50436170706564536d617274506f6f6c2e77697468696e4361703a20436170206c696d69742072656163686564504261736963536d617274506f6f6c2e696e69743a20616c726561647920696e697469616c69736564a26469706673582212204fdaabad2f5de7e25086b68ac1f8bb8d7b831dd64a2da72ff42f9f1502dad12764736f6c63430006040033";