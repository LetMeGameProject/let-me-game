import styled from "styled-components"

const StyledCarousel = styled.section`
  padding-top: 100px;
  .swiper {
    max-width: 624px;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    min-width: 112px;
    width: 210px;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default StyledCarousel
