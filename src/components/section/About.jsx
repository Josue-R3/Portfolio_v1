// components/About.js
import React, { useState, useTransition } from "react";
import Myself from './Myself';
import Skills from './Skills';
import Education from './Education'; // Importar el componente Education

const TAB_DATA = [
  {
    title: 'Myself',
    id: 'myself',
    content: <Myself />
  },
  {
    title: 'Skills',
    id: 'skills',
    content: <Skills />
  },
  {
    title: 'Education',
    id: 'education',
    content: <Education /> // Usar el componente Education
  },
  {
    title: 'Experience',
    id: 'experience',
    content: <Education /> // Usar el componente Education para experiencia también si es el mismo diseño
  }
];

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
    <section className="text-white py-16">
      <div id="about" className="container mx-auto flex flex-col items-center w-full">
        <div className="flex w-full justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">About</h2>
          <div className="flex justify-center md:justify-end">
            {TAB_DATA.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`m-2 px-4 sm:px-8 py-2 ${
                  tab === tabItem.id ? 'text-white font-semibold border-b border-white' : 'text-gray-500'
                } hover:text-white`}
              >
                {tabItem.title}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full">
            {currentTab.content}
          </div>
        </div>
      </div>
    </section>
  );
}
