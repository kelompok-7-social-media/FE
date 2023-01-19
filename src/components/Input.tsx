import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export function CustomInput({ id, ...props }: Props) {
  return (
    <input
      id={id}
      className="w-full rounded-full py-2 px-5 mb-5 border-2 border-gray-500"
      {...props}
    />
  );
}
