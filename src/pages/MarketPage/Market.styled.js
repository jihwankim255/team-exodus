import styled from 'styled-components'

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex: 1;
`
const BlackBox = styled.div`
  display: flex;
  flex: 1;
  background: linear-gradient(black, white);
  height: 100px;
`

const SidebarCol = styled.div`
  position: sticky;
  top: 100px;
  font-weight: 600;
  font-size: 18px;
  height: 100%;
`

const ColTitle = styled.div`
  font-size: 65px;
  font-weight: 600;
  margin-bottom: 30px;
`

const ColLists = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 10px;
  height: 250px;
`

const NftBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10%;
  box-shadow: 2px 3px 15px -5px;
  justify-content: center;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

const NftImg = styled.img`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
  border-radius: 10%;
  border: 3px solid white;
`

const NftName = styled.div`
  font-size: 22px;
  font-weight: 500;
  height: 50px;
  text-align: center;

  overflow: hidden;
  width: 100%;
`

const NftOwner = styled.div`
  font-size: 15px;
  opacity: 0.8;
  text-align: center;
  background-color: white;
`

export default {
  Container,
  BlackBox,
  SidebarCol,
  ColTitle,
  ColLists,
  NftBox,
  NftImg,
  NftName,
  NftOwner,
}
