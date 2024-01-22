import styled from 'styled-components'

const ModalImageBackground = styled.div`
  position: fixed;
  margin-left: 30px;
  top: 35%;
  left: 0;
  width: 420px;
  height: 420px;
  background-color: white;
  z-index: 2;
  border-radius: 10%;
  align-items: center;
`
const ModalImage = styled.img`
  position: relative;
  margin-left: 10px;
  margin-top: 10px;
  width: 400px;
  height: 400px;
  background-color: gray;
  z-index: 2;
  border-radius: 10%;
`
const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  z-index: 1;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 450px;
`
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: black;
  opacity: 0.4;
`
const CloseButton = styled.div`
  font-size: 30px;
  text-align: right;
`
const Name = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
`
const Desc = styled.div`
  font-size: 20px;
  margin-top: 20px;
`

export default {
  ModalImageBackground,
  ModalImage,
  Modal,
  ModalContent,
  ModalBackground,
  CloseButton,
  Name,
  Desc,
}
