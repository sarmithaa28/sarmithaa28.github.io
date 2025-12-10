import React from "react";
import { useParams } from "react-router-dom";

const sampleCourses = [
  { id: 1, title: "Web Development Bootcamp", desc: "HTML, CSS, JavaScript, React." },
  { id: 2, title: "Data Science Essentials", desc: "Python, Pandas, ML basics." },
  { id: 3, title: "AI & Machine Learning", desc: "Neural networks, deep learning." },
  { id: 4, title: "Mobile Development", desc: "React Native / Flutter intro." },
];

export default function CourseDetails() {
  const { id } = useParams();
  const course = sampleCourses.find((c) => c.id === Number(id));

  if (!course) {
    return <h1 className="text-center text-2xl mt-10">Course not found</h1>;
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-[#7b1e3c]">{course.title}</h1>
      <p className="text-lg mb-4 text-[#5a0f28]">{course.desc}</p>
      <p className="text-md text-gray-700">Duration: 6–8 weeks</p>
    </div>
  );
}