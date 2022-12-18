import React from 'react'
import avatar from '../assets/owner.jpg'
import { SocialIcon } from 'react-social-icons'
import { setAlert, setGlobalState, setLoadingMsg, useGlobalState } from '../store'
import contract, { payToMint } from '../contract'
// import Artworks from './Artworks'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')
  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert('Minting successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }
  return (
    <div
      className="bg-[url('https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')]
        bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <h1 className="text-white text-5xl font-bold text-center">
          3D Arts <br />
          <span>NFTs </span>Collection
        </h1>

        <p className="text-white font-semibold text-sm">
          Mint & Collect The Hottest NFTs Around
        </p>

        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-3"
          onClick={onMintNFT}
        >
          Mint NFT
        </button>

        <a
          href="https://github.com/heysourin"
          className="flex justiy-center items-center space-x-2 bg-[#000000ad] rounded-full my-4 pr-3"
        >
          <img
            className="w-11 h-11 object-contain rounded-full"
            src={avatar}
            alt=""
          />
          <div className="flex flex-col text-white font-semibold text-sm">
            <span>0x5465..1a3</span>
            <span className="text-[#e32970]">Max</span>
          </div>
        </a>

        {/* Social Medias  */}
        <ul className="flex flex-row justify-center space-x-0.5 items-center">
          {/* <div className="flex items-center space-x-6 lg:space-x-5"> */}
          <SocialIcon
            className="bg-white scale-75 hover:scale-50 transition-all duration-75 delay-75 rounded-full"
            url="https://github.com/heysourin"
            target="_blank"
          />
          <SocialIcon
            className="bg-white scale-75 hover:scale-50 transition-all duration-75 delay-75 rounded-full"
            url="https://linkedin.com/in/heysourin"
            target="_blank"
          />
          <SocialIcon
            className="bg-white scale-75 hover:scale-50 transition-all duration-75 delay-75 rounded-full"
            url="https://twitter.com/heysourin"
            target="_blank"
          />
          <SocialIcon
            className="bg-white scale-75 hover:scale-50 transition-all duration-75 delay-75 rounded-full"
            url="https://instagram.com/hey.sourin"
            target="_blank"
          />
          <SocialIcon
            className="bg-white scale-75 hover:scale-50 transition-all duration-75 delay-75 rounded-full"
            url="https://discord.com/channels/heysourin#9127"
            target="_blank"
          />
        </ul>

        {/* NFT Count  */}
        <div className="shadow-xl shadow-black flex justify-center items-center w-10 h-10 rounded-full bg-white cursor-pointer p-3 m-4 text-black hover:bg-[#000] hover:text-white transaction-all duration-75 delay-100 ">
          <span className="text-md font-bold">{nfts.length}/20</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
// src\assets\heroimage.png
//Photo by Uzunov Rostislav from Pexels: https://www.pexels.com/photo/digital-animation-of-colorful-tape-rolls-10458835/
