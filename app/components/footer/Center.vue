<script setup>
const sections = [
  {
    title: "Information",
    items: [
      "About Us",
      "About Zip",
      "Privacy Policy",
      "Search",
      "Terms",
      "Orders and Returns",
      "Contact Us",
      "Advanced Search",
      "Newsletter Subscription",
    ],
  },
  {
    title: "PC Parts",
    items: [
      "CPUS",
      "Add On Cards",
      "Hard Drives (Internal)",
      "Graphic Cards",
      "Keyboards / Mice",
      "Cases / Power Supplies / Cooling",
      "RAM (Memory)",
      "Software",
      "Speakers / Headsets",
      "Motherboards",
    ],
  },
  {
    title: "Desktop PCs",
    items: [
      "Custom PCs",
      "Servers",
      "MSI All-In-One PCs",
      "HP/Compaq PCs",
      "ASUS PCs",
      "Tecs PCs",
    ],
  },
  {
    title: "Laptops",
    items: [
      "Evryday Use Notebooks",
      "MSI Workstation Series",
      "MSI Prestige Series",
      "Tablets and Pads",
      "Netbooks",
      "Infinity Gaming Notebooks",
    ],
  },
  {
    title: "Address",
    items: [
      "Address: 1234 Street Address City Address, 1234",
      "Phones: (00) 1234 5678",
      "We are open: Monday-Thursday: 9:00 AM - 5:30 PM",
      "Friday: 9:00 AM - 6:00 PM",
      "Saturday: 11:00 AM - 5:00 PM",
      "E-mail: shop@email.com",
    ],
  },
];
</script>

<template>
  <div class="footer__center">
    <FooterList
      v-for="(section, i) in sections"
      :key="i"
      :title="section.title"
      :items="section.items"
    />
  </div>
</template>

<style scoped lang="scss">
.footer__center {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  padding: 30px 0;
}
</style>
