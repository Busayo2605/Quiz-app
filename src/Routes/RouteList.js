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
    name: "HOME",
    exact: true,
    path: "/",
    component: Home,
  },
  {
    id: 2,
    name: "QUIZ",
    path: "/quiz",
    exact: true,
    component: Category,
  },
  {
    id: 3,
    name: "ART",
    path: "/art",
    exact: true,
    component: Arts,
  },
  {
    id: 4,
    name: "SCIENCE",
    path: "/science",
    exact: true,
    component: Science,
  },
  {
    id: 5,
    name: "SPORT",
    path: "/sport",
    exact: true,
    component: Sport,
  },
  {
    id: 6,
    name: "POLITICS",
    path: "/politics",
    exact: true,
    component: Politics,
  },
  {
    id: 7,
    name: "general-Knowledge",
    path: "/general-Knowlegde",
    exact: true,
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
