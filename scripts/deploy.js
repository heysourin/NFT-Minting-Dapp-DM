const { ethers } = require("hardhat");
const fs = require("fs");
const hre = require("hardhat");

async function main() {
  const baseURI ="https://ipfs.io/ipfs/QmRbe5UJNkh8Ma7uBeTS3EgKSJ1KTMUhc6UaHQVkgSDU92/";

  const Contract = await hre.ethers.getContractFactory("MyToken");
  const contract = await Contract.deploy("3D NFT Arts", "3DNFT", baseURI);

  await contract.deployed();

  console.log(`Your contract deployed to ${contract.address}`);
  // const address = JSON.stringify({ address: contract.address }, null, 4);
  // fs.writeFile('./src/abis/contractAddress')
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
