const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { faker } = require("@faker-js/faker");
const input = "./mynfts";
const output = "./outputs";

let imgCounter = 1;
const imgSize = { width: 500, height: 500 };
const desired_ext = ".png";
const baseURI = "https://ipfs.io/ipfs/IPFS_CID_URL"; //? ****
const attributes = {
  contents: [
    "Tree",
    "Moon",
    "DNA",
    "Mic",
    "Star",
    "Hearts",
    "Rocket",
    "Wifi",
    "Blockchain",
    "Hearts",
    "Dog",
    "Cat",
    "Emoji",
    "Hat",
    "Bells",
    "Atoms",
    "Tele_vision",
    "Plant",
  ],
  environment: [
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
    "Transparent",
  ],
  rarity: Array.from(Array(20).keys()),
};

//File we are dealing with may not come with same extensionm, to deal with that:
fs.readdirSync(input).forEach((file) => {
  const originalExtension = path.extname(file);
  const originalFileName = path.basename(file);
  console.log(originalFileName);
});
