<template>
  <div>
    <div class="container">
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
              <button class="btn btn-warning mr-4">Edit</button>
              <button class="btn btn-danger">Delete</button>
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
      fields: ["index", "Domain", "Range"]
    };
  },
  computed: {
    ...mapState(["avaliableColors"])
  }
};
</script>

<style lang="scss" scoped></style>
