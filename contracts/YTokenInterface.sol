/* SPDX-License-Identifier: LGPL-3.0-or-later */
pragma solidity ^0.7.1;

import "./YTokenStorage.sol";

/**
 * @title YTokenInterface
 * @author Mainframe
 */
abstract contract YTokenInterface is YTokenStorage {
    /**
     * NON-CONSTANT FUNCTIONS
     */
    function borrow(uint256 borrowAmount) external virtual returns (bool);

    function burn(address holder, uint256 burnAmount) external virtual returns (bool);

    function liquidateBorrow(address borrower, uint256 repayAmount) external virtual view returns (bool);

    function mint(address beneficiary, uint256 borrowAmount) external virtual returns (bool);

    function repayBorrow(uint256 repayAmount) external virtual returns (bool);

    function repayBorrowBehalf(address borrower, uint256 repayAmount) external virtual returns (bool);

    /**
     * EVENTS
     */
    event Borrow(address indexed account, uint256 repayAmount);

    event RepayBorrow(address indexed payer, address indexed borrower, uint256 repayAmount);
}
