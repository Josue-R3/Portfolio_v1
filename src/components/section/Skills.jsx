// components/section/Skills.js
import React from "react";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

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

const Skills = () => (
  <div className="grid grid-cols-3 md:grid-cols-7 gap-8">
    {TECHNOLOGIES.map((tech) => (
      <div key={tech.name} className="flex justify-center items-center">
        <Tooltip content={tech.name} >
        <Image
          src={tech.image}
          alt={tech.name}
          width={50}
          height={50}
          className="w-12 h-12"
          //className="w-12 h-12 filter grayscale hover:grayscale-0 transition duration-100 "
          style={tech.customStyle ? tech.customStyle : {}}
          />
          </Tooltip>
      </div>
    ))}
  </div>
);

export default Skills;
