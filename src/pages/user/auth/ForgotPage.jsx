import { userPath } from "../../../utils/paths";
import { MainLogo } from "../../../components/user/auth/MainLogo";
import { AuthHeading } from "../../../components/user/auth/AuthHeading";
import { ForgotForm } from "../../../components/user/auth/ForgotForm";
import { FooterLink } from "../../../components/user/auth/FooterLink";

export const ForgotPage = () => {
  return (
    <div className="auth_form_cover">
      <MainLogo />
      <AuthHeading
        mainHeading={"Forgot Password"}
        subHeading={"Enter your email address you used to register with"}
      />
      <ForgotForm />
      <FooterLink
        linkText={"Back to Signin"}
        redirectLink={userPath.signin}
        heading={""}
      />
    </div>
  );
};
