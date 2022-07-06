import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { DivStyled } from './styles';
import { AiFillEdit } from "react-icons/ai"
import { FaSteam } from "react-icons/fa"
import { SiEpicgames } from "react-icons/si"
import { FaPlaystation, FaXbox } from "react-icons/fa"
import { ProgressBar } from '../../../style/globalStyle';

export default function ShowUser({openModalUser, setOpenModalUser, setOpenModalEditUser}){

    const openModalEdit = () => {
        setOpenModalUser(false)
        setOpenModalEditUser(true)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "90%",
        maxWidth: 400,
        bgcolor: '#570A57',
        boxShadow: 24,
        borderRadius: "6px",
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center"
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModalUser}
            onClose={()=> setOpenModalUser(false)}
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
                        <AiFillEdit onClick={()=> openModalEdit()} style={{cursor: "pointer"}} size={25}/>
                    </div>

                    <div className="user-info">
                        <div className="user-img">
                            <img src="https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-156.jpg" alt="imagem de perfil do usuário"/>
                        </div>

                        <div className="user">
                            <h4>TheRobite</h4>
                            <h4>Brasil</h4>
                            <h4>Reputação</h4>
                            <ProgressBar value="90" max="100" />
                        </div>
                    </div>

                    <div className="border-div"/>

                    <div className="bio-user">
                        <div className="bio-title">
                            <h4>Bio</h4>
                        </div>
                        <div className="bio-text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>

                    <div className="plataform-user">
                        <div className="plataform-title">
                            <h4>Plataformas</h4>
                        </div>
                        <div className="plataforms">
                            <FaSteam size={20}/>
                            <SiEpicgames size={20}/>
                            <FaPlaystation size={20}/>
                            <FaXbox size={20}/>
                        </div>
                    </div>
                </DivStyled>
            </Box>
            </Fade>
        </Modal>
    );
}