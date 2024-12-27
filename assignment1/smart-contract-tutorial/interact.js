require('dotenv').config();
const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

const provider = 'ethereum-holesky-rpc.publicnode.com';
const web3 = new Web3(provider);

// Contract details
const contractAddress = '0x8d05a8A0D9dD6Dd7010aE766D52856995F0f9cAE';
const abi = require('./MyContractAbi.json');
const myContract = new web3.eth.Contract(abi, deployedAddress);
myContract.handleRevert = true;
const account = process.env.ACCOUNT_ADDRESS;

const contract = new web3.eth.Contract(contractABI, contractAddress);

const interact = async () => {
	try {
		const balance = await contract.methods.getBalance().call();
		console.log('Contract balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');

		const tx = await web3.eth.sendTransaction({
			from: account,
			to: contractAddress,
			value: web3.utils.toWei('0.1', 'ether'),
			gas: 5000000, // Increased gas limit
		});
		console.log('Transaction hash:', tx.transactionHash);

		// Withdraw Ether (only if you are the owner)
		await contract.methods.withdraw().send({ from: account, gas: 500000 });
		console.log('Withdrawal successful!');
	} catch (error) {
		console.error('Error during interaction:', error);
	}
};
interact()

interact().catch(console.error);

interact().catch(console.error);