// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract crud{
    string name;
    constructor (string memory _name){
        name = _name;
    }

    function getName() public view returns (string memory){
        return name;
    }

    function updateName(string memory _name)public{
        name = _name;
    }

    function deleteName() public returns (bool){
        name = "";
        return true;
    }

}