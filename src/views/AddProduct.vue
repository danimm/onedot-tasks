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

      <!-- Product price -->
      <b-form-group id="input-group-2" label="Price (CHF):" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="form.price"
          required
          placeholder="Set a price in CHF"
        ></b-form-input>
      </b-form-group>
      <!-- Product price -->

      <b-button type="submit" variant="primary">Add Product</b-button>
      <b-alert class="mt-4" v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ ErrorMessage }}
      </b-alert>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        product: "",
        color: "",
        price: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      showDismissibleAlert: false,
      ErrorMessage: "Default message"
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
