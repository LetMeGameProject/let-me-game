import React from "react"

import { useContext } from "react"
import { FavoriteContext } from "../../../context/FavoriteList"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"

import { EffectCoverflow, Pagination, Navigation } from "swiper"

import StyledCarousel from "./styles"
import CarouselCard from "./CarouselCard/CarouselCard"

const Carousel = () => {
  const { favoriteList, removeFavorite } = useContext(FavoriteContext)

  return (
    <StyledCarousel>
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
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {favoriteList?.map((game, index) => {
          return (
            <SwiperSlide key={index}>
              <CarouselCard game={game} removeFavorite={removeFavorite} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </StyledCarousel>
  )
}

export default Carousel
