<template>
  <div class="container">
    <b-form @submit="onSubmit" class="text-left">
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
      <b-form-select v-model="form.selectedColor" :options="form.options"></b-form-select>
      <!-- Product color -->

      <!-- Product image -->
      <b-form-group id="input-group-2" label="Image (optional):" label-for="input-2" class="pt-3">
        <b-form-input
          id="input-3"
          v-model="form.image"
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
        product: "",
        price: null,
        image: "",
        options: [
          {
            value: null,
            text: "Please select a color"
          }
        ],
        selectedColor: null
      },
      showDismissibleAlert: false,
      showSuccessAlert: false,
      ErrorMessage: "",
      errors: 0
    };
  },
  created() {
    // Getcolors
    this.avaliableColors.map(color => {
      this.form.options.push({
        value: color.range,
        text: color.range
      });
    });
  },
  computed: {
    ...mapState(["phones", "avaliableColors"])
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

      this.$store.commit("addProduct", this.form);
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

<style lang="scss">
.form-group {
  margin-bottom: 20px;
}
</style>
