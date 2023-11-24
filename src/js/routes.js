import HomePage from "../pages/home.f7";
import loginPage from "../pages/login.f7";
import registPage from "../pages/regist.f7";
import aboutPage from "../pages/about.f7";
import coursePage from "../pages/course.f7";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: loginPage,
  },
  {
    path: "/regist",
    component: registPage,
  },
  {
    path: "/about",
    component: aboutPage,
  },
  {
    path: "/course",
    component: coursePage,
  },
];

export default routes;
