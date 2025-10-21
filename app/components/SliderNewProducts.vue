<script setup>
import { ref, onMounted } from "vue"
defineProps({
  card: Array,
})
const cards = ref([])
import { Navigation, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
const modules = [Navigation, A11y]
import "swiper/css"
import "swiper/css/navigation"

onMounted(async () => {
  try {
    const response = await fetch("https://183d9bd894c8b214.mokky.dev/card")
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    cards.value = await response.json()
  } catch (error) {
    console.error("Error fetching data:", error)
  }
})
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
  <div class="new-product">
    <div class="new-product__header">
      <div class="new-product__title">New Products</div>
      <div class="new-product__all">See All New Products</div>
    </div>
    <div class="new-product__slider">
      <swiper
        :modules="modules"
        :slides-per-view="6"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="card in cards" :key="card.id">
          <ProductCard :cards="card" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new-product {
  margin-top: 37px;
  // .new-product__header

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // .new-product__title

  &__title {
    font-family: var(--font-semibold);

    font-size: 22px;

    color: var(--color---7);
  }

  // .new-product__all

  &__all {
    font-family: var(--font-regular);

    font-size: 13px;
    line-height: 1.15;
    text-decoration: underline;
    text-decoration-skip-ink: none;

    color: var(--color---3);
  }

  // .new-product__slider

  &__slider {
  }
}
</style>
