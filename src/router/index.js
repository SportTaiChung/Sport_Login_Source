import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
// import Service from '../views/Service.vue'
const defaultTitle = "UPG SPORTSBOOK";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "會員登入 - " + defaultTitle,
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: "Login" },
  },
  // {
  //   path: '/service',
  //   name: 'Service',
  //   component: Service
  // },
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//預設給予title

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  next();
});

export default router;
