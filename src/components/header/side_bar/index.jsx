import { Content } from "./styles";
import { FiUser } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { ProgressBar } from "../../../style/globalStyle";
import { useContext } from "react";
import { UserContext } from "../../../context/User";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { LoggedUserContext } from "../../../context/LoggedUser";

const SideBar = ({ setOpen, setOpenModalUser }) => {
  const { user } = useContext(UserContext);
  const { setLoggedUser } = useContext(LoggedUserContext);
  const history = useHistory();

  const openModalEdit = () => {
    setOpenModalUser(true);
    setOpen(false);
  };

  const logout = () => {
    setOpen(false);
    localStorage.removeItem("@id");
    localStorage.removeItem("@tokenLMG");
    setTimeout(() => {
      history.push("/");
    }, 800);
    setLoggedUser(false);
    toast.success("Deslogado com sucesso!");
  };

  return (
    <>
      <Content>
        <div className="user">
          <div className="user-img">
            <img src={user.photoUrl} alt="img" />
          </div>
          <div className="user-info">
            <h4>{user.username}</h4>
            <ProgressBar value={user.reputation} max="100" />
          </div>
        </div>

        <div className="user-edit" onClick={() => openModalEdit()}>
          <FiUser size={20} />
          <h5>Ver Perfil</h5>
        </div>

        <div className="user-logout" onClick={() => logout()}>
          <BiLogOut size={20} />
          <h5>Sair</h5>
        </div>
      </Content>
    </>
  );
};

export default SideBar;
