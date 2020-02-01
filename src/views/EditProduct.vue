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

          <!-- Confirm changes button -->
          <b-row>
            <b-button variant="success" class="mb-2" block @click="updateItem"
              >Confirm changes</b-button
            >
          </b-row>
          <!-- Confirm changes button -->

          <!-- Delete button -->
          <b-row>
            <b-button variant="danger" class="mt-2" block @click="showModal">
              Delete this product</b-button
            >
          </b-row>
          <!-- Delete button -->

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
            {{ message }}
          </b-alert>
        </b-form>
      </b-col>
    </b-row>
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
      message: "",
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
      this.message = "Article deleted Successfully";
      this.showSuccessAlert = true;
      this.form.product = "";
      this.form.color = "";
      this.form.image = "";
      this.form.price = 0;
    },
    updateItem() {
      this.$store.commit("updateItem", {
        id: this.id,
        product: this.form.product,
        color: this.form.color,
        image: this.form.image,
        price: this.form.price
      });
      this.message = "Article updated Successfully";
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
  },
  created() {
    this.form.product = this.phones[this.id].product;
    this.form.color = this.phones[this.id].color;
    this.form.image = this.phones[this.id].image;
    this.form.price = this.phones[this.id].price;
  }
};
</script>
