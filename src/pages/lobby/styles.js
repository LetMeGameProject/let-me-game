import styled from "styled-components"

const ContainerLobby = styled.div`
  min-width: 100%;

  .image-container {
    position: absolute;
    width: 100%;
    height: 700px;
    z-index: -1;
  }

  .image-container > img {
    mask-image: linear-gradient(to top, transparent 25%, black 100%);
    margin-top: 80px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .container {
    min-width: 100%;
    margin-top: 85px;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
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
  .div-game-name {
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 17px;
      font-weight: 500;
      span {
        font-size: 17px;
        font-weight: bold;
      }
    }
  }

  .div-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .btn-yes,
    .btn-no {
      padding: 8px 20px;
      border-radius: 4px;
      background-color: var(--background-color);
      color: white;
      transition: 0.3s;
    }
    .btn-yes {
      :hover {
        background-color: var(--foreground-color);
      }
    }
    .btn-no {
      :hover {
        background-color: black;
      }
    }
  }
`

export default ContainerLobby
