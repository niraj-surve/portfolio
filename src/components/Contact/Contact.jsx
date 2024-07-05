import React, { forwardRef } from "react";
import Me from "../../assets/Me.png";
import { FaEnvelope } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = forwardRef((props, ref) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_382bprv", "template_fcn9jm7", data, "0xUSpS56tw-2UNQ2U")
      .then(
        (result) => {
          toast.success("Message sent!", { duration: 3000 });
          reset();
        },
        (error) => {
          toast.error("Failed to send message! Try again later.", {
            duration: 3000,
          });
        }
      );
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen py-14">
      <div className="w-3/4 mx-auto h-full relative flex flex-col items-center">
        <h5 className="text-gray-500">Get in touch</h5>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
        <div className="container mx-auto grid md:grid-cols-contact justify-center gap-16">
          <div className="bg-gray-800 rounded-2xl flex flex-col gap-4 items-center justify-center p-8">
            <div className="overflow-hidden w-[200px] rounded-full p-4">
              <img
                src={Me}
                alt="Me"
                className="rounded-full border-8 border-white"
              />
            </div>
            <FaEnvelope />
            <div className="flex flex-col gap-2 items-center">
              <span>Email</span>
              <span>niraj.surve07@gmail.com</span>
            </div>
            <a
              className="text-sm text-primary"
              href="mailto:niraj.surve07@gmail.com"
            >
              Send a message
            </a>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 justify-between"
            autoComplete="off"
          >
            <div className="w-full rounded-lg focus-within:ring-4 focus-within:ring-primary focus-within:border-transparent border-2">
              <input
                type="text"
                {...register("name", {
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Invalid name",
                  },
                })}
                className="w-full rounded-lg p-4 outline-none bg-transparent text-sm"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="w-full rounded-lg focus-within:ring-4 focus-within:ring-primary focus-within:border-transparent border-2">
              <input
                type="email"
                {...register("email", {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full rounded-lg p-4 outline-none bg-transparent text-sm"
                placeholder="Your email"
                required
              />
            </div>
            <div className="w-full rounded-lg focus-within:ring-4 focus-within:ring-primary focus-within:border-transparent border-2">
              <textarea
                {...register("message")}
                rows={6}
                className="resize-none w-full rounded-lg p-4 outline-none bg-transparent text-sm"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="self-start px-4 py-2 rounded-lg text-sm bg-primary hover:bg-white hover:text-dark fade"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;