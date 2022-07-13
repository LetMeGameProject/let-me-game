import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { internalApi } from "../../../services/internalAPI";
import { Div } from "./style";
import { v4 as uuidv4 } from "uuid";

export const DivForm = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Nickname obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    bio: yup.string().required("Bio obrigatória"),
    country: yup.string().required("País obrigatório"),
    photoUrl: yup
      .string()
      .required("Link obrigatória")
      .max(2040, "Tamanho Máximo Excedido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Sua senha deve conter no mínimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não são iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    const restOfData = {
      reputation: 100,
      id: uuidv4(),
      current_game: null,
      friend_list: [],
      pending_friend_requests: [],
      last_feedbacks: [],
      plataforms: [],
      favorite_games: [],
    };
    const completeData = { ...data, ...restOfData };
    const request = internalApi.post("register", completeData);

    toast.promise(request, {
      loading: "Carregando",
      success: (data) => {
        history.push("/");
        return "Cadastro efetuado com sucesso!";
      },
      error: (err) => `Email já existente`,
    });
  };

  return (
    <Div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Crie uma conta</h1>
        <div className="div__inputs">
          <div className="div__input">
            <div className="label">
              <span>Nickname</span>
              {errors && <h6>{errors.username?.message}</h6>}
            </div>
            <input placeholder="Seu nome" {...register("username")} />
          </div>
          <div className="div__input">
            <div className="label">
              <span>Email</span>
              {errors && <h6>{errors.email?.message}</h6>}
            </div>
            <input placeholder="Seu email" {...register("email")} />
          </div>
          <div className="div__input">
            <div className="label">
              <span>Bio</span>
              {errors && <h6>{errors.bio?.message}</h6>}
            </div>
            <input placeholder="Sua Bio" {...register("bio")} />
          </div>
          <div className="div__input">
            <div className="label">
              <span>País</span>
              {errors && <h6>{errors.country?.message}</h6>}
            </div>
            <input placeholder="Seu país" {...register("country")} />
          </div>
          <div className="div__input">
            <div className="label">
              <span>Foto</span>
              {errors && <h6>{errors.photoUrl?.message}</h6>}
            </div>
            <input placeholder="Link da sua foto" {...register("photoUrl")} />
          </div>
          <div className="div__input">
            <div className="label">
              <span>Senha</span>
              {errors && <h6>{errors.password?.message}</h6>}
            </div>
            <input
              type="password"
              placeholder="Sua Senha"
              {...register("password")}
            />
          </div>
          <div className="div__input">
            <div className="label">
              <span>Confirmar senha</span>
              {errors && <h6>{errors.confirmPassword?.message}</h6>}
            </div>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
          </div>
        </div>
        <p>
          Já tem uma conta? Entre <Link to="/">aqui</Link>
        </p>
        <button type="submit">Cadastrar</button>
        <Toaster />
      </form>
    </Div>
  );
};
