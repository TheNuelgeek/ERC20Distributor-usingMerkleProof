import { ethers } from "hardhat";
const { DefenderRelaySigner, DefenderRelayProvider } = require('defender-relay-client/lib/ethers');

const name:string = "Bored Ape Token";
const symbol:string = "BAT";
const dec:number = 18;
const totalsupply = "100000000000000000000000000000000000000";
const credentials = { apiKey: '8fn1fyiDFFui3qofp5nf9cJeVv5nqQqv', apiSecret: '5eKas7rVnDvXH7taWSrhMBwL5cyhZzz7k5jR4VFPjAfW8TEPV2bLexTL8UhmYp7p' };

async function erc20(){
    const provider = new DefenderRelayProvider(credentials);
const signer = new DefenderRelaySigner(credentials, provider, { speed: 'fast' });

    const ERC20 = await ethers.getContractFactory("ERC20Token");
    const ERC20Depoly = await ERC20.connect(signer).deploy(name, symbol, dec, totalsupply);
    await ERC20Depoly.deployed()

    console.log(await ERC20Depoly.address);

    
}

erc20().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });   