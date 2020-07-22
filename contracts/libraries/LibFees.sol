pragma solidity ^0.6.4;

import "./Math.sol";
import "./LibPoolToken.sol";
import {PV2SmartPoolStorage as P2Storage} from "../storage/PV2SmartPoolStorage.sol";
import {PCTokenStorage as PCStorage} from "../storage/PCTokenStorage.sol";

library LibFees {
  using Math for uint256;

  uint256 constant public MAX_ANNUAL_FEE = 1 ether / 10; // Max annual fee

  event AnnualFeeClaimed(uint256 amount);
  event AnnualFeeChanged(uint256 _oldFee, uint256 _newFee);

  function calcOutstandingAnnualFee() internal view returns (uint256) {
    P2Storage.StorageStruct storage v2s = P2Storage.load();
    uint256 totalSupply = PCStorage.load().totalSupply;

    uint256 lastClaimed = v2s.lastAnnualFeeClaimed;

    if (lastClaimed == 0) {
      return 0;
    }

    uint256 timePassed = block.timestamp.bsub(lastClaimed);
    // TODO check this calc;
    return totalSupply.mul(v2s.annualFee).div(10**18).mul(timePassed).div(365 days);
  }

  function chargeOutstandingAnnualFee() internal {
    PCStorage.StorageStruct storage tokenStorage = PCStorage.load();
    P2Storage.StorageStruct storage v2s = P2Storage.load();
    uint256 outstandingFee = calcOutstandingAnnualFee();

    if (outstandingFee == 0) {
      v2s.lastAnnualFeeClaimed = block.timestamp;
      return;
    }

    tokenStorage.totalSupply = tokenStorage.totalSupply.badd(outstandingFee);
    LibPoolToken._mint(v2s.feeRecipient, outstandingFee);

    v2s.lastAnnualFeeClaimed = block.timestamp;

    emit AnnualFeeClaimed(outstandingFee);
  }

  function setAnnualFee(uint256 _newFee) internal {
    require(_newFee <= MAX_ANNUAL_FEE, "LibFees.setAnnualFee: Annual fee too high");
    emit AnnualFeeChanged(P2Storage.load().annualFee, _newFee);
    P2Storage.load().annualFee = _newFee;
  }
}
