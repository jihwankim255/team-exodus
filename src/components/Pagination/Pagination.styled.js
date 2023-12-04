import styled from 'styled-components'

const Container = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const PaginationButton = styled.button`
  padding: 10px;
  margin: 0 5px;
`

const PageNumbersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const PageNumberButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? '#2E3D53' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
`

export default {
  Container,
  PaginationContainer,
  PaginationButton,
  PageNumbersContainer,
  PageNumberButton,
}
