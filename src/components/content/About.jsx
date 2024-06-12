import Image from "next/image";
import React, { useTransition, useState } from "react";
import avatar from "../../../public/images/avatar.png";
import TabButton from "../shared/TabButton";

const TAB_DATA=[
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2" >
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
      <ul className="list-disc pl-2" >
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
      <ul className="list-disc pl-2" >
        <li>ISTE</li>
        <li>PELByte</li>
      </ul>
    )
  }
]

export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full" >
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg ">
            Hola, me llamo Josue. Con 21 años y de origen ecuatoriano, me gradué
            como Tecnólogo en Desarrollo de Aplicaciones Web. Me apasionan los
            proyectos que pueden tener un impacto positivo en la vida de las
            personas. Siempre busco soluciones efectivas y duraderas, y tengo
            una curiosidad innata que me impulsa a aprender y crecer
            constantemente. Mi versatilidad en el trabajo me permite adaptarme y
            contribuir significativamente en cada proyecto que emprendo.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8" >
            {TAB_DATA.find((t)=>t.id===tab).content}
          </div>
        </div>
        <div className="place-self-center">
          <Image src={avatar} width={500} height={500} alt="about" />
        </div>
      </div>
    </section>
  );
}
