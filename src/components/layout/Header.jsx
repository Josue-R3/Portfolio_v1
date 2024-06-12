import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import NavLink from '../content/NavLink';
import { Button } from "@nextui-org/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
    {
        title: 'Home',
        path: '#home',
    },
    {
        title: 'Education',
        path: '#education'
    },
    {
        title: 'Projects',
        path: '#projects'
    },
    {
        title: 'About',
        path: '#about'
    },
    {
        title: 'Contact',
        path: '#contact'
    },
];

export default function Header() {
    const [headerOpen, setHeaderOpen] = useState(false);

    const toggleHeader = () => {
        setHeaderOpen(!headerOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
                    <Image
                        src='/images/logo_v4.png'
                        alt="logo"
                        width={50}
                        height={50}
                    />
                </Link>
                <div className="mobile-menu block md:hidden">
                    <Button
                    variant="bordered"
                        onClick={toggleHeader}
                        className="flex items-center px-3 py-2 rounded border-white bg-[#121212] text-white hover:bg-opacity-80"
                        isIconOnly
                    >
                        {headerOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                    </Button>
                </div>
                <div className={`menu ${headerOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-white">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
