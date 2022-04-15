// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import 'hardhat/console.sol';

contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log('Working with solidity to learn something new...');
    }

    // This function add +1 to 'totalWaves' variable
    function wave() public {
        totalWaves++;
        console.log('%s has waved!', msg.sender); // msg.sender is the wallet address of the person who called the function
    }

    // This fuction returns totalWaves variable
    function getTotalWaves() public view returns (uint) {
        console.log('We have %d total waves!', totalWaves);
        return totalWaves;
    }
}