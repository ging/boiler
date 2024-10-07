import Page from "./../app/page";
import Team from "./../app/team/page";
import Research from "./../app/research/page";
import Contact from "./../app/contact/page";
import About from "./../app/about/page";

export const routes = [
    { route: "/", key: "nav.item1", page:<Page/> },
    { route: "/about", key: "nav.item2", page:<About/> },
    { route: "/team", key: "nav.item3", page:<Team/> },
    { route: "/research", key: "nav.item4", page:<Research/> },
    { route: "/contact", key: "nav.item5", page:<Contact/> },
    //{ route: "/design-system", key: "nav.item6" },
  ];
