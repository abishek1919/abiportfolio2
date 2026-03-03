import React, { useRef, useState } from 'react';
import { motion as Motion } from "motion/react";
import linkedin from '../assets/linkedin.png';
import mail from '../assets/mail.png';
import github from '../assets/github.png';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!data.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.user_email)) {
      newErrors.user_email = "Enter a valid email address";
    }

    if (!data.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    };

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.user_name}\nEmail: ${formData.user_email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:abishekrajen@gmail.com?subject=${subject}&body=${body}`;
    setLoading(false);
    setStatus({
      type: "success",
      message: "Email draft opened. Click Send in your mail app to deliver it to your inbox."
    });
    form.current.reset();
  };

  return (
    <section
      id="contact"
      className="px-6 py-10 flex flex-col justify-center gap-4 items-center text-white font-roboto"
    >
      <Motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl lg:text-4xl font-bold"
      >
        Contact Me !
      </Motion.h1>

      <Motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center italic"
      >
        Got a question? Send me a message, and I&apos;ll get back to you soon.
      </Motion.p>

      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-5xl rounded-2xl border border-gray-700 bg-[#1f1f1f]/90 p-5 md:p-7 shadow-xl shadow-black/30"
      >
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-xl border border-gray-700 bg-white/5 p-4 md:p-5 transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10">
            <h1 className="text-xl font-semibold">Get in Touch</h1>
            <p className="mt-2 text-sm text-gray-300">
              Have something to discuss? Send me a message and let&apos;s talk.
            </p>

              {status.message && (
              <p className={`mt-3 text-sm ${
                status.type === "success" ? "text-green-400" :
                "text-red-400"
              }`}>
                {status.message}
              </p>
            )}

            <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col gap-3 w-full">
              <input
                name="user_name"
                placeholder="Your Name"
                className="px-3 py-2 border border-white/20 bg-white/5 rounded w-full outline-none transition-all duration-300 focus:border-blue-400/70 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.2)] hover:border-white/40"
              />
              {errors.user_name && (
                <p className="text-red-400 text-xs">{errors.user_name}</p>
              )}

              <input
                name="user_email"
                type="email"
                placeholder="Your Email"
                className="px-3 py-2 border border-white/20 bg-white/5 rounded w-full outline-none transition-all duration-300 focus:border-blue-400/70 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.2)] hover:border-white/40"
              />
              {errors.user_email && (
                <p className="text-red-400 text-xs">{errors.user_email}</p>
              )}

              <input
                name="subject"
                placeholder="Subject"
                className="px-3 py-2 border border-white/20 bg-white/5 rounded w-full outline-none transition-all duration-300 focus:border-blue-400/70 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.2)] hover:border-white/40"
              />
              {errors.subject && (
                <p className="text-red-400 text-xs">{errors.subject}</p>
              )}

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                className="px-3 py-2 border border-white/20 bg-white/5 rounded w-full outline-none transition-all duration-300 focus:border-blue-400/70 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.2)] hover:border-white/40"
              />
              {errors.message && (
                <p className="text-red-400 text-xs">{errors.message}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`mt-1 w-full px-4 py-2 rounded font-medium transition-all duration-300 ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-[#292929] hover:bg-[#1b1b1b] hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-[1px]"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="rounded-xl border border-gray-700 bg-white/5 p-4 md:p-5 transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10">
            <p className="text-lg font-semibold">Connect with me</p>
            <div className="mt-4 flex gap-3 flex-col text-sm">
              <a
                className="group bg-white/5 rounded w-full p-3 flex items-center gap-3 transition-all duration-300 hover:bg-white/10 hover:border-blue-400/40 border border-transparent"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/abishek19"
              >
                <img className="w-5 h-5 object-contain" src={linkedin} alt="LinkedIn" />
                <FaLinkedin className="text-blue-400 hidden" />
                <span>LinkedIn</span>
              </a>

              <a
                className="group bg-white/5 rounded w-full p-3 flex items-center gap-3 transition-all duration-300 hover:bg-white/10 hover:border-blue-400/40 border border-transparent"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/abishek1919"
              >
                <img className="w-5 h-5 object-contain" src={github} alt="GitHub" />
                <FaGithub className="text-white hidden" />
                <span>GitHub</span>
              </a>

              <a
                className="group bg-white/5 rounded w-full p-3 flex items-center gap-3 transition-all duration-300 hover:bg-white/10 hover:border-blue-400/40 border border-transparent"
                href="mailto:abishekrajen@gmail.com"
              >
                <img className="w-5 h-5 object-contain" src={mail} alt="Email" />
                <FaEnvelope className="text-red-300 hidden" />
                <span>abishekrajen@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
};

export default Contact;
