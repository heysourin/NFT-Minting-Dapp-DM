const { ethers } = require("hardhat");
const fs = require("fs");
const hre = require("hardhat");

async function main() {
  // const baseURI ="https://ipfs.io/ipfs/bafybeign3qg4ycyfrg37cepmucueqvo6r3nuafixmzsy2uiemdc3ez2ije/";
  // const baseURI ="https://bafybeifqatrjr2gm5dxm2cuq7dz3ba4fbzhkdyaf7lzxt4ktynr26t3soi.ipfs.nftstorage.link/";
  const baseURI ="https://ipfs.io/ipfs/bafybeifqatrjr2gm5dxm2cuq7dz3ba4fbzhkdyaf7lzxt4ktynr26t3soi/";

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
