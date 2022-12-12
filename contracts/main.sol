// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC721Enumerable, Ownable {
    using Strings for uint256; //Converting uint to string

    string baseURI;
    string public baseImage = ".webp";
    string public baseExtension = ".json"; //Used for gathering informaation for each nft
    uint public cost = 0.0001 ether; //Cost to mint each nft
    uint public maxSupply = 99;
    bool public paused = false;

    event Sale(
        uint id,
        address indexed buyer,
        uint cost,
        string indexed tokenURI,
        uint timestamp
    );

    struct SaleStruct {
        uint id;
        address buyer;
        uint cost;
        string imageURL;
        uint timestamp;
    }

    SaleStruct[] public minted;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initBaseURI
    ) ERC721(_name, _symbol) {
        setBaseURI(_initBaseURI);
    }

    //This function will allow user to mint a token on exchange of some ethers
    
    function payToMint() public payable {
        uint supply = totalSupply(); //total available supply
        require(!paused, "On Pause, NFT Under Maintenance");
        require(supply <= maxSupply, "Sorry, all NFTs have been minted");
        require(msg.value > 0 ether, "Too low");

        if (msg.sender != owner()) {
            require(msg.value >= cost, "Please top up ethers");
        }

        _safeMint(msg.sender, supply + 1);

        minted.push(
            SaleStruct(
                supply + 1,
                msg.sender,
                msg.value,
                toImage(supply + 1),
                block.timestamp
            )
        );

        emit Sale(
            supply,
            msg.sender,
            msg.value,
            tokenURI(supply + 1),
            block.timestamp
        );
    }

    //This function takes a token ID as input and checks that the token exists before returning its URI.
    function tokenURI(
        uint tokenId
    ) public view virtual override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseExtension
                    )
                )
                : "";
    }

    //This function takes a token ID as input and uses the token's base URI and ID to construct the image URL.
    function toImage(uint tokenId) internal view returns (string memory) {
        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseImage
                    )
                )
                : "";
    }

    function getAllNFTs() public view returns (SaleStruct[] memory) {
        return minted;
    }

    function getAnNFT(uint tokenId) public view returns (SaleStruct memory) {
        return minted[tokenId - 1];
    }

    function payTo(address to, uint amount) public onlyOwner {
        //This function allows token owner to send ether to a specific address
        (bool success1, ) = payable(to).call{value: amount}("");
        require(success1);
    }

    function setBaseURI(string memory _newBAseURI) public onlyOwner {
        //This function allows user to set baseURI
        baseURI = _newBAseURI;
    }

    function setPause(bool _state) public onlyOwner {
        paused = _state;
    }

    function _basaeURI() internal view virtual returns (string memory) {
        return baseURI;
    }
}
