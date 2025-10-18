<script setup></script>

<template>
  <form class="footer-form">
    <input type="email" class="footer-form__text" placeholder="Your Email" />
    <button type="submit" class="footer-form__button">Subscribe</button>
  </form>
</template>

<style scoped lang="scss">
.footer-form {
  display: flex;
  align-items: center;
  gap: 10px;

  &__text {
    padding: 10px;
    border-radius: 5px;
    border: none;
  }

  &__button {
    padding: 10px 20px;
    background: #007bff;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:hover {
      background: #0056b3;
    }
  }
}
</style>
