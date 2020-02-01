import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    avaliableColors: ["Dark Grey", "Black", "Silver"],
    phones: [
      {
        product: "Apple Iphone 6s",
        color: "Dark Grey",
        price: 769,
        image:
          "https://static.digitecgalaxus.ch/Files/4/8/9/3/1/2/1/iPhone6s_2up_PB_PF_SpGry_CH-DE-SCREEN.jpg?fit=inside%7C1823:2000"
      },
      {
        product: "Samsung Galaxy S8",
        color: "Midnight Black",
        price: 569,
        image:
          "https://static.digitecgalaxus.ch/Files/1/9/8/1/1/5/9/4/Samsung_S10_black.jpg?fit=inside%7C1823:2000"
      },
      {
        product: "Huawei P9",
        color: "Mystic Silver",
        price: 272,
        image:
          "https://static.digitecgalaxus.ch/Files/7/4/7/4/3/6/8/0006499_huawei-p9-eva-l09-32gb-titanium-grey.jpeg?fit=inside%7C1823:2000"
      }
    ]
  },
  mutations: {
    getInitialState(state) {
      window.localStorage.removeItem("phones");
      window.localStorage.setItem("phones", JSON.stringify(state.phones));
      // state.phones = JSON.parse(window.localStorage.getItem("phones")) || [];
    },
    addItem(state, payload = {}) {
      //TODO: validation

      state.phones.push({
        product: payload.product,
        color: payload.color,
        price: payload.price,
        image: payload.image
      });

      window.localStorage.setItem("phones", JSON.stringify(state.phones));
    },
    updateItem(state, payload) {
      // Todo: validation
      console.log(payload);
      const newValues = {};
      newValues.product = payload.product;
      newValues.color = payload.color;
      newValues.image = payload.image;
      newValues.price = payload.price;
      state.phones.splice(payload.id, 1, newValues);
      console.log(state.phones);
      window.localStorage.setItem("phones", JSON.stringify(state.phones));
    },
    removeItem(state, payload = {}) {
      // Todo: validation

      state.phones.splice(payload.id, 1);
      window.localStorage.setItem("phones", JSON.stringify(state.phones));
    }
  },
  actions: {},
  modules: {}
});
