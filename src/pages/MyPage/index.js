import { faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import {
  LoadingContainer,
  Row,
  RowName,
  RowPic,
  RowPics,
  override,
} from '../../styles'
import Web3 from 'web3'
import erc721abi from '../../erc721abi'
import MarketStyled from '../MarketPage/Market.styled'
import PulseLoader from 'react-spinners/PulseLoader'
import Detail from '../../components/Detail'
import Styled from './My.styled'
import { Navigate, useLocation } from 'react-router-dom'

function MyPage() {
  const [web3, setWeb3] = useState(new Web3(window.ethereum))
  const [nftList, setNftList] = useState([])
  const [loading, setLoading] = useState(true)
  const contractAddr = process.env.REACT_APP_CONTRACT_ADDR
  const location = useLocation()
  const userAddr = localStorage.getItem('isLoggedIn')
  const userLogin = !(userAddr === '' || userAddr === null)
  useEffect(() => {
    /*     if (typeof window.ethereum !== "undefined") {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다
        setWeb3(web);

        getNftsByUser();
      } catch (err) {
      }
    } */
    getNftsByUser()
  }, [])

  const getNftsByUser = async () => {
    const tokenContract = await new web3.eth.Contract(erc721abi, contractAddr)
    const totalSupply = await tokenContract.methods.TotalSupply().call()

    let temp = []
    for (let i = 1; i <= totalSupply - 1; i++) {
      const nftinfo = await tokenContract.methods.nftinfo(i).call()
      temp.push(nftinfo)
    }

    setNftList(temp)
    setLoading(false)
  }

  // 모달 창
  const [modalVisible, setModalVisible] = useState(false)
  const [modalData, setModalData] = useState('')
  const handleNftClicked = (nft) => {
    const { name, description, tokenURI: image_url } = nft
    const nft2 = { name, description, image_url }
    setModalVisible(true)
    setModalData(nft2)
  }
  if (!userLogin)
    return (
      <>
        {alert('로그인을 해주세요')}
        <Navigate to="/" state={{ from: location }} />
      </>
    )
  return (
    <Styled.Container>
      <Styled.BackImage src={'/img/jesus.jpg'} />
      <Styled.ProfileImg />
      <Styled.Profile>
        <Styled.ProfileName>
          {localStorage.getItem('isLoggedIn') === ''
            ? ''
            : localStorage.getItem('isLoggedIn')}
        </Styled.ProfileName>
        <div>
          <Styled.Icon>
            <FontAwesomeIcon icon={faLocationDot} />
          </Styled.Icon>
          <Styled.Icon>
            <FontAwesomeIcon icon={faLink} />
          </Styled.Icon>
        </div>
      </Styled.Profile>
      <Row>
        <RowName>My Own NFTs</RowName>
        {loading ? (
          <LoadingContainer>
            <PulseLoader
              color={'#36d7b7'}
              loading={loading}
              cssOverride={override}
              style={{ marginTop: '150px' }}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
              speedMultiplier={1}
            />
          </LoadingContainer>
        ) : (
          <RowPics>
            {nftList.length !== 0 ? (
              nftList?.map((i, idx) => (
                <RowPic
                  key={idx}
                  style={{ backgroundColor: 'beige' }}
                  onClick={() => handleNftClicked(i)}
                >
                  <MarketStyled.NftImg src={i.tokenURI} />
                  <MarketStyled.NftName>{i.title}</MarketStyled.NftName>
                </RowPic>
              ))
            ) : (
              <div>There's no NFT here :(</div>
            )}
          </RowPics>
        )}
      </Row>
      {modalVisible && (
        <Detail modalData={modalData} setModalVisible={setModalVisible} />
      )}
    </Styled.Container>
  )
}

export default MyPage
