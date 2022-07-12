import { Content } from "./styles";
import { FiUser } from "react-icons/fi"
import { BiLogOut } from "react-icons/bi"
import { ProgressBar } from "../../../style/globalStyle";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/User";
import { toast } from "react-hot-toast"
import { useHistory } from "react-router-dom";
import { TbDeviceGamepad2 } from "react-icons/tb"
import { internalApi } from "../../../services/internalAPI";
import { CurrentLobbyContext } from "../../../context/currentLobby";


const SideBar =({setOpen, setOpenModalUser}) =>{

    const { user, setUser } = useContext(UserContext)
    const { currentLobbyList, setCurrentLobbyList } = useContext(CurrentLobbyContext)

    const userFiltered = currentLobbyList.find((userLobby)=> userLobby.id === user.id)

    const history= useHistory()

    const openModalEdit = ()=>{
        setOpenModalUser(true)
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

    const removeGame = ()=> {
         
        internalApi.delete(`online_users_list/${localStorage.getItem("@id")}`, 
        {
            headers:{
                'Authorization': `Bearer ${localStorage.getItem("@tokenLMG")}`
            }
        })
            .then((res)=> {
                const nullGame = {current_game: null}

                internalApi.patch(`users/${localStorage.getItem("@id")}`, nullGame,
                {
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem("@tokenLMG")}`
                }
                })
                    .then((res) => {
                        setUser(res.data)
                    })

                internalApi.get(`online_users_list`, 
                {
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem("@tokenLMG")}`
                }
                })
                    .then((res) => {
                        setCurrentLobbyList([...res.data])
                    })

                
            })
        
        


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
            {user.current_game !== null &&
                <div className="user-status">
                    <div>
                        <TbDeviceGamepad2 size={20}/>
                        <h5> Jogo atual</h5>
                    </div>
                    <span>{userFiltered.current_game?.game_name}</span>
                    <button onClick={()=> removeGame()}>Remover</button>
                </div>
            }
            
            <div className="user-logout" onClick={()=> logout()}>
                <BiLogOut size={20}/>
                <h5>Sair</h5>  
            </div>
        </Content>
        
        </>
    )
}

export default SideBar