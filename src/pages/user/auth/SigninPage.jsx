import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import { userPath } from "../../../utils/paths";
import { MainLogo } from "../../../components/user/auth/MainLogo";
import { AuthHeading } from "../../../components/user/auth/AuthHeading";
import { SigninForm } from "../../../components/user/auth/SigninForm";
import { FooterLink } from "../../../components/user/auth/FooterLink";

export const SigninPage = () => {
  const handleClick = () => {
    alert("Thank you for using React Social Login Buttons!");
  };

  return (
    <div className="auth_form_cover">
      <MainLogo />
      <AuthHeading
        mainHeading={"Welcome Back"}
        subHeading={"Enter your email and password to access your account"}
      />
      <SigninForm />
      <FooterLink
        linkText={"Create an account"}
        redirectLink={userPath.signup}
        heading={"Not registered?"}
      />
      <div className="app_user_or_sec">
        <span>or Continue with</span>
      </div>
      <div className="app_user_social">
        <GoogleLoginButton onClick={handleClick}>
          <span>Google</span>
        </GoogleLoginButton>
        <GithubLoginButton onClick={handleClick}>
          <span>GitHub</span>
        </GithubLoginButton>
        <FacebookLoginButton onClick={handleClick}>
          <span>Facebook</span>
        </FacebookLoginButton>
      </div>
    </div>
  );
};
