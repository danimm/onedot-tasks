<template>
  <div v-if="phone.product">
    <b-card no-body class="overflow-hidden mb-4" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="phone.image ? phone.image : imageDefault"
            class="rounded-0"
            style="width: 70%; min-height: 80%; padding: 10px 0;"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="phone.product">
            <b-card-text> Color: {{ phone.color }} </b-card-text>
            <b-card-text> Price: {{ phone.price ? phone.price : defaultPrice }} CHF </b-card-text>
            <b-card-text>
              <b-button variant="warning" block class="mb-2" @click="goToEdit(index)">Edit</b-button>
              <!-- <b-button variant="danger" block class="mt-2" @click="deleteItem(index)"
                >Delete</b-button
              > -->
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    phone: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      defaultPrice: 0,
      imageDefault: "http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png"
    };
  },
  methods: {
    goToEdit(id) {
      console.log(id);
      this.$router.push({ name: "products-edit", params: { id: id } });
    },
    deleteItem(id) {
      this.$store.commit("removeItem", { id });
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  object-fit: contain;
  height: 100%;
}
</style>
