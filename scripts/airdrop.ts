import { ethers } from "hardhat";
import { IERC20 } from "../typechain";

const batToken = "0xBF1f5A50e35B8E52182a7Db39d2d877d335E8380"
async function airdrop(){
    const deployContract = await ethers.getContractAt("Airdrop", "0x7Fe50431F262aE27F4Cbe0084605B4Ad273C410A")
    // const deployc = await deployContract.deploy()
    // await deployc.deployed();

    
    await deployContract.claimForAddress("2000000000000000000",[
        "0xcc5d4e3390ede0c11f1c911108b987f89764e85370d160b64e9a212ad743ffc6"
],"0xe85eb8c285b2e1d933a4a8447306cf7771d22838025754b8800056b945f4aaa9" )

    //const result = await stakingContract.claim([], 6, 1);
   // const event = await result.wait();
    //console.log(await deployc.address)
    //0x4B4b40ce44F0AFCC55358ff4D64680110B97257E


}

airdrop().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });