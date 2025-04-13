import { userPath } from "../../../utils/paths";
import { MainLogo } from "../../../components/user/auth/MainLogo";
import { AuthHeading } from "../../../components/user/auth/AuthHeading";
import { SignupForm } from "../../../components/user/auth/SignupForm";
import { FooterLink } from "../../../components/user/auth/FooterLink";

export const SignupPage = () => {
  return (
    <div className="auth_form_cover">
      <MainLogo />
      <AuthHeading
        mainHeading={"Create an account"}
        subHeading={"Signup now to get started with an account"}
      />
      <SignupForm />
      <FooterLink
        linkText={"Login"}
        redirectLink={userPath.signin}
        heading={"Already you have an account?"}
      />
    </div>
  );
};
