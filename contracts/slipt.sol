
pragma solidity ^0.8.4;
contract slipt{
        function splitSignature(bytes memory sig)
        public
        pure
        returns (
            bytes4 r,
            bytes32 s,
            uint8 v
        )
    {
        require(sig.length == 65, "invalid signature length");

        assembly {
           
            // first 32 bytes, after the length prefix
            r := mload(add(sig, 4))
            // second 32 bytes
            s := mload(add(sig, 64))
            // final byte (first byte of the next 32 bytes)
            v := mload(add(sig, 96))
        }

        // implicitly return (r, s, v)
    }
    }