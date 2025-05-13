import React, { useState } from "react";
import { toast } from "react-toastify";

export type ContactFormProps = object;

export default function ContactForm({}: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

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
        setMessage("");
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
      toast.warning("Please fill out all fields.");
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
    <form
      className="w-full max-w-lg flex flex-col items-center py-10"
      onSubmit={onSubmitClick}
    >
      <fieldset className="w-full ">
        <legend className="text-lg lg:text-xl font-semibold text-gray-600 mb-4 text-center ">
          Let&#39;s connect!
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
          className="bg-cyan-400 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform w-full lg:w-fit mx-auto block"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </fieldset>
    </form>
  );
}
