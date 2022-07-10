import styled from "styled-components"

export const DivStyled = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 90%;
    color: white;
    font-family: 'Inter', sans-serif;
    
    .header-modal{
        width:100%;
        top: 20px;
        right: 10%;
        height:30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        color: var(--background-color);
    }

    .user-info{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
        color: var(--background-color);
        .user-img{
            width: 70px;
            img{
                width: 70px;
                height: 70px;
                object-fit: cover;
                border-radius: 100%;
                border: 2.5px solid var(--background-color);
            }
        }

        .user{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 6px;

            h4{
                font-size: 14px;
            }
        }
    }

    .border-div{
        margin-top: -5px;
        border-radius: 4px;
        width: 100%;
        height: 3px;
        background-color: white;
    }

    .bio-user{
        padding: 10px;
        display: flex;
        gap: 5px;
        flex-direction: column;
        justify-content: flex-start;
        align-items:flex-start;
        width: 100%;
        height: 100px;
        background-color: var(--background-color);
        border-radius: 4px; 
        .bio-text{
            
            overflow: auto;
            p{
            font-size: 13px;
        }
        }
        
    }

    .plataform-user{
        display: flex;
        width: 100%;
        height: 90px;
        background-color: var(--background-color);
        border-radius: 4px;
        margin-bottom: 20px;
        padding: 10px;
        gap:10px;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        .plataforms{
            display: flex;
            justify-content: center;
            align-items:center;
            gap: 20px;
        }
    }
    
    .no-plataforms{
        p{
            font-size: 14px;
        }
    }
`