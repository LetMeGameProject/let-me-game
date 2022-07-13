import Backdrop from "@mui/material/Backdrop"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import { AiFillLike, AiFillDislike } from "react-icons/ai"
import * as yup from "yup"
import React from "react"
import { Formik, Field, Form } from "formik"
import { v4 as uuidv4 } from "uuid"
import { useContext } from "react"
import { toast } from "react-hot-toast"

import { UserContext } from "../../../../../../context/User"
import { internalApi } from "../../../../../../services/internalAPI"
import { LobbyContext } from "../../../../../../context/OpenLobby"
import { CurrentLobbyContext } from "../../../../../../context/currentLobby"
import {
  FeedbackBox,
  Review,
  ReviewBox,
  StyledButton,
  StyledDiv,
  StyledP,
  TextBox,
} from "./styles"

const Feedback = () => {
  const { openModalFeedback, setOpenModalFeedback } = useContext(LobbyContext)
  const { user } = useContext(UserContext)
  const { curUser, setCurrentLobbyList } = useContext(CurrentLobbyContext)
  const formSchema = yup.object().shape({
    feedback_message: yup.string().required("Campo obrigatório"),
    feedback_rating: yup.boolean().required("Escolha uma opção"),
  })
  async function sendFeedbackToApi(feedback) {
    const token = localStorage.getItem("@tokenLMG")
    let updatedUser = await internalApi
      .get(`online_users_list/${curUser.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return res.data
      })
    updatedUser.last_feedbacks.push(feedback)
    let currentRating = updatedUser.last_feedbacks.reduce(
      (a, b) => a + b.feedback_rating,
      100
    )
    if (currentRating > 100) currentRating = 100
    if (currentRating < 0) currentRating = 0

    updatedUser = { ...updatedUser, reputation: currentRating }

    internalApi.patch(`users/${curUser.id}`, updatedUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    internalApi.patch(`online_users_list/${curUser.id}`, updatedUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    internalApi
      .get(`online_users_list/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCurrentLobbyList(res.data)
        toast.success('Feedback enviado')
        setTimeout(()=>{
            toast.dismiss()
        }, 1500)  
      });
  }
  return (
    <StyledDiv>
      <Modal
        open={openModalFeedback}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClose={() => setOpenModalFeedback(true)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalFeedback}>
          <FeedbackBox>
            <StyledP>
              Como foi sua experiência jogando com{" "}
              <strong>{curUser.username}</strong>?
            </StyledP>
            <div>
              <Formik
                initialValues={{
                  feedback_message: "",
                  feedback_rating: "",
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                  setOpenModalFeedback(false)

                  let obj = {
                    feedback_Id: uuidv4(),
                    feedback_message: values.feedback_message,
                    feedback_status:
                      values.feedback_rating === "true" ? true : false,
                    feedback_rating:
                      values.feedback_rating === "true" ? 10 : -10,
                    feedback_owner_username: user.username,
                  }
                  sendFeedbackToApi(obj)
                }}
              >
                {({ errors, touched }) => (
                  <Form action="">
                    <TextBox>
                      <label htmlFor="comment">
                        Descreva em poucas palavras:
                        {errors.feedback_message && touched.feedback_message ? (
                          <span>{errors.feedback_message}</span>
                        ) : null}
                      </label>
                      <Field
                        rows="6"
                        cols="60"
                        as="textarea"
                        id="feedback_message"
                        name="feedback_message"
                      />
                    </TextBox>
                    <ReviewBox>
                      <p>
                        Com base no escrito acima, como você avalia sua
                        jogatina?
                      </p>
                      <Review role="group" aria-labelledby="my-radio-group">
                        <label>
                          <Field
                            type="radio"
                            name="feedback_rating"
                            value="true"
                          />
                          <AiFillLike className="like" />
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="feedback_rating"
                            value="false"
                          />
                          <AiFillDislike className="dislike" />
                        </label>
                        {errors.feedback_rating && touched.feedback_rating ? (
                          <span>{errors.feedback_rating}</span>
                        ) : null}
                      </Review>
                    </ReviewBox>

                    <StyledButton type="submit">Enviar</StyledButton>
                  </Form>
                )}
              </Formik>
            </div>
          </FeedbackBox>
        </Fade>
      </Modal>
    </StyledDiv>
  )
}

export default Feedback
