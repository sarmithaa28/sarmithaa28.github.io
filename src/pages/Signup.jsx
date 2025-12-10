import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name && email && password) {
      navigate("/dashboard");
    } else {
      alert("Please fill all fields.");
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#fff9f2]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-[#f6d78b]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#7b1e3c]">Create Account</h2>

        {/* Full Name */}
        <label className="block text-sm font-medium text-[#7b1e3c] mb-1">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-[#f6d78b] rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#ffcc33]"
          placeholder="Your name"
          required
        />

        {/* Email */}
        <label className="block text-sm font-medium text-[#7b1e3c] mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-[#f6d78b] rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#ffcc33]"
          placeholder="you@example.com"
          required
        />

        {/* Password */}
        <label className="block text-sm font-medium text-[#7b1e3c] mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-[#f6d78b] rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#ffcc33]"
          placeholder="Choose a strong password"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#f6d78b] text-[#5a0f28] py-2 rounded hover:bg-[#ffcc33] transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-[#5a0f28] mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-[#7b1e3c] underline hover:text-[#ffcc33]">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}