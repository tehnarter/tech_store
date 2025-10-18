<script setup>
defineProps({
  title: String,
  items: Array,
});
</script>

<template>
  <div class="footer__list">
    <ul>
      <li class="footer__list-title">{{ title }}</li>
      <li v-for="(item, i) in items" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.footer__list {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #bbb;
      margin-bottom: 6px;

      &:first-child {
        color: #fff;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
