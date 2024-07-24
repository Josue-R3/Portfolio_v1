// components/Myself.js
import React from 'react';
import { Avatar } from "@nextui-org/react";
import me from "../../../public/images/avatar_v3.png";

const Myself = () => (
  <div className="flex flex-col md:flex-row items-center gap-8 w-full">
    <div className="flex justify-center md:justify-start w-full md:w-1/3">
      <Avatar
        src={me.src}
        width={350}
        height={350}
        alt="Myself"
        isBordered
        className="w-36 h-36 md:w-64 md:h-64 bg-[#1C1F33] "
      />
    </div>
    <div className="text-left flex flex-col h-full w-full md:w-2/3">
      <div className="md:pl-4">
        <p className="text-base lg:text-lg">
          Hola, me llamo Josue. Con 21 años y de origen ecuatoriano, me gradué
          como Tecnólogo en Desarrollo de Aplicaciones Web. Me apasionan los
          proyectos que pueden tener un impacto positivo en la vida de las
          personas. Siempre busco soluciones efectivas y duraderas, y tengo
          una curiosidad innata que me impulsa a aprender y crecer
          constantemente. Mi versatilidad en el trabajo me permite adaptarme y
          contribuir significativamente en cada proyecto que emprendo.
        </p>
      </div>
    </div>
  </div>
);

export default Myself;
