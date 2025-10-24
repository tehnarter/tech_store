<script setup>
import { useCardsStore } from '~~/stores/useCardsStore'

const cardsStore = useCardsStore() // ← викликаємо
const cards = computed(() => cardsStore.allCards)
const limit = ref(5)
const limitedcards = computed(() => cards.value.slice(0, limit.value))


</script>
<template>
  <div class="product-series">
    <ProductCard v-for="card in limitedcards" :key="card.id" :cards="card" />
  </div>
</template>

<style lang="scss" scoped>
.product-series {
  display: flex;
  flex: 0 1 20%;
}
</style>
