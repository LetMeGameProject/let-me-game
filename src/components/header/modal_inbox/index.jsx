import { TbMessage } from "react-icons/tb"
import { UserContext } from '../../../context/User';
import { createRef, useContext } from 'react';
import Talk from 'talkjs' ;
import { ID_TALKJS } from '../../../services/talkjs';
import { Button, DivModal, StyledDiv } from './styles';
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";


const ModalInbox = ()=>{

    
    const { user } = useContext(UserContext)

    const containerChat = createRef()

    const [open, setOpen] = useState(false)

    const inbox = () =>{
        Talk.ready.then(()=>{
            const userModified = {
                id: user.id,
                name: user.username,
                email: user.email,
            }
            const me = new Talk.User(userModified)
            const session = new Talk.Session({
                appId: ID_TALKJS,
                me,
            }) 
            const inbox = session.createInbox()
            inbox.mount(containerChat.current)
            setOpen(true)
        })
    }

    const closeInbox = () =>{
        setOpen(false)
        document.querySelector("iframe").remove()
    }

    return(
        <>
        
        <Button onClick={()=> inbox()}><TbMessage size={35} color={purple}/></Button>
        <StyledDiv modal={open ? true : false} onClick={()=> closeInbox()}>
            {open && <PacmanLoader color="#FFFF" cssOverride={{position: "fixed",top: "50%", left: "50%", }}/>}
            <DivModal ref={containerChat} modal={open ? true : false}></DivModal>
        </StyledDiv>
        
       </>
    )
}

export default ModalInbox