import React from "react";
import {
  FieldError,
  useForm,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";

interface AddListingProps {
  setisMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type formT = {
  email: string;
  First_name: string;
  Last_name: string;
  agreeTerms: boolean;
};
const AddListing: React.FC<AddListingProps> = ({ setisMenuOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      First_name: "",
      Last_name: "",
      agreeTerms: false,
    },
  });

  const onSubmit = async (data: formT) => {
    console.log(data); // Replace with your form submission logic
    // Example: Use fetch or axios to submit data to your API
    try {
      const response = await fetch("https://getform.io/f/bejyrzya", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        // Handle success
        window.location.href = `https://getform.io/thank-you?id=bejyrzya`;
        console.log("Form submitted successfully!");
      } else {
        // Handle error
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#F7F5F9]">
      <div
        className="absolute h-full w-full"
        onClick={() => setisMenuOpen(false)}
      ></div>
      <div className="z-10 min-w-0 max-w-[28.125rem] bg-white p-10">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <span className="text-[1.25rem] font-bold uppercase text-[#2D3142]">
            Talk to us
          </span>
          <input
            type="email"
            {...register("email", { required: true })}
            className={`border-[#6F718F99] py-2 text-[#6F718F99] focus:border-b-2 focus:outline-none ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Work email*"
          />
          <div className="flex gap-5 text-[#6F718F99]">
            <input
              type="text"
              {...register("First_name", { required: true })}
              className={`min-w-0 border-b-2 border-[#6F718F99] py-2 focus:outline-none ${
                errors.First_name ? "border-red-500" : ""
              }`}
              placeholder="First name*"
            />
            <input
              type="text"
              {...register("Last_name", { required: true })}
              className={`min-w-0 border-b-2 border-[#6F718F99] py-2 focus:outline-none ${
                errors.Last_name ? "border-red-500" : ""
              }`}
              placeholder="Last name*"
            />
          </div>
          <CustomCheckbox
            mainColor={"bg-mainRed"}
            backgroundColor={"white"}
            register={register("agreeTerms", { required: true })}
            error={errors.agreeTerms}
            value={watch("agreeTerms")}
          />

          <button
            type="submit"
            className="rounded-lg bg-mainRed p-5 capitalize text-white"
          >
            Contact us
          </button>
        </form>
      </div>
    </div>
  );
};

interface CustomCheckboxProps {
  mainColor: string;
  backgroundColor: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
  value: boolean;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  mainColor,
  backgroundColor,
  register,
  error,
  value,
}) => {
  return (
    <>
      <label className="flex cursor-pointer gap-3">
        <div>
          <input
            type="checkbox"
            className="hidden"
            checked={value}
            {...register}
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`rounded ${value ? mainColor : "transparent"} border-2 border-mainRed`}
          >
            <path
              d="M5 13l4 4L19 7"
              stroke={backgroundColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-[0.875rem] text-[#616678]">
          {`I agree to Fyle's terms and conditions, and provide consent to send me communication.`}
        </span>
      </label>
      {error && (
        <span className="text-red-500">
          Please agree to terms and conditions
        </span>
      )}
    </>
  );
};

export default AddListing;
