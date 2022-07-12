import { useContext, useEffect } from "react"
import toast from "react-hot-toast"
import { CurrentLobbyContext } from "../../../context/currentLobby"
import { UserContext } from "../../../context/User"
import { internalApi } from "../../../services/internalAPI"
import { DivStyled } from "./styles"


const UserStatus = () =>{

    const gameInfo = JSON.parse(localStorage.getItem("@CURRENT_GAME"))

    const { user, setUser } = useContext(UserContext)
    const { currentLobbyList, setCurrentLobbyList } = useContext(CurrentLobbyContext)

    const setStatus = (t) =>{
        const id = localStorage.getItem("@id")

        const game = {
            current_game: {
                game_id: gameInfo.id,
                game_name: gameInfo.name
            }
        }

        internalApi.get(`online_users_list/${id}`, 
        {
            headers:{
                'Authorization': `Bearer ${localStorage.getItem("@tokenLMG")}`
            }
        })
            .then(() =>{

                internalApi.patch(`users/${id}`, game, 
                {
                    headers:{
                        'Authorization': `Bearer ${localStorage.getItem("@tokenLMG")}`
                    }
                }) 

                internalApi.patch(`online_users_list/${id}`, game, 
                {
                    headers:{
                        'Authorization': `Bearer ${localStorage.getItem("@tokenLMG")}`
                    }
                })
                .then((res)=>{

                    currentLobbyList.find((userLobby) => {
                        if(userLobby.id === res.data.id){
                            setUser(res.data)
                            setCurrentLobbyList([...currentLobbyList, res.data])
                        }
                    })

                    toast.success('Status atualizado', {id: t.id,})
                    setTimeout(()=>{
                        toast.dismiss(t.id)
                    }, 1500)      
                })
            })

            .catch(() =>{
                user.current_game = {...game.current_game}

                internalApi.patch(`users/${id}`, game, 
                {
                    headers:{
                        'Authorization': `Bearer ${localStorage.getItem("@tokenLMG")}`
                    }
                })

                internalApi.post(`online_users_list`, user, 
                {
                    headers:{
                        'Authorization': `Bearer ${localStorage.getItem("@tokenLMG")}`
                    }
                })
                .then((res) => {
                    setUser(res.data)
                    setCurrentLobbyList([...currentLobbyList, res.data])

                    toast.success('Status atualizado', {id: t.id,})
                    setTimeout(()=>{
                        toast.dismiss(t.id)
                    }, 1500)
                })
            })
    }


    useEffect(()=>{
        if(gameInfo.id !== user.current_game?.game_id){
            toast((t) => (
                <DivStyled>
                    <div className="div-game-name">
                        <h3>Você quer procurar jogadores de <span>{gameInfo.name}</span>?</h3>
                    </div>
                    <div className="div-btn">
                        <button className="btn-yes" onClick={() => setStatus(t)}>Sim</button>
                        <button className="btn-no" onClick={() => toast.dismiss(t.id)}>Não</button>
                    </div>
                </DivStyled>
                ),
                {
                duration: 15000,
                style: {
                marginTop: 100,
            }},)
    
        }
        return ()=>{

        }
    }, [])

    return(
        <>
            
        </>
    )
}


export default UserStatus