import Arts from "../pages/Art";
import Category from "../pages/category";
import General from "../pages/general";
import Home from "../pages/Home";
import Politics from "../pages/politics";
import Science from "../pages/science";
import Score from "../pages/score";
import Sport from "../pages/sport";
import Error from "../pages/error";

export const RouteList = [
  {
    id: 1,
    path: "/",
    name: "HOME",
    exact: true,
    component: Home,
  },
  {
    id: 2,
    path: "/quiz",
    name: "QUIZ",
    exact: false,
    component: Category,
  },
  {
    id: 3,
    path: "/art",
    name: "ART",
    exact: false,
    component: Arts,
  },
  {
    id: 4,
    path: "/science",
    name: "SCIENCE",
    exact: false,
    component: Science,
  },
  {
    id: 5,
    path: "/sport",
    name: "SPORT",
    exact: false,
    component: Sport,
  },
  {
    id: 6,
    path: "/politics",
    name: "POLITICS",
    exact: false,
    component: Politics,
  },
  {
    id: 7,
    path: "/general-Knowlegde",
    name: "general-Knowledge",
    exact: false,
    component: General,
  },
  {
    id: 8,
    name: "SCORE",
    path: "/Score",
    exact: true,
    component: Score,
  },
  {
    id: 9,
    name: "ERROR",
    path: "*",
    exact:true,
    component: Error,
  },
];
