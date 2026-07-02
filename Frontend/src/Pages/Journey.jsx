import React from "react";

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Learning from "../Component/Learning";

const Journey = () => {
  const navigate = useNavigate();
  return (
    <div className="p-8 max-w-6xl mx-auto pt-16">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 mb-8 hover:text-black"
      >
        <ArrowLeft size={20} /> Back to Dashboard
      </button>
      
      <Learning />
    </div>
  );
};

export default Journey;
