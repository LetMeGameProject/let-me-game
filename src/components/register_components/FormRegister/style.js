const { default: styled } = require("styled-components");

export const Div = styled.div`
  height: 100vh;
  width: 50vw;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;

  form {
    height: 90%;
    width: 60%;
    background: #dedede;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;

    h1 {
      padding-top: 20px;
      font-size: 18px;
      color: #570a57;
    }

    p {
      font-weight: bold;
      font-size: 16px;
    }

    a {
      text-decoration: none;
      color: #570a57;
      :hover {
        color: #b000f1;
      }
    }

    button {
      width: 85%;
      height: 40px;

      font-size: 18px;
      color: white;
      font-weight: 500;
      background: linear-gradient(to right, #5200d5, #b000f1, #ce00fb);
      border-radius: 7px;

      :hover {
        opacity: 0.8;
        border: 2px solid #5200d5;
        transition: 0.5s;
      }
    }
  }

  .div__inputs {
    width: 85%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  .div__input {
    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: column;
    row-gap: 2px;

    span {
      color: #2f2d2d;
      font-size: 16px;
    }

    input {
      padding: 15px 20px;
      border: none;
      border-radius: 8px;

      :focus {
        outline: 0;
      }
    }
  }

  .label {
    display: flex;
    column-gap: 5px;
    align-items: center;

    h6 {
      color: #b000f1;
    }
  }

  @media (max-width: 800px) {
    width: 100vw;
  }

  @media (max-width: 550px) {
    form {
      width: 80%;
    }
  }
`;
