import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../view/home/Home";

const MainRouter = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default MainRouter;