"use client";

import { ButtonHTMLAttributes, FunctionComponent, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<ButtonProps> {
  variant?: "default" | "flat" | "error";
  label: string;
  icon?: ReactElement;
}

const Button: FunctionComponent<ButtonProps> = ({
  variant = "default",
  label,
  icon,
  className,
  onClick,
  disabled,
}) => {
  const getButtonStyles = () => {
    switch (variant) {
      case "default":
        return "bg-primary border-primary text-white";
      case "error":
        return "bg-error border-error text-white";
      case "flat":
        return "border-primary border-opacity-50";
    }
  };

  return (
    <button
      onClick={onClick as () => void}
      disabled={disabled}
      className={`border-2 border-solid font-bold uppercase rounded-2xl p-3 ${getButtonStyles()} ${
        disabled ? "brightness-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {icon && <div className="mr-2">{icon}</div>} {label}
    </button>
  );
};

export default Button;
