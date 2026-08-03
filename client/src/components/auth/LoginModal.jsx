// =========================================================
// Import React
// =========================================================
import React, { useState } from "react";
import { loginUser } from "../../api/authApi";

// =========================================================
// Login Modal Component
// =========================================================

const LoginModal = ({ isOpen, onClose, openRegister }) => {
// ===============================================
// Form State
// ===============================================

const [formData, setFormData] = useState({
    email: "",
    password: "",
});

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Validate input
    if (!formData.email || !formData.password) {
        setError("Please enter email and password.");
        return;
    }

    try {
        setLoading(true);

        const response = await loginUser(formData);

      //console.log(response.data);

        setSuccess(response.data.message);

        // Save JWT token
       localStorage.setItem("token", response.data.token);

            // Save logged-in user
          localStorage.setItem(
           "user",
          JSON.stringify(response.data.user)
         );

         // Clear login form
         setFormData({
            email: "",
            password: "",
          });

       // Close modal after a short delay
       setTimeout(() => {
           onClose();
           }, 1000);

    } catch (err) {
        setError(
            err.response?.data?.message || "Login failed."
        );
    } finally {
        setLoading(false);
    }
};

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-neutral-900/55 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

       <div
  className="
    relative
    w-full
    max-w-md
    overflow-hidden
    rounded-3xl

    border
    border-white/10

    backdrop-blur-2xl

    shadow-[0_20px_60px_rgba(0,0,0,0.45)]

    transition-all
    duration-300
  "
  style={{
    backgroundColor: "rgba(68, 68, 78, 0.82)", // #44444E with transparency
  }}
>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-3xl text-gray-400 transition hover:text-[#D4AF37]"
          >
            &times;
          </button>

          {/* Header */}
          <div className="border-b border-white/10 px-8 py-8 text-center">

            <h1 className="text-4xl font-bold text-white">
              Eventify
            </h1>

            <p className="mt-1 text-xs uppercase tracking-[5px] text-[#D4AF37]">
              Powered by Kaksha
            </p>

            <h2 className="mt-6 text-2xl font-semibold text-white">
              Welcome Back
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Sign in to continue your Eventify journey.
            </p>

          </div>

          {/* Body */}
          <form className="space-y-5 p-8" onSubmit={handleSubmit}>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address
              </label>

              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"/>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button className="text-sm text-[#D4AF37] hover:underline">
                Forgot Password?
              </button>
            </div>
          {error && (
           <p className="text-center text-sm text-red-400">
              {error}
           </p>
           )}

          {success && (
              <p className="text-center text-sm text-green-400">
                {success}
              </p>
            )}
            {/* Login Button */}
            <button type="submit" disabled={loading} className="w-full rounded-xl bg-[#D4AF37] py-3 font-semibold text-black transition-all duration-300 hover:bg-[#c79b22] disabled:opacity-60">
              {loading ? "Logging in..." : "Login"}
           </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-xs uppercase tracking-widest text-gray-500">
                OR
              </span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <button
                onClick={openRegister}
                className="font-semibold text-[#D4AF37] transition hover:underline"
              >
                Create Account
              </button>
            </p>

          </form>

        </div>

      </div>
    </>
  );
};

export default LoginModal;