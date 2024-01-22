import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
`

const BackImage = styled.img`
  width: 100%;
  height: 470px;
  background-color: pink;
  background-position: center;
  opacity: 0.9;
`

const ProfileImg = styled.div`
  top: 300px;
  position: absolute;
  width: 250px;
  border: 10px solid white;
  height: 250px;
  margin-left: 70px;
  background-color: pink;

  border-radius: 50%;
`

const Profile = styled.div`
  margin-top: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 60px;
  padding: 50px;
  font-weight: 600;
`

const ProfileName = styled.div``

const Icon = styled.span`
  margin-left: 25px;
  font-size: 40px;
`

export default {
  Container,
  BackImage,
  ProfileImg,
  Profile,
  ProfileName,
  Icon,
}
