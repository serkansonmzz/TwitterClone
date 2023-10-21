import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
//absolute path lazım oldu buraya
import Explore from "~/pages/explore";
import Notification from "~/pages/notification";
import NotFound from "~/pages/not-found";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
