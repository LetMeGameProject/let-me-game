import { Content } from "./styles";
import { FiUser } from "react-icons/fi"
import { BiMessageRounded, BiLogOut } from "react-icons/bi"
import { ProgressBar } from "../../../style/globalStyle";



export default function SideBar({setOpen, setOpenModalUser}){
    

    const openModalEdit = ()=>{
        setOpenModalUser(true)
        setOpen(false)
    }

    const openModalMessage = ()=>{
        setOpen(false)
    }

    const logout = ()=>{
        setOpen(false)
        return
    }

    return(
        <>
        <Content>
            <div className="user">
                <div className="user-img">
                    <img src="https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-156.jpg" alt ="imagem de perfil definida pelo usuário"/>
                </div>
                <div className="user-info">
                    <h4>TheRobite</h4>
                    <ProgressBar value="90" max="100" />
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