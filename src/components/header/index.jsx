import { Content, StyledHeader} from "./styles";
import Logo from "../../assets/images/logo_LetMeGame.svg"
import SideBar from "./side_bar";
import { Squash as Hamburger } from 'hamburger-react'
import { useContext, useEffect, useState } from 'react'
import { motion } from "framer-motion";
import ShowUser from "./show_user";
import EditUser from "./edit_user";
import { UserContext } from "../../context/User";
import { internalApi } from "../../services/internalAPI";



export default function Header(){

    const [isOpen, setOpen] = useState(false)
    const [openModalUser, setOpenModalUser] = useState(false);
    const [openModalEditUser, setOpenModalEditUser] = useState(false);
    
    const { setUser } = useContext(UserContext)

    useEffect(()=>{
        internalApi.get(`users/${localStorage.getItem("@id")}`, 
        {
            headers:{
                'Authorization': `Bearer ${localStorage.getItem("@tokenLMG")}`
            }
        })
            .then(res => setUser(res.data))
    }, [])

    return(
        <StyledHeader>
            <Content>
                <div className="div-logo">
                    <img src={Logo} alt="Circulo roxo com controle roxo e botões brancos, aparecendo da esquerda para a direita centralizado até a metade do circulo"/>
                </div>

                <div className="div-img-user">
                    <Hamburger toggled={isOpen} toggle={setOpen}  duration={0.4}/>
                </div>
            </Content>
            
            
                
            {isOpen && 
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{zIndex: 1}}>
                <SideBar setOpen={setOpen} setOpenModalUser={setOpenModalUser}/>
            </motion.div>}

            {openModalUser && <ShowUser openModalUser={openModalUser} setOpenModalUser={setOpenModalUser} setOpenModalEditUser={setOpenModalEditUser}/>}
            {openModalEditUser && <EditUser openModalEditUser={openModalEditUser} setOpenModalEditUser={setOpenModalEditUser}/>}   
        </StyledHeader>
        
    )
}