import React from "react";

export default function Progress() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#800000]">Your Progress</h1>

      <p className="text-gray-700">
        Progress tracking will be added later.
      </p>

      <p className="mt-4 text-lg">
        Logged in as: <strong>{user?.username}</strong>
      </p>
    </div>
  );
}