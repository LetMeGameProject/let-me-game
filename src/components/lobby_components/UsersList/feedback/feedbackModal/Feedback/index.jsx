import Backdrop from "@mui/material/Backdrop"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import { AiFillLike, AiFillDislike } from "react-icons/ai"
import * as yup from "yup"
import React from "react"
import { Formik, Field, Form } from "formik"

import { useContext } from "react"
import { LobbyContext } from "../../../../../../context/OpenLobby"
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
  const formSchema = yup.object().shape({
    feedback_message: yup
      .string()
      .required("Cade o comentário 06? 20 ano de curso!"),
    feedback_rating: yup.boolean().required("Escolhe um ae!"),
  })

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
              Como foi sua experiência jogando com <strong>Antoniel</strong>?
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
                    feedback_Id: "",
                    feedback_message: values.feedback_message,
                    feedback_status:
                      values.feedback_rating === "true" ? true : false,
                    feedback_rating:
                      values.feedback_rating === "true" ? 10 : -10,
                    feedback_owner_username: "",
                  }
                  console.log(obj)
                }}
              >
                {({ errors, touched }) => (
                  <Form action="">
                    <TextBox>
                      <label htmlFor="comment">
                        Descreva em poucas palavras:
                      </label>
                      <Field
                        rows="6"
                        cols="70"
                        as="textarea"
                        id="feedback_message"
                        name="feedback_message"
                      />
                    </TextBox>
                    {errors.feedback_message && touched.feedback_message ? (
                      <span>{errors.feedback_message}</span>
                    ) : null}
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
                      </Review>
                      {errors.feedback_rating && touched.feedback_rating ? (
                        <span>{errors.feedback_rating}</span>
                      ) : null}
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
