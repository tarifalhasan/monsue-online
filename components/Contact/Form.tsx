'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

const Form = () => {
  const [varified, setVarified] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  function onChange(value: any) {
    console.log('Captcha value:', value);
    setVarified(true);
  }

  return (
    <div>
      <h2 className=" heading">Contact Us</h2>
      <form
        onSubmit={handleSubmit(data => console.log(data))}
        action="#"
        className=" space-y-12"
      >
        <div className=" flex flex-col  gap-y-[-10px]">
          <label
            htmlFor="full_name"
            className=" font-quicksant text-black font-light text-sm sm:text-lg"
          >
            Full Name
          </label>
          <input
            className="  border-b border-black text-black text-sm  sm:text-base font-quicksant focus:outline-none  "
            type="text"
            id="full_name"
            {...register('full_name')}
          />
        </div>
        <div className=" flex flex-col  gap-y-[-10px]">
          <label
            htmlFor="email"
            className=" font-quicksant text-black font-light text-sm sm:text-lg"
          >
            Email
          </label>
          <input
            className="  border-b border-black text-black text-sm  sm:text-base font-quicksant focus:outline-none  "
            type="email"
            {...register('email')}
            id="email"
          />
        </div>
        <div className=" flex flex-col  gap-y-[-10px]">
          <label
            htmlFor="message"
            className=" font-quicksant text-black font-light text-sm sm:text-lg"
          >
            Message
          </label>
          <textarea
            className=" h-[50px]  border-b border-black text-black text-sm  sm:text-base font-quicksant focus:outline-none  "
            {...register('message')}
            id="message"
          />
        </div>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
        ,
        <button type="submit" disabled={!varified} className="btn_primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
