<template>
  <div>
    <div v-for="(phone, index) in phones" :key="index" class="grid-container">
      <CardComponent :phone="phone" />
    </div>
  </div>
</template>

<script>
//components
import CardComponent from "@/components/CardComponent";

import { mapState } from "vuex";

export default {
  name: "overview",
  components: { CardComponent },
  data() {
    return {};
  },
  computed: {
    ...mapState(["phones"])
  }
};
</script>

<style lang="scss" scoped></style>
