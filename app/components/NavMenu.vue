<script setup>
const menu = [
  { name: "Laptops", path: "#" },
  { name: "Desktop PCs", path: "#" },
  { name: "Networking Devices", path: "#" },
  { name: "Printers & Scanners", path: "#" },
  { name: "PC Parts", path: "#" },
  { name: "All Other Products", path: "#" },
  { name: "Repairs", path: "#" },
  { name: "Our Deals", path: "#" },
]
</script>

<template>
  <div class="nav">
    <div class="nav__row">
      <nav class="nav__menu">
        <ul class="nav__item">
          <li class="nav__link" v-for="link in menu">
            <RouterLink :to="link.path">{{ link.name }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  // .nav__row

  &__row {
  }

  // .nav__menu

  &__menu {
  }

  // .nav__item

  &__item {
    display: flex;
    column-gap: 25px;
    align-items: center;
  }

  // .nav__link

  &__link {
    text-decoration: none;
    font-family: var(--font-semibold);
    font-size: 14px;
    white-space: nowrap;
    color: var(--color---7);
    &:last-child {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      gap: 10px;
      border: 2px solid var(--color---3);
      border-radius: 50px;
      padding: 8px 26px;
      width: 121px;
      height: 37px;
    }
  }
}
</style>
