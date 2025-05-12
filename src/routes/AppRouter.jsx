import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { PublicLayout } from "../pages/PublicLayout";
import { SignUp } from "../auth/SignUp";
import { PrivateLayout } from "../pages/PrivateLayout";
import { MainContentWelcome } from "../pages/MainContentWelcome";
import { MainPage } from "../pages/MainPage";

export const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/welcome" />,
    },
    {
      element: <PublicLayout />,
      children: [
        {
          path: "/welcome",
          element: <MainContentWelcome />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
      ],
    },
    {
      element: <PrivateLayout />,
      children: [
        {
          path: "/layout",
          element: <MainPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
