<script setup>
import { ref, onMounted, computed } from "vue"
defineProps({
  card: Array,
})
const cards = ref([])

const limit = ref(5)

const limitedcards = computed(() => cards.value.slice(0, limit.value))

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
