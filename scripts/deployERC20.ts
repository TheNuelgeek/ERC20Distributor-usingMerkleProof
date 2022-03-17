import { ethers } from "hardhat";

const name:string = "Bored Ape Token";
const symbol:string = "BAT";
const dec:number = 18;
const totalsupply = "100000000000000000000000000000000000000";

async function erc20(){
    const ERC20 = await ethers.getContractFactory("ERC20Token");
    const ERC20Depoly = await ERC20.deploy(name, symbol, dec, totalsupply);
    await ERC20Depoly.deployed();

    console.log(await ERC20Depoly.address);
}

erc20().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });   