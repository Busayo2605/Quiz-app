import { Route, Routes } from "react-router-dom";
import { RouteList } from "./RouteList";

const AppRouter = () => {
  return (
    <Routes>
      {RouteList.map((item) => {
        const Comp = item.component;
        return (
          <Route
            key={item.id}
            path={item.path}
            exact={item.exact}
            element={<Comp />}
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
