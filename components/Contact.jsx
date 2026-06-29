"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess("Your message has been sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#FAFAF8] py-16"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[5px] text-[#1F4D3D] font-semibold">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Let's Work Together
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-8">
            Ready to build your next digital product? We'd love to hear about
            your ideas. Fill out the form below and we'll get back to you as
            soon as possible.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200"
        >
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-slate-300 rounded-xl px-5 py-3 outline-none focus:border-[#1F4D3D]"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-[#1F4D3D]"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email}
                </p>
              )}
            </div>

          </div>

          <div className="mt-6">
            <label className="block mb-2 font-medium text-slate-700">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
              className="w-full border border-slate-300 rounded-xl px-5 py-3 outline-none focus:border-[#1F4D3D]"
            />

            {errors.subject && (
              <p className="text-red-500 text-sm mt-2">
                {errors.subject}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label className="block mb-2 font-medium text-slate-700">
              Message
            </label>

            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full border border-slate-300 rounded-xl px-5 py-3 resize-none outline-none focus:border-[#1F4D3D]"
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-2">
                {errors.message}
              </p>
            )}
          </div>

          {success && (
            <p className="text-green-600 font-medium mt-6">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="mt-8 bg-[#1F4D3D] hover:bg-[#17392D] text-white px-5 py-3 rounded-full font-semibold transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}