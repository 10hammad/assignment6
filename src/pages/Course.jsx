/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "UX/UI Design 201",
    category: "Design",
    description: "Learn the basics of UX/UI design, create stunning prototypes.",
    price: "$40",
    image: "/UIUX.jpg",
    type: "Popular",
  },
  {
    id: 2,
    title: "Introduction to Python",
    category: "Programming",
    description: "Learn Python from scratch and start coding.",
    price: "$60",
    image: "/Python.jpg",
    type: "Recommended",
  },
  {
    id: 3,
    title: "Data Analysis for Beginners",
    category: "Business",
    description: "Analyze data efficiently with beginner-friendly tools.",
    price: "$50",
    image: "/Analytics.jpeg",
    type: "Best Price",
  },
  {
    id: 4,
    title: "Art Specialization",
    category: "Art",
    description: "Master art techniques to improve your creativity.",
    price: "$45",
    image: "/Art.jpeg",
    type: "Popular",
  },
  {
    id: 5,
    title: "Rule of Law",
    category: "Law",
    description: "Understand the legal framework that governs societies.",
    price: "$80",
    image: "/Law.jpeg",
    type: "Recommended",
  },
  {
    id: 6,
    title: "Introduction to Webflow",
    category: "Tech",
    description: "Build professional websites without writing code.",
    price: "$70",
    image: "/Web.png",
    type: "Best Price",
  },
];

export default function Courses() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCourses =
    activeTab === "All"
      ? courses
      : courses.filter((course) => course.type === activeTab);

  const tabs = ["All", "Popular", "Recommended", "Best Price"];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Courses</h1>
      <p className="text-center text-gray-600 mb-6">
        Your Ultimate Guide to Learning
      </p>

   
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4 bg-gray-100 p-2 rounded-md">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "outline outline-2 outline-gray-800 bg-white shadow"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{course.category}</p>
              <p className="text-sm text-gray-700 mb-4">
                {course.description}
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-neutral-100 text-black px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                  Enroll Now
                </button>
                <span className="text-gray-800 font-semibold">
                  {course.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-neutral-50 text-stone-950 px-6 py-3 rounded-md text-sm hover:bg-stone-600">
          View All Courses
        </button>
      </div>
    </div>
  );
}
