import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "../../../shared/Input";
import { Button } from "../../../shared/Button";
import { validationRules } from "../../../utils/fieldValidation";

export const ForgotForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
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
          <Input
            name="email"
            label="Email Address"
            type="email"
            rules={validationRules.email}
          />
          <div className="app_form_filed_btn">
            <Button
              type="submit"
              className={btnClass}
              isSubmitting={isSubmitting}
              disabled={isSubmitting || !isValid}
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
