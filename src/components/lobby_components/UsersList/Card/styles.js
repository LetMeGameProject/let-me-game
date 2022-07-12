import styled from "styled-components"

const ThemeCard = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 25px;
  height: 430px;
  background-color: var(--secondary-white);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  .header_header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
  }
  .user_img {
    width: 25%;
  }
  .user_img > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid var(--background-color);
  }
  .user_info {
    padding-left: 8px;
    width: 55%;
  }
  .user_info > h3 {
    width: 100%;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .user_info > h4 {
    margin: 7px 0px 2px 0px;
    font-size: 14px;
    font-weight: 400;
  }
  .user_info > h5 {
    font-size: 17px;
    font-weight: 400;
  }
  .press_to_talk {
    width: 20%;
  }
  .press_to_talk > button {
    background: transparent;
  }
  .content_line {
    width: 100%;
    height: 4px;
    background-color: var(--background-color);
    margin-bottom: 25px;
  }

  .plataforms {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
    width: 100%;
    height: 56px;
    padding: 5px 15px;
    border-radius: 10px;
    background-color: transparent;

    .btn-plataform {
      color: var(--background-color);
      cursor: pointer;
    }
  }

  .feedbacks {
    width: 100%;
    height: 195px;

    display: flex;
    flex-direction: column;
  }
  .feedbacks > h4 {
    font-size: 18px;
    margin-bottom: 3px;
  }
  .feedbacks > ul {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: var(--background-color);
  }
  .feedbacks > ul > li {
    width: 100%;
    height: auto;
    padding: 3px 5px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .feedbacks > ul > li > span {
    font-weight: 600;
    color: white;
  }
  .feedbacks > ul > li > p {
    font-weight: 400;
    font-size: 13px;
    letter-spacing: 0.3px;
    color: white;
  }
  .feedbacks > ul > li > hr {
    margin-top: 3px;
    width: 100%;
    background-color: white;
    height: 2px;
  }

  .no_feedbacks {
    border-radius: 10px;
    border: 2px solid black;
    width: 100%;
    height: 195px;
    display: flex;
    justify-content: center;
    background-color: var(--background-color);
    padding: 20px;
  }
  .no_feedbacks > p {
    margin-top: 10px;
    font-size: 19px;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: white;
  }
`

export const Button = styled.button`
  width: 55px;
  height: 55px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1001;
  border-radius: 100%;
  background-color: var(--primary-white);
`

export const StyledDiv = styled.div`
  width: ${({ modal }) => (modal ? "100vw" : "0")};
  height: ${({ modal }) => (modal ? "100vh" : "0")};
  position: ${({ modal }) => (modal ? "fixed" : "unset")};
  z-index: 1001;
  background-color: ${({ modal }) =>
    modal ? "rgba(0,0,0,0.60)" : "rgba(0,0,0,0.0)"};
`
export const DivModal = styled.div`
  width: ${({ modal }) => (modal ? "90%" : "0%")};
  max-width: ${({ modal }) => (modal ? "500px" : "0px")};
  height: ${({ modal }) => (modal ? "500px" : "0")};
  min-height: ${({ modal }) => (modal ? "300px" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: ${({ modal }) => (modal ? "fixed" : "unset")};
  gap: 20px;
  top: 50%;
  left: 50%;
  z-index: ${({ modal }) => (modal ? "1001" : "0")};
  transform: translate(-50%, -50%);
`
export default ThemeCard
