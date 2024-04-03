// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract Auth {
    uint public userCount = 0;
    address public adminAddress;

    mapping(string => User) public usersList;
    address[] public userList; // Store the addresses of all users

    struct User {
        address add;
        string username;
        string email;
        string password;
        string role;
    }

    event UserCreated(
        address add,
        string username,
        string email,
        string password,
        string role
    );

    constructor() {
        adminAddress = 0x2C858A719fb1dEd3eFb6eD248eF93d53d3AFBD7B;
        createUser(
            adminAddress,
            "Mariem Turki",
            "mariem.turki@isimg.tn",
            "mariem123",
            "admin"
        );
    }

    function getAdminAddress() public view returns (address) {
        return adminAddress;
    }

    function createUser(address _add, string memory _username, string memory _email, string memory _password, string memory _role) public {
        userCount++;
        usersList[_email] = User(_add, _username, _email, _password, _role);
        userList.push(_add); // Add the user's address to the user list
        emit UserCreated(_add, _username, _email, _password, _role);
    }

  
}
