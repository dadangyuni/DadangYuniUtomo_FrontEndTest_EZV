import React from "react";

type ButtonVariant = "default" | "primary" | "outlined" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className,
  disabled,
  ...props
}) => {
  const baseClass =
    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outlined:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const disabledClass =
    "opacity-50 cursor-not-allowed hover:bg-inherit hover:text-inherit";

  return (
    <button
      className={`${baseClass} ${variants[variant]} ${className} ${
        disabled ? disabledClass : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
