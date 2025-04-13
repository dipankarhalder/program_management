import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "../../../shared/Input";
import { Button } from "../../../shared/Button";

export const ForgotForm = () => {
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
              ariaLabel="forgot password your account"
            >
              Send link
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
