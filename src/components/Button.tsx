import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | ReactNode;
}

export const ButtonPink: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="border-2 rounded-full border-pink text-pink px-16"
      {...props}
    >
      {label}
    </button>
  );
};

export const ButtonWhite: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="border-2 rounded-full border-white text-white px-16"
      {...props}
    >
      {label}
    </button>
  );
};
