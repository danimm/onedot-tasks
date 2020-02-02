<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="light">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">
              Home
            </router-link>
          </b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Products" left>
            <b-dropdown-item>
              <router-link to="/products">Products overview</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link :to="{ name: 'products-add' }">Add Products</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Colors" left>
            <b-dropdown-item>
              <router-link to="/colors">Colors overview</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link :to="{ name: 'colors-add' }">Add Colors</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item>
            <router-link to="/errors">
              Errors
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <transition name="router-anim">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("getInitialState");
  }
};
</script>

<style lang="scss">
// @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.page {
  position: fixed;
  width: inherit;
}

.router-anim-enter-active {
  animation: coming 0.7s;
  animation-delay: 0.1s;
  opacity: 0;
}

// .router-anim-leave-active {
//   animation: going 1s;
// }

.router-anim-leave {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
