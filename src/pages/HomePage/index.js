import { useState, useEffect } from 'react'
import Pagination from '../../components/Pagination'
import { Col, LoadingContainer, override } from '../../styles'
import Detail from '../../components/Detail'
import PulseLoader from 'react-spinners/PulseLoader'
import MarketStyled from '../MarketPage/market.styled'
import Styled from './home.styled'

function HomePage() {
  // 슬라이더
  const sliderItem = new Array(21).fill().map((arr, i) => i + 1)
  const sliderOffset = 4
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const toggleLeaving = () => setLeaving((prev) => !prev)
  const increaseIndex = () => {
    if (leaving) return
    toggleLeaving()
    const totalSliderItem = sliderItem.length - 1
    const maxIndex = Math.ceil(totalSliderItem / sliderOffset)
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }

  // NFT 페이지
  // const nfts = new Array(300).fill().map((arr, i) => i + 1);
  const [nfts, setNfts] = useState([]) //
  const [loading, setLoading] = useState(false)
  const options = { method: 'GET', headers: { accept: 'application/json' } }
  const [currentPage, setCurrentPage] = useState(1) // 현재 페이지
  const [nftsPerPage, setNftsPerPage] = useState(20) // 페이지당 NFT 수
  const [error, setError] = useState(false)
  // 현재 nft
  const indexOfLastNft = currentPage * nftsPerPage
  const indexOfFirstNft = indexOfLastNft - nftsPerPage
  const currentNfts = nfts.slice(indexOfFirstNft, indexOfLastNft)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    setLoading(true)
    let result = []
    const options = {
      method: 'GET',
      headers: { accept: 'application/json' },
    }
    fetch(process.env.REACT_APP_TESTNETS_URL, options)
      .then((response) => response.json())
      .then((response) => {
        let prev = []
        response.orders.map((el) => {
          const current_price = el.current_price / 10000000000000000000
          const { image_url, name, description } =
            el.maker_asset_bundle.assets[0]
          prev.push({ image_url, name, description, current_price })

          //       /* result.push({ image_url, name, description });
          //                     result.push({ image_url, name, description });
          //                     result.push({ image_url, name, description });
          //                     result.push({ image_url, name, description });
          //                     result.push({ image_url, name, description }); */
          //       // openSea tesnet APi에서 제공해주는 데이터 limit50 하드코딩
        })
        result = result.concat(prev).concat(prev).concat(prev).concat(prev)
        setNfts(result)
        setLoading(false)
      })
      .catch((err) => setError(true))
  }, [])

  // 모달 창
  const [modalVisible, setModalVisible] = useState(false)
  const [modalData, setModalData] = useState('')
  const handleNftClicked = (nft) => {
    setModalVisible(true)
    setModalData(nft)
  }
  return (
    <Styled.Container>
      <Styled.Wallpaper>
        <Styled.WelcomeWords>
          <span>Welcome to my portfolio project, NFT MarketPlace Project</span>
          <span>EXODUS</span>
        </Styled.WelcomeWords>
        <Styled.ImageContainer />
      </Styled.Wallpaper>
      {/* <Slider onClick={increaseIndex}>
                <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                    <Row
                        variants={rowVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "tween", duration: 1 }}
                        key={index}
                    >
                        {sliderItem
                            .slice(
                                sliderOffset * index,
                                sliderOffset * index + sliderOffset
                            )
                            .map((i) => (
                                <Box key={i}>{}</Box>
                            ))}
                    </Row>
                </AnimatePresence>
            </Slider> */}
      <Styled.ListTitle>
        실제 데이터가 아닌, Opensea 테스트넷 api의 테스트 데이터 입니다
      </Styled.ListTitle>
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
        <Styled.ListContainer>
          <Col
            style={{
              width: '100%',
              margin: 0,
              marginTop: '30px',
              height: 1800,
            }}
          >
            <Styled.FixedColLists>
              {!error ? (
                currentNfts?.map((i, idx) => (
                  <MarketStyled.NftBox
                    key={idx}
                    onClick={() => handleNftClicked(i)}
                  >
                    <MarketStyled.NftImg src={i.image_url} />
                    <MarketStyled.NftName>{i.name}</MarketStyled.NftName>
                  </MarketStyled.NftBox>
                ))
              ) : (
                <div>에러: 요청이 너무 많습니다</div>
              )}
            </Styled.FixedColLists>
          </Col>
          <Styled.PagenationBox>
            <Pagination
              nftsPerPage={nftsPerPage}
              totalNfts={nfts.length}
              paginate={paginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Styled.PagenationBox>
        </Styled.ListContainer>
      )}
      {modalVisible && (
        <Detail modalData={modalData} setModalVisible={setModalVisible} />
      )}
    </Styled.Container>
  )
}

export default HomePage
