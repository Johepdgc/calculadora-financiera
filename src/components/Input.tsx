import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: Props) {
  return (
    <input
      type="number"
      className="block w-full rounded-lg border-spacing-2 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-offset-green-500 sm:text-sm sm:leading-6"
      {...props}
    />
  );
}

export default Input;
