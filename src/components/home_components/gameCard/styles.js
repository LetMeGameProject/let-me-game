import styled from "styled-components"

export const StyledLi = styled.li`
  width: 350px;
  height: 200px;
  background-color: transparent;
  position: relative;

  cursor: pointer;

  :hover {
    box-shadow: -8px 8px 2px 0px var(--accent-color);
    transition: 0.2s;

    h3 {
      display: block;
    }
    button {
      display: block;
    }
  }

  h3 {
    display: none;
    position: absolute;
    bottom: 0px;
    left: 5px;
    margin: 0 0 10px 10px;
    font-size: 18px;
    color: var(--primary-white);
    text-shadow: 1px 1px 1px var(--foreground-color);
  }

  button {
    display: none;
    background: transparent;
    position: absolute;
    color: gold;
    font-size: 32px;
    top: 5px;
    right: 5px;
  }
`

export const Background = styled.div`
  position: relative;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;

  :hover {
    filter: brightness(0.3);
    transition: 0.2s;
  }
`
