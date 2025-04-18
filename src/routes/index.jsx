import { createBrowserRouter } from "react-router-dom";

/* all layouts */
import { userPath } from "../utils/paths";
import { AuthLayout } from "../layouts/user/AuthLayout";
import { OnBoardLayout } from "../layouts/user/OnBoardLayout";
import { UserLayout } from "../layouts/user/UserLayout";

/* all auth pages */
import { ErrorPage } from "../pages/user/error";
import { SigninPage } from "../pages/user/auth/SigninPage";
import { SignupPage } from "../pages/user/auth/SignupPage";
import { ForgotPage } from "../pages/user/auth/ForgotPage";

/* all email verification pages */
import { OnBoardUserPage } from "../pages/user/main/OnBoard";
import { EmailVerificationPage } from "../pages/user/main/OnBoard/EmailVerificationPage";

/* all main user pages */
import { UserDashboardPage } from "../pages/user/main/Dashboard";

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
  {
    path: `${userPath.user}${userPath.emailverify}`,
    element: <OnBoardLayout />,
    children: [
      {
        index: true,
        element: <OnBoardUserPage />,
      },
    ],
  },
  {
    path: `${userPath.user}${userPath.dashboard}`,
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserDashboardPage />,
      },
    ],
  },
]);
