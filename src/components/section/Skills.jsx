// components/Skills.js
import React from "react";
import Image from "next/image";

const LANGUAGES = [
  { name: "HTML5", image: "/images/logos/html5-original.svg" },
  { name: "CSS3", image: "/images/logos/css3-original.svg" },
  { name: "JavaScript", image: "/images/logos/javascript-original.svg" },
  { name: "PHP", image: "/images/logos/php-original.svg" },
  { name: "Dart", image: "/images/logos/dart-original.svg" },
  { name: "Python", image: "/images/logos/python-original.svg" },
  { name: "C#", image: "/images/logos/csharp-original.svg" },
];

const FRAMEWORKS = [
  { name: "Flutter", image: "/images/logos/flutter-original.svg" },
  { name: "React", image: "/images/logos/react-original.svg" },
  { name: "Next.js", image: "/images/logos/nextjs-original.svg" },
  { name: "Xamarin", image: "/images/logos/xamarin-original.svg" },
];

const DATABASES = [
  { name: "MySQL", image: "/images/logos/mysql-original-wordmark.svg" },
  { name: "PostgreSQL", image: "/images/logos/postgresql-original.svg" },
];

const TOOLS = [
    { name: "Vercel", image: "/images/logos/vercel-original.svg" },
    { name: "Azure", image: "/images/logos/azure-original.svg" },
    { name: "Git", image: "/images/logos/git-original.svg" },
    { name: "GitHub", image: "/images/logos/github-original.svg" },
  { name: "WordPress", image: "/images/logos/wordpress-plain.svg" },
  { name: "Elementor", image: "/images/logos/elementor.png" },
];

const Skills = () => (
  <section className="text-white">
    <div className="flex flex-col items-center py-8 px-4 xl:px-16 sm:py-16">
      <h2 className="text-4xl font-bold text-white mb-12">My Skills</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {LANGUAGES.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="grayscale hover:grayscale-0 transition duration-300">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Frameworks</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {FRAMEWORKS.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="grayscale hover:grayscale-0 transition duration-300">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Databases</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {DATABASES.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="grayscale hover:grayscale-0 transition duration-300">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TOOLS.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="grayscale hover:grayscale-0 transition duration-300">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
