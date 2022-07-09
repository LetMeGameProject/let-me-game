import React from "react";
import ThemeCard from "./styles";
import { FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { ProgressBar } from "./styles";
import { TbMessage2 } from "react-icons/tb";

const UserCard = ({ card }) => {
  return (
    <ThemeCard>
      <div className="header_header">
        <div className="user_img">
          <img
            src="https://avatars.githubusercontent.com/u/79053378?v=4"
            alt={card.username}
          />
        </div>
        <div className="user_info">
          <h3>{card.username}</h3>
          <h4>{card.country}</h4>
          <h5>Reputação</h5>
          <ProgressBar value={card.reputation} max="100" />
        </div>
        <div className="press_to_talk">
          <button className=".btn-talk">
            <TbMessage2 size={40} style={{ background: "transparent" }} />
          </button>
        </div>
      </div>

      <div className="content_line"></div>
      <div className="plataforms">
        <FaSteam size={34} className="btn-plataform" />
        <SiEpicgames size={34} className="btn-plataform" />
        <FaPlaystation size={34} className="btn-plataform" />
        <FaXbox size={34} className="btn-plataform" />
      </div>
      <div className="feedbacks">
        {card.last_feedbacks.length > 0 ? (
          <>
            <h4>Últimos Feedbacks</h4>
            <ul>
              {card.last_feedbacks.map((feedback) => {
                return (
                  <li>
                    <span>{feedback.feedback_owner_username} </span>
                    <p>{feedback.feedback_message}</p>
                    <hr />
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <div className="no_feedbacks">
            <p>Este Jogador ainda não possui feedbacks da comunidade.</p>
          </div>
        )}
      </div>
    </ThemeCard>
  );
};

export default UserCard;
