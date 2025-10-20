<script setup></script>

<template>
   <div class="footer__social">
          <SvgoFacebook filled :fontControlled="false"  width="22"  height="22" />
          <SvgoInstagram filled :fontControlled="false"  width="22"  height="22" />
        </div>

</template>

<style scoped lang="scss">
.footer__social {
  display: flex;
    align-items: center;
    column-gap: 11px;

  svg {
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
