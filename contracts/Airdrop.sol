pragma solidity ^0.8.4;
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
//import "@openzeppelin/contracts/interfaces/IMerkleDistributor.sol";
contract Airdrop{
    //  onlyUnclaimedAddress(msg.sender, _airdropId)
    //     Merkle tree contract--Token Distributor

    // - use my script to generate a merkle tree 
    // args used -- user address,amount of tokens, index
    // - store the root in the contract
    // - deploy on a testnet and verify
    // - make a user claim 

    // use: https://github.com/aavegotchi/merkle-airdrop
    struct AddressAirdrop {
    // string name;
    // uint256 airdropID;
    bytes32 merkleRoot;
    uint256 maxUsers;
    // uint256[] itemIDs;
    uint256 claims;
    // address tokenAddress;
    }

    event AddressClaim(address account,uint256 amount);

    mapping(address => AddressAirdrop) addressTostruct;
    address bat = 0xF50F25B5514880c42b65FB883Ccce32A1064f0CD;

    function claimForAddress(
        uint256 _amount,
        bytes32[] calldata _merkleProof
    ) external {
        AddressAirdrop storage drop = addressTostruct[msg.sender];
        require(drop.maxUsers > 0, "Airdrop is not created yet");
        // Verify the merkle proof.
        bytes32 node = keccak256(abi.encodePacked(msg.sender, _amount));
        bytes32 merkleRoot = drop.merkleRoot;
        //address token = drop.tokenAddress;
        require(MerkleProof.verify(_merkleProof, merkleRoot, node), "MerkleDistributor: Invalid proof.");

        IERC20(bat).transfer( msg.sender, _amount);
     
        emit AddressClaim(msg.sender, _amount);
    }
}
