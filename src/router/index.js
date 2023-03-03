import { createRouter, createWebHistory } from "vue-router";
import useUserStore from "@/stores/user";

const HomeView = () => import("@/views/HomeView.vue");
const ManageView = () => import("@/views/ManageView.vue");
const SongView = () => import("@/views/SongView.vue");
const AboutView = () => import("@/views/AboutView.vue");

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "about",
    path: "/about",
    component: AboutView,
  },
  {
    name: "manage",
    // alias: "/manage",
    path: "/manage-music",
    component: ManageView,
    // beforeEnter: (to, from, next) => {
    //   console.log("Working");
    //   next();
    // },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/manage",
    redirect: { name: "manage" },
  },
  {
    path: "/:catchAll(.*)*",
    redirect: "/",
  },
  {
    name: "song",
    path: "/song/:id",
    component: SongView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

// Run a function before every request
router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    return next();
  }

  const store = useUserStore();
  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
