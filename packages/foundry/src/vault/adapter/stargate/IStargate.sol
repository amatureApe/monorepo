// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.15;

// Stargate sToken (wrapped underlying)
interface ISToken {
  function approve(address spender, uint256 value) external;

  function router() external view returns (address);

  function balanceOf(address user) external view returns (uint256);
}

interface IStargateStaking {
  function poolInfo(uint256 pid)
    external
    view
    returns (
      address lpToken,
      uint256 allocPoint,
      uint256 lastRewardBlock,
      uint256 accStargatePerShare
    );

  function pendingStargate(uint256 pid, address user) external view returns (uint256);

  function stargate() external view returns (address);

  function deposit(uint256 pid, uint256 amount) external;

  function withdraw(uint256 pid, uint256 amount) external;
}

interface IStargateRouter {
  function addLiquidity(
    uint256 pid,
    uint256 amount,
    address to
  ) external;

  function instantRedeemLocal(
    uint16 srcPoolId,
    uint256 amount,
    address to
  ) external;
}