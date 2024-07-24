import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';

const data = [
  {
    title: "Ingeniería en Ciberseguridad - Universidad de Saint Leo",
    status: "En curso",
    description: "Cursando la carrera en Ingeniería de ciberseguridad en modalidad remota.",
    category: 'education',
    archive: null
  },
  {
    title: "Tecnólogo - Instituto Superior Tecnológico España",
    duration: "2021 - 2023",
    description: "Graduado como Tecnólogo en Desarrollo de Software, adquirí habilidades en el desarrollo de aplicaciones web y móviles, gestión de bases de datos, arquitectura de software y conocimientos en la creación de páginas web.",
    category: 'education',
    archive: null
  },
  {
    title: "Bachiller en Ciencias - Unidad Educativa Ambato",
    duration: "2013 - 2020",
    description: "Graduado como Bachiller en Ciencias, desarrollé una sólida base en ciencias naturales y matemáticas, lo que me permitió comprender mejor los fundamentos de la programación y la tecnología.",
    category: 'education',
    archive: null
  },
  {
    title: "Certificación en SQL",
    year: "2023",
    description: "Certificación otorgada por Edutin",
    category: 'certification',
    archive: '/public/certificates/MySQL Edutin.pdf'
  },
  {
    title: "Certificación en Git",
    year: "2022",
    description: "Curso de certificación en control de versiones con Git.",
    category: 'certification',
    archive: null
  }
];

const TimelineSection = ({ events, title }) => (
  <div className="w-full">
    <h2 className="text-4xl font-bold mb-8">{title}</h2>
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {events.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent className='text-gray-400'>
            {item.status || item.duration || item.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {index < events.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <div className="p-4 bg-transparent hover:bg-gray-800 text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
              {item.archive && (
                <p className="mt-2">
                  <a href={item.archive} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Ver Certificado
                  </a>
                </p>
              )}
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </div>
);

const Education = () => {
  const educationEvents = data.filter(item => item.category === 'education');
  const certificationEvents = data.filter(item => item.category === 'certification');

  return (
    <section className="text-white py-16">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TimelineSection events={educationEvents} title="Education" />
          <TimelineSection events={certificationEvents} title="Certifications" />
        </div>
      </div>
    </section>
  );
};

export default Education;
