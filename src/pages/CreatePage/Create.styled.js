import styled from 'styled-components'

const BlackBox = styled.div`
  display: flex;
  flex: 1;
  background: linear-gradient(black, white);
  height: 100px;
`
const Container = styled.div`
  padding: 50px 200px;
  margin-top: 50px;

  display: flex;
  font-size: 25px;

  flex-direction: column;
  align-items: center;
`

const FormBox = styled.form`
  width: 600px;
  height: 100%;
  // background-color: beige;
  padding: 15px 15px;
  border-radius: 20px;
  border: 2px solid black;
  // background: linear-gradient(to top, grey, #ffffff);
`

const Title = styled.div`
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 50px;
`

const InputBox = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
`

const Label = styled.div`
  margin-bottom: 15px;
  font-weight: 550;
`

const Input = styled.input`
  border-radius: 10px;
  height: 50px;
  border: 2px solid grey;
  opacity: 0.8;
  padding: 5px 5px;
  ::placeholder {
    align-content: center;
    padding-left: 10px;
  }
`

const MintBtn = styled(Input)`
  background-color: #708090;
  color: #fafafa;
  font-weight: 600;
  :hover {
    cursor: pointer;
    scale: 1.15;
  }
`

export default {
  BlackBox,
  Container,
  FormBox,
  Title,
  InputBox,
  Label,
  Input,
  MintBtn,
}
