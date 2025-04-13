import { Outlet } from "react-router-dom";
import authbg from "/auth_bg.jpg?url";

export const AuthLayout = () => {
  return (
    <div className="app_main_cover">
      <Outlet />
      <div className="app_auth_bg">
        <img src={authbg} alt="Auth Background Banner" />
        <p>
          Designed &amp; Developed by<span>Pixelwiz Private Limited</span>
        </p>
      </div>
    </div>
  );
};
