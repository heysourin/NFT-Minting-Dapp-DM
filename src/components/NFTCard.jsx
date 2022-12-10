import React from 'react'
import ethlogo2 from "../assets/ethlogo2.png"

const NFTCard = () => {
    const BASE_URI = `https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg`;

  return (
    <div className="flex flex-wrap justify-start items-center mt-4">
    <div
      className="relative shadow-xl shadow-black p-3 bg-white rounded-lg item w-64 h-64 object-contain bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
      style={{ backgroundImage: `url(${BASE_URI}.webp)` }}
    >
      <div className='absolute bottom-0 left-0 right-0 flex justify-between items-center label-gradient p-2 w-full text-white text-sm bg-[#0000009a]'>
        <p className='font-bold'>
          Max NFT #1
        </p>
        <div className='flex justify-center items-center space-x-2'>

        <img src={ethlogo2} alt="Logo" className='h-5 w-6'/>3.4
        </div>
      </div>
    </div>
  </div>
  )
}

export default NFTCard