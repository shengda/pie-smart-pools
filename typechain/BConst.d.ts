/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface BConstInterface extends Interface {
  functions: {
    BONE: TypedFunctionDescription<{ encode([]: []): string }>;

    BPOW_PRECISION: TypedFunctionDescription<{ encode([]: []): string }>;

    EXIT_FEE: TypedFunctionDescription<{ encode([]: []): string }>;

    INIT_POOL_SUPPLY: TypedFunctionDescription<{ encode([]: []): string }>;

    MAX_BOUND_TOKENS: TypedFunctionDescription<{ encode([]: []): string }>;

    MAX_BPOW_BASE: TypedFunctionDescription<{ encode([]: []): string }>;

    MAX_FEE: TypedFunctionDescription<{ encode([]: []): string }>;

    MAX_IN_RATIO: TypedFunctionDescription<{ encode([]: []): string }>;

    MAX_OUT_RATIO: TypedFunctionDescription<{ encode([]: []): string }>;

    MAX_TOTAL_WEIGHT: TypedFunctionDescription<{ encode([]: []): string }>;

    MAX_WEIGHT: TypedFunctionDescription<{ encode([]: []): string }>;

    MIN_BALANCE: TypedFunctionDescription<{ encode([]: []): string }>;

    MIN_BOUND_TOKENS: TypedFunctionDescription<{ encode([]: []): string }>;

    MIN_BPOW_BASE: TypedFunctionDescription<{ encode([]: []): string }>;

    MIN_FEE: TypedFunctionDescription<{ encode([]: []): string }>;

    MIN_WEIGHT: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {};
}

export class BConst extends Contract {
  connect(signerOrProvider: Signer | Provider | string): BConst;
  attach(addressOrName: string): BConst;
  deployed(): Promise<BConst>;

  on(event: EventFilter | string, listener: Listener): BConst;
  once(event: EventFilter | string, listener: Listener): BConst;
  addListener(eventName: EventFilter | string, listener: Listener): BConst;
  removeAllListeners(eventName: EventFilter | string): BConst;
  removeListener(eventName: any, listener: Listener): BConst;

  interface: BConstInterface;

  functions: {
    BONE(): Promise<BigNumber>;

    BPOW_PRECISION(): Promise<BigNumber>;

    EXIT_FEE(): Promise<BigNumber>;

    INIT_POOL_SUPPLY(): Promise<BigNumber>;

    MAX_BOUND_TOKENS(): Promise<BigNumber>;

    MAX_BPOW_BASE(): Promise<BigNumber>;

    MAX_FEE(): Promise<BigNumber>;

    MAX_IN_RATIO(): Promise<BigNumber>;

    MAX_OUT_RATIO(): Promise<BigNumber>;

    MAX_TOTAL_WEIGHT(): Promise<BigNumber>;

    MAX_WEIGHT(): Promise<BigNumber>;

    MIN_BALANCE(): Promise<BigNumber>;

    MIN_BOUND_TOKENS(): Promise<BigNumber>;

    MIN_BPOW_BASE(): Promise<BigNumber>;

    MIN_FEE(): Promise<BigNumber>;

    MIN_WEIGHT(): Promise<BigNumber>;
  };

  BONE(): Promise<BigNumber>;

  BPOW_PRECISION(): Promise<BigNumber>;

  EXIT_FEE(): Promise<BigNumber>;

  INIT_POOL_SUPPLY(): Promise<BigNumber>;

  MAX_BOUND_TOKENS(): Promise<BigNumber>;

  MAX_BPOW_BASE(): Promise<BigNumber>;

  MAX_FEE(): Promise<BigNumber>;

  MAX_IN_RATIO(): Promise<BigNumber>;

  MAX_OUT_RATIO(): Promise<BigNumber>;

  MAX_TOTAL_WEIGHT(): Promise<BigNumber>;

  MAX_WEIGHT(): Promise<BigNumber>;

  MIN_BALANCE(): Promise<BigNumber>;

  MIN_BOUND_TOKENS(): Promise<BigNumber>;

  MIN_BPOW_BASE(): Promise<BigNumber>;

  MIN_FEE(): Promise<BigNumber>;

  MIN_WEIGHT(): Promise<BigNumber>;

  filters: {};

  estimate: {
    BONE(): Promise<BigNumber>;

    BPOW_PRECISION(): Promise<BigNumber>;

    EXIT_FEE(): Promise<BigNumber>;

    INIT_POOL_SUPPLY(): Promise<BigNumber>;

    MAX_BOUND_TOKENS(): Promise<BigNumber>;

    MAX_BPOW_BASE(): Promise<BigNumber>;

    MAX_FEE(): Promise<BigNumber>;

    MAX_IN_RATIO(): Promise<BigNumber>;

    MAX_OUT_RATIO(): Promise<BigNumber>;

    MAX_TOTAL_WEIGHT(): Promise<BigNumber>;

    MAX_WEIGHT(): Promise<BigNumber>;

    MIN_BALANCE(): Promise<BigNumber>;

    MIN_BOUND_TOKENS(): Promise<BigNumber>;

    MIN_BPOW_BASE(): Promise<BigNumber>;

    MIN_FEE(): Promise<BigNumber>;

    MIN_WEIGHT(): Promise<BigNumber>;
  };
}