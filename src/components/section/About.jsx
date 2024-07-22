import Image from "next/image";
import React, { useTransition, useState } from "react";
import { Button } from "@nextui-org/react";
import avatar from "../../../public/images/avatar.png";  // Ruta correcta del avatar

const TAB_DATA = [
  {
    title: 'Myself',
    id: 'myself',
    content: (
      <p className="text-base lg:text-lg">
        Hola, me llamo Josue. Con 21 años y de origen ecuatoriano, me gradué
        como Tecnólogo en Desarrollo de Aplicaciones Web. Me apasionan los
        proyectos que pueden tener un impacto positivo en la vida de las
        personas. Siempre busco soluciones efectivas y duraderas, y tengo
        una curiosidad innata que me impulsa a aprender y crecer
        constantemente. Mi versatilidad en el trabajo me permite adaptarme y
        contribuir significativamente en cada proyecto que emprendo.
      </p>
    ),
    image: avatar
  },
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>WordPress</li>
      </ul>
    ),
    image: avatar
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>SAINT LEO</li>
        <li>ISTE</li>
        <li>UEA</li>
      </ul>
    ),
    image: avatar
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className="list-disc pl-2">
        <li>ISTE</li>
        <li>PELByte</li>
      </ul>
    ),
    image: avatar
  }
];

function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? 'text-background transform rotate-360 bg-white'
    : 'text-[#ADB7BE]';

  return (
    <Button variant="light" color="primary" onClick={selectTab} className={`mx-2 hover:text-white ${buttonClasses}`}>
      <p className="font-semibold hover:text-white border-b border-white">
        {children}
      </p>
    </Button>
  );
}

export default function About() {
  const [tab, setTab] = useState("myself");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white">
      <div id="about" className="flex flex-col items-center py-8 px-4 xl:px-16 sm:py-16">
        <h2 className="text-4xl font-bold text-white mb-12">About</h2>
        <div className="flex justify-center w-full mb-8">
          {TAB_DATA.map((tabItem) => (
            <TabButton
              key={tabItem.id}
              selectTab={() => handleTabChange(tabItem.id)}
              active={tab === tabItem.id}
            >
              {tabItem.title}
            </TabButton>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <div className="flex justify-center w-full md:w-1/2">
            <Image src={currentTab.image} width={500} height={500} alt={currentTab.title} />
          </div>
          <div className="text-left flex flex-col h-full w-full md:w-1/2">
            <div className="pl-4">
              {currentTab.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
