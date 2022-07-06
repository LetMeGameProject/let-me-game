import styled from "styled-components"

const StyledMain = styled.main`
  background-color: var(--background-color);

  section {
    height: 100%;
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
  }
`

export default StyledMain
