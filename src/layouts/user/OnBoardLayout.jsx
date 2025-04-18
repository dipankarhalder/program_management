import { Outlet } from "react-router-dom";
import { MainLogo } from "../../components/user/auth/MainLogo";

export const OnBoardLayout = () => {
  return (
    <div className="app_onboard_process_cover">
      <div className="app_inside_container">
        <div className="app_onboard_logo">
          <MainLogo />
        </div>
        <div className="app_onboard_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
