import React from "react";
import { ChevronRight } from "lucide-react";
import image from "../assets/image.png"
import image1 from "../assets/image2.png"
import image2 from "../assets/image3.png"
import image3 from "../assets/image4.png"

const LearningSection = () => {
  const steps = [
    {
      title: "Start with Clarity",
      subtitle: "Step into a better learning path.",
      desc: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
      bgColor: "bg-[#F8635B]",
      img: image,
    },
    {
      title: "Learn by Doing",
      subtitle: "Practical skills, real projects.",
      desc: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
      bgColor: "bg-[#4E8C8F]",
      img: image1,
    },
    {
      title: "Get Mentored & Supported",
      subtitle: "You're not learning alone.",
      desc: "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
      bgColor: "bg-[#6B5EAE]",
      img: image2,
    },
    {
      title: "Achieve & Showcase",
      subtitle: "Build your portfolio, get job-ready.",
      desc: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
      bgColor: "bg-[#A6805A]",
      img: image3,
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto font-sans">
      <div className="mb-16">
        
        <p className="text-gray-800 font-medium text-lg mb-1">
          Your SkillShikshya Journey
        </p>
        <h2 className="text-4xl font-bold">
          <span className="text-[#20B486]">Step</span> In.{" "}
          <span className="text-[#20B486]">Skill</span> Up.{" "}
          <span className="text-black">Stand</span> Out.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${step.bgColor} rounded-[2rem] relative flex items-center min-h-[300px] transition-transform duration-300 hover:scale-[1.02] cursor-pointer group`}
          >
            <div className="absolute -left-8 bottom-0 w-48 md:w-56 lg:w-64 transform group-hover:-translate-y-2 transition-transform duration-500">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-auto drop-shadow-2xl"
              />

              
            </div>


            

            <div className="ml-36 md:ml-48 lg:ml-52 p-8 text-white">

              
              <h3 className="text-2xl md:text-3xl font-bold mb-1">
                {step.title}
              </h3>
              <p className="text-lg font-semibold mb-4 leading-tight opacity-95">
                {step.subtitle}
              </p>
              <p className="text-sm leading-relaxed opacity-85 font-normal">
                {step.desc}
              </p>

              <div className="absolute bottom-6 right-6 opacity-60 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={32} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningSection;
