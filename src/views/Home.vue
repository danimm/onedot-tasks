<template>
  <div class="home">
    <div v-for="(phone, index) in phones" :key="index" class="grid-container">
      <CardComponent :phone="phone" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "home",
  components: { CardComponent },
  data() {
    return {
      phones: [
        {
          product: "Apple Iphone 6s",
          color: "Dark Grey",
          price: "CHF 769",
          image:
            "https://static.digitecgalaxus.ch/Files/4/8/9/3/1/2/1/iPhone6s_2up_PB_PF_SpGry_CH-DE-SCREEN.jpg?fit=inside%7C1823:2000"
        },
        {
          product: "Samsung Galaxy S8",
          color: "Midnight Black",
          price: "CHF 569",
          image:
            "https://static.digitecgalaxus.ch/Files/1/9/8/1/1/5/9/4/Samsung_S10_black.jpg?fit=inside%7C1823:2000"
        },
        {
          product: "Huawei P9",
          color: "Mystic Silver",
          price: "CHF 272",
          image:
            "https://static.digitecgalaxus.ch/Files/7/4/7/4/3/6/8/0006499_huawei-p9-eva-l09-32gb-titanium-grey.jpeg?fit=inside%7C1823:2000"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 40px;
  margin: 0 auto;
}
.grid-container {
  display: grid;
  grid-template-columns: 2fr;
}
</style>
