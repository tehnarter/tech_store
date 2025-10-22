<script setup>
defineProps({
  series: Array,
})
</script>
<template>
  <div class="series">
    <div class="series__name" v-for="link in series">{{ link.name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.series {
  // .series__name
  margin: 0px 0px 20px 0px;
  display: flex;
  column-gap: 25px;
  &__name {
    font-family: var(--font-semibold);
    padding: 0px 0px 3px 0px;
    font-size: 16px;
    line-height: 1.4;

    color: #838383;
    &:hover {
      color: var(--color---7);
      border-bottom: 2px solid var(--color---3);
    }
  }
}
</style>
