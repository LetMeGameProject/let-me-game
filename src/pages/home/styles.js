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
<<<<<<< HEAD
      margin-top: 15%;
=======
      margin-top: 10%;
>>>>>>> a31488f9e8cf51d60f7f63d387eb804fe0a1c718
    }
  }
`

export default StyledMain
