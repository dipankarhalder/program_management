export const validationRules = {
  name: {
    required: "Email is required.",
  },
  email: {
    required: "Email is required.",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Please enter a valid email address.",
    },
  },
  password: {
    required: "Password is required.",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long.",
    },
  },
};