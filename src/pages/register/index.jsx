import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { BackgroundBody } from "../../components/register_components/BackgroundLogo";
import { DivLogo } from "../../components/register_components/DivLogo";
import { DivForm } from "../../components/register_components/FormRegister";
import { LoggedUserContext } from "../../context/LoggedUser";

export const Register = () => {
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
