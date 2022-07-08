import { Content } from "./styles";
import { FiUser } from "react-icons/fi"
import { BiMessageRounded, BiLogOut } from "react-icons/bi"
import { ProgressBar } from "../../../style/globalStyle";
import { useContext } from "react";
import { UserContext } from "../../../context/User";
import { toast } from "react-hot-toast"
import { useHistory } from "react-router-dom";


const SideBar =({setOpen, setOpenModalUser}) =>{

    const { user } = useContext(UserContext)
    const history= useHistory()

    const openModalEdit = ()=>{
        setOpenModalUser(true)
        setOpen(false)
    }


    const openModalMessage = ()=>{
        setOpen(false)
    }

    const logout = ()=>{
        setOpen(false)
        localStorage.removeItem("@id")
        localStorage.removeItem("@tokenLMG")
        setTimeout(()=>{
            history.push("/")
        }, 800)
        setTimeout(()=>{
            toast.success('Deslogado com sucesso!')
        }, 900)

    }

    return(
        <>
        <Content>
            <div className="user">
                <div className="user-img">
                    <img src={user.photoUrl} alt ="imagem de perfil definida pelo usuário"/>
                </div>
                <div className="user-info">
                    <h4>{user.username}</h4>
                    <ProgressBar value={user.reputation} max="100" />
                </div>

            </div>

            <div className="user-edit" onClick={()=> openModalEdit()}>
                <FiUser size={20}/>
                <h5>Ver Perfil</h5>    
            </div>

            <div className="user-message" onClick={()=> openModalMessage()}>
                <BiMessageRounded size={20}/>
                <h5>Mensagens</h5>  
            </div>

            <div className="user-logout" onClick={()=> logout()}>
                <BiLogOut size={20}/>
                <h5>Sair</h5>  
            </div>
        </Content>
        
        </>
    )
}

export default SideBar