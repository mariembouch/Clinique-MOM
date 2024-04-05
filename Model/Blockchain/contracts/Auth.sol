// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract Auth {

    address public adminAddress;
    bool public adminCreated;
    string public adminUsername;
    string public adminEmail;
    string public adminPassword;

    event AdminCreated(
        address add,
        string username,
        string email,
        string password
    );

    constructor() {
        adminAddress = 0xA598B97C46320Cc45AeE4110B715BA998A4D4e5a;
        adminUsername = "Mariem Turki";
        adminEmail = "mariem.turki@isimg.tn";
        adminPassword = "mariem123";
        adminCreated = true;
        emit AdminCreated(
            adminAddress,
            adminUsername,
            adminEmail,
            adminPassword
        );
    }

    function getAdminAddress() public view returns (address) {
        return adminAddress;
    }

    function getEmailAdmin() public view returns (string memory) {
        return adminEmail;
    }

    function getPasswordAdmin() public view returns (string memory) {
        return adminPassword;
    }


    bool public doctorCreated;

    struct Doctor {
        address add;
        string username;
        string email;
        string password;
    }
    mapping(string => Doctor) public doctorsList;
    address[] public doctorAddresses;

    event DoctorCreated(
        address add,
        string username,
        string email,
        string password
    );

    function createDoctor(address _add, string memory _username, string memory _email, string memory _password) public {
        require(msg.sender == adminAddress, "Only admin can create doctor");
        doctorsList[_email] = Doctor(_add, _username, _email, _password);
        doctorAddresses.push(_add);
        doctorCreated = true;
        emit DoctorCreated(_add, _username, _email, _password);
    }
   function getDoctorsList() public view returns (address[] memory) {
        return doctorAddresses;
    }
   function getDoctorAddress(string memory _email) public view returns (address) {
    return doctorsList[_email].add;
}

function getDoctorPassword(string memory _email) public view returns (string memory) {
    return doctorsList[_email].password;
}

 
    bool public assistantCreated;

struct Assistant {
    address add;
    string username;
    string email;
    string password;
}

mapping(string => Assistant) public assistantsList;
address[] public assistantAddresses;

event AssistantCreated(
    address add,
    string username,
    string email,
    string password
);

function createAssistant(address _add, string memory _username, string memory _email, string memory _password) public {
    require(msg.sender == adminAddress, "Only admin can create assistant");
    assistantsList[_email] = Assistant(_add, _username, _email, _password);
    assistantAddresses.push(_add);
    assistantCreated = true;
    emit AssistantCreated(_add, _username, _email, _password);
}

function getAssistantAddress(string memory _email) public view returns (address) {
    return assistantsList[_email].add;
}


function getAssistantPassword(string memory _email) public view returns (string memory) {
    return assistantsList[_email].password;
}

function getAssistantsList() public view returns (address[] memory) {
    return assistantAddresses;
}

}
