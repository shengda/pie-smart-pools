pragma solidity 0.6.4;

import {PBasicSmartPoolStorage as PBStorage} from "../storage/PBasicSmartPoolStorage.sol";
import {PCTokenStorage as PCStorage} from "../storage/PCTokenStorage.sol";
import "./LibFees.sol";

import "./LibPoolToken.sol";
import "./LibUnderlying.sol";
import "./Math.sol";


library LibPoolEntryExit {
  using Math for uint256;

  event LOG_EXIT(address indexed caller, address indexed tokenOut, uint256 tokenAmountOut);
  event LOG_JOIN(address indexed caller, address indexed tokenIn, uint256 tokenAmountIn);
  event PoolExited(address indexed from, uint256 amount);
  event PoolExitedWithLoss(address indexed from, uint256 amount, address[] lossTokens);
  event PoolJoined(address indexed from, uint256 amount);

  function exitPool(uint256 _amount) external {
    IBPool bPool = PBStorage.load().bPool;
    LibFees.chargeOutstandingAnnualFee();
    uint256 poolTotal = PCStorage.load();
    uint256 ratio = _amount.bdiv(poolTotal);
    require(ratio != 0);

    LibPoolToken._burn(msg.sender, _amount);

    address[] memory tokens = bPool.getCurrentTokens();

    for (uint256 i = 0; i < tokens.length; i++) {
      address t = tokens[i];
      uint256 bal = bPool.getBalance(t);
      uint256 tAo = ratio.bmul(bal);
      emit LOG_EXIT(msg.sender, t, tAo);
      LibUnderlying._pushUnderlying(t, msg.sender, tAo, bal);
    }
    emit PoolExited(msg.sender, _amount);
  }

  function exitswapPoolAmountIn(address _token, uint256 _poolAmountIn)
    external
    returns (uint256 tokenAmountOut)
  {
    IBPool bPool = PBStorage.load().bPool;
    LibFees.chargeOutstandingAnnualFee();
    require(bPool.isBound(_token), "PBasicSmartPool.exitswapPoolAmountIn: Token Not Bound");

    tokenAmountOut = bPool.calcSingleOutGivenPoolIn(
      bPool.getBalance(_token),
      bPool.getDenormalizedWeight(_token),
      PCStorage.load().totalSupply,
      bPool.getTotalDenormalizedWeight(),
      _poolAmountIn,
      bPool.getSwapFee()
    );

    emit LOG_EXIT(msg.sender, _token, tokenAmountOut);

    LibPoolToken._burn(msg.sender, _poolAmountIn);

    emit PoolExited(msg.sender, tokenAmountOut);

    uint256 bal = bPool.getBalance(_token);
    LibUnderlying._pushUnderlying(_token, msg.sender, tokenAmountOut, bal);

    return tokenAmountOut;
  }

  function exitswapExternAmountOut(address _token, uint256 _tokenAmountOut)
    external
    returns (uint256 poolAmountIn)
  {
    IBPool bPool = PBStorage.load().bPool;
    LibFees.chargeOutstandingAnnualFee();
    require(bPool.isBound(_token), "PBasicSmartPool.exitswapExternAmountOut: Token Not Bound");

    poolAmountIn = bPool.calcPoolInGivenSingleOut(
      bPool.getBalance(_token),
      bPool.getDenormalizedWeight(_token),
      PCStorage.load().totalSupply,
      bPool.getTotalDenormalizedWeight(),
      _tokenAmountOut,
      bPool.getSwapFee()
    );

    emit LOG_EXIT(msg.sender, _token, _tokenAmountOut);

    LibPoolToken._burn(msg.sender, poolAmountIn);

    emit PoolExited(msg.sender, _tokenAmountOut);

    uint256 bal = bPool.getBalance(_token);
    LibUnderlying._pushUnderlying(_token, msg.sender, _tokenAmountOut, bal);

    return poolAmountIn;
  }

  function exitPoolTakingloss(uint256 _amount, address[] calldata _lossTokens) external {
    IBPool bPool = PBStorage.load().bPool;
    LibFees.chargeOutstandingAnnualFee();
    uint256 poolTotal = PCStorage.load().totalSupply;
    uint256 ratio = _amount.bdiv(poolTotal);
    require(ratio != 0);

    LibPoolToken._burn(msg.sender, _amount);

    address[] memory tokens = bPool.getCurrentTokens();

    for (uint256 i = 0; i < tokens.length; i++) {
      // If taking loss on token skip one iteration of the loop
      if (_contains(tokens[i], _lossTokens)) {
        continue;
      }
      address t = tokens[i];
      uint256 bal = bPool.getBalance(t);
      uint256 tAo = ratio.bmul(bal);
      emit LOG_EXIT(msg.sender, t, tAo);
      LibUnderlying._pushUnderlying(t, msg.sender, tAo, bal);
    }
    emit PoolExitedWithLoss(msg.sender, _amount, _lossTokens);
  }

  /**
        @notice Searches for an address in an array of addresses and returns if found
        @param _needle Address to look for
        @param _haystack Array to search
        @return If value is found
    */
  function _contains(address _needle, address[] memory _haystack) internal pure returns (bool) {
    for (uint256 i = 0; i < _haystack.length; i++) {
      if (_haystack[i] == _needle) {
        return true;
      }
    }
    return false;
  }

  function joinPool(uint256 _amount) external {
    IBPool bPool = PBStorage.load().bPool;
    LibFees.chargeOutstandingAnnualFee();
    uint256 poolTotal = PCStorage.load().totalSupply;
    uint256 ratio = _amount.bdiv(poolTotal);
    require(ratio != 0);

    address[] memory tokens = bPool.getCurrentTokens();

    for (uint256 i = 0; i < tokens.length; i++) {
      address t = tokens[i];
      uint256 bal = bPool.getBalance(t);
      uint256 tokenAmountIn = ratio.bmul(bal);
      emit LOG_JOIN(msg.sender, t, tokenAmountIn);
      LibUnderlying._pullUnderlying(t, msg.sender, tokenAmountIn, bal);
    }
    LibPoolToken._mint(msg.sender, _amount);
    emit PoolJoined(msg.sender, _amount);
  }

  function joinswapExternAmountIn(address _token, uint256 _amountIn)
    external
    returns (uint256 poolAmountOut)
  {
    IBPool bPool = PBStorage.load().bPool;
    LibFees.chargeOutstandingAnnualFee();
    require(bPool.isBound(_token), "LibPoolEntryExit.joinswapExternAmountIn: Token Not Bound");

    poolAmountOut = bPool.calcPoolOutGivenSingleIn(
      bPool.getBalance(_token),
      bPool.getDenormalizedWeight(_token),
      PCStorage.load().totalSupply,
      bPool.getTotalDenormalizedWeight(),
      _amountIn,
      bPool.getSwapFee()
    );

    emit LOG_JOIN(msg.sender, _token, _amountIn);

    LibPoolToken._mint(msg.sender, poolAmountOut);

    emit PoolJoined(msg.sender, poolAmountOut);

    uint256 bal = bPool.getBalance(_token);
    LibUnderlying._pullUnderlying(_token, msg.sender, _amountIn, bal);

    return poolAmountOut;
  }

  function joinswapPoolAmountOut(address _token, uint256 _amountOut)
    external
    returns (uint256 tokenAmountIn)
  {
    IBPool bPool = PBStorage.load().bPool;
    LibFees.chargeOutstandingAnnualFee();
    require(bPool.isBound(_token), "LibPoolEntryExit.joinswapPoolAmountOut: Token Not Bound");

    tokenAmountIn = bPool.calcSingleInGivenPoolOut(
      bPool.getBalance(_token),
      bPool.getDenormalizedWeight(_token),
      PCStorage.load().totalSupply,
      bPool.getTotalDenormalizedWeight(),
      _amountOut,
      bPool.getSwapFee()
    );

    emit LOG_JOIN(msg.sender, _token, tokenAmountIn);

    LibPoolToken._mint(msg.sender, _amountOut);

    emit PoolJoined(msg.sender, _amountOut);

    uint256 bal = bPool.getBalance(_token);
    LibUnderlying._pullUnderlying(_token, msg.sender, tokenAmountIn, bal);

    return tokenAmountIn;
  }
}
