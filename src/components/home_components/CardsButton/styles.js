import styled from "styled-components"

const Button = styled.button`
  display: none;
  background: transparent;
  position: absolute;
  color: ${(props) => (props.onFavorite ? "gold" : "var(--secondary-white)")};
  font-size: 32px;
  top: 5px;
  right: 5px;

  :hover {
    color: ${(props) => (props.addFavorite ? "#B2B1B9" : "gold")};
    transition: 0.15s;
  }
`

export default Button
