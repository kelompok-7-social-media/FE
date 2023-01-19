import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | ReactNode;
  loading?: boolean;
}

export function ButtonPink({ id, label, loading, ...props }: ButtonProps) {
  return (
    <button
      id={id}
      className="border-2 rounded-full border-pink text-pink w-40 duration-300 active:scale-90 hover:cursor-pointer disabled:cursor-not-allowed disabled:active:scale-100"
      disabled={loading}
      {...props}
    >
      {label}
    </button>
  );
}

export function ButtonWhite({ id, label, loading, ...props }: ButtonProps) {
  return (
    <button
      id={id}
      className="border-2 rounded-full border-white text-white w-40 duration-300 active:scale-90 hover:cursor-pointer"
      disabled={loading}
      {...props}
    >
      {label}
    </button>
  );
}

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
