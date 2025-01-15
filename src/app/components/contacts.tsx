"use client";
import React from "react";
import Section from "@/app/components/section";
import Title from "@/app/components/title";
import Image from "next/image";
import { LuPhoneCall, LuMail } from "react-icons/lu";
import { toast } from "react-toastify";

export type ContactsProps = { isEven: boolean };

export default function Contacts({ isEven }: ContactsProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);

  async function sendMessage(data: {
    name: string;
    email: string;
    message: string;
  }) {
    try {
      setIsSending(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Message successfully sent");
        setName("");
        setEmail("");
        setMessage(""); // Очистка данных формы
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error(`Failed to send the message. ${error}`);
    } finally {
      setIsSending(false);
    }
  }

  const onSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
    const formData = {
      name: name,
      email: email,
      message: message,
    };
    sendMessage(formData);
  };
  return (
    <Section isEven={isEven} id={"contacts"}>
      <Title>Get in Touch</Title>
      <div
        data-aos="fade-left"
        className="flex flex-col lg:flex-row gap-8 items-center lg:justify-between"
      >
        <div className="lg:max-w-[50%]">
          <p className="lg:text-2xl text-xl text-gray-600 mb-8 font-medium">
            Feel free to reach out for collaborations, inquiries, or just to say
            hi!
          </p>
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-2">
              <LuMail className="lg:w-7 lg:h-7 w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition" />
              <p className="text-lg text-gray-600 hover:text-cyan-400 transition">
                <a href="mailto:mozzhakova.21@gmail.com">
                  mozzhakova.21@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <LuPhoneCall className="lg:w-7 lg:h-7 w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition" />
              <p className="text-lg text-gray-600 hover:text-cyan-400 transition">
                <a href="tel:+19363309675">+1 (936) 330-96-75</a>
              </p>
            </div>
          </div>

          <form
            className="w-full max-w-md flex flex-col items-center"
            data-aos="fade-up"
            onSubmit={onSubmitClick}
          >
            <fieldset className="w-full">
              <legend className="text-lg font-semibold text-gray-600 mb-4">
                Send a Message
              </legend>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 p-3 border rounded-lg focus:outline-cyan-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mb-4 p-3 border rounded-lg focus:outline-cyan-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Your Message"
                className="w-full mb-4 p-3 border rounded-lg focus:outline-cyan-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="bg-cyan-400 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </fieldset>
          </form>
        </div>
        <div
          className="hidden h-[525px] w-0.5 bg-gray-600 rounded lg:block"
          data-aos="fade-up"
        ></div>
        <Image
          src="/images/image-3.webp"
          alt={`Contact photo`}
          height={450}
          width={350}
          className="rounded-lg shadow-lg transition-transform hover:scale-105"
          data-aos="zoom-in"
        />
      </div>
    </Section>
  );
}
