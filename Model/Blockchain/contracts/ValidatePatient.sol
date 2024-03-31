// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ValidatePatient {
    uint256 public patientCount = 0;

    mapping(uint256 => Patient) public patientsList;

    struct Patient {
        string code;
        string name;
        uint256 temperature;
        bytes32[] hashList;
    }

    event PatientAdded(
        string code,
        string name,
        uint256 temperature,
        bytes32[] hashList
    );

    function addAllPatients(string[][] memory _patients) public {
        for (uint256 i = 0; i < _patients.length; i++) {
            patientCount++;
            bytes32[] memory emptyArray; // Déclaration d'un tableau vide de bytes32
            patientsList[patientCount] = Patient(
                _patients[i][0], // code
                _patients[i][1], // name
                uint256(keccak256(abi.encodePacked(_patients[i][2]))), // temperature, convertir la chaîne en hachage
                emptyArray // hashList, initialisé à un tableau vide
            );
            emit PatientAdded(
                _patients[i][0], // code
                _patients[i][1], // name
                uint256(keccak256(abi.encodePacked(_patients[i][2]))), // temperature
                emptyArray // hashList, initialisé à un tableau vide
            );
        }
    }

    // Fonction pour obtenir toutes les informations des patients
    function getAllPatients() public view returns (
        uint256 count,
        string[] memory codes,
        string[] memory names,
        uint256[] memory temperatures,
        bytes32[][] memory hashLists
    ) {
        count = patientCount;
        codes = new string[](count);
        names = new string[](count);
        temperatures = new uint256[](count);
        hashLists = new bytes32[][](count);

        for (uint256 i = 1; i <= count; i++) {
            codes[i - 1] = patientsList[i].code;
            names[i - 1] = patientsList[i].name;
            temperatures[i - 1] = patientsList[i].temperature;
            hashLists[i - 1] = patientsList[i].hashList;
        }
    }
}
