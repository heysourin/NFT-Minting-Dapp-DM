import React from 'react'
import ethlogo from '../assets/ethlogo.png'


const Footer = () => {
  return (
    <div className="w-full flex md:justify-center sm:justify-between items-center flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full flex flex-col justify-between items-center my-4">
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white text-base text-center mx-2 font-semibold">
          <p className="mx2 cursor-pointer">Explore</p>
          <p className="mx2 cursor-pointer">Features</p>
          <p className="mx2 cursor-pointer">Commmunity</p>
        </div>
        <div className='flex justify-center items-center mt-3'>
            <img className='w-8' src={ethlogo} alt="Logo"  />
            <span className='text-white text-sm'>Infinity © 2018-2022 ~ ❤️‍🔥 Max</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
