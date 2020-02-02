<template>
  <div class="container">
    <b-table striped hover :items="colorsWithValidationErrors"></b-table>
    <b-alert v-if="!colorsWithValidationErrors.length" variant="success" show>Congratulations! No errors</b-alert>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "errors",
  computed: {
    ...mapState(["colorsWithValidationErrors"])
  }
};
</script>

<style lang="scss" scoped></style>
