import React from "react";
import { useNavigate } from "react-router-dom";   

export default function Dashboard() {
  const navigate = useNavigate();               
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-6 text-[#800000]">
          Dashboard
        </h1>

        <p className="text-lg text-gray-700">
          Welcome to your dashboard!  
          Here you can view your courses, track progress, and manage your account.
        </p>

        {/* Example Sections */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ✅ Enrolled Courses Card */}
          <div
            onClick={() => navigate("/enrolled-courses")}
            className="bg-[#FFD700] text-black p-6 rounded-lg shadow-md cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">Enrolled Courses</h2>
            <p>View all the courses you are currently learning.</p>
          </div>

          {/* ✅ Progress Card */}
          <div
            onClick={() => navigate("/progress")}
            className="bg-[#FFD700] text-black p-6 rounded-lg shadow-md cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">Progress</h2>
            <p>Track your learning progress and achievements.</p>
          </div>

          {/* ✅ Account Settings Card */}
          <div
            onClick={() => navigate("/account")}
            className="bg-[#FFD700] text-black p-6 rounded-lg shadow-md cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
            <p>Manage your profile and preferences.</p>
          </div>

        </div>
      </div>
    </div>
  );
}