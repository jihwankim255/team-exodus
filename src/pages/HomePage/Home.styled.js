import styled from 'styled-components'
import MarketStyled from '../MarketPage/Market.styled'

const WelcomeWords = styled.div`
  // background-color: #00214d;
  // background-color: #202020;
  margin-top: 100px;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: white;

  font-size: 40px;

  :span(:first-child) {
    font-size: 25px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ListTitle = styled.div`
  margin-top: 250px;
  font-size: 60px;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: 600;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  margin-right: 30px;
`

const PagenationBox = styled.div`
  margin-top: 60px;
  margin-bottom: 50px;
`

const FixedColLists = styled(MarketStyled.ColLists)`
  grid-template-columns: repeat(5, 1fr);
`
const Wallpaper = styled.div`
  width: 100%;
  height: 1000px;
  padding: 30px;
  background: linear-gradient(black, white);
  color: white;
`
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif/1200px-Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 40px;
`

export default {
  WelcomeWords,
  Container,
  ListTitle,
  ListContainer,
  PagenationBox,
  FixedColLists,
  Wallpaper,
  ImageContainer,
}
