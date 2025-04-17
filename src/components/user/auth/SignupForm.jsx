import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "../../../shared/Input";
import { Button } from "../../../shared/Button";
import { validationRules } from "../../../utils/fieldValidation";

export const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      termsAndCondition: false,
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
              name="name"
              label="Full Name"
              type="text"
              rules={validationRules.name}
            />
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
            <Input
              name="cpassword"
              label="Confirm Password"
              type="password"
              rules={validationRules.password}
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
              className={btnClass}
              isSubmitting={isSubmitting}
              disabled={isSubmitting || !isValid}
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
