import { Route, Routes } from "react-router-dom";
import { RouteList } from "./RouteList";

const AppRouter = () => {
  return (
    <div>
      {RouteList.map((item) => {
        const Comp = item.component;
        return (
          <Routes>
            <Route key={item.id} path={item.path} exact={item.exact} element={<Comp />} />
          </Routes>
        );
      })}
    </div>
  );
};

export default AppRouter;
