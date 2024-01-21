import { useEffect, useState } from 'react'
import Web3 from 'web3'
import erc721abi from '../../erc721abi'
import { useForm } from 'react-hook-form'
import Detail from '../../components/Detail'
import Styled from './Create.styled'

function CreatePage() {
  const [web3, setWeb3] = useState()
  const [mintedNft, setMintedNft] = useState()
  const [mintsuccess, setMintsuccess] = useState(false)

  let contractAddr = '0x0DcF7226741313910935048A5ddAF110c6146526'
  const userAddr = localStorage.getItem('isLoggedIn')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const { title, artist, description, image_url = '' } = data
    setMintedNft(data)
    const tokenContract = await new web3.eth.Contract(erc721abi, contractAddr)

    const mint = await tokenContract.methods
      .mintNFT(userAddr, image_url, title, artist, description)
      .send({ from: userAddr })
      .on('receipt', () => {})
    setMintsuccess(true)
  }

  useEffect(() => {
    setMintsuccess(false)
    if (typeof window.ethereum !== 'undefined') {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum) // 새로운 web3 객체를 만든다
        setWeb3(web)
      } catch (err) {
        console.log(err)
      }
    }
  }, [])

  return (
    <>
      <Styled.BlackBox />
      <Styled.Container>
        {mintsuccess && (
          <Detail modalData={mintedNft} setModalVisible={setMintsuccess} />
        )}

        <Styled.FormBox onSubmit={handleSubmit(onSubmit)}>
          <Styled.Title>Create New NFT</Styled.Title>
          <Styled.InputBox>
            <Styled.Label> Title </Styled.Label>
            <Styled.Input
              placeholder="Title of your nft..."
              {...register('title', { required: true })}
            />
          </Styled.InputBox>
          <Styled.InputBox>
            <Styled.Label> Artist Name </Styled.Label>
            <Styled.Input
              placeholder="Creater of your nft..."
              {...register('artist', { required: true })}
            />
          </Styled.InputBox>
          <Styled.InputBox>
            <Styled.Label> Description </Styled.Label>
            <Styled.Input
              placeholder="Provide a detailed description of you item."
              {...register('description', { required: true })}
            />
          </Styled.InputBox>
          <Styled.InputBox>
            <Styled.Label>Image URI</Styled.Label>
            <Styled.Input
              placeholder="Copy your NFT Image URI..."
              {...register('image_url', { required: true })}
            />
          </Styled.InputBox>

          <Styled.MintBtn type="submit" value={'Mint'} />
        </Styled.FormBox>
      </Styled.Container>
    </>
  )
}

export default CreatePage
