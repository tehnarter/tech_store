<script setup>

</script>

<template>
  <div class="header__bottom">
    <div class="header__bottom-row container">
      <HeaderLogo />
      <NavMenu class="header__menu" />
      <div class="header__right-menu">
        <HeaderSearch />
        <HeaderShop />
        <HeaderLogin />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header__bottom-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 136px;
}
.header__right-menu {
  display: flex;
  align-items: center;
  column-gap: 25px;
}
</style>
