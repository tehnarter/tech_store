<script setup>
import { Navigation, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
const modules = [Navigation, A11y]
import "swiper/css"
import "swiper/css/navigation"

// Функція для обробки події ініціалізації Swiper
// const onSwiper = (swiper) => {
//   console.log(swiper)
// }

// Функція для обробки події зміни слайда
// const onSlideChange = () => {
//   console.log("slide change")
// }

// Підключення необхідних модулів Swiper
</script>
<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
  >
    <swiper-slide><img src="/slider_1.jpg" alt="Slider1" /></swiper-slide>
    <swiper-slide><img src="/slider_1.jpg" alt="Slider2" /></swiper-slide>
    <swiper-slide><img src="/slider_1.jpg" alt="Slider3" /></swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped></style>
