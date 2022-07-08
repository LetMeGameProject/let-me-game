import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import { useContext } from "react"
import { LobbyContext } from "../../../../../context/OpenLobby"
import StyledDiv from "./styles"

const ChatParaTeste = () => {
  const { setOpenModalChat, openModalChat, setOpenModalPlayed } =
    useContext(LobbyContext)

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "30%",
    maxWidth: 400,
    bgcolor: "#570A57",
    boxShadow: 24,
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <StyledDiv>
      <Modal
        open={openModalChat}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClose={() => setOpenModalChat(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalChat}>
          <Box sx={style}>
            <div>Modal para fim de testes</div>
            <button
              onClick={() => {
                setOpenModalChat(false)
                setOpenModalPlayed(true)
              }}
            >
              Closed Feature Antoniel
            </button>
          </Box>
        </Fade>
      </Modal>
    </StyledDiv>
  )
}

export default ChatParaTeste
