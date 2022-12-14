import {React,  useState, useEffect } from 'react'
import ethlogo2 from '../assets/ethlogo2.png'

const Artworks = ({ artworks }) => {
  const [count] = useState(1)
  const [end, setEnd] = useState(1)
  const [nfts, setNfts] = useState([])

  const getNFTs = () => {
    return artworks.slice(0, end)
  }

  useEffect(() => {
    setNfts(getNFTs())
  }, [artworks, end])

  return (
    <div className="bg-[#131835] py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-4xl uppercase font-bold text-white">Artworks</h4>

        <div className="flex flex-wrap justify-center items-center mt-4">
          {nfts.map((nft, i) => (
            <a
              key={i}
              href={nft.url}
              className="relative shadow-xl shadow-black p-3 bg-white rounded-lg item w-64 h-64 object-contain bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
              style={{ backgroundImage: `url(${nft.imageURL}.webp)` }}
            >
              <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center label-gradient p-2 w-full text-white text-sm bg-[#0000009a]">
                <p className="font-bold">Max NFT #{nft.id}</p>
                <div className="flex justify-center items-center space-x-2">
                  <img src={ethlogo2} alt="Logo" className="h-5 w-6" />
                  {nfts.cost}
                </div>
              </div>
            </a>
          ))}
        </div>

        {artworks.length > 0 && artworks.length > nfts.length ? (
          <div className="flex justify-center items-center mx-auto mt-4">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => setEnd(end + count)}
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}


export default Artworks
