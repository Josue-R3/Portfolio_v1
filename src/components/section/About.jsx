import Image from "next/image";
import React, { useTransition, useState } from "react";
import avatar from "../../../public/images/avatar.png";
import { Button } from "@nextui-org/react";

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
    )
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
    )
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
    )
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className="list-disc pl-2">
        <li>ISTE</li>
        <li>PELByte</li>
      </ul>
    )
  }
];

function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? 'text-background transform rotate-360 bg-white'
    : 'text-[#ADB7BE]';
  
  return (
    <Button variant="light" color="primary" onClick={selectTab} className={`transform -rotate-90 mb-8 hover:text-white ${buttonClasses}`}>
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

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full relative">
          <h2 className="text-4xl font-bold text-white mb-8">About</h2>
          <div className="flex">
            <div className="flex flex-col items-center justify-center gap-10 pr-8">
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
            <div className="pl-4">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
        <div className="place-self-center">
          <Image src={avatar} width={500} height={500} alt="about" />
        </div>
      </div>
    </section>
  );
}
