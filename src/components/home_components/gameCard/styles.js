import styled from "styled-components";

export const StyledLi = styled.li`
  width: 350px;
  height: 200px;
  background-color: transparent;
  position: relative;

  cursor: pointer;

  :hover {
    box-shadow: -8px 8px 2px 0px var(--accent-color);
    transition: 0.2s;

    div {
      filter: brightness(0.3);
      transition: 0.2s;
    }

    h3 {
      display: block;
    }
    button {
      display: block;
    }
    ul {
      display: block;
    }

    .iconLobby {
      display: block;
      :hover {
        color: var(--accent-color);
        transition: 0.2s;
      }
    }

    h4 {
      display: block;
    }
  }

  .iconLobby {
    position: absolute;
    top: 5px;
    left: 5px;
    display: none;
    color: var(--primary-white);
    font-size: 32px;
    z-index: 1;
  }

  h4 {
    display: none;
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    color: var(--secondary-white);
    font-size: 16px;
    font-weight: 600;
  }

  h3 {
    display: none;
    position: absolute;
    bottom: 30px;
    left: 5px;
    margin: 0 0 10px 10px;
    font-size: 18px;
    color: var(--primary-white);
    text-shadow: 1px 1px 1px var(--foreground-color);
  }

  ul {
    display: none;
    position: absolute;
    bottom: 0px;
    left: 5px;
    margin: 0 0 10px 10px;
    font-size: 18px;
    color: var(--primary-white);
    text-shadow: 1px 1px 1px var(--foreground-color);

    li {
      font-size: 12px;
    }
  }
`;

export const Background = styled.div`
  position: relative;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;
`;
