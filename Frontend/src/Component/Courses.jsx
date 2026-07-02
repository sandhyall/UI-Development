import React, { useState } from "react";
import {
  ChevronRight,
  Atom,
  MessageCircleHeart,
  Triangle,
  Palette,
  Rocket,
  GitBranch,
  Terminal,
  Cloud,
  Boxes,
} from "lucide-react";
import { Link } from "react-router-dom";

const CARDS = [
  {
    id: "all",
    title: "All Courses",
    count: "23",
    desc: "courses you're powering through right now.",
    icons: [Atom, MessageCircleHeart, Triangle, Palette],
  },
  {
    id: "upcoming",
    title: "Upcoming Courses",
    count: "05",
    desc: "exciting new courses waiting to boost your skills.",
    icons: [Rocket, GitBranch],
  },
  {
    id: "ongoing",
    title: "Ongoing Courses",
    count: "10",
    desc: "currently happening—don't miss out on the action!",
    icons: [Terminal, Cloud, Boxes],
  },
];

const Courses = () => {
  const [activeId, setActiveId] = useState("all");

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-5xl mx-auto p-4">
      {CARDS.map((card) => {
        const isActive = activeId === card.id;
        return (
          <div
            key={card.id}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            onClick={() => setActiveId(card.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveId(card.id);
              }
            }}
            className={`group cursor-pointer rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden relative
              transition-[flex-grow,background-color] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C53941]
              ${
                isActive
                  ? "flex-[2.5] bg-[#C53941] min-h-[260px] sm:min-h-0 sm:h-[420px]"
                  : "flex-[0.6] bg-[#FDF0F1] hover:bg-[#FBE1E3] min-h-[96px] sm:min-h-0 sm:h-[420px]"
              }`}
          >
            <div
              className={`absolute inset-5 sm:inset-6 md:inset-8 flex flex-col justify-between transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Link
                to="/journey"
                className="self-end text-white text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                View all courses <ChevronRight size={16} />
              </Link>
              <div>
                <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {card.icons.map((Icon, i) => (
                    <div
                      key={i}
                      className="bg-white/20 p-1.5 sm:p-2 rounded-lg text-white"
                    >
                      <Icon size={18} className="sm:w-5 sm:h-5" />
                    </div>
                  ))}
                </div>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white leading-none">
                  {card.count}+
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2">
                  {card.title}
                </h2>
                <p className="text-red-100 text-sm mt-1 max-w-[220px]">
                  {card.desc}
                </p>
              </div>
            </div>

            <div
              className={`flex flex-row sm:flex-col justify-between items-center sm:items-stretch h-full transition-opacity duration-300 ${
                isActive ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <div className="flex flex-row sm:flex-row-reverse justify-start sm:justify-end items-center sm:items-start gap-3 sm:gap-4">
                <h3 className="text-[#C53941] font-black text-lg sm:text-2xl md:text-3xl leading-none sm:[writing-mode:vertical-lr] sm:rotate-180">
                  {card.title}
                </h3>
                <p className="hidden sm:block text-[#C53941]/80 text-sm leading-relaxed [writing-mode:vertical-lr] rotate-180">
                  {card.desc}
                </p>
              </div>
              <span className="text-[#C53941] font-black text-3xl sm:text-5xl md:text-6xl leading-none">
                {card.count}+
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
