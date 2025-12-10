import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      // ✅ Save user data to localStorage
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          username: email.split("@")[0],   // username generated from email
          email: email,
          enrolledCourses: [1, 3],         // sample enrolled courses
        })
      );

      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      alert("Please enter email and password.");
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#fff9f2]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-[#f6d78b]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#7b1e3c]">Login</h2>

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
          placeholder="••••••••"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#7b1e3c] text-white py-2 rounded hover:bg-[#5a0f28] transition"
        >
          Login
        </button>

        <p className="text-sm text-[#5a0f28] mt-4 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#7b1e3c] underline hover:text-[#ffcc33]">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}