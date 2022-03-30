const { DefenderRelaySigner, DefenderRelayProvider } = require('defender-relay-client/lib/ethers');
const { ethers } = require('ethers');

const credentials = { apiKey: '8fn1fyiDFFui3qofp5nf9cJeVv5nqQqv', apiSecret: '5eKas7rVnDvXH7taWSrhMBwL5cyhZzz7k5jR4VFPjAfW8TEPV2bLexTL8UhmYp7p' };
async function relay(){
const provider = new DefenderRelayProvider(credentials);
const signer = new DefenderRelaySigner(credentials, provider, { speed: 'fast' });

const erc20 = new ethers.getContractFactoryAt("ERC20Token", signer)
const ERC20Depoly = await erc20.deploy(name, symbol, dec, totalsupply);
    await ERC20Depoly.deployed();
}