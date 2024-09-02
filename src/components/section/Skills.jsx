import React from "react";
import Image from "next/image";

const TECHNOLOGIES = [
  { name: "HTML 5", image: "/images/logos/html5-original.svg" },
  { name: "CSS 3", image: "/images/logos/css3-original.svg" },
  { name: "JavaScript", image: "/images/logos/javascript-original.svg" },
  { name: "React", image: "/images/logos/react-original.svg" },
  { name: "Next.js", image: "/images/logos/nextjs-original.svg" },
  { name: "Dart", image: "/images/logos/dart-original.svg" },
  { name: "Flutter", image: "/images/logos/flutter-original.svg" },
  { name: "MySQL", image: "/images/logos/mysql-original-wordmark.svg" },
  { name: "PostgreSQL", image: "/images/logos/postgresql-original.svg" },
  { name: "Azure", image: "/images/logos/azure-original.svg" },
  { name: "Git", image: "/images/logos/git-original.svg" },
  { name: "GitHub", image: "/images/logos/github-original.svg", customStyle: { filter: "invert(1)" } },
  { name: "WordPress", image: "/images/logos/wordpress-plain.svg" },
  { name: "Elementor", image: "/images/logos/elementor.png" },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-7 gap-8">
      {TECHNOLOGIES.map((tech, index) => (
        <div
          key={tech.name}
          className="group flex justify-center items-center relative"
        >
          {/* Imagen con efecto de hover */}
          <Image
            src={tech.image}
            alt={tech.name}
            width={50}
            height={50}
            className="w-12 h-12 transform transition-transform duration-300 group-hover:scale-150"
            style={tech.customStyle ? tech.customStyle : {}}
          />
          {/* Tooltip personalizado con Tailwind */}
          <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black text-center text-xs rounded-lg px-2 py-1 transition-opacity duration-300 whitespace-nowrap">
            {tech.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
