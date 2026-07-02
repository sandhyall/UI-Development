import React from "react";

import Courses from "../Component/Courses";

const Dashboard = () => (
  <div className="p-8 max-w-6xl mx-auto pt-16">
    <div className="mb-8">
      <p className="text-gray-700 font-medium">Explore our classes!</p>
      <h2 className="text-3xl font-bold mt-1">
        Dive Into <span className="text-[#20B486]">What's Hot! 🔥</span>
      </h2>
    </div>
    <Courses />
  </div>
);

export default Dashboard;
