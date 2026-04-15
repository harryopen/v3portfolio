import React from "react";

const techStack = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git", icon: "🔧" },
];

export default function TechMarquee() {
  return (
    <div className=" overflow-hidden bg-black p-6  ">
      <div
        className="flex gap-6 "
        style={{
          width: "max-content",
          animation: "scroll 20s linear infinite",
        }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl 
                       bg-gradient-to-br from-green-400/20 to-green-600/20 
                       backdrop-blur-lg border border-green-400/30
                       shadow-[0_0_15px_rgba(0,255,150,0.3)]
                       text-green-300 font-medium whitespace-nowrap"
          >
            <span className="text-xl">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}