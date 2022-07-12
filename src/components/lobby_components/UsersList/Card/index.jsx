import React, { useContext, createRef, useState } from "react"
import ThemeCard from "./styles"
import { FaSteam } from "react-icons/fa"
import { SiEpicgames } from "react-icons/si"
import { FaPlaystation, FaXbox } from "react-icons/fa"
import { TbMessage2 } from "react-icons/tb"
import Talk from "talkjs"
import { DivModal, StyledDiv } from "./styles"
import { PacmanLoader } from "react-spinners"
import { UserContext } from "../../../../context/User"
import { ID_TALKJS } from "../../../../services/talkjs"
import { ProgressBar } from "../../../../style/globalStyle"

const UserCard = ({ card }) => {
  const containerChat = createRef()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { user } = useContext(UserContext)

  const plataforms = card.plataforms.filter(
    (elem) => Object.values(elem)[0] !== ""
  )
  let objectPlataforms = {}
  plataforms.map(
    (elem) => (objectPlataforms = { ...elem, ...objectPlataforms })
  )
  const inbox = () => {
    Talk.ready.then(() => {
      const userModified = {
        id: user.id,
        name: user.username,
        email: user.email,
        photoUrl: user.photoUrl,
      }

      const otherModified = {
        id: card.id,
        name: card.username,
        email: card.email,
        photoUrl: card.photoUrl,
      }
      const me = new Talk.User(userModified)
      const other = new Talk.User(otherModified)

      window.talkSession = new Talk.Session({
        appId: ID_TALKJS,
        me,
      })

      const conversation = window.talkSession.getOrCreateConversation(
        Talk.oneOnOneId(me, other)
      )

      conversation.setParticipant(me)
      conversation.setParticipant(other)

      const inbox = window.talkSession.createInbox()

      inbox.select(conversation)
      inbox.mount(containerChat.current)

      setOpen(true)
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    })
  }

  const closeInbox = () => {
    setOpen(false)
    document.querySelector("iframe").remove()
    // Abrir modal de feedback
  }

  return (
    <>
      <StyledDiv modal={open ? true : false} onClick={() => closeInbox()}>
        {open && (
          <PacmanLoader
            color="#fff"
            cssOverride={{
              position: "fixed",
              top: "50%",
              left: "50%",
              display: loading ? "block" : "none",
            }}
          />
        )}
        <DivModal ref={containerChat} modal={open ? true : false}></DivModal>
      </StyledDiv>
      <ThemeCard>
        <div className="header_header">
          <div className="user_img">
            <img src={card.photoUrl} alt="img" />
          </div>
          <div className="user_info">
            {card.id === user.id && (
              <div className="youDiv">
                <span className="yourCard">Você</span>
              </div>
            )}
            <h3>{card.username}</h3>
            <h4>{card.country}</h4>
            <h5>Reputação</h5>
            <ProgressBar value={card.reputation} max="100" />
          </div>
          <div className="press_to_talk">
            {!(card.id === user.id) && (
              <button className=".btn-talk" onClick={() => inbox()}>
                <TbMessage2 size={40} style={{ background: "transparent" }} />
              </button>
            )}
          </div>
        </div>

        <div className="content_line" />
        <div className="plataforms">
          {plataforms.length > 0 ? (
            <>
              {plataforms.find((elem) => elem.steam) && (
                <a
                  href={objectPlataforms.steam}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSteam size={34} className="btn-plataform" />
                </a>
              )}
              {plataforms.find((elem) => elem.epic) && (
                <a
                  href={objectPlataforms.epic}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiEpicgames size={34} className="btn-plataform" />
                </a>
              )}
              {plataforms.find((elem) => elem.psn) && (
                <a href={objectPlataforms.psn} target="_blank" rel="noreferrer">
                  <FaPlaystation size={34} className="btn-plataform" />
                </a>
              )}
              {plataforms.find((elem) => elem.xbox) && (
                <a
                  href={objectPlataforms.xbox}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXbox size={34} className="btn-plataform" />
                </a>
              )}
            </>
          ) : (
            <div className="no_plataforms">Sem plataformas cadastradas</div>
          )}
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
                  )
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
    </>
  )
}

export default UserCard
