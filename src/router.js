import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue"
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      component: Login
    }
  ]
});
