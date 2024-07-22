import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import APP_MOVIL from '../../../public/images/APP_MOVIL.png';
import PSI from '../../../public/images/PSI.png';
import ACCESS from '../../../public/images/ACCESS.png';
import { RiFlutterFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiDart } from "react-icons/di";
import { SiMicrosoftaccess, SiMicrosoftazure, SiMicrosoftsharepoint, SiVisualbasic } from "react-icons/si";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";

const CARD_DATA = [
  {
    title: 'PSI',
    image: PSI,
    github: '#',
    category: 'web',
    tecnologies: [<RiNextjsFill key="nextjs" />, <RiTailwindCssFill key="tailwind" />, <SiMicrosoftazure key="azure" />, <FaNodeJs key="nodejs" />, <SiMicrosoftsharepoint key="sharepoint" />]
  },
  {
    title: 'YoSoyISTE',
    image: APP_MOVIL,
    github: '#',
    category: 'mobile',
    tecnologies: [<RiFlutterFill key="flutter" />, <DiDart key="dart" />, <SiMicrosoftazure key="azure" />]
  },
  {
    title: 'Distributivos APP',
    image: ACCESS,
    github: '#',
    category: 'desktop',
    tecnologies: [<SiMicrosoftaccess key="access" />, <SiVisualbasic key="visualbasic" />]
  },
];

const FILTER_OPTIONS = ['all', 'web', 'mobile', 'desktop'];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredData = filter === 'all' ? CARD_DATA : CARD_DATA.filter(card => card.category === filter);

  return (
    <section className="text-white py-16">
      <div id="projects" className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Mis Proyectos</h2>
        <div className="flex justify-center mb-12">
          {FILTER_OPTIONS.map((option) => (
            <Button
              key={option}
              onClick={() => setFilter(option)}
              className={`mx-2 px-4 py-2 rounded ${filter === option ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-gray-800`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((card, index) => (
            <Card key={index} className="relative group">
              <CardBody className="p-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="rounded-t-lg "
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 rounded-lg">
                  <div className="flex flex-wrap space-x-2 mb-4">
                    {card.tecnologies?.map((icon, i) => (
                      <span key={i} className="text-2xl">
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </CardBody>
              <CardFooter className="flex justify-between items-center p-4">
                <h3 className="text-xl font-bold">{card.title}</h3>
                {card.github && (
                  <a
                    href={card.github}
                    className="flex items-center text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
