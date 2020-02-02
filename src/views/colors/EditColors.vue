<template>
  <div class="container">
    <h3>
      Set the new Properties:
    </h3>
    <b-row>
      <b-col cols="10" md="8" offset-md="2">
        <b-form class="text-left">
          <!-- Color domain -->
          <b-form-group id="input-group-1" label="Domain:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.domain"
              type="text"
              required
              placeholder="Enter the domain color"
            ></b-form-input>
          </b-form-group>
          <!-- Color domain -->

          <!-- Color range -->
          <b-form-group id="input-group-2" label="Range:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.range"
              type="text"
              required
              placeholder="Enter the new range"
            ></b-form-input>
          </b-form-group>
          <!-- Color range -->

          <!-- Confirm changes button -->
          <b-row>
            <b-button variant="success" class="mb-2" block @click="updateItem">Confirm changes</b-button>
          </b-row>
          <!-- Confirm changes button -->

          <!-- Delete button -->
          <b-row>
            <b-button variant="danger" class="mt-2" block @click="deleteItem"> Delete this product</b-button>
          </b-row>
          <!-- Delete button -->

          <!-- Error Message -->
          <b-alert class="mt-4" v-model="showDismissibleAlert" variant="danger" dismissible>
            {{ ErrorMessage }}
          </b-alert>
          <!-- Error Message -->

          <!-- Success Message -->
          <b-alert class="mt-4" v-model="showSuccessAlert" variant="success" dismissible>
            {{ message }}
          </b-alert>
          <!-- Success Message -->
          <button v-show="showBack" class="btn btn-primary block" @click="goBack">Back</button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "editColor",
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
      id: this.$route.params.id,
      showDismissibleAlert: false,
      message: "",
      showSuccessAlert: false,
      showBack: false,
      ErrorMessage: ""
    };
  },
  computed: {
    ...mapState(["avaliableColors", "colorsWithValidationErrors"])
  },
  methods: {
    deleteItem() {
      this.$store.commit("deleteColor", { id: this.id });
      this.message = "Color deleted successfully";
      this.showSuccessAlert = true;

      // reset form values
      this.form.product = "";
      this.form.color = "";
      this.form.image = "";
      this.form.price = 0;
    },

    updateItem() {
      this.showDismissibleAlert = false;

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
        // No errors, updateColor Color
        this.$store.commit("updateColor", {
          id: this.id,
          domain: this.form.domain,
          range: this.form.range
        });
        this.showSuccessAlert = true;

        // reset values
        this.form.domain = "";
        this.form.range = "";
        this.validations.duplicates = [];
        this.validations.cycles = [];

        // success
        this.message = "Color updated successfully";
        this.showSuccessAlert = true;
        this.showBack = true;
      }
    },

    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    // get the data
    this.form.domain = this.avaliableColors[this.id].domain;
    this.form.range = this.avaliableColors[this.id].range;
  }
};
</script>

<style lang="scss" scoped></style>
