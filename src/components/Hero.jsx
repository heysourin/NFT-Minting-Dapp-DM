import React from 'react'
import avatar from "../assets/owner.jpg"

const Hero = () => {
  return (
    <div
      className="bg-[url('https://pixabay.com/get/g0f745cf3ea76c4de1fd68cff7c3eb516c9f6c995ab684b9e0b0c3c7aae4cef6177e2bf87cc7db5fe2108f6942aff8594a73e224e3c1b952f7fc21f390646502b_1920.jpg')]
        bg-no-repeat bg-cover">

      <div className="flex flex-col justify-center items-center mx-auto py-10">

        <h1 className="text-white text-5xl font-bold text-center">A.I Arts <br />
        <span>NFTs </span>Collection
        </h1>

        <p className='text-white font-semibold text-sm'>Mint & COllect The Hottest NFTs Around</p>

        <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-3">Mint NFT</button>


        <a href="https://daltonic.github.io" className='flex justiy-center items-center space-x-2 bg-[#000000ad] rounded-full my-4 pr-3'>
            <img className='w-11 h-11 object-contain rounded-full' src={avatar} alt="" />
            <div className='flex flex-col text-white font-semibold text-sm'>
                <span>0x5465..1a3</span>
                <span className='text-[#e32970]'>Ryle</span>
            </div>
        </a>

        
      </div>
    </div>
  )
}

export default Hero
// src\assets\heroimage.png