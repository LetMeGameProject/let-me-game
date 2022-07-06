import styled from "styled-components";

const StyledCarrouselCard = styled.section`
  width:100%;
  height:100%;
  &:hover{
    .container-card{
      transition:0.5s;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
    }
    
  }



  img{
    width:100%;
    height:100%;
    object-fit: cover;
    position: fixed;
    z-index:-1;
  }

  .container-card{
    background-position: center;
    background-size: cover;
    width:100%;
    height:100%;
    background: rgba(0, 0, 0, 0.5);
    display:none;
    position:fixed;
  }

  p{
    margin-left:15px;
    color:white;
    font-weight:bold;
  }

  .container-button{
    width:100%;
    display:flex;
    justify-content:flex-end;
  }

  button{
    margin-right:10px;
    margin-top:10px;
    background:none;
    border:none;
  }

  .star-button{
    color:yellow;
    width:30px;
    height:30px;
  }

  .star-button:hover{
      color:darkgray;
    }

`
export default StyledCarrouselCard