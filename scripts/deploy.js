const { ethers } = require("hardhat");
const fs = require("fs");
const hre = require("hardhat");

async function main() {

  const Contract = await hre.ethers.getContractFactory("MyToken");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log(
    `Your contract deployed to ${contract.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
