import MainPage from "@/pages/MainPage"
import AboutPage from "@/pages/AboutPage"
import BabyPage from "@/pages/BabyPage"
import { createRouter, createWebHistory } from "vue-router";

const routes = [ {
    path: "/",
    component: MainPage,
},
{
    path: "/about",
    component: AboutPage
}, {
    path: "/baby",
    component: BabyPage,}
]

const router = createRouter({routes, history: createWebHistory()})

export default router;