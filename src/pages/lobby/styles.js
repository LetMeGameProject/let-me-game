import styled from "styled-components"

const ContainerLobby = styled.div`
  .image-container {
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(to top, transparent 25%, black 100%);
  }

  img {
    margin-top: 80px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .container {
    mask-image: linear-gradient(to top, transparent 0%, black 100%);
    margin-top: -45%;
    padding: 30px calc(100% / 7);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: left;
    flex-direction: column;
    gap: 2rem;
  }
`

export const DivStyled = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: var(--primary-white);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    .div-game-name{
        display: flex;
        justify-content: center;
        align-items: center;
        h3{
            font-size: 17px;
            font-weight: 500;
            span{
                font-size: 17px;
                font-weight: bold;
            }
        }
    }

    .div-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .btn-yes, .btn-no{
            padding: 8px 20px;
            border-radius: 4px;
            background-color: var(--background-color);
            color: white;
            transition: .3s;
        }
        .btn-yes{
            :hover{
                background-color: var(--foreground-color);
            }
        }
        .btn-no{
            :hover{
                background-color: black;
            }
        }
    }
`

export default ContainerLobby

