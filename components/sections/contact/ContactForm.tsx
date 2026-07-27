"use client";

import useContactForm from "@/hooks/useContactForm";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import AnimatedButton from "@/lib/gsap/animations/AnimateButton";
import Image from "next/image";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useContactForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="h-full rounded-[18px] border border-[#E6E6E6] bg-white px-4 py-4 shadow-[0px_10px_30px_rgba(0,0,0,0.08)] lg:px-12 lg:py-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className="grid gap-5 md:grid-cols-2">

          <Input
            label="First Name"
            error={errors.firstName?.message}
            {...register("firstName", {
              required: "First name is required",
            })}
          />

          <Input
            label="Last Name"
            error={errors.lastName?.message}
            {...register("lastName", {
              required: "Last name is required",
            })}
          />

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <Input
            label="Business Email Address"
            placeholder="name@xyz.com"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
          />

          <Input
            label="Contact Number"
            placeholder="8658 8620 39"
            error={errors.phone?.message}
            {...register("phone", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter valid number",
              },
            })}
          />

        </div>

        <Input
          label="Company Name"
          error={errors.company?.message}
          {...register("company", {
            required: "Company name is required",
          })}
        />

        <div>
          <label className="mb-2 block text-[14px] font-medium text-[#333A48]">
            Interested In?
          </label>

            <div className="relative">
    <select
      className="h-[52px] w-full appearance-none rounded-md bg-[#F2F7FF] px-4 pr-12 text-[14px] text-[#333A48] outline-none transition focus:border-[#2563EB]"
      {...register("interest", {
        required: "Please select one option",
      })}
    >
      <option value="">Select</option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
    </select>

    <Image
      src="/images/arrow-down.svg"
      alt="Arrow Down"
      width={12}
      height={12}
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
    />
  </div>

          {errors.interest && (
            <p className="mt-1 text-sm text-red-500">
              {errors.interest.message}
            </p>
          )}
        </div>

        <Textarea
          label="Tell us more about your business requirement."
          placeholder="Enter your requirement here..."
          rows={4}
          error={errors.message?.message}
          {...register("message", {
            required: "Please enter your requirement",
          })}
        />
        <AnimatedButton variant="primary" className=" text-base font-medium text-center w-full" delay={0.3}>Submit your details</AnimatedButton>
      </form>
    </div>
  );
}