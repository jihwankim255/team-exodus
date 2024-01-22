import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styled from './detail.styled'

function Detail({ modalData, setModalVisible }) {
  return (
    <div>
      <Styled.ModalBackground onClick={() => setModalVisible(false)} />
      <Styled.ModalImageBackground>
        <Styled.ModalImage alt="modal_image" src={modalData.image_url} />
      </Styled.ModalImageBackground>
      <Styled.Modal className="modal">
        <Styled.CloseButton onClick={() => setModalVisible(false)}>
          <FontAwesomeIcon icon={faClose} />
        </Styled.CloseButton>
        <Styled.ModalContent className="modal-content">
          <Styled.Name>
            {!modalData.title ? (
              <span style={{ margin: 15 }}>
                {modalData.name}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: '#2081E2' }}
                />
              </span>
            ) : (
              <div>
                Congratulations! 🎉
                <br /> You have successfully minted {modalData.title} NFT.
              </div>
            )}

            {/* <FontAwesomeIcon icon="fas fa-check-square" /> */}
          </Styled.Name>
          <Styled.Desc>
            {modalData.current_price && (
              <div>{modalData.current_price} ETH</div>
            )}
            {modalData.description}
          </Styled.Desc>
        </Styled.ModalContent>
      </Styled.Modal>
    </div>
  )
}

export default Detail
