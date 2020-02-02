import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Products from "@/views/Products.vue";
import Overview from "@/views/Overview.vue";
import AddProduct from "@/views/AddProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/products",
    component: Products,
    // component: () => import(/* webpackChunkName: "about" */ "../views/Overview.vue"),
    children: [
      {
        path: "/",
        name: "product-overview",
        component: Overview
      },
      {
        path: "add",
        name: "products-add",
        component: AddProduct
      },
      {
        path: "edit/:id",
        name: "products-edit",
        component: () => import(/* webpackChunkName: "about" */ "../views/EditProduct.vue")
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
