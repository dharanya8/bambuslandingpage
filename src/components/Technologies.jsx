// components/Technologies.jsx

import React from "react";

import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiPython,
  SiDocker,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const technologies = [
  {
    icon: SiReact,
    name: "React",
    color: "#61DAFB",
    bg: "bg-blue-50",
  },

  {
    icon: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
    bg: "bg-yellow-50",
  },

  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4",
    bg: "bg-cyan-50",
  },

  {
    icon: SiNodedotjs,
    name: "Node.js",
    color: "#339933",
    bg: "bg-green-50",
  },

  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "#47A248",
    bg: "bg-emerald-50",
  },

  {
    icon: SiFigma,
    name: "Figma",
    color: "#F24E1E",
    bg: "bg-orange-50",
  },

  {
    icon: SiPython,
    name: "Python",
    color: "#3776AB",
    bg: "bg-indigo-50",
  },

  {
    icon: SiDocker,
    name: "Docker",
    color: "#2496ED",
    bg: "bg-sky-50",
  },

  {
    icon: FaAws,
    name: "AWS",
    color: "#FF9900",
    bg: "bg-amber-50",
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-10 bg-gray-50">
      <div className="container-fluid mx-auto px-16">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Tech Stack
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Technologies We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Master
            </span>
          </h2>

          <p className="text-gray-600">
            Cutting-edge tools and frameworks powering modern digital
            experiences
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className={`${tech.bg} rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100`}
              >
                <div className="flex justify-center mb-4">
                  <Icon
                    size={48}
                    color={tech.color}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-semibold text-gray-700 text-sm md:text-base">
                  {tech.name}
                </h3>

                <div className="w-10 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;