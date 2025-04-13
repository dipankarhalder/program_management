import React from "react";
import { useFormContext } from "react-hook-form";

export const Input = ({
  name,
  label,
  type,
  placeholder,
  rules,
  isCheckbox,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={isCheckbox ? "app_form_checkbox" : "app_form_input"}>
      {isCheckbox ? (
        <label htmlFor={name}>
          <input
            id={name}
            type="checkbox"
            {...register(name, rules)}
            aria-invalid={!!errors[name]}
          />
          <span>{label}</span>
        </label>
      ) : (
        <>
          <label htmlFor={name}>
            <span>{label}</span>
          </label>
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            {...register(name, rules)}
            aria-invalid={!!errors[name]}
          />
        </>
      )}
      {errors[name] && (
        <span role="alert" className="app_input_error">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};
