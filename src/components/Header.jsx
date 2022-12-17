import React from 'react'
import ethlogo from '../assets/ethlogo.png'
import { connectWallet } from '../contract'

const Header = () => {

  return (
    <nav className='w-full flex md:justify-center justify-between items-center py-4 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10'>
        <div className='flex flex-row justify-start items-center md:flex-[0.5] flex-initial'>
            <img className='w-15 h-20 cursor-pointer' src={ethlogo} alt="" />
            <span className='text-white text-2xl ml-2 '>Infinity ∞</span>
        </div>
        
        <ul className='md:flex-[0.5] text-white md:flex list-none flex-row justify-between items-center flex-initial px-20'>
          <li className='mx-4 cursor-pointer '>Explore </li>
          <li className='mx-4 cursor-pointer '>Features </li>
          <li className='mx-4 cursor-pointer '>Community </li>
        </ul>

        <button className='bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full shadow-lg shadow-gray-100/50'
        onClick={connectWallet}> Connect Wallet </button>
    </nav>
  )
}

export default Header