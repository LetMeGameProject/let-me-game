import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import { useContext } from "react"
import { LobbyContext } from "../../../../../../context/OpenLobby"
import { StyledDiv, StyledButton, StyledP } from "./styles"

const Played = () => {
  const { setOpenModalPlayed, openModalPlayed, setOpenModalFeedback } =
    useContext(LobbyContext)

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "35%",
    maxHeight: 160,
    maxWidth: 460,
    bgcolor: "var(--secondary-white)",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  }

  return (
    <>
      <Modal
        open={openModalPlayed}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClose={() => setOpenModalPlayed(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalPlayed}>
          <Box sx={style}>
            <StyledP>
              Você jogou com o(a) <strong>Antoniel</strong>?
            </StyledP>
            <StyledDiv>
              <StyledButton
                onClick={() => {
                  setOpenModalFeedback(true)
                  setOpenModalPlayed(false)
                }}
              >
                Sim
              </StyledButton>
              <StyledButton
                onClick={() => {
                  setOpenModalPlayed(false)
                }}
              >
                Não
              </StyledButton>
            </StyledDiv>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default Played
