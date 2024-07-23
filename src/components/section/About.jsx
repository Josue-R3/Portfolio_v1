// components/About.js
import React, { useTransition, useState } from "react";
import { Button } from "@nextui-org/react";
import Myself from './Myself';
import Skills from './Skills';
import avatar from "../../../public/images/avatar.png";
import Image from "next/image";

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
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">
        <div className="flex justify-center w-full md:w-1/3">
          <Image 
            src={avatar} 
            width={250} 
            height={250} 
            alt="Education"
          />
        </div>
        <div className="text-left flex flex-col h-full w-full md:w-2/3">
          <div className="pl-4">
            <ul className="list-disc pl-2">
              <li>SAINT LEO</li>
              <li>ISTE</li>
              <li>UEA</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">
        <div className="flex justify-center w-full md:w-1/3">
          <Image 
            src={avatar} 
            width={250} 
            height={250} 
            alt="Experience"
          />
        </div>
        <div className="text-left flex flex-col h-full w-full md:w-2/3">
          <div className="pl-4">
            <ul className="list-disc pl-2">
              <li>ISTE</li>
              <li>PELByte</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
];

function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? 'text-background transform rotate-360 bg-white'
    : 'text-[#ADB7BE]';

  return (
    <Button variant="light" color="primary" onClick={selectTab} className={`mx-2 hover:text-white ${buttonClasses}`}>
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

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white">
      <div id="about" className="flex flex-col items-center py-8 px-4 xl:px-16 sm:py-16">
        <h2 className="text-4xl font-bold text-white mb-12">About</h2>
        <div className="flex justify-center w-full mb-8">
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
        <div className="w-full">
          {currentTab.content}
        </div>
      </div>
    </section>
  );
}
