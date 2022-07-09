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

  @media (max-width: 710px) {
    .swiper {
      max-width:412px;
    }
     
  }

  @media (max-width: 420px){
    .swiper {
      max-width:330px;
    }
    .swiper-slide{
      height:190px;
    }
  }

`

export default StyledCarousel
