<script setup>

</script>

<template>
  <div class="header__top">
    <div class="header__top-row container">
      <div class="header__time">Mon-Thu:<span>9:00 AM - 5:30 PM</span></div>
      <div class="header__address">
        Visit our showroom in 1234 Street Adress City Address, 1234
        <span>Contact Us</span>
      </div>
      <HeaderContacts />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header__top-row {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__time {
  font-size: 12px;
  font-family: var(--font-semibold);
  color: #acacac;
  span {
    color: #fff;
  }
}
.header__address {
  font-size: 12px;
  color: #acacac;
  text-align: center;
  span {
    color: #fff;
  }
}
</style>
