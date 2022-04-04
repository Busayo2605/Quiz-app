import Arts from "../pages/Art";
import Category from "../pages/category";
import General from "../pages/general";
import Home from "../pages/Home";
import Politics from "../pages/politics";
import Science from "../pages/science";
import Score from "../pages/score";
import Sport from "../pages/sport";
// import Error from "../pages/error";

export const RouteList = [
  {
    id: 1,
    name: "HOME",
    exact: true,
    path: "/",
    component: Home,
  },
  {
    id: 2,
    name: "QUIZ",
    exact: true,
    path: "/quiz",
    component: Category,
  },
  {
    id: 3,
    name: "ART",
    exact: true,
    path: "/art",
    component: Arts,
  },
  {
    id: 4,
    name: "SCIENCE",
    exact: true,
    path: "/science",
    component: Science,
  },
  {
    id: 5,
    name: "SPORT",
    exact: true,
    path: "/sport",
    component: Sport,
  },
  {
    id: 6,
    name: "POLITICS",
    exact: true,
    path: "/politics",
    component: Politics,
  },
  {
    id: 7,
    name: "general-Knowledge",
    exact: true,
    path: "/general-Knowlegde",
    component: General,
  },
  {
    id: 8,
    name: "SCORE",
    exact: true,
    path: "/Score",
    component: Score,
  },
  // {
  //   id: 9,
  //   name: "ERROR",
  //   exact:true,
  //   path: "*",
  //   component: Error,
  // },
];
