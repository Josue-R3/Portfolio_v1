import React, { useState, useEffect } from "react";
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

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Maneja el evento de movimiento del mouse
  const handleMouseMove = (index) => {
    setActiveIndex(index);
    setTooltipVisible(true); // Mostrar el tooltip inmediatamente
  };

  // Resetea el estado cuando el cursor sale del contenedor
  const handleMouseLeave = () => {
    setActiveIndex(-1);
    setTimeout(() => setTooltipVisible(false), 300); // Retraso para ocultar el tooltip
  };

  useEffect(() => {
    if (activeIndex === -1) {
      setTooltipVisible(false);
    }
  }, [activeIndex]);

  return (
    <div
      className="grid grid-cols-3 md:grid-cols-7 gap-8"
      onMouseLeave={handleMouseLeave}
    >
      {TECHNOLOGIES.map((tech, index) => (
        <div
          key={tech.name}
          className="flex justify-center items-center"
          onMouseMove={() => handleMouseMove(index)}
        >
          <Tooltip
            content={tech.name}
            placement="top"
            visible={tooltipVisible && activeIndex === index} // Controla la visibilidad del tooltip
          >
            <Image
              src={tech.image}
              alt={tech.name}
              width={50}
              height={50}
              className={`w-12 h-12 transition-transform duration-300 transform ${
                activeIndex === index ? "scale-150" : "scale-100"
              }`}
              style={tech.customStyle ? tech.customStyle : {}}
            />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default Skills;
