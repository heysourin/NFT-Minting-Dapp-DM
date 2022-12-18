import contract from './abis/contracts/main.sol/MyToken.json'
import { getGlobalState, setGlobalState } from './store/index'
import { ethers } from 'ethers'

const contractAddress = '0x3535b0E097D93475249D9CaeeFAFF077377dAD72'

const { ethereum } = window
const contractAbi = contract.abi
const openseaURL = `https://testnets.opensea.io/assets/goerli/${contractAddress}/`

const getEthereumContract = () => {
  const connectedAccount = getGlobalState('connectedAccount')
  if (connectedAccount) {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractAbi, signer)

    return contract
  } else {
    return getGlobalState('contract')
  }
}

const isWalletConnected = async () => {
  try {
    if (!ethereum) return alert('Please install Metamsk')
    const accounts = await ethereum.request({ method: 'eth_accounts' })

    //On change on networks on your metamsk wallet
    window.ethereum.on('chainChanges', (chainID) => {
      window.location.reload()
    })
    //After changing the network, the connection:
    window.ethereum.on('chainChanges', async () => {
      setGlobalState('connectedAccount', accounts[0])
      await isWalletConnected()
    })

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0])
    } else {
      alert('Please connect wallet')
      console.log('No accounts found')
    }
  } catch (err) {
    reportError(err)
  }
}

const connectWallet = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setGlobalState('connecteAccount', accounts[0])
  } catch (err) {
    reportError(err)
  }
}

const payToMint = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const connectAccount = getGlobalState('connectedAccount')
    const contract = getEthereumContract()
    const amount = ethers.utils.parseEther('0.0001')

    await contract.payToMint({
      from: connectAccount,
      value: amount._hex,
    })

    await contract.loadNfts()

    window.location.reload()
  } catch (err) {
    console.log(err)
  }
}

const loadNfts = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')

    const contract = getEthereumContract()
    const nfts = await contract.getAllNFTs()

    setGlobalState('nfts', structureNfts(nfts))
    console.log(structureNfts(nfts))
  } catch (err) {
    reportError(err)
  }
}

const reportError = (error) => {
  console.log(error.message)
  throw new Error('No Ethereum Object Found')
}

const structureNfts = (nfts) =>
  nfts
    .map((nft) => ({
      id: Number(nft.id),
      url: openseaURL + nft.id,
      buyer: nft.buyer,
      imageURL: nft.imageURL,
      cost: parseInt(nft.cost._hex) / 10 ** 18,
      timestamp: new Date(nft.timestamp.toNumber()).getTime(),
    }))
    .reverse()

export { isWalletConnected, connectWallet, payToMint, loadNfts }
