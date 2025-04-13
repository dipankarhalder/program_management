import { createBrowserRouter } from "react-router-dom";

import { userPath } from "../utils/paths";
import { AuthLayout } from "../layouts/user/AuthLayout";

import { ErrorPage } from "../pages/user/error";
import { SigninPage } from "../pages/user/auth/SigninPage";
import { SignupPage } from "../pages/user/auth/SignupPage";
import { ForgotPage } from "../pages/user/auth/ForgotPage";

export const router = createBrowserRouter([
  {
    path: userPath.signin,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SigninPage />,
      },
      {
        path: userPath.signup,
        element: <SignupPage />,
      },
      {
        path: userPath.forgot,
        element: <ForgotPage />,
      },
    ],
  },
]);
