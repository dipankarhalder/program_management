import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "../../../shared/Input";
import { Button } from "../../../shared/Button";

export const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm({
    mode: "onBlur",
  });

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
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="app_user_form_inputs">
            <Input
              name="name"
              label="Full Name"
              type="text"
              rules={{
                required: "Email is required.",
              }}
            />
            <Input
              name="email"
              label="Email Address"
              type="email"
              rules={{
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address.",
                },
              }}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              rules={{
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
              }}
            />
            <Input
              name="cpassword"
              label="Confirm Password"
              type="password"
              rules={{
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
              }}
            />
          </div>
          <div className="app_form_filed_extra">
            <Input
              name="termsAndCondition"
              label="I agree to the Terms & Conditions and Privacy Policy"
              isCheckbox={true}
              rules={{
                required: false,
              }}
            />
          </div>
          <div className="app_form_filed_btn">
            <Button
              type="submit"
              className={
                isSubmitting
                  ? "app_form_btn btn_disable"
                  : "app_form_btn btn_actv"
              }
              isSubmitting={isSubmitting}
              disabled={isSubmitting}
              ariaLabel="Create your account"
            >
              Create an account
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
