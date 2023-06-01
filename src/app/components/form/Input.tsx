"use client";

import { FunctionComponent, InputHTMLAttributes, useState } from "react";
import Button from "./Button";

export interface InputProps extends InputHTMLAttributes<InputProps> {
  inputValue: string | null;
  label?: string;
  withButton?: boolean;
}

const Input: FunctionComponent<InputProps> = ({
  withButton = false,
  onClick,
  onChange,
  label,
  inputValue,
}) => {
  return (
    <div className="grid justify-center md:mx-1">
      {label?.length && (
        <p className="uppercase font-semibold mb-2 ml-1">{label}</p>
      )}
      <div className="flex">
        <input
          className={`px-4 py-3 ${
            withButton ? "rounded-l-2xl" : "rounded-2xl"
          } bg-transparent border-primary border-opacity-50 border-solid border-2 focus:outline-none opacity-90`}
          placeholder="Market is unpredictable."
          value={inputValue || ""}
          type="text"
          onChange={onChange as () => void}
        />
        {withButton && (
          <Button
            disabled={!inputValue?.length}
            className="ml-0.5 rounded-l-none"
            variant="flat"
            label="Add"
            onClick={onClick as () => void}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
