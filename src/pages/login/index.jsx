import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { BackgroundBody } from "../../components/login_components/BackgroundLogo";
import { DivLogo } from "../../components/login_components/DivLogo";
import { DivForm } from "../../components/login_components/FormLogin";
import { LoggedUserContext } from "../../context/LoggedUser";

export const Login = () => {
  const { loggedUser } = useContext(LoggedUserContext);
  return loggedUser ? (
    <Redirect to="/home" />
  ) : (
    <BackgroundBody>
      <DivLogo />
      <DivForm />
    </BackgroundBody>
  );
};
