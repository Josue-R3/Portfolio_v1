import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import APP_MOVIL from '../../../public/images/APP_MOVIL.png';
import PSI from '../../../public/images/PSI.png';
import ACCESS from '../../../public/images/ACCESS.png';
import { RiFlutterFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiDart } from "react-icons/di";
import { SiMicrosoftaccess, SiMicrosoftazure, SiMicrosoftexcel, SiMicrosoftsharepoint, SiVisualbasic } from "react-icons/si";
import { Button, Card, CardBody } from "@nextui-org/react";
import ReactCardFlip from 'react-card-flip';

// Datos de las tarjetas de proyecto
const CARD_DATA = [
  {
    title: 'PSI',
    image: PSI,
    github: '#',
    category: 'web',
    description: 'Aplicación web con consumo de APIs, servicios en la nube y almacenamiento en gestor documental.',
    tecnologies: [<FaReact key="react" />, <RiNextjsFill key="nextjs" />, <RiTailwindCssFill key="tailwind" />, <SiMicrosoftazure key="azure" />, <SiMicrosoftsharepoint key="sharepoint" />]
  },
  {
    title: 'YoSoyISTE',
    image: APP_MOVIL,
    github: '#',
    category: 'mobile',
    description: 'Aplicación móvil con consumo de APIs, gestión de estados con RiverPod, y servicios en la nube.',
    tecnologies: [<DiDart key="dart" />, <RiFlutterFill key="flutter" />, <SiMicrosoftazure key="azure" />]
  },
  {
    title: 'Distributivos APP',
    image: ACCESS,
    github: '',
    category: 'desktop',
    description: 'Aplicación de escritorio para la gestión de distributivos académicos.',
    tecnologies: [<SiVisualbasic key="visualbasic" />, <SiMicrosoftaccess key="access" />, <SiMicrosoftexcel key="excel" />]
  },
];

const FILTER_OPTIONS = ['all', 'web', 'mobile', 'desktop'];

export default function Projects() {
  const [filter, setFilter] = useState('all'); // Filtro de categoría seleccionado
  const [flippedIndex, setFlippedIndex] = useState(null); // Índice de la tarjeta volteada en vista de escritorio
  const [isMobile, setIsMobile] = useState(false); // Estado para determinar si el dispositivo es móvil
  const cardRefs = useRef([]); // Referencias a los elementos de las tarjetas

  // Detectar el tamaño de la ventana y actualizar el estado móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Manejar el evento cuando el ratón entra en una tarjeta
  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setFlippedIndex(index);
    }
  };

  // Manejar el evento cuando el ratón sale de una tarjeta
  const handleMouseLeave = () => {
    if (!isMobile) {
      setFlippedIndex(null);
    }
  };

  // Manejar el evento de clic en una tarjeta en dispositivos móviles
  const handleCardClick = (index) => {
    if (isMobile) {
      const newFlippedIndex = flippedIndex === index ? null : index;
      setFlippedIndex(newFlippedIndex);
    }
  };

  // Actualizar las dimensiones de las tarjetas para que coincidan frente y dorso
  useEffect(() => {
    const updateCardSizes = () => {
      cardRefs.current.forEach((ref) => {
        if (ref) {
          const { front, back } = ref;
          if (front && back) {
            const frontRect = front.getBoundingClientRect();
            back.style.width = `${frontRect.width}px`;
            back.style.height = `${frontRect.height}px`;
          }
        }
      });
    };

    updateCardSizes();
    window.addEventListener("resize", updateCardSizes);

    return () => {
      window.removeEventListener("resize", updateCardSizes);
    };
  }, []);

  // Filtrar las tarjetas según la categoría seleccionada
  const filteredData = filter === 'all' ? CARD_DATA : CARD_DATA.filter(card => card.category === filter);

  return (
    <section className="text-white py-16">
      <div id="projects" className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Mis Proyectos</h2>
        <div className="flex justify-center mb-12">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`mx-2 px-4 py-2 ${filter === option ? ' text-white border-b border-white ' : 'text-gray-500'} hover:text-bold hover:text-white `}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((card, index) => (
            <div
              key={index}
              className="rounded-md"
              style={{ backgroundColor: 'transparent', padding: '0px', overflow: 'hidden', width: '100%', height: '100%' }} //cambiar background a red para depurar
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(index)}
              ref={el => cardRefs.current[index] = { ...cardRefs.current[index], container: el }}
            >
              <ReactCardFlip isFlipped={flippedIndex === index} flipDirection="horizontal">
                <div
                  className="cursor-pointer flex flex-col h-full"
                  ref={el => cardRefs.current[index] = { ...cardRefs.current[index], front: el }}
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <Card className="relative group rounded-md" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                    <CardBody className="p-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        className="rounded-t-lg"
                        layout="responsive"
                        objectFit="cover"
                      />
                    </CardBody>
                  </Card>
                </div>

                <div
                  className="cursor-pointer flex flex-col h-full"
                  ref={el => cardRefs.current[index] = { ...cardRefs.current[index], back: el }}
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <Card className="relative group rounded-md" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                    <CardBody className="py-4 flex flex-col justify-between h-full">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                        <p className="mb-4">{card.description}</p>
                      </div>
                      <div className="flex justify-between items-center w-full mt-auto">
                        <div className="flex space-x-2">
                          {card.tecnologies?.map((icon, i) => (
                            <span key={i} className="text-2xl">
                              {icon}
                            </span>
                          ))}
                        </div>
                        {card.github && (
                          <Button
                            startContent={<FaGithub />}
                            as="a"
                            href={card.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto"
                          >
                            GitHub
                          </Button>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
