import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { internalApi } from "../../../services/internalAPI";
import { Div } from "./style";

export const DivForm = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Nick-name obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    bio: yup.string().required("Bio obrigatória"),
    country: yup.string().required("País obrigatório"),
    photoUrl: yup.string().required("Url obrigatória"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Sua senha deve conter no mínimo 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    const restOfData = {
      reputation: 100,
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
        history.push("/login");
      },
      error: (err) => `Email já existente`,
    });
  };

  return (
    <Div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>REGISTRE-SE</h1>
        <div className="div__inputs">
          <div className="div__input">
            <div className="label">
              <span>Nick-name</span>
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
            <input placeholder="Url da sua foto" {...register("photoUrl")} />
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
        </div>
        <p>
          Já tem uma conta? Entre <Link to="/login">aqui</Link>
        </p>
        <button type="submit">Cadastrar</button>
        <Toaster />
      </form>
    </Div>
  );
};
