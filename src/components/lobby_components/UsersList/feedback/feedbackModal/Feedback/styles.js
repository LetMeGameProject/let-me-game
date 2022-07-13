import styled from "styled-components"

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const FeedbackBox = styled.div`
  background-color: var(--secondary-white);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  width: 80%;
  height: 45%;
  max-height: 400px;
  max-width: 800px;
  padding: 30px;

  border-radius: 6px;

  @media (max-width: 767px) {
    background-color: var(--secondary-white);

    justify-content: space-evenly;

    width: 90%;
    min-height: 90%;
    padding: 0 20px 20px 20px;

    border-radius: 6px;
  }
`

export const StyledButton = styled.button`
  background-color: var(--background-color);
  color: var(--primary-white);

  position: absolute;
  box-sizing: border-box;
  right: 30px;

  bottom: 25px;
  max-width: 100px;
  width: 100px;
  height: 40px;
  max-height: 40px;

  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;

  border-radius: 10px;

  :hover {
    background-color: var(--primary-white);
    color: var(--background-color);
    border: 2px solid var(--background-color);
    transition: 0.3s;
  }

  @media (max-width: 767px) {
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%);
  }
`

export const StyledP = styled.p`
  font-size: 20px;
  font-family: "Inter", sans-serif;
  margin-bottom: 15px;

  @media (max-width: 767px) {
    margin-top: -15px;
  }
`

export const TextBox = styled.div`
  label {
    font-family: "Inter", sans-serif;
    font-size: 18px;

    margin-bottom: 5px;
  }

  textarea {
    resize: none;
    overflow: auto;

    padding: 10px;

    font-size: 16px;
    border-radius: 8px;

    @media (max-width: 767px) {
      width: 100%;
      height: 80%;
    }
  }

  @media (max-width: 767px) {
    margin-top: -25px;
  }
`

export const ReviewBox = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: space-between;
  width: 80%;

  p {
    width: 60%;
    margin: 15px 0 0 15px;
    font-size: 18px;
  }

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;

    p {
      margin: 0;
      width: 100%;
    }
  }
`
export const Review = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 15px;

  .dislike,
  .like {
    font-size: 32px;
    fill: var(--background-color);

    :hover {
      fill: gray;
      cursor: pointer;
      transition: 0.3s;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
