const { default: styled } = require("styled-components");

export const Div = styled.div`
  height: 100vh;
  width: 50vw;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 90%;
    max-width: 350px;
    background: #dedede;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
    border-radius: 4px;

    h1 {
      font-size: 18px;
      color: #570a57;
    }

    p {
      font-weight: bold;
      font-size: 13px;
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

      font-size: 16px;
      color: white;
      font-weight: bold;
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
  }

  .div__input {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      color: #2f2d2d;
      font-size: 15px;
    }

    input {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;

      :focus {
        outline: 0;
      }
    }
  }

  .label {
    display: flex;
    align-items: center;
    gap: 5px;
    h6 {
      color: #b000f1;
      align-self: center;
    }
  }
  @media (max-width: 800px) {
    width: 100vw;
  }
`;
