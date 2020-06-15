import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Subjects from "../views/Subjects.vue";
import Articles from "../views/Articles.vue";
import Menu from "../views/Menu.vue";
import NotFound from "../404.vue";

import PM1 from "../views/Alx/PM1.vue";

Vue.use(VueRouter);

// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
  {
    path: "/pm1",
    name: "pm1",
    component: PM1,
    meta: { description: "Premier Martiens 1" },
  },
  {
    path: "/",
    name: "Introduction",
    component: Home,
    meta: { description: "Page introduction" },
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
    meta: { description: "Menu du site" },
  },
  {
    path: "/chapitre",
    component: Subjects,
    props: true,
    children: [
      {
        path: "article",
        alias: "",
        component: Articles,
        name: "Subjects",
        meta: { description: "Page d'article" },
      },
    ],
  },
  {
    path: "*",
    component: NotFound,
    meta: { description: "Page 404" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
