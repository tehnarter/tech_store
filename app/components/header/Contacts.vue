<template>
  <div class="header__contacts">
    <div class="header__call">Call Us: (00) 1234 5678</div>
    <div class="header__face">
        <SvgoFacebook filled :fontControlled="false"  width="20"  height="20" />
    </div>
    <div class="header__inst">
         <SvgoInstagram filled :fontControlled="false"  width="20"  height="20" />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.header__contacts {
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #fff;
  font-size: 12px;
}
</style>
