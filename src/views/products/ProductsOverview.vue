<template>
  <div class="container">
    <div>
      <div v-for="(phone, index) in phones" :key="index">
        <CardComponent :phone="phone" :index="index" />
      </div>
    </div>
    <!-- <div class="col-6 offset-1"> -->
    <b-alert show v-if="phones.length < 1">No items to show</b-alert>
    <!-- </div> -->
  </div>
</template>

<script>
//components
import CardComponent from "@/components/CardComponent";

import { mapState } from "vuex";

export default {
  name: "overview",
  components: { CardComponent },
  computed: {
    ...mapState(["phones"])
  }
  // created() {
  //   this.$store.commit("getInitialState");
  // }
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
