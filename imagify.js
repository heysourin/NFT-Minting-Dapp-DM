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
  weapon: [
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

  //   const originalFileName = path.basename(file);//eg: image1.png and so on

  //split it whereever fina a `.` and grab first part of it ie [0]
  const originalFileName = path.basename(file).split(".")[0]; //eg: image1
  console.log(originalFileName);

  if ([".jpg", "jpeg", ".png", ".gif", ".webp"].includes(originalExtension)) {
    const id = imgCounter;

    const metadata = {
      id,
      name: "Max NFT #${id}",
      description: "3D Arts NFT Collection",
      price: 0.0001,
      demand: faker.random.numeric({ min: 10, max: 100 }),
      attributes: [
        {
          trait_type: "Environment",
          value: attributes.environment.sort(() => 0.5 - Math.random())[0],
        },
        {
          trait_type: "Weapon",
          value: attributes.environment.sort(() => 0.5 - Math.random())[0],
        },
        {
          trait_type: "Rarity",
          value: attributes.environment.sort(() => 0.5 - Math.random())[0],
          max_value: 10,
        },
        {
          display_type: "date",
          trait_type: "Created",
          value: Date.now(),
        },
        {
          display_type: "number",
          trait_type: "generation",
          value: 1,
        },
      ],
    };
  }
});

//  Inside packages: under scripts:  "process": "node imagify.js"
//On terminal: `npm run process`
//