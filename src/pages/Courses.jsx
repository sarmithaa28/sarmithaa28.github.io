import React from "react";

export default function Courses() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  // Add Course
  const handleAdd = (courseId) => {
    if (!user) return alert("Please login first!");

    const updatedUser = {
      ...user,
      enrolledCourses: [...new Set([...(user.enrolledCourses || []), courseId])]
    };

    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    alert("Course added successfully!");
    window.location.reload();
  };

  // Remove Course
  const handleRemove = (courseId) => {
    const updatedUser = {
      ...user,
      enrolledCourses: user.enrolledCourses.filter((id) => id !== courseId)
    };

    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    alert("Course removed!");
    window.location.reload();
  };

  const sampleCourses = [
    { id: 1, title: "Web Development Bootcamp", desc: "HTML, CSS, JavaScript, React." },
    { id: 2, title: "Data Science Essentials", desc: "Python, Pandas, ML basics." },
    { id: 3, title: "AI & Machine Learning", desc: "Neural networks, deep learning." },
    { id: 4, title: "Mobile Development", desc: "React Native / Flutter intro." },
  ];

  return (
    <div className="py-16 bg-[#fff9f2] min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#7b1e3c]">Courses</h1>

        <div className="grid gap-6 md:grid-cols-3">
          {sampleCourses.map((c) => {
            const isEnrolled = user?.enrolledCourses?.includes(c.id);

            return (
              <div key={c.id} className="bg-white p-6 rounded-lg shadow border border-[#f6d78b]">
                <h3 className="text-xl font-semibold mb-2 text-[#7b1e3c]">{c.title}</h3>
                <p className="text-[#5a0f28] mb-4">{c.desc}</p>

                {isEnrolled ? (
                  <button
                    onClick={() => handleRemove(c.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Remove Course
                  </button>
                ) : (
                  <button
                    onClick={() => handleAdd(c.id)}
                    className="bg-[#7b1e3c] text-white px-4 py-2 rounded hover:bg-[#5a0f28]"
                  >
                    Add to My Courses
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}