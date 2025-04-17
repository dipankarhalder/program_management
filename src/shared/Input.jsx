import { memo } from "react";
import { useFormContext, useController } from "react-hook-form";
import {
  CheckedIcon,
  UnCheckboxItem,
  ActiveRadio,
  InActiveRadio,
} from "../icons";

export const Input = memo(
  ({ name, label, type, placeholder, rules, isCheckbox, isRadio }) => {
    const { control } = useFormContext();
    const {
      field,
      fieldState: { error },
    } = useController({
      name,
      control,
      rules,
    });

    const isCustomCheckable = isCheckbox || isRadio;
    const inputType = isCheckbox ? "checkbox" : isRadio ? "radio" : type;
    const isChecked = !!field.value;

    const wrapperClass = isCustomCheckable
      ? "app_form_checkbox"
      : "app_form_input";
    const indicatorClass = `app_custom_indicator ${
      isChecked ? "app_active_icon" : ""
    }`;
    const labelColorClass = isChecked ? "app_actv_color" : "";

    return (
      <div className={wrapperClass}>
        {isCustomCheckable ? (
          <label htmlFor={name}>
            <input
              id={name}
              type={inputType}
              {...field}
              checked={!!field.value || false}
              aria-invalid={!!error}
              className="app_visually_hidden"
            />
            <span className={indicatorClass}>
              {isCheckbox ? (
                isChecked ? (
                  <CheckedIcon />
                ) : (
                  <UnCheckboxItem />
                )
              ) : isChecked ? (
                <ActiveRadio />
              ) : (
                <InActiveRadio />
              )}
            </span>
            <span className={labelColorClass}>{label}</span>
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
              {...field}
              value={field.value ?? ""}
              aria-invalid={!!error}
            />
          </>
        )}
        {error && (
          <span role="alert" className="app_input_error">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
