import React from "react";
import { education } from "../data/educationData";

const DisplayEducation = () => {
  return (
    <div className="mt-10 flex flex-col gap-8">
      {education.map((item) => (
        <div
          key={item.id}
          className="group relative flex items-center justify-between 
                     rounded-xl border border-gray-700 bg-[#1f1f1f] 
                     p-6 shadow-lg shadow-black/20 
                     transition-all duration-300 ease-in-out
                     hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50"
        >
          {/* Left Content */}
          <div className="pr-6">
            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
              {item.degree}
            </h3>

            <p className="mt-1 text-gray-300 font-medium">
              {item.institution}
            </p>

            <p className="mt-1 text-sm text-gray-400">
              {item.year}
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-300 max-w-xl">
              {item.details}
            </p>
          </div>

          {/* Right Logo Box */}
          <div
            className="flex h-20 w-20 items-center justify-center 
                       rounded-lg border border-gray-600 bg-white/5 
                       p-2 transition-all duration-300 
                       group-hover:scale-110 group-hover:border-blue-400"
          >
            <img
              src={item.logo}
              alt={item.institution}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayEducation;