<template>
  <div class="container">
    <h3>
      Set the new Properties:
    </h3>
    <b-row>
      <b-col cols="10" md="8" offset-md="2">
        <button v-show="showBack" class="btn btn-primary block" @click="goBack">Back</button>
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
      id: this.$route.params.id,
      showDismissibleAlert: false,
      message: "",
      showSuccessAlert: false,
      showBack: false,
      ErrorMessage: ""
    };
  },
  computed: {
    ...mapState(["avaliableColors"])
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
      this.$store.commit("updateColor", {
        id: this.id,
        domain: this.form.domain,
        range: this.form.range
      });

      this.message = "Color updated successfully";
      this.showSuccessAlert = true;
      this.showBack = true;
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
