// Importación de React y el componente Image de next/image
import React from "react";
import Image from "next/image";

// Definición de un array con las tecnologías, incluyendo su nombre y la ruta de su imagen
const TECHNOLOGIES = [
  { name: "HTML5", image: "/images/logos/html5-original.svg" },
  { name: "CSS3", image: "/images/logos/css3-original.svg" },
  { name: "JavaScript", image: "/images/logos/javascript-original.svg" },
  { name: "PHP", image: "/images/logos/php-original.svg" },
  { name: "Python", image: "/images/logos/python-original.svg" },
  { name: "C#", image: "/images/logos/csharp-original.svg" },
  { name: "React", image: "/images/logos/react-original.svg" },
  { name: "Next.js", image: "/images/logos/nextjs-original.svg" },
  { name: "Dart", image: "/images/logos/dart-original.svg" },
  { name: "Flutter", image: "/images/logos/flutter-original.svg" },
  { name: "Xamarin", image: "/images/logos/xamarin-original.svg" },
  { name: "MySQL", image: "/images/logos/mysql-original-wordmark.svg" },
  { name: "PostgreSQL", image: "/images/logos/postgresql-original.svg" },
  { name: "Azure", image: "/images/logos/azure-original.svg" },
  { name: "Git", image: "/images/logos/git-original.svg" },
  { name: "GitHub", image: "/images/logos/github-original.svg" },
  { name: "WordPress", image: "/images/logos/wordpress-plain.svg" },
  { name: "Elementor", image: "/images/logos/elementor.png" },
];

// Definición del componente Skills
const Skills = () => (
  <section className="text-white w-full sm:py-6 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {TECHNOLOGIES.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <div>
              <Image
                src={tech.image}
                alt={tech.name}
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </div>
          </div>
        ))}
      </div>
  </section>
);

export default Skills;
