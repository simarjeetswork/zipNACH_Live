"use client";

import { forwardRef } from "react";

type Props = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label className="mb-2 block text-[14px] font-semibold text-[#333A48]">
          {label}
        </label>

        <input
          ref={ref}
          {...props}
          className="h-[40px] w-full rounded-md border border-[#EDF2FA] bg-[#F2F7FF] px-4 text-[15px] text-[var(--color-para)] placeholder:text-[var(--color-para)] outline-none transition focus:border-[#2563EB]"
        />

        {error && (
          <p className="mt-1 text-[13px] text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;