import { Content } from "./styles"
import { FiUser } from "react-icons/fi"
import { BiLogOut } from "react-icons/bi"
import { ProgressBar } from "../../../style/globalStyle"
import { useContext} from "react"
import { UserContext } from "../../../context/User"
import { toast} from "react-hot-toast"
import { LoggedUserContext } from "../../../context/LoggedUser"
import { TbDeviceGamepad2 } from "react-icons/tb"
import { internalApi } from "../../../services/internalAPI"
import { CurrentLobbyContext } from "../../../context/currentLobby"
import { useLocation } from "react-router-dom"

const SideBar = ({ setOpen, setOpenModalUser, setShowModalSuccess }) => {

  const { user, setUser } = useContext(UserContext)
  const { setLoggedUser } = useContext(LoggedUserContext)
  const { setCurrentLobbyList } = useContext(CurrentLobbyContext)
  const location = useLocation()

  const openModalEdit = () => {
    setOpenModalUser(true)
    setOpen(false)
  }

  const logout = () => {
    setOpen(false)
    localStorage.clear()
    setLoggedUser(false)
    setTimeout(() => {
      toast.success("Deslogado com sucesso!")
    }, 700)
    
  }

  const removeGame = () => {
    internalApi
      .delete(`online_users_list/${localStorage.getItem("@id")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@tokenLMG")}`,
        },
      })
      .then((res) => {
        const nullGame = { current_game: null }

        internalApi
          .patch(`users/${localStorage.getItem("@id")}`, nullGame, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("@tokenLMG")}`,
            },
          })
          .then((res) => {
            setUser(res.data)
          })

        internalApi
          .get(`online_users_list`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("@tokenLMG")}`,
            },
          })
          .then((res) => {
            setCurrentLobbyList([...res.data])
            if(location.pathname === "/home"){
              setShowModalSuccess(true)
            }
            toast.success('Status removido')
            setTimeout(()=>{
                toast.dismiss()
                setShowModalSuccess(false)
            }, 1500)
            
          })
      })
  }

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
        {user.current_game !== null && (
          <div className="user-status">
            <div>
              <TbDeviceGamepad2 size={20} />
              <h5> Jogo atual</h5>
            </div>
            <span>{user.current_game?.game_name}</span>
            <button onClick={() => removeGame()}>Remover</button>
          </div>
        )}

        <div className="user-logout" onClick={() => logout()}>
          <BiLogOut size={20} />
          <h5>Sair</h5>
        </div>
      </Content>
    </>
  )
}

export default SideBar
