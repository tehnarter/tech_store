<script setup></script>

<template>
  <div class="footer__top">
    <div class="footer__new">
      <div class="footer__title">Sign Up To Our Newsletter.</div>
      <div class="footer__text">
        Be the first to hear about the latest offers.
      </div>
    </div>

    <FooterForm />
  </div>
</template>

<style scoped lang="scss">
.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer__new {
  .footer__title {
    font-weight: bold;
    font-size: 18px;
  }
  .footer__text {
    color: #bbb;
  }
}
</style>
