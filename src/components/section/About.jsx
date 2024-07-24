// components/About.js
import React, { useState, useTransition } from "react";
import { Divider } from "@nextui-org/react";
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
          <div className="md:pl-4">
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
          <div className="md:pl-4">
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
      <div id="about" className="container mx-auto flex flex-col items-center">
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
        <div className="w-full">
          <div className="w-full">
            {currentTab.content}
          </div>
        </div>
      </div>
    </section>
  );
}
