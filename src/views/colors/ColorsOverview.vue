<template>
  <div>
    <div class="container">
      <b-table striped hover :items="avaliableColors"></b-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "colors-overview",
  computed: {
    ...mapState(["avaliableColors"])
  }
};
</script>

<style lang="scss" scoped></style>
