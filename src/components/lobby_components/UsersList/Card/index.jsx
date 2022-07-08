import React from "react";
import ThemeCard from "./styles";
import { FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaPlaystation, FaXbox } from "react-icons/fa";
// import { ProgressBar } from "../../../style/globalStyle";
import { ProgressBar } from "./styles";
import { TbMessage2 } from "react-icons/tb";

const UserCard = () => {
  return (
    <ThemeCard>
      <div className="header_header">
        <div className="user_img">
          <img
            src="https://avatars.githubusercontent.com/u/79053378?v=4"
            alt=""
          />
        </div>
        <div className="user_info">
          <h3>Usguri</h3>
          <h4>Brasil</h4>
          <h5>Reputação</h5>
          <ProgressBar value={80} max="100" />
        </div>
        <div className="press_to_talk">
          <button className=".btn-talk">
            <TbMessage2 size={40} style={{ background: "transparent" }} />
          </button>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      <div className="content_line"></div>
      <div className="plataforms">
        <FaSteam size={34} className="btn-plataform" />
        <SiEpicgames size={34} className="btn-plataform" />
        <FaPlaystation size={34} className="btn-plataform" />
        <FaXbox size={34} className="btn-plataform" />
      </div>
      <div className="feedbacks">
        <h4>Últimos Feedbacks</h4>
        <ul>
          <li>
            <span>Antoniel Cabaço</span>
            <p>
              Excelente jogador, sempre muito comunicativo e seila n sei mais
            </p>
            <hr />
          </li>
          <li>
            <span>Antoniel Cabaço</span>
            <p>
              Excelente jogador, sempre muito comunicativo e seila n sei mais
            </p>
            <hr />
          </li>
          <li>
            <span>Antoniel Cabaço</span>
            <p>
              Excelente jogador, sempre muito comunicativo e seila n sei mais
            </p>
            <hr />
          </li>
        </ul>
      </div>
    </ThemeCard>
  );
};

// <ProgressBar value={user.reputation} max="100" />

export default UserCard;
