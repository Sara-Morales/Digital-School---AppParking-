import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EditVehicle from "../components/EditVehicle.vue";
import VehicleItem from "../components/VehicleItem.vue";
import VehicleList from "../components/VehicleList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/edit",
    name: "Edit",
    component: EditVehicle,
  },
  {
    path: "/list",
    name: "List",
    component: VehicleList,
  },
  {
    path: "/item",
    name: "item",
    component: VehicleItem,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
