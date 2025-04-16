import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { apiClient } from "../api/axios";
import { PanoramicBanner } from "@/components";
import { contactBanner } from "@/assets/images";
const Contact = () => {
  const [mailData, setMailData] = useState(null);
  const formSchema = z.object({
    fname: z
      .string()
      .min(1, "First Name is required!")
      .min(3, { message: "First name must be at least 3 characters!" }),
    lname: z.string().min(1, "Last Name is required!"),
    email: z
      .string()
      .min(1, { message: "Email is required!" })
      .email({ message: "Email format is incorrect!" }),
    message: z.string().min(1, "Message is required!"),
  });

  const form = useForm({
    defaultValues: { fname: "", lname: "", email: "", message: "" },
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (errors.fname || errors.lname || errors.email || errors.message) {
      toast.dismiss();
    }
    if (errors.fname) {
      toast.error(errors.fname.message);
    } else if (errors.lname) {
      toast.error(errors.lname.message);
    } else if (errors.email) {
      toast.error(errors.email.message);
    } else if (errors.message) {
      toast.error(errors.message.message);
    }
  }, [errors]);

  useEffect(() => {
    if (mailData) {
      reset();
    }
  }, [mailData, reset]);

  const onSubmit = async (data) => {
    console.log(data);

    const toastId = toast.loading("Sending your message...", {
      duration: 3000,
    });

    try {
      const response = await apiClient.post("api/contact/send", data);
      setMailData(response?.data);

      toast.success(response.data.message || "Message sent successfully!", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error submitting form! Try again.",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };
  return (
    <main className="mt-20">
      <PanoramicBanner bgImg={contactBanner} title={"Contact Us"} />
      <section>
        <div className="container">
          <div className="text-center py-8">
            <p className="text-cyan-600 font-light text-xl mb-2">
              Quick Rental Assistance.
            </p>
            <h2 className="text-3xl font-bold mb-2">
              Let Us Help You Find Your Ideal Ride!
            </h2>
            <p className="text-md text-zinc-600">
              Tell us about your needs! Include your contact information,
              desired rental period, vehicle preference, and any special
              requirements. Our dedicated team will personally assist you with
              your booking.
            </p>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full w-full">
                <div className="bg-gradient-to-r from-cyan-50 to-sky-100 rounded-lg shadow-md overflow-hidden w-full p-6">
                  <address className="text-center">
                    <h2 className="text-xl font-semibold text-cyan-600 mb-2">
                      Address :
                    </h2>

                    <div>
                      <p className="text-lg font-semibold">SPIN DRIVE ,</p>
                      <p>21/38, 7th Street,</p>
                      <p>B.V. Nagar, Nanganallur,</p>
                      <p>Chennai - 600114</p>
                      <p>Tamil Nadu, India.</p>
                    </div>
                  </address>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-sky-100 rounded-lg shadow-md overflow-hidden w-full p-6">
                  <address className="text-center">
                    <h2 className="text-xl font-semibold text-cyan-600 mb-2">
                      Contact Us :
                    </h2>
                    <div>
                      <p>
                        <span className="font-semibold text-zinc-800">
                          Mobile :{" "}
                        </span>
                        +91 6380442901
                      </p>
                      <p>
                        <span className="font-semibold text-zinc-800">
                          Email :{" "}
                        </span>
                        spindrivecars@gmail.com
                      </p>
                    </div>
                  </address>
                </div>

                <div className="col-span-1 md:col-span-2 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1868.0047576059344!2d80.17846753512865!3d12.979537687336615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e0451a6f3d9%3A0x521d4dbb182da24b!2sSUJI%20CALL%20DRIVERS%20-%20CALL%20DRIVERS%20IN%20CHENNAI!5e1!3m2!1sen!2sin!4v1744024964924!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-md"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-5">
              <form
                className="flex flex-col gap-4 "
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 text-left font-medium !text-zinc-900">
                      First Name
                    </label>
                    <input
                      {...register("fname")}
                      placeholder="First Name"
                      name="fname"
                      className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-zinc-200 rounded-lg focus:border-cyan-200 focus:ring-cyan-200 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-left font-medium !text-zinc-900">
                      Last Name
                    </label>
                    <input
                      {...register("lname")}
                      placeholder="Last Name"
                      name="lname"
                      className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-zinc-200 rounded-lg focus:border-cyan-200 focus:ring-cyan-200 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 text-left font-medium !text-zinc-900">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    placeholder="name@email.com"
                    name="email"
                    className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-zinc-200 rounded-lg focus:border-cyan-200 focus:ring-cyan-200 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 text-left font-medium !text-zinc-900">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    className="block w-full h-24 px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-zinc-200 rounded-lg md:h-36 focus:border-cyan-200 focus:ring-cyan-200 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-2/3 lg:w-1/2 mx-auto px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-opacity-50 cursor-pointer"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
