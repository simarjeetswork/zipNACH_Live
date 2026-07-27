"use client";

import { forwardRef } from "react";

type Props = {
  label: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label className="mb-2 block text-[14px] font-medium text-[#313131]">
          {label}
        </label>

        <textarea
          ref={ref}
          {...props}
          className="min-h-[110px] w-full rounded-md border border-[#EDF2FA] bg-[#F5F8FD] p-4 text-[15px] text-[var(--color-para)] placeholder:text-[var(--color-para)] outline-none transition focus:border-[#2563EB] resize-none"
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

Textarea.displayName = "Textarea";

export default Textarea;