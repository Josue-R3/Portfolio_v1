import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';

const data = [
  {
    title: "Ingeniería en Ciberseguridad",
    place: 'Universidad de Saint Leo',
    status: "En curso",
    category: 'education',
  },
  {
    title: "Tecnólogo en Desarrollo Web",
    place: 'Instituto Superior Tecnológico España',
    duration: "2021 - 2023",
    category: 'education',
  },
  {
    title: "Bachiller en Ciencias",
    place: 'Unidad Educativa Ambato',
    duration: "2013 - 2020",
    category: 'education',
  },
  {
    title: "Certificación en SQL",
    year: "2023",
    place: "Edutin",
    category: 'certification',
  },
  {
    title: "Certificación en Git",
    year: "2022",
    place: "Edutin.",
    category: 'certification',
  }
];

const TimelineSection = ({ events, title }) => (
  <div className="w-full">
    <h2 className="text-4xl font-bold mb-8 text-center">{title}</h2>
    <Timeline className="timeline-left">
      {events.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            {index < events.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent className="timeline-content-left">
            <div className="p-4 bg-transparent hover:bg-gray-800 text-white rounded-lg shadow-lg">
              <p className="text-gray-400">
                {item.status || item.duration || item.year}
              </p>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2">{item.place}</p>
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
