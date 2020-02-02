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
        cycles: [],
        forks: [],
        chains: []
      },
      showDismissibleAlert: false,
      showSuccessAlert: false,
      ErrorMessage: "",
      errors: 0
    };
  },
  computed: {
    ...mapState(["avaliableColors", "colorsWithValidationErrors"])
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.showDismissibleAlert = false;

      // Refresh validations errors
      this.validations.duplicates = [];
      this.validations.cycles = [];

      // Refresh validations errors
      this.validations.duplicates = [];
      this.validations.cycles = [];

      // todo: validation
      // * Duplicates data validation
      this.validations.duplicates = this.avaliableColors.filter(
        color =>
          color.domain.toLowerCase() == this.form.domain.toLowerCase() &&
          color.range.toLowerCase() == this.form.range.toLowerCase()
      );

      // * Forks data validation
      this.validations.forks = this.avaliableColors.filter(
        color => color.domain.toLowerCase() == this.form.domain.toLowerCase()
      );

      // * Cycles validation
      this.validations.cycles = this.avaliableColors.filter(color => {
        return (
          color.range.toLowerCase() == this.form.domain.toLowerCase() &&
          color.domain.toLowerCase() == this.form.range.toLowerCase()
        );
      });

      // * Chains validation

      this.validations.chains = this.avaliableColors.filter(color => {
        return this.form.domain.toLowerCase() == color.range.toLowerCase();
      });

      // ----------------> End Validation

      // ? Check wich error

      if (this.validations.duplicates.length > 0) {
        // -------
        // * Duplicates error
        this.ErrorMessage = "Duplicates error: This domain already exist";

        // Add to errors array
        this.$store.commit("addColorWithErrors", {
          domain: this.form.domain,
          range: this.form.range,
          typeError: "Duplicates",
          message: this.ErrorMessage
        });

        this.showDismissibleAlert = true;
        // -------
      } else if (this.validations.cycles.length > 0) {
        // -------
        // * Cycles error
        this.ErrorMessage = "Cycles error: you cannot change an existing range!";

        // Add to errors array
        this.$store.commit("addColorWithErrors", {
          domain: this.form.domain,
          range: this.form.range,
          typeError: "Cycles",
          message: this.ErrorMessage
        });

        this.showDismissibleAlert = true;
        // -------
      } else if (this.validations.forks.length > 0) {
        // -------
        // * Forks error
        this.ErrorMessage = "Forks error: This domain already has a different value!";

        // Add to errors array
        this.$store.commit("addColorWithErrors", {
          domain: this.form.domain,
          range: this.form.range,
          typeError: "Forks",
          message: this.ErrorMessage
        });

        this.showDismissibleAlert = true;
        // -------
      } else if (this.validations.chains.length > 0) {
        // -------
        // * Chains error
        this.ErrorMessage = "Chains error: This domain appears in another Range entry!";

        // Add to errors array
        this.$store.commit("addColorWithErrors", {
          domain: this.form.domain,
          range: this.form.range,
          typeError: "Chains",
          message: this.ErrorMessage
        });

        this.showDismissibleAlert = true;
        // -------
      } else {
        // No errors, adding Color
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
