<template>
  <div class="col-6 offset-3">
    <b-form @submit="onSubmit">
      <!-- Product name -->
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.product"
          type="text"
          required
          placeholder="Enter the product name"
        ></b-form-input>
      </b-form-group>
      <!-- Product name -->

      <!-- Product color -->
      <b-form-group id="input-group-2" label="Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.color"
          required
          type="text"
          placeholder="Enter a color for your product"
        ></b-form-input>
      </b-form-group>
      <!-- Product color -->

      <!-- Product image -->
      <b-form-group id="input-group-2" label="Image (optional):" label-for="input-2">
        <b-form-input
          id="input-3"
          v-model="form.image"
          required
          type="text"
          placeholder="Enter a image src for your product"
        ></b-form-input>
      </b-form-group>
      <!-- Product image -->

      <!-- Product price -->
      <b-form-group id="input-group-2" label="Price (CHF):" label-for="input-2">
        <b-form-input
          id="input-4"
          type="number"
          v-model="form.price"
          required
          placeholder="Set a price in CHF"
        ></b-form-input>
      </b-form-group>
      <!-- Product price -->

      <b-button type="submit" variant="primary">Add Product</b-button>
      <!-- Error Message -->
      <b-alert class="mt-4" v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ ErrorMessage }}
      </b-alert>
      <!-- Error Message -->

      <!-- Success Message -->
      <b-alert class="mt-4" v-model="showSuccessAlert" variant="success" dismissible>
        Article added Successfull
      </b-alert>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "addProduct",
  data() {
    return {
      form: {
        product: "",
        color: "",
        price: null,
        image: ""
      },
      colors: [],
      showDismissibleAlert: false,
      showSuccessAlert: false,
      ErrorMessage: "",
      errors: 0
    };
  },
  created() {},
  computed: {
    ...mapState(["phones"])
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      // const colors = this.phones.map(tel => tel.color);
      //validation
      // if (colors.includes(this.color)) {
      //   this.showDismissibleAlert = true;
      //   this.ErrorMessage = "Color is already used, take another";
      //   this.errors++;
      // }

      this.$store.commit("addItem", this.form);
      this.showSuccesAlert = true;
      this.form.product = "";
      this.form.color = "";
      this.form.price = null;
      this.form.image = "";
      this.showSuccessAlert = true;

      //alert message
    },
    onReset(evt) {
      evt.preventDefault();
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
