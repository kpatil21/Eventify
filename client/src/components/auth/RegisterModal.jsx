// =========================================================
// Import React
// =========================================================

import React, { useState } from "react";
import { registerUser } from "../../api/authApi";

// =========================================================
// Register Modal Component
// =========================================================

const RegisterModal = ({ isOpen, onClose, openLogin }) => {

  // ===============================================
// Form State
// ===============================================

const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
   console.log("handleSubmit called");
    e.preventDefault();

    setError("");
    setSuccess("");

    // Validate fields
    if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
    ) {
        setError("Please fill all fields.");
        return;
    }
 console.log("Password:", formData.password);
    console.log("Confirm Password:", formData.confirmPassword);
    // Check passwords
    if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        console.log("Form Data:", formData);
     console.log("Password:", formData.password);
    console.log("Confirm Password:", formData.confirmPassword);
        return;
    }

    try {
        setLoading(true);

        const response = await registerUser({
            name: formData.name,
            email: formData.email,
            password: formData.password,
        });

        setSuccess(response.data.message);

        // Clear form
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });

        // Open login after 2 seconds
        setTimeout(() => {
            onClose();
            openLogin();
        }, 2000);

    } catch (err) {
        setError(
            err.response?.data?.message || "Registration failed."
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
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="w-full max-w-md rounded-2xl border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden"
          style={{
            backgroundColor: "rgba(68, 68, 78, 0.90)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <h2 className="text-2xl font-bold text-white">
              Create Account
            </h2>

            <button
              onClick={onClose}
              className="text-3xl text-[#BFC9D1] transition hover:text-white"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <form className="space-y-5 p-6" onSubmit={handleSubmit}>

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Full Name
              </label>

              <input
                type="text"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                  placeholder="Enter your full name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-[#BFC9D1] outline-none transition focus:border-[#D4AF37]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Email Address
              </label>

              <input
                type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-[#BFC9D1] outline-none transition focus:border-[#D4AF37]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-[#BFC9D1] outline-none transition focus:border-[#D4AF37]"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-[#BFC9D1] outline-none transition focus:border-[#D4AF37]"
              />
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
            {/* Register Button */}
            <button type="submit" disabled={loading} className="w-full rounded-xl bg-[#D4AF37] py-3 font-semibold text-black transition hover:bg-[#c79b22] disabled:opacity-60">
                {loading ? "Creating Account..." : "Create Account"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-sm text-[#BFC9D1]">OR</span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-[#BFC9D1]">
              Already have an account?{" "}
              <button
                onClick={openLogin}
                className="font-semibold text-[#D4AF37] transition hover:text-[#e6c14c]"
              >
                Login
              </button>
            </p>

          </form>
        </div>
      </div>
    </>
  );
};

// =========================================================
// Export Component
// =========================================================

export default RegisterModal;