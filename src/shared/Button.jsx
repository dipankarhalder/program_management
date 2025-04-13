export const Button = ({
  onClick,
  isSubmitting,
  children,
  disabled,
  type = "button",
  className = "",
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isSubmitting}
      className={className}
      aria-busy={isSubmitting}
      aria-label={ariaLabel}
    >
      {isSubmitting ? (
        <div className="app_disable_spin">
          <span className="app_spinner"></span>
          <p>Please wait...</p>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
