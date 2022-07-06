import styled from "styled-components"

const Button = styled.button`
  display: none;
  background: transparent;
  position: absolute;
  color: ${(props) => (props.onFavorite ? "gold" : "var(--primary-white)")};
  font-size: 32px;
  top: 5px;
  right: 5px;
`

export default Button
