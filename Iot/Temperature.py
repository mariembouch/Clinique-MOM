import Adafruit_DHT
from web3 import Web3
from web3.auto.gethdev import w3
from web3.contract import ConciseContract
from web3.middleware import geth_poa_middleware
import json
sensor = Adafruit_DHT.DHT11
pin = 4
humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
print(temperature)
truffle_path = '/home/pi/Desktop/blockchain'
truffle_file = json.load(open(truffle_path + '/projet_jiddou/GererMedicament.json'))
abi=truffle_file['abi']
bytecode= truffle_file['bytecode']
we3 = Web3 (Web3.HTTPProvider(" http://192.168.137.1:9545"))
contract = we3.eth.contract(abi=abi, address='0xd1Df7a9cBDCa823379C6a87A5b3f6dA8D8349293')

we3.eth.defaultAccount = we3.eth.account.from_key('a334252c9f6336ba1f21cdbc3dfc7b656ca20eaaa4b840b881b90468a56859fc').address

print(we3.eth.getBalance(we3.eth.defaultAccount))
print(we3.eth.defaultAccount)
print(we3.isConnected())
print(med1,max_temp,min_temp)
if (temperature < 16) or (temperature > max_temp):
    if temperature not in mariem[1][1][5]:
        print(mariem[1][0][5])
        transaction=contract.functions.addTemperature(int(temperature)).buildTransaction({'chainId': 4, 'gas':80000, 'nonce': we3.eth.getTransactionCount(we3.eth.defaultAccount)})
        sign_trx= we3.eth.account.signTransaction(transaction, '65b8cee02d4b85ed39dac39f9b6d0902af56ff194d8ff99e2ae2de1a7e308654')
        tx_hash=we3.eth.sendRawTransaction(sign_trx.rawTransaction)
       print(tx_hash)
        
    
