<template>
  <div class="container">
    <h3>Set the new Properties:</h3>
    <!-- <h4>{{ phones[id].product || phones[0].product }}</h4> -->
    <b-row>
      <b-col cols="10" md="8" offset-md="2">
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

          <b-button type="submit" variant="primary">Edit this Product</b-button>
          <b-button variant="danger" class="ml-4" @click="deleteItem">
            Delete this product</b-button
          >

          <b-modal ref="delete-modal" hide-footer title="Confirmation required">
            <div class="d-block text-center">
              <h3>Are you sure that you want to delete this product ?</h3>
              <p>This action can't be reverse</p>
            </div>
            <b-button variant="danger" block @click="deleteItem">Delete</b-button>
            <b-button class="mt-2" block @click="hideModal">Cancel</b-button>
          </b-modal>

          <!-- Error Message -->
          <b-alert
            class="mt-4"
            v-model="showDismissibleAlert"
            variant="danger"
            dismissible
          >
            {{ ErrorMessage }}
          </b-alert>
          <!-- Error Message -->

          <!-- Success Message -->
          <b-alert class="mt-4" v-model="showSuccessAlert" variant="success" dismissible>
            Article deleted Successfully
          </b-alert>
        </b-form>
      </b-col>
    </b-row>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "editProduct",
  data() {
    return {
      form: {
        product: "",
        color: "",
        price: null,
        image: ""
      },
      id: this.$route.params.id,
      showDismissibleAlert: false,
      showSuccessAlert: false,
      ErrorMessage: ""
    };
  },
  methods: {
    onSubmit() {
      return;
    },
    deleteItem() {
      this.$store.commit("removeItem", { id: this.id });
      this.hideModal();
      this.showSuccessAlert = true;
    },
    showModal() {
      this.$refs["delete-modal"].show();
    },
    hideModal() {
      this.$refs["delete-modal"].hide();
    }
  },
  computed: {
    ...mapState(["phones"])
  }
};
</script>
