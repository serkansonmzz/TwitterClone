import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
//absolute path lazım oldu buraya
import Explore from "~/pages/explore";
import Notification from "~/pages/notification";
import MainLayout from "~/layouts/main";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notification />,
      },
    ],
  },
]);

export default routes;
