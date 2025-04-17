import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { userPath } from "../../../utils/paths";
import { Input } from "../../../shared/Input";
import { Button } from "../../../shared/Button";
import { validationRules } from "../../../utils/fieldValidation";

export const SigninForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const { handleSubmit, control } = methods;
  const { isValid } = methods.formState;
  const btnClass = `app_form_btn ${isSubmitting ? "btn_disable" : "btn_actv"}`;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app_user_form">
      <FormProvider control={control}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="app_user_form_inputs">
            <Input
              name="email"
              label="Email Address"
              type="email"
              rules={validationRules.email}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              rules={validationRules.password}
            />
          </div>
          <div className="app_form_filed_extra">
            <Input
              name="rememberMe"
              label="Remember me"
              isCheckbox={true}
              rules={{
                required: false,
              }}
            />
            <Link to={userPath.forgot}>Forgot Password</Link>
          </div>
          <div className="app_form_filed_btn">
            <Button
              type="submit"
              className={btnClass}
              isSubmitting={isSubmitting}
              disabled={isSubmitting || !isValid}
              ariaLabel="Sign in to your account"
            >
              Sign In
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
