<script setup></script>

<template>
  <div class="footer__bottom">
    <FooterSocial />
    <FooterCard />
    <div class="footer__copyrigh">Copyright © 2020 Shop Pty. Ltd.</div>
  </div>
</template>

<style scoped lang="scss">
.footer__bottom {
   padding: 17px 0px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer__copyrigh {
    font-family: var(--font-medium);

    font-size: 12px;
    line-height: 1.325;
    text-align: right;
    color: #fff;
    opacity: 0.6;
  }
</style>
