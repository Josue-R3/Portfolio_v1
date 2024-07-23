import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import APP_MOVIL from '../../../public/images/APP_MOVIL.png';
import PSI from '../../../public/images/PSI.png';
import ACCESS from '../../../public/images/ACCESS.png';
import { RiFlutterFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiDart } from "react-icons/di";
import { SiMicrosoftaccess, SiMicrosoftazure, SiMicrosoftsharepoint, SiVisualbasic, SiMicrosoftexcel } from "react-icons/si";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import ReactCardFlip from 'react-card-flip';

const CARD_DATA = [
  {
    title: 'PSI',
    image: PSI,
    github: '#',
    category: 'web',
    description: 'Aplicación web con consumo de APIs, servicios en la nube y almacenamiento en gestor documental.',
    tecnologies: [<RiNextjsFill key="nextjs" />, <RiTailwindCssFill key="tailwind" />, <SiMicrosoftazure key="azure" />, <FaNodeJs key="nodejs" />, <SiMicrosoftsharepoint key="sharepoint" />]
  },
  {
    title: 'YoSoyISTE',
    image: APP_MOVIL,
    github: '#',
    category: 'mobile',
    description: 'Aplicación móvil con consumo de APIs, gestión de estados con RiverPod, y servicios en la nube.',
    tecnologies: [<RiFlutterFill key="flutter" />, <DiDart key="dart" />, <SiMicrosoftazure key="azure" />]
  },
  {
    title: 'Distributivos APP',
    image: ACCESS,
    github: '',
    category: 'desktop',
    description: 'Aplicación de escritorio para la gestión de distributivos académicos.',
    tecnologies: [<SiMicrosoftaccess key="access" />, <SiVisualbasic key="visualbasic" />, <SiMicrosoftexcel key="excel" />]
  },
];

const FILTER_OPTIONS = ['all', 'web', 'mobile', 'desktop'];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [flippedIndex, setFlippedIndex] = useState(null);

  const filteredData = filter === 'all' ? CARD_DATA : CARD_DATA.filter(card => card.category === filter);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

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
            <ReactCardFlip isFlipped={flippedIndex === index} flipDirection="horizontal" key={index}>
              {/* Front of the card */}
              <div className="relative group rounded-lg overflow-hidden w-full h-full">
                <Card className="relative group rounded-lg overflow-hidden w-full h-full">
                  <CardBody className="p-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="rounded-t-lg"
                      layout="responsive"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 rounded-lg">
                      <Button
                        onClick={() => handleFlip(index)}
                        className="mt-2 bg-blue-500 hover:bg-blue-700"
                      >
                        Más Detalles
                      </Button>
                    </div>
                  </CardBody>
                  <CardFooter className="flex justify-center items-center p-4 bg-transparent">
                    <h3 className="text-xl font-bold text-center">{card.title}</h3>
                  </CardFooter>
                </Card>
              </div>

              {/* Back of the card */}
              <div className="relative group rounded-lg overflow-hidden w-full h-full">
                <Card className="relative group rounded-lg overflow-hidden w-full h-full">
                  <CardBody className="p-4 flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                    <p className="mb-4">{card.description}</p>
                    <div className="flex flex-wrap justify-center space-x-2 mb-4">
                      {card.tecnologies?.map((icon, i) => (
                        <span key={i} className="text-2xl">
                          {icon}
                        </span>
                      ))}
                    </div>
                    <Button
                      onClick={() => handleFlip(index)}
                      className="mt-4 bg-red-500 hover:bg-red-700"
                    >
                      Menos Detalles
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </section>
  );
}
