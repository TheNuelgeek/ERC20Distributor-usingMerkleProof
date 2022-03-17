import { ethers } from "hardhat";
import { IERC20 } from "../typechain";

const batToken = "0xF50F25B5514880c42b65FB883Ccce32A1064f0CD"
async function airdrop(){
    const deployContract = await ethers.getContractFactory("Airdrop")
    const deployc = await deployContract.deploy()
   await deployc.deployed();

    
    const result = await deployc.claimForAddress(100,[
    ] )

    //const result = await stakingContract.claim([], 6, 1);
    const event = await result.wait();
    //console.log(deployc.address)
    //0x4B4b40ce44F0AFCC55358ff4D64680110B97257E


}

airdrop().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });