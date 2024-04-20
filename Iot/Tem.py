from web3 import Web3
import json

# Se connecter à l'instance Ethereum (ganache, infura, etc.)
web3 = Web3(Web3.HTTPProvider('http://localhost:7545'))  # Mettez l'URL de votre nœud Ethereum

# Charger l'ABI du contrat
with open('../hospital-managment-app/src/contracts/ValidatePatient.json') as f:
    contract_data = json.load(f)
contract_abi = contract_data['abi']

# Adresse du contrat
contract_address = "0xB328d2A40d9Ffd8E6DfD1A41a9bb37F3f15FB942"  # Remplacez par l'adresse de votre contrat

# Instanciation du contrat
contract = web3.eth.contract(address=contract_address, abi=contract_abi)

def set_temperature(patient_code, temperature):
    try:
        # Chargement des données blockchain
        accounts = web3.eth.accounts
        valid = contract
        # Appel de la fonction setTemperature du contrat
        tx_hash = valid.functions.setTemperature(patient_code, temperature).transact({'from': accounts[0]})

        # Attendre la confirmation de la transaction
        receipt = web3.eth.waitForTransactionReceipt(tx_hash)

        if receipt.status:
            print("Transaction confirmée : Température du patient", patient_code, "mise à jour avec succès.")
        else:
            print("Erreur : La transaction a échoué.")
    except Exception as e:
        print("Erreur lors de l'exécution de la transaction :", e)

# Exemple d'utilisation
patient_code = "662268c63713f91b08a1779e"  # Code du patient (type string)
temperature = 375  # Température à stocker (type uint256)

set_temperature(patient_code, temperature)
