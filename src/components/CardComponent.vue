<template>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="phone.image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="phone.product">
          <b-card-text> Price: {{ phone.price }} </b-card-text>
          <b-card-text>
            <b-button variant="primary">Go to the product</b-button>
          </b-card-text>
          <b-card-text> <b-button variant="warning">Edit product</b-button> </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    phone: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
