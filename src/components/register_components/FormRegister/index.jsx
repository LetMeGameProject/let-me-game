import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Div } from "./style";

export const DivForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(formSchema)})
  return (
    <Div>
      <form>
        <h1>REGISTRE-SE</h1>
        <div className="div__inputs">
          <div className="div__input">
            <span>Nome</span>
            <input placeholder="Seu nome" />
          </div>
          <div className="div__input">
            <span>Email</span>
            <input placeholder="Seu email" />
          </div>
          <div className="div__input">
            <span>Bio</span>
            <input placeholder="Sua Bio" />
          </div>
          <div className="div__input">
            <span>País</span>
            <input placeholder="Seu país" />
          </div>
          <div className="div__input">
            <span>Foto</span>
            <input placeholder="Url da sua foto" />
          </div>
          <div className="div__input">
            <span>Senha</span>
            <input type="password" placeholder="Sua Senha" />
          </div>
        </div>
        <p>
          Já tem uma conta? Entre <Link>aqui</Link>
        </p>
        <button>Cadastrar</button>
      </form>
    </Div>
  );
};
