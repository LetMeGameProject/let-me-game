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
export default ContainerLobby
