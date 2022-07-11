import styled from "styled-components"

const ContainerLobby = styled.div`
  .image-container {
    position:absolute;
    width: 100%;
    height: 700px;
    z-index:-1;
  }

  .image-container > img {
    mask-image: linear-gradient(to top, transparent 25%, black 100%);
    margin-top: 80px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .container {
    margin-top:20%;
    padding: 30px calc(100% / 7);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: left;
    flex-direction: column;
    gap: 2rem;
    position:absolute;
  }

`
export default ContainerLobby

