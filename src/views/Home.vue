<template>
  <div class="home col-12">
    <div class="text-container container">
      <h1>Welcome to the ABC Company</h1>
      <h3>This is the technical test of the application of the Onedot company in Schlieren.</h3>
    </div>
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
$text-color: #002f67;
.home {
  height: 80vh;
  background-position: 60% 50%;
  background-size: cover;
  background-image: url("https://www.onedot.com/wp-content/uploads/2015/04/onedot-background.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-flow: column;
  text-align: left;
}

.text-container {
  width: 80%;

  & h3 {
    padding-top: 40px;
  }
}
h1,
h3 {
  color: $text-color;
}
</style>
