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
import { useContext } from 'react';
import { UserContext } from '../../../context/User';
import { internalApi } from '../../../services/internalAPI';
import toast from 'react-hot-toast';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function EditUser({openModalEditUser, setOpenModalEditUser}){

    const { user, setUser } = useContext(UserContext)

    const styleModal = {
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

    const theme = createTheme({
        palette: {
          primary: {
            main: '#ffffff',
          },
          secondary: {
            main: '#11cb5f',
          },
        },
      });

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

        const response = internalApi.patch(`users/${localStorage.getItem("@id")}`, data, 
        {
            headers:{
                'Authorization':  `Bearer ${localStorage.getItem("@tokenLMG")}`
            }
        })

        toast.promise(response,{
            loading: 'Atualizando Perfil...',
            success: (response)=> {
                setUser(response.data)
                setTimeout(()=>{
                    setOpenModalEditUser(false)
                }, 1500)
                return "Perfil atualizado com sucesso"
            },
            error: "Poxa, não conseguimos atualizar!"
        })
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
            <Box sx={styleModal}>
                <FormStyled onSubmit={handleSubmit(onSubmit)}> 
                    <div className="div-input">
                        <ThemeProvider theme={theme}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                            <TextField defaultValue={user.photoUrl} size="small" label="Foto de perfil" variant="standard" 
                            inputProps={{style: {height: 15, backgroundColor: "var(--background-color)", borderRadius: 4, color: "white", fontSize: 12, padding: 10}}}
                            InputLabelProps={{style: {color: 'white', fontSize: 18}}}
                            {...register("photoUrl")} />
                            </Box>
                      
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                            <TextField defaultValue={user.bio} size="small"  multiline  maxRows={4} label="Bio" variant="standard" 
                            inputProps={{style: {height: 55, backgroundColor: "var(--background-color)", borderRadius: 4, color: "white", fontSize: 12, padding: 10}}}
                            InputLabelProps={{style: {color: 'white', fontSize: 18}}}
                            {...register("bio")}
                            />
                            </Box>
                        </ThemeProvider>
                    </div>
                    <div className="div-checkbox">
                    <ThemeProvider theme={theme}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                            <FaSteam size={20}/>
                            <TextField defaultValue={user.plataforms[0]?.steam} placeholder="Link para sua conta Steam"  size="small" variant="standard" 
                            inputProps={{style: { width: 180, maxWidth: 400,height: 10, backgroundColor: "var(--primary-white)", borderRadius: 4, color: "black", fontSize: 12, padding: 10}}}
                            InputLabelProps={{style: {color: 'white', fontSize: 18}}}
                            {...register("plataforms[0].steam")}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginTop: -5 }}>
                            <SiEpicgames size={20}/>
                            <TextField defaultValue={user.plataforms[1]?.epic} placeholder="Link para sua conta Epic"  size="small" variant="standard"
                            inputProps={{style: {width: 180, maxWidth: 400, height: 10, backgroundColor: "var(--primary-white)", borderRadius: 4, color: "black", fontSize: 12, padding: 10}}}
                            InputLabelProps={{style: {color: 'white', fontSize: 18}}}
                            {...register("plataforms[1].epic")}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginTop: -5 }}>
                            <FaPlaystation size={20}/>
                            <TextField defaultValue={user.plataforms[2]?.psn} placeholder="Link para sua conta PSN" size="small" variant="standard" 
                            inputProps={{style: {width: 180, maxWidth: 400, height: 10, backgroundColor: "var(--primary-white)", borderRadius: 4, color: "black", fontSize: 12, padding: 10}}}
                            InputLabelProps={{style: {color: 'white', fontSize: 18}}}
                            {...register("plataforms[2].psn")}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginTop: -5 }}>
                            <FaXbox size={20}/>
                            <TextField defaultValue={user.plataforms[3]?.xbox} placeholder="Link para sua conta Xbox"  size="small" variant="standard" 
                            inputProps={{style: {width: 180, maxWidth: 400, height: 10, backgroundColor: "var(--primary-white)", borderRadius: 4, color: "black", fontSize: 12, padding: 10}}}
                            InputLabelProps={{style: {color: 'white', fontSize: 18}}}
                            {...register("plataforms[3].xbox")}
                            />
                        </Box>
                    </ThemeProvider>
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