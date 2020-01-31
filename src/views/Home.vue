<template>
  <div class="home">
    <h1>Welcome to the ABC Company</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.home {
  height: 80vh;
  background-position: center;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
}
h1 {
  color: white;
}
</style>
