import Image from "next/image";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import APP_MOVIL from '../../../public/images/APP_MOVIL.png';
import PSI from '../../../public/images/PSI.png';
import ACCESS from '../../../public/images/ACCESS.png';
import PRUEBA_GALA from '../../../public/images/PRUEBA_GALA.png';
import PRUEBA_ISTE from '../../../public/images/PRUEBA_ISTE.png';

const CARD_DATA = [
  {
    title: 'PSI',
    image: PSI,
    description: 'Description of PSI',
    github: '#',
    details: '#',
    isOrganization: true
  },
  {
    title: 'YoSoyISTE',
    image: APP_MOVIL,
    description: 'Description of YoSoyISTE',
    github: '#',
    details: '#',
    isOrganization: true
  },
  {
    title: 'Distributivos APP',
    image: ACCESS,
    description: 'Description of Distributivos APP',
    github: '#',
    details: '#',
    isOrganization: true
  },
  {
    title: 'Prueba Técnica ISTE',
    image: PRUEBA_ISTE,
    description: 'Description of Distributivos APP',
    github: '#',
    details: '#',
    isOrganization: false
  },
  {
    title: 'Prueba Técnica GALA',
    image: PRUEBA_GALA,
    description: 'Description of Distributivos APP',
    github: '#',
    details: '#',
    isOrganization: false
  },
];

export default function Projects() {
  return (
    <section id="projects" className="text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARD_DATA.map((card, index) => (
            <Card key={index} className="bg-[#191c32]">
              <CardHeader className="relative h-48">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </CardHeader>
              <CardBody className="text-left p-4">
                <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                <p className="text-[#ADB7BE]">{card.description}</p>
              </CardBody>
              <CardFooter className="flex justify-between p-4">
                {card.isOrganization ? (
                  <Button
                    startContent={<FaGithub />}
                    flat
                    isDisabled
                    className="text-white bg-gray-700 hover:bg-gray-800"
                  >
                    GitHub
                  </Button>
                ) : (
                  <Button
                    startContent={<FaGithub />}
                    flat
                    as="a"
                    href={card.github}
                    className="text-white bg-gray-700 hover:bg-gray-800"
                  >
                    GitHub
                  </Button>
                )}
                <Button auto flat as="a" href={card.details} className="text-white bg-gray-700 hover:bg-gray-800">
                  Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
