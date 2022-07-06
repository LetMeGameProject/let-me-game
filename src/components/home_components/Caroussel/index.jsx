import React from "react";

import { useContext } from "react";
import { RemoveFavoriteContext } from "../../../context/RemoveFavorite";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import StyledCaroussel from "./styles";
import CarousselCard from "./CarousselCard/CarousselCard";


const Caroussel = () => {

  const {favoriteList, removeFavorites} = useContext(RemoveFavoriteContext)
  console.log("favoriteList ", favoriteList);


  


  return (
    <StyledCaroussel>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        gap={2}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        coverflowEffect={{
          rotate: -30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {favoriteList.map((game, index)=>{
          return (
            <SwiperSlide>
              <CarousselCard
                game={game}
                removeFavorites={removeFavorites}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </StyledCaroussel>
  )
}

export default Caroussel