import React from "react";

export default function Home() {
  return (
    <div className="bg-white text-[#5a0f28]">

      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="py-24 text-center bg-[#fdf4e3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold mb-4 text-[#7b1e3c]">
            Welcome to Our Learning Platform
          </h2>

          <p className="text-lg mb-8">
            Explore skill-based courses, track your progress, and grow your career.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/signup"
              className="bg-[#f6d78b] text-[#5a0f28] px-6 py-3 rounded-lg shadow-lg hover:bg-[#ffcc33]"
            >
              Get Started
            </a>

            <a
              href="/courses"
              className="bg-[#7b1e3c] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#5a0f28]"
            >
              Browse Courses
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------- SECTION 1 ---------------------- */}
      <section className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6 text-[#7b1e3c]">Why Choose LMS?</h3>
        <p className="max-w-3xl mx-auto text-lg">
          Our LMS provides high-quality content, expert instructors, and an easy-to-use interface.
        </p>
      </section>

      {/* ---------------------- SECTION 2 ---------------------- */}
      <section className="py-20 bg-[#fdf4e3] text-center">
        <h3 className="text-3xl font-bold mb-6 text-[#7b1e3c]">Top Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Interactive Learning</h4>
            <p>Engage with hands-on activities, quizzes, and assignments.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Expert Mentors</h4>
            <p>Learn from industry professionals with real-world experience.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Track Progress</h4>
            <p>Monitor your learning journey with detailed analytics.</p>
          </div>
        </div>
      </section>

      {/* ---------------------- SECTION 3 ---------------------- */}
      <section className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6 text-[#7b1e3c]">Popular Categories</h3>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-6 py-3 bg-[#7b1e3c] text-white rounded-lg">Technology</span>
          <span className="px-6 py-3 bg-[#f6d78b] text-[#5a0f28] rounded-lg">Business</span>
          <span className="px-6 py-3 bg-[#7b1e3c] text-white rounded-lg">Marketing</span>
          <span className="px-6 py-3 bg-[#f6d78b] text-[#5a0f28] rounded-lg">Design</span>
        </div>
      </section>

      {/* ---------------------- SECTION 4 ---------------------- */}
      <section className="py-20 bg-[#fdf4e3] text-center">
        <h3 className="text-3xl font-bold mb-6 text-[#7b1e3c]">Student Success Stories</h3>
        <p className="max-w-3xl mx-auto text-lg">
          Thousands of learners have transformed their careers through LMS.
        </p>
      </section>

    </div>
  );
}