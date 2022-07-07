import styled from "styled-components"

const StyledMain = styled.main`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    .loadMore {
      background-color: var(--foreground-color);
      color: var(--primary-white);

      height: 15px;
      padding: 10px;

      border-radius: 30px;

      :hover {
        background-color: var(--hover-color);
        transition: 0.3s;
      }
    }

    .loading {
      margin-top: 10%;
    }
  }
`

export default StyledMain
