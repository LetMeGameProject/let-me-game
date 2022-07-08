import styled from "styled-components";

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
    font-size: 19px;
  }
  /* button {
    cursor: pointer;
  } */
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
    /* margin-bottom: 4px; */
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
`;

export const ProgressBar = styled.progress`
  width: 95%;
  height: 11px;
  background-color: #dfc640;
  border-radius: 4px;
  &::-webkit-progress-bar {
    background-color: var(--background-color);
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }

  &::-webkit-progress-value {
    background-color: #dfc640;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
  }
`;
export default ThemeCard;
