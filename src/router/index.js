import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// Products
import Products from "@/views/products/Products.vue";
import productsOverview from "@/views/products/ProductsOverview.vue";
import AddProduct from "@/views/products/AddProduct.vue";
import EditProduct from "@/views/products/EditProduct.vue";

// Colors
import Colors from "@/views/colors/Colors.vue";
import colorsOverview from "@/views/colors/ColorsOverview.vue";
import AddColor from "@/views/colors/AddColor.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/colors",
    component: Colors,
    children: [
      {
        path: "/",
        name: "colors-overview",
        component: colorsOverview
      },
      {
        path: "add",
        name: "colors-add",
        component: AddColor
      }
    ]
  },
  {
    path: "/products",
    component: Products,
    children: [
      {
        path: "/",
        name: "product-overview",
        component: productsOverview
      },
      {
        path: "add",
        name: "products-add",
        component: AddProduct
      },
      {
        path: "edit/:id",
        name: "products-edit",
        component: EditProduct
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
