import Page from "./../app/page";
import Team from "./../app/team/page";
import Research from "./../app/research/page";
import Contact from "./../app/contact/page";
import About from "./../app/about/page";
import DesignSystem from "@/app/design-system/page";
import Documentation from "@/app/documentation/page";
// import Courses from "@/app/courses/page";
// import Tools from "@/app/tools/page";
import { Route, Routes } from "react-router-dom";

export const routes = [
    { route: "/", key: "nav.item1", page:<Page/>, active: true },
    { route: "/about", key: "nav.item2", page:<About/>, active: true },
    { route: "/team", key: "nav.item3", page:<Team/>, active: true },
    // { route: "/courses", key: "nav.item8", page:<Courses/>, active: true },
    // { route: "/tools", key: "nav.item9", page:<Tools/>, active: true },
    { route: "/research", key: "nav.item4", page:<Research/>, active: true },
    { route: "/contact", key: "nav.item5", page:<Contact/>, active: true },
    { route: "/design-system", key: "nav.item6", page:<DesignSystem/>, active: false },
    { route: "/documentation", key: "nav.item7", page:<Documentation/>, active: false },
  ];

export const activeRoutes = routes
  .filter(route => route.active)  // Filtrar solo las rutas activas
