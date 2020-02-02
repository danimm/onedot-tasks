<template>
  <div>
    <div class="container">
      <!-- Success Message -->
      <b-alert class="mt-4" v-model="showSuccessAlert" variant="success" dismissible>
        Color deleted successfully
      </b-alert>
      <!-- Success Message -->
      <table class="table striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Domain</th>
            <th scope="col">Range</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(color, index) in avaliableColors" :key="index">
            <th scope="row">{{ index }}</th>
            <td>{{ color.domain }}</td>
            <td>{{ color.range }}</td>
            <td>
              <button class="btn btn-warning mr-4" @click="goToEdit(index)">Edit</button>
              <button class="btn btn-danger" @click="deleteItem(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "colors-overview",
  data() {
    return {
      fields: ["index", "Domain", "Range"],
      showSuccessAlert: false
    };
  },
  computed: {
    ...mapState(["avaliableColors"])
  },
  methods: {
    goToEdit(id) {
      this.$router.push({ name: "colors-edit", params: { id } });
    },
    deleteItem(id) {
      this.$store.commit("deleteColor", { id });
      this.showSuccessAlert = true;
    }
  }
};
</script>

<style lang="scss" scoped></style>
