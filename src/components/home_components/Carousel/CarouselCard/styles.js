import styled from "styled-components"

const StyledCarrouselCard = styled.section`
  width: 100%;
  height: 100%;
  &:hover {
    .container-card {
      transition: 0.3s;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    button {
      display: block;
    }

    .iconLobby {
      display: block;
    }

    h4 {
      display: block;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    z-index: -1;
  }

  .container-card {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: none;
    position: fixed;
    :hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  p {
    width: 100%;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .container-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .iconLobby {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    color: var(--primary-white);
    font-size: 64px;
    z-index: 1001;

    :hover {
      color: var(--accent-color);
      transition: 0.3s;
    }
  }

  h4 {
    display: none;
    position: absolute;
    top: 12px;
    left: 5px;
    z-index: 1;
    color: var(--secondary-white);
    font-size: 14px;
    font-weight: 600;
  }
`
export default StyledCarrouselCard
