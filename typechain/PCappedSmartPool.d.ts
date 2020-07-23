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

interface PCappedSmartPoolInterface extends Interface {
  functions: {
    allowance: TypedFunctionDescription<{
      encode([_src, _dst]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    approveTokens: TypedFunctionDescription<{ encode([]: []): string }>;

    balanceOf: TypedFunctionDescription<{ encode([_whom]: [string]): string }>;

    bind: TypedFunctionDescription<{
      encode([_token, _balance, _denorm]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    calcTokensForAmount: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    decreaseApproval: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    getBPool: TypedFunctionDescription<{ encode([]: []): string }>;

    getCap: TypedFunctionDescription<{ encode([]: []): string }>;

    getController: TypedFunctionDescription<{ encode([]: []): string }>;

    getPublicSwapSetter: TypedFunctionDescription<{ encode([]: []): string }>;

    getSwapFee: TypedFunctionDescription<{ encode([]: []): string }>;

    getTokenBinder: TypedFunctionDescription<{ encode([]: []): string }>;

    getTokens: TypedFunctionDescription<{ encode([]: []): string }>;

    increaseApproval: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    init: TypedFunctionDescription<{
      encode([_bPool, _name, _symbol, _initialSupply]: [
        string,
        string,
        string,
        BigNumberish
      ]): string;
    }>;

    isPublicSwap: TypedFunctionDescription<{ encode([]: []): string }>;

    name: TypedFunctionDescription<{ encode([]: []): string }>;

    pbsSlot: TypedFunctionDescription<{ encode([]: []): string }>;

    pcsSlot: TypedFunctionDescription<{ encode([]: []): string }>;

    ptSlot: TypedFunctionDescription<{ encode([]: []): string }>;

    rebind: TypedFunctionDescription<{
      encode([_token, _balance, _denorm]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    rpSlot: TypedFunctionDescription<{ encode([]: []): string }>;

    setCap: TypedFunctionDescription<{
      encode([_cap]: [BigNumberish]): string;
    }>;

    setController: TypedFunctionDescription<{
      encode([_controller]: [string]): string;
    }>;

    setPublicSwap: TypedFunctionDescription<{
      encode([_public]: [boolean]): string;
    }>;

    setPublicSwapSetter: TypedFunctionDescription<{
      encode([_newPublicSwapSetter]: [string]): string;
    }>;

    setSwapFee: TypedFunctionDescription<{
      encode([_swapFee]: [BigNumberish]): string;
    }>;

    setTokenBinder: TypedFunctionDescription<{
      encode([_newTokenBinder]: [string]): string;
    }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([_src, _dst, _amount]: [string, string, BigNumberish]): string;
    }>;

    unbind: TypedFunctionDescription<{ encode([_token]: [string]): string }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([_src, _dst, _amount]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    CapChanged: TypedEventDescription<{
      encodeTopics([setter, oldCap, newCap]: [
        string | null,
        null,
        null
      ]): string[];
    }>;

    ControllerChanged: TypedEventDescription<{
      encodeTopics([previousController, newController]: [
        string | null,
        string | null
      ]): string[];
    }>;

    LOG_EXIT: TypedEventDescription<{
      encodeTopics([caller, tokenOut, tokenAmountOut]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    LOG_JOIN: TypedEventDescription<{
      encodeTopics([caller, tokenIn, tokenAmountIn]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    PoolExited: TypedEventDescription<{
      encodeTopics([from, amount]: [string | null, null]): string[];
    }>;

    PoolExitedWithLoss: TypedEventDescription<{
      encodeTopics([from, amount, lossTokens]: [
        string | null,
        null,
        null
      ]): string[];
    }>;

    PoolJoined: TypedEventDescription<{
      encodeTopics([from, amount]: [string | null, null]): string[];
    }>;

    PublicSwapSet: TypedEventDescription<{
      encodeTopics([setter, value]: [string | null, boolean | null]): string[];
    }>;

    PublicSwapSetterChanged: TypedEventDescription<{
      encodeTopics([previousSetter, newSetter]: [
        string | null,
        string | null
      ]): string[];
    }>;

    SwapFeeSet: TypedEventDescription<{
      encodeTopics([setter, newFee]: [string | null, null]): string[];
    }>;

    TokenBinderChanged: TypedEventDescription<{
      encodeTopics([previousTokenBinder, newTokenBinder]: [
        string | null,
        string | null
      ]): string[];
    }>;

    TokensApproved: TypedEventDescription<{ encodeTopics([]: []): string[] }>;

    Transfer: TypedEventDescription<{
      encodeTopics([_src, _dst, _amount]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class PCappedSmartPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): PCappedSmartPool;
  attach(addressOrName: string): PCappedSmartPool;
  deployed(): Promise<PCappedSmartPool>;

  on(event: EventFilter | string, listener: Listener): PCappedSmartPool;
  once(event: EventFilter | string, listener: Listener): PCappedSmartPool;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): PCappedSmartPool;
  removeAllListeners(eventName: EventFilter | string): PCappedSmartPool;
  removeListener(eventName: any, listener: Listener): PCappedSmartPool;

  interface: PCappedSmartPoolInterface;

  functions: {
    allowance(_src: string, _dst: string): Promise<BigNumber>;

    approve(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    approveTokens(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(_whom: string): Promise<BigNumber>;

    bind(
      _token: string,
      _balance: BigNumberish,
      _denorm: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    calcTokensForAmount(
      _amount: BigNumberish
    ): Promise<{
      tokens: string[];
      amounts: BigNumber[];
      0: string[];
      1: BigNumber[];
    }>;

    decimals(): Promise<number>;

    decreaseApproval(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getBPool(): Promise<string>;

    getCap(): Promise<BigNumber>;

    getController(): Promise<string>;

    getPublicSwapSetter(): Promise<string>;

    getSwapFee(): Promise<BigNumber>;

    getTokenBinder(): Promise<string>;

    getTokens(): Promise<string[]>;

    increaseApproval(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    init(
      _bPool: string,
      _name: string,
      _symbol: string,
      _initialSupply: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isPublicSwap(): Promise<boolean>;

    name(): Promise<string>;

    pbsSlot(): Promise<string>;

    pcsSlot(): Promise<string>;

    ptSlot(): Promise<string>;

    rebind(
      _token: string,
      _balance: BigNumberish,
      _denorm: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    rpSlot(): Promise<string>;

    setCap(
      _cap: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setController(
      _controller: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setPublicSwap(
      _public: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setPublicSwapSetter(
      _newPublicSwapSetter: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setSwapFee(
      _swapFee: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setTokenBinder(
      _newTokenBinder: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    symbol(): Promise<string>;

    totalSupply(): Promise<BigNumber>;

    transfer(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      _src: string,
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    unbind(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  allowance(_src: string, _dst: string): Promise<BigNumber>;

  approve(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  approveTokens(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  balanceOf(_whom: string): Promise<BigNumber>;

  bind(
    _token: string,
    _balance: BigNumberish,
    _denorm: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  calcTokensForAmount(
    _amount: BigNumberish
  ): Promise<{
    tokens: string[];
    amounts: BigNumber[];
    0: string[];
    1: BigNumber[];
  }>;

  decimals(): Promise<number>;

  decreaseApproval(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getBPool(): Promise<string>;

  getCap(): Promise<BigNumber>;

  getController(): Promise<string>;

  getPublicSwapSetter(): Promise<string>;

  getSwapFee(): Promise<BigNumber>;

  getTokenBinder(): Promise<string>;

  getTokens(): Promise<string[]>;

  increaseApproval(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  init(
    _bPool: string,
    _name: string,
    _symbol: string,
    _initialSupply: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  isPublicSwap(): Promise<boolean>;

  name(): Promise<string>;

  pbsSlot(): Promise<string>;

  pcsSlot(): Promise<string>;

  ptSlot(): Promise<string>;

  rebind(
    _token: string,
    _balance: BigNumberish,
    _denorm: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  rpSlot(): Promise<string>;

  setCap(
    _cap: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setController(
    _controller: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setPublicSwap(
    _public: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setPublicSwapSetter(
    _newPublicSwapSetter: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setSwapFee(
    _swapFee: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setTokenBinder(
    _newTokenBinder: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  symbol(): Promise<string>;

  totalSupply(): Promise<BigNumber>;

  transfer(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferFrom(
    _src: string,
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  unbind(
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Approval(
      _src: string | null,
      _dst: string | null,
      _amount: null
    ): EventFilter;

    CapChanged(setter: string | null, oldCap: null, newCap: null): EventFilter;

    ControllerChanged(
      previousController: string | null,
      newController: string | null
    ): EventFilter;

    LOG_EXIT(
      caller: string | null,
      tokenOut: string | null,
      tokenAmountOut: null
    ): EventFilter;

    LOG_JOIN(
      caller: string | null,
      tokenIn: string | null,
      tokenAmountIn: null
    ): EventFilter;

    PoolExited(from: string | null, amount: null): EventFilter;

    PoolExitedWithLoss(
      from: string | null,
      amount: null,
      lossTokens: null
    ): EventFilter;

    PoolJoined(from: string | null, amount: null): EventFilter;

    PublicSwapSet(setter: string | null, value: boolean | null): EventFilter;

    PublicSwapSetterChanged(
      previousSetter: string | null,
      newSetter: string | null
    ): EventFilter;

    SwapFeeSet(setter: string | null, newFee: null): EventFilter;

    TokenBinderChanged(
      previousTokenBinder: string | null,
      newTokenBinder: string | null
    ): EventFilter;

    TokensApproved(): EventFilter;

    Transfer(
      _src: string | null,
      _dst: string | null,
      _amount: null
    ): EventFilter;
  };

  estimate: {
    allowance(_src: string, _dst: string): Promise<BigNumber>;

    approve(_dst: string, _amount: BigNumberish): Promise<BigNumber>;

    approveTokens(): Promise<BigNumber>;

    balanceOf(_whom: string): Promise<BigNumber>;

    bind(
      _token: string,
      _balance: BigNumberish,
      _denorm: BigNumberish
    ): Promise<BigNumber>;

    calcTokensForAmount(_amount: BigNumberish): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    decreaseApproval(_dst: string, _amount: BigNumberish): Promise<BigNumber>;

    getBPool(): Promise<BigNumber>;

    getCap(): Promise<BigNumber>;

    getController(): Promise<BigNumber>;

    getPublicSwapSetter(): Promise<BigNumber>;

    getSwapFee(): Promise<BigNumber>;

    getTokenBinder(): Promise<BigNumber>;

    getTokens(): Promise<BigNumber>;

    increaseApproval(_dst: string, _amount: BigNumberish): Promise<BigNumber>;

    init(
      _bPool: string,
      _name: string,
      _symbol: string,
      _initialSupply: BigNumberish
    ): Promise<BigNumber>;

    isPublicSwap(): Promise<BigNumber>;

    name(): Promise<BigNumber>;

    pbsSlot(): Promise<BigNumber>;

    pcsSlot(): Promise<BigNumber>;

    ptSlot(): Promise<BigNumber>;

    rebind(
      _token: string,
      _balance: BigNumberish,
      _denorm: BigNumberish
    ): Promise<BigNumber>;

    rpSlot(): Promise<BigNumber>;

    setCap(_cap: BigNumberish): Promise<BigNumber>;

    setController(_controller: string): Promise<BigNumber>;

    setPublicSwap(_public: boolean): Promise<BigNumber>;

    setPublicSwapSetter(_newPublicSwapSetter: string): Promise<BigNumber>;

    setSwapFee(_swapFee: BigNumberish): Promise<BigNumber>;

    setTokenBinder(_newTokenBinder: string): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(_dst: string, _amount: BigNumberish): Promise<BigNumber>;

    transferFrom(
      _src: string,
      _dst: string,
      _amount: BigNumberish
    ): Promise<BigNumber>;

    unbind(_token: string): Promise<BigNumber>;
  };
}
