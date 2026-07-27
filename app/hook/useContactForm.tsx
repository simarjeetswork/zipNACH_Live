"use client";

import { useForm } from "react-hook-form";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
};

export default function useContactForm() {
  return useForm<ContactFormValues>({
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      interest: "",
      message: "",
    },
  });
}