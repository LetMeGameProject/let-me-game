import { Content, StyledHeader} from "./styles";
import Logo from "../../assets/images/logo_LetMeGame.svg"
import SideBar from "./side_bar";
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { motion } from "framer-motion";

export default function Header(){

    const [isOpen, setOpen] = useState(false)

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
            animate={{ opacity: 1 }}>
                <SideBar setOpen={setOpen} />
            </motion.div>}

        </StyledHeader>
        
    )
}