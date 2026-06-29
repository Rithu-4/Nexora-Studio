import {
  FaCube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <div className="flex items-center gap-3 mb-5">
            <FaCube className="text-[#1F4D3D] text-3xl" />
            <h2 className="text-3xl font-bold">
              Nexsora Studio
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-slate-400 leading-8">
            We create modern websites and digital experiences that help
            businesses build a strong online presence through clean,
            creative, and user-focused design.
          </p>

          {/* Email */}
          <p className="mt-6 text-slate-300">
            hello@nexsorastudio.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8">

            <a href="#" className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1F4D3D] transition">
              <FaInstagram size={18} />
            </a>

            <a href="#" className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1F4D3D] transition">
              <FaFacebookF size={18} />
            </a>

            <a href="#" className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1F4D3D] transition">
              <FaLinkedinIn size={18} />
            </a>

            <a href="#" className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1F4D3D] transition">
              <FaGithub size={18} />
            </a>

          </div>

          {/* Copyright */}
          <div className="w-full border-t border-slate-700 mt-10 pt-6">
            <p className="text-slate-500">
              © 2026 Nexsora Studio. All Rights Reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}