import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { FormStyled } from './styles';
import { FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

export default function EditUser({openModalEditUser, setOpenModalEditUser}){
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

    const schema = yup.object().shape({
        photoUrl: yup.string().url(),
        bio: yup.string(),
        plataforms: yup.array({
            steam: yup.string().url(),
            epic: yup.string().url(),
            psn: yup.string().url(),
            xbox: yup.string().url()
        }
        )
        
      });

    const {register, handleSubmit} = useForm({
        schema: yupResolver(schema)
    })

    const onSubmit= (data) => {
        console.log(data.plataforms)
    }

    return(
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModalEditUser}
            onClose={()=> setOpenModalEditUser(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500, 
            }}
        >
            <Fade in={openModalEditUser}>
            <Box sx={style}>
                <FormStyled onSubmit={handleSubmit(onSubmit)}> 
                    <div className="div-input">
                        <label>Foto de perfil</label>
                        <input placeholder="Insira o link para a nova foto" {...register("photoUrl")}></input>
                        <label>Bio</label>
                        <textarea placeholder="Altere sua Bio" {...register("bio")}></textarea>
                    </div>
                    <div className="div-checkbox">
                        <div>
                            <FaSteam size={20}/>
                            <input placeholder="Link do perfil Steam" {...register("plataforms[0].steam")}></input>
                        </div>
                        <div>
                            <SiEpicgames size={20}/>
                            <input placeholder="Link do perfil Epic" {...register("plataforms[1].epic")}></input>
                        </div>
                        <div>
                            <FaPlaystation size={20}/>
                            <input placeholder="Link do perfil PSN" {...register("plataforms[2].psn")}></input>
                        </div>
                        <div>
                            <FaXbox size={20}/>
                            <input placeholder="Link do perfil Xbox" {...register("plataforms[3].xbox")}></input>
                        </div>
                    </div>
                    <div className="div-btn">
                        <button className="btn-update">Atualizar</button>
                        <button className="btn-close" onClick={()=> setOpenModalEditUser(false)}>Fechar</button>
                        
                    </div>
                </FormStyled>
            </Box>
            </Fade>
        </Modal>
    )
}