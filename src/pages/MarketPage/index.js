import React, { useState, useEffect } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import Detail from '../../components/Detail'
import { Col, LoadingContainer, override } from '../../styles'
import Styled from './market.styled'

function MarketPage() {
  const [lists, setLists] = useState([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState(0)
  const [filteredLists, setFilteredLists] = useState([])
  const [error, setError] = useState(false)
  useEffect(() => {
    const result = []
    const options = {
      method: 'GET',
      headers: { accept: 'application/json' },
    }
    fetch(process.env.REACT_APP_TESTNETS_URL, options)
      .then((response) => response.json())
      .then((response) => {
        response.orders.map((el) => {
          const current_price = el.current_price / 10000000000000000000
          const { image_url, name, description, owner } =
            el?.maker_asset_bundle.assets[0].asset_contract

          result.push({
            image_url,
            name,
            description,
            owner,
            current_price,
          })
          // setLists((prev) => [
          //     ...prev,
          //     { image_url, name, description },
          // ]);
          setLists(result)
          setFilteredLists(result.slice(0, 16))
          setLoading(false)
        })
      })
      .catch((err) => setError(true))
  }, [])

  const changeTab = (num) => {
    setTab(num)
    setFilteredLists(lists.slice(num * 16, (num + 1) * 16))
  }
  // 모달 창
  const [modalVisible, setModalVisible] = useState(false)
  const [modalData, setModalData] = useState('')
  const handleNftClicked = (nft) => {
    // console.log(nft)
    setModalVisible(true)
    setModalData(nft)
  }
  return (
    <>
      <Styled.BlackBox />
      <Styled.Container>
        <Styled.SidebarCol>
          <Sidebar>
            <Menu>
              <SubMenu label="NFT Collections">
                <MenuItem onClick={() => changeTab(0)}>
                  Drawing & Painting
                </MenuItem>
                <MenuItem onClick={() => changeTab(1)}> Gaming Art </MenuItem>
                <MenuItem onClick={() => changeTab(2)}> Digital Art </MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </Styled.SidebarCol>
        <Col>
          <Styled.ColTitle>NFT Market</Styled.ColTitle>
          <Styled.ColLists>
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
              <>
                {!error ? (
                  filteredLists?.map((data) => (
                    <Styled.NftBox onClick={() => handleNftClicked(data)}>
                      <Styled.NftImg src={data?.image_url} />
                      <Styled.NftOwner>
                        {data?.owner ? data.owner : `Unnamed`}
                      </Styled.NftOwner>
                      <Styled.NftName>{data?.name}</Styled.NftName>
                    </Styled.NftBox>
                  ))
                ) : (
                  <div>에러: 요청이 너무 많습니다</div>
                )}
              </>
            )}
          </Styled.ColLists>
        </Col>
        {modalVisible && (
          <Detail modalData={modalData} setModalVisible={setModalVisible} />
        )}

        {/* <Row>
        <RowName>ARTS</RowName>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <RowPics>
            {lists?.map((data) => (
              <RowPic>
                <Img src={data.image_url} />
                <div>{data.name}</div>
              </RowPic>
            ))}
          </RowPics>
        )}
      </Row> */}
      </Styled.Container>
    </>
  )
}

export default MarketPage
