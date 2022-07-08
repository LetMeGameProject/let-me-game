import Backdrop from "@mui/material/Backdrop"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import { AiFillLike, AiFillDislike } from "react-icons/ai"

import { useContext, useState } from "react"
import { LobbyContext } from "../../../../../../context/OpenLobby"
import {
  FeedbackBox,
  Review,
  ReviewBox,
  StyledButton,
  StyledDiv,
  StyledP,
  TextBox,
} from "./styles"

const Feedback = () => {
  const { openModalFeedback, setOpenModalFeedback } = useContext(LobbyContext)

  const [choose, setChoose] = useState(null)

  return (
    <StyledDiv>
      <Modal
        open={openModalFeedback}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClose={() => setOpenModalFeedback(true)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalFeedback}>
          <FeedbackBox>
            <StyledP>
              Como foi sua experiência jogando com <strong>Antoniel</strong>?
            </StyledP>

            <TextBox>
              <p>Descreva em poucas palavras:</p>
              <textarea rows="6" cols="60"></textarea>
            </TextBox>

            <ReviewBox>
              <p>Com base no escrito acima, como você avalia sua jogatina?</p>
              <Review>
                <AiFillLike className="like" onClick={() => setChoose(true)} />
                <AiFillDislike
                  className="dislike"
                  onClick={() => setChoose(false)}
                />
              </Review>
            </ReviewBox>

            <StyledButton
              onClick={() => {
                setOpenModalFeedback(false)
              }}
            >
              Enviar
            </StyledButton>
          </FeedbackBox>
        </Fade>
      </Modal>
    </StyledDiv>
  )
}

export default Feedback
