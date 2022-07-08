import styled from "styled-components";

const ContainerLobby = styled.div`
  .image-container{
    width: 100%;
    height:350px;
    mask-image: linear-gradient(to top, transparent 25%, black 100%)
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .container {
    padding: 30px calc(100%/7);
    width:100%;
    height: 100vh;
    display:flex;
    justify-content:flex-start;
    align-items:left;
    flex-direction:column;
    gap:2rem;
  }

`
export default ContainerLobby

// <div style={{width:"100%", height:"250px", backgroundColor:"red", WebkitMaskImage:"linear-gradient(to top, transparent 25%, black 100%)"