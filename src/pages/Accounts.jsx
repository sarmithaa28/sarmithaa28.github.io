import React from "react";

export default function Account() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="p-10 min-h-screen max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#800000]">Account Settings</h1>

      <p className="text-lg mb-3">
        <strong>Name:</strong> {user?.username}
      </p>

      <p className="text-lg mb-3">
        <strong>Email:</strong> {user?.email}
      </p>

      <p className="text-lg">
        <strong>Total Enrolled Courses:</strong> {user?.enrolledCourses?.length}
      </p>
    </div>
  );
}