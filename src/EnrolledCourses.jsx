import React from "react";

export default function EnrolledCourses() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const sampleCourses = [
    { id: 1, title: "Web Development Bootcamp" },
    { id: 2, title: "Data Science Essentials" },
    { id: 3, title: "AI & Machine Learning" },
    { id: 4, title: "Mobile Development" },
  ];

  // Filter only the enrolled courses
  const enrolled = sampleCourses.filter((c) =>
    user?.enrolledCourses?.includes(c.id)
  );

  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#7b1e3c]">Your Enrolled Courses</h1>

      {enrolled.length === 0 ? (
        <p className="text-lg text-gray-600">You have not enrolled in any courses yet.</p>
      ) : (
        enrolled.map((course) => (
          <div
            key={course.id}
            className="p-4 mb-4 bg-white border border-[#f6d78b] rounded shadow"
          >
            <h2 className="text-xl font-semibold text-[#7b1e3c]">{course.title}</h2>
          </div>
        ))
      )}
    </div>
  );
}