<template>
<div class="wrapper">
    <AppHeader />
    <main class="main">
      <div class="container">
       <SliderMain />
       <SliderNewProducts />
       <ProductSeries />
       <SearchSeries :series="seriesGL" />
       <SearchSeries :series="seriesIN" />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>

const seriesGL = [
  { name: "MSI GS Series" },
  { name: "MSI GT Series" },
  { name: "MSI GL Series" },
  { name: "MSI GE Series" },
]
const seriesIN = [
  { name: "MSI Infinute Series" },
  { name: "MSI Triden" },
  { name: "MSI GL Series" },
  { name: "MSI Nightblade" },
]


</script>

<style lang="scss" scoped>

</style>
