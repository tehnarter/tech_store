<script setup>
defineProps({
  cards: Object,
})
</script>

<template>
  <div class="card">
    <div class="card__img">
      <img :src="cards.imageUrl" alt="" />
    </div>
    <div class="card__stars">
      <img src="/star.svg" alt="" /><img src="/star.svg" alt="" /><img
        src="/star.svg"
        alt=""
      /><img src="/star.svg" alt="" /><img src="/star.svg" alt="" />
    </div>
    <div class="card__text">
      {{ cards.text }}
    </div>
    <div class="card__old-price">{{ cards.old_price }}</div>
    <div class="card__new-price">{{ cards.new_price }}</div>
    <!-- -->
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 0px 24.5px 25px 24.5px;
  width: 234px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  // .card__img

  &__img {
    text-align: center;
    img {
      width: 150px;
      height: 150px;
    }
  }

  // .card__stars

  &__stars {
  }

  // .card__text

  &__text {
    font-size: 13px;
    color: var(--color---7);
  }

  // .card__old-price

  &__old-price {
    font-size: 14px;
    line-height: 1.4;
    text-decoration: line-through;
    color: var(--color---10);
  }

  // .card__new-price

  &__new-price {
    font-family: var(--font-semibold);
    font-size: 18px;
    color: var(--color---7);
  }
}
</style>
