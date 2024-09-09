// components/section/About.js
import Image from "next/image";
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import me from "../../../public/images/avatar_v3.png";
import Skills from "./Skills"

export default function About() {
  return (
    <section id='about' className="text-white w-full py-8">
      <div className="container mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-8">
          <div className="hidden md:flex justify-center md:justify-start w-full md:w-1/3 mr-6">
            <div className="relative w-36 h-36 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-[#1C1F33] border-1 border-white">
              <Image
                src={me.src}
                alt="Myself"
                layout="fill"
                objectFit="cover"
                className="transform translate-y-6" // Ajusta este valor para mover la imagen hacia abajo
              />
              {/*<div className="circle-animation" ></div>*/}
            </div>
          </div>
          <div className="flex flex-col h-full w-full md:w-2/3 text-center md:text-left">
            <div className="md:pl-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="text-white">Hola, Soy</span>
                <br />
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-200 to-cyan-400 mt-2">
                  <TypeAnimation
                    sequence={[
                      'Josue Ruiz',
                      1000,
                      'Un Web Developer',
                      1000,
                      'Un Mobile Developer',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p className="text-base lg:text-lg mt-8 text-justify">
                Me apasionan los proyectos que pueden tener un impacto
                positivo en la vida de las personas. Siempre busco
                soluciones efectivas y duraderas, y tengo una curiosidad
                innata que me impulsa a aprender y crecer constantemente. Mi
                versatilidad en el trabajo me permite adaptarme y contribuir
                significativamente en cada proyecto que emprendo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
