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
    comment: yup.string().required("Cade o comentário 06? 20 ano de curso!"),
    review: yup.string().required("Escolhe um ae!"),
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
              {/* state do usuario do card clicado */}
              Como foi sua experiência jogando com <strong>Antoniel</strong>?
            </StyledP>
            <div>
              <Formik
                initialValues={{
                  comment: "",
                  review: "",
                  // objeto.data que a API ira receber
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                  console.log(values)
                  // enviar dados para a API
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <TextBox>
                      <label htmlFor="comment">
                        Descreva em poucas palavras:
                      </label>
                      <Field
                        rows="6"
                        cols="70"
                        as="textarea"
                        id="comment"
                        name="comment"
                      />
                    </TextBox>
                    {errors.comment && touched.comment ? (
                      <span>{errors.comment}</span>
                    ) : null}
                    <ReviewBox>
                      <p>
                        Com base no escrito acima, como você avalia sua
                        jogatina?
                      </p>
                      <Review role="group" aria-labelledby="my-radio-group">
                        <label>
                          <Field type="radio" name="review" value="true" />
                          <AiFillLike className="like" />
                        </label>
                        <label>
                          <Field type="radio" name="review" value="false" />
                          <AiFillDislike className="dislike" />
                        </label>
                      </Review>
                      {errors.review && touched.review ? (
                        <span>{errors.review}</span>
                      ) : null}
                    </ReviewBox>

                    <StyledButton
                      // Condicao para que o onClick nao chame a funcao
                      // se o yupResolver estiver com errors.
                      type="submit"
                      onClick={() => !errors && setOpenModalFeedback(false)}
                    >
                      Enviar
                    </StyledButton>
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
