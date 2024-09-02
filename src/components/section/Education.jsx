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
import { Typography, Box } from '@mui/material';

const data = [
  {
    title: "Técnico en Desarrollo de Software",
    place: 'Instituto Superior Tecnológico España',
    status: "En curso",
    category: 'experience',
  },
  {
    title: "Técnico en Soporte Empresarial",
    place: 'PELByte',
    status: "2021 - 2023",
    category: 'experience',
  },
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

const Education = () => {
  const experienceEvents = data.filter(item => item.category === 'experience');
  const educationEvents = data.filter(item => item.category === 'education');
  const certificationEvents = data.filter(item => item.category === 'certification');

  const renderTimelineItems = (events, categoryTitle) => (
    events.map((item, index) => (
      <TimelineItem key={index}>
        {/* Título de la sección como 'OppositeContent' */}
        <TimelineOppositeContent
          sx={{ 
            flex: 0.2, 
            paddingRight: '16px',
            textAlign: 'left', // Alinear a la izquierda
            paddingBottom: '16px', // Añadir espaciado entre items
          }}
        >
          {index === 0 && (
            <Typography variant="h5" fontWeight="bold" sx={{ color: 'white' }}>
              {categoryTitle}
            </Typography>
          )}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          {index < events.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent sx={{ paddingTop: 0, paddingBottom: '16px' }}> {/* Añadir espaciado entre items */}
          <Box className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <Typography variant="body2" className="text-gray-400">
              {item.status || item.duration || item.year}
            </Typography>
            <Typography variant="h6" component="h3" className="text-xl font-semibold">
              {item.title}
            </Typography>
            <Typography variant="body2" className="mt-1">
              {item.place}
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    ))
  );

  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {/* Experiencia */}
      {renderTimelineItems(experienceEvents, 'Experiencia')}

      {/* Educación */}
      {renderTimelineItems(educationEvents, 'Educación')}

      {/* Certificaciones */}
      {renderTimelineItems(certificationEvents, 'Certificaciones')}
    </Timeline>
  );
};

export default Education;
