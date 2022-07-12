import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { DivStyled } from "./styles";
import { AiFillEdit } from "react-icons/ai";
import { FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { ProgressBar } from "../../../style/globalStyle";
import { useContext } from "react";
import { UserContext } from "../../../context/User";

const ShowUser = ({
  openModalUser,
  setOpenModalUser,
  setOpenModalEditUser,
}) => {
  const { user } = useContext(UserContext);
  const filterPlatform = user.plataforms.filter(
    (elem) => Object.values(elem)[0] !== ""
  );

  let objectPlataforms = {};
  filterPlatform.map(
    (elem) => (objectPlataforms = { ...elem, ...objectPlataforms })
  );

  const openModalEdit = () => {
    setOpenModalUser(false);
    setOpenModalEditUser(true);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 400,
    bgcolor: "var(--primary-white)",
    boxShadow: 24,
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModalUser}
      onClose={() => setOpenModalUser(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModalUser}>
        <Box sx={style}>
          <DivStyled>
            <div className="header-modal">
              <AiFillEdit
                onClick={() => openModalEdit()}
                style={{ cursor: "pointer" }}
                size={25}
              />
            </div>

            <div className="user-info">
              <div className="user-img">
                <img src={user.photoUrl} alt="img" />
              </div>

              <div className="user">
                <h4>{user.username}</h4>
                <h4>{user.country}</h4>
                <h4>Reputação</h4>
                <ProgressBar value={user.reputation} max="100" />
              </div>
            </div>

            <div className="border-div" />

            <div className="bio-user">
              <div className="bio-title">
                <h4>Bio</h4>
              </div>
              <div className="bio-text">
                <p>{user.bio}</p>
              </div>
            </div>

            <div className="plataform-user">
              <div className="plataform-title">
                <h4>Plataformas</h4>
              </div>

              {filterPlatform.length > 0 ? (
                <div className="plataforms">
                  {filterPlatform.find((elem) => elem.steam) && (
                    <a
                      href={objectPlataforms.steam}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaSteam
                        size={20}
                        style={{ color: "white" }}
                        className="btn-plataform"
                      />
                    </a>
                  )}
                  {filterPlatform.find((elem) => elem.epic) && (
                    <a
                      href={objectPlataforms.epic}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SiEpicgames
                        size={20}
                        style={{ color: "white" }}
                        className="btn-plataform"
                      />
                    </a>
                  )}
                  {filterPlatform.find((elem) => elem.psn) && (
                    <a
                      href={objectPlataforms.psn}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaPlaystation style={{ color: "white" }} size={20} />
                    </a>
                  )}
                  {filterPlatform.find((elem) => elem.xbox) && (
                    <a
                      href={objectPlataforms.xbox}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaXbox style={{ color: "white" }} size={20} />
                    </a>
                  )}
                </div>
              ) : (
                <div className="no-plataforms">
                  <p>Nenhuma plataforma cadastrada</p>
                </div>
              )}
            </div>
          </DivStyled>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ShowUser;
