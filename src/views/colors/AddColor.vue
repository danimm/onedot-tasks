<template>
  <div class="container">
    <b-form @submit="onSubmit" class="text-left">
      <!-- Product domain -->
      <b-form-group id="input-group-1" label="Domain:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.domain"
          type="text"
          required
          placeholder="Enter the color to convert"
        ></b-form-input>
      </b-form-group>
      <!-- Product domain -->

      <!-- Product range -->
      <b-form-group id="input-group-2" label="Range:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.range"
          type="text"
          required
          placeholder="Enter the normalized value"
        ></b-form-input>
      </b-form-group>
      <!-- Product range -->

      <b-button type="submit" variant="primary">Add new color</b-button>
      <!-- Error Message -->
      <b-alert class="mt-4" v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ ErrorMessage }}
      </b-alert>
      <!-- Error Message -->

      <!-- Success Message -->
      <b-alert class="mt-4" v-model="showSuccessAlert" variant="success" dismissible>
        Color added Successfull
      </b-alert>
      <!-- Success Message -->
    </b-form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "addProduct",
  data() {
    return {
      form: {
        domain: "",
        range: ""
      },
      validations: {
        duplicates: [],
        cycles: []
      },
      showDismissibleAlert: false,
      showSuccessAlert: false,
      ErrorMessage: "",
      errors: 0
    };
  },
  computed: {
    ...mapState(["avaliableColors"])
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.showDismissibleAlert = false;

      // todo: validation
      // Duplicates
      this.validations.duplicates = this.avaliableColors.filter(color => {
        // return color.domain.toLowerCase().includes(this.form.domain.toLowerCase());
        return color.domain.toLowerCase() == this.form.domain.toLowerCase();
      });

      // Cycles
      this.validations.cycles = this.avaliableColors.filter(color => {
        return color.range.toLowerCase() == this.form.domain.toLowerCase();
      });

      if (this.validations.duplicates.length > 0) {
        this.ErrorMessage = "This domain already exist";
        this.showDismissibleAlert = true;
      } else if (this.validations.cycles.length > 0) {
        this.ErrorMessage = "You can't change a existence color";
        this.showDismissibleAlert = true;
      } else {
        // No errors
        this.$store.commit("addColor", this.form);
        this.showSuccessAlert = true;

        // reset values
        this.form.domain = "";
        this.form.range = "";
        this.validations.duplicates = [];
        this.validations.cycles = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
