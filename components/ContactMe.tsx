import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { PageInfo } from 'typings';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {
    pageInfo: PageInfo;
}

export default function ContactMe({pageInfo}: Props) {
    const { register, handleSubmit, } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    console.log(formData)
    // window.location.href = `mailto:vgroslier@gmail.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
        <h3 className="pageTitle">Contact</h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                I have got just what you need.{" "}
                <span className="underline decoration-[#12DD88]/50">{"Let's Talk."}</span>
            </h4>
            <div className="space-y-10">
                <div className="flex space-x-5 justify-center items-center">
                    <PhoneIcon className="contactIcon"/>
                    <p className="text-2xl">{pageInfo.phoneNumber}</p>
                </div>
                <div className="flex space-x-5 justify-center items-center">
                    <EnvelopeIcon className="contactIcon"/>
                    <p className="text-2xl">{pageInfo.email}</p>
                </div>
                <div className="flex space-x-5 justify-center items-center">
                    <MapPinIcon className="contactIcon"/>
                    <p className="text-2xl">{pageInfo.address}</p>
                </div>
            </div>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input className="contactInput" type="text" {...register("name")} placeholder="Name" />
                    <input className="contactInput" type="email" {...register("email")} placeholder="Email" />
                </div>
                <input className="contactInput" type="text" {...register("subject")} placeholder="Subject"/>
                <textarea className="contactInput" {...register("message")} placeholder="Message" />
                <button className="bg-[#12DD88] py-5 px-10 rounded-md text-black font-bold text-lg" type="submit">
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}