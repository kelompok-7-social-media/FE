import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | ReactNode;
}

export const ButtonPink: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="border-2 rounded-full border-pink text-pink w-40 duration-300 active:scale-90 hover:cursor-pointer"
      {...props}
    >
      {label}
    </button>
  );
};

export const ButtonWhite: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="border-2 rounded-full border-white text-white w-40 duration-300 active:scale-90 hover:cursor-pointer"
      {...props}
    >
      {label}
    </button>
  );
};

export const ButtonSmall: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="border-2 rounded-full border-white text-white w-32 duration-300 active:scale-90 hover:cursor-pointer"
      {...props}
    >
      {label}
    </button>
  );
};
