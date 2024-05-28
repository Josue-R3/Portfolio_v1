import React from "react";
import Link from 'next/link';
import Image from "next/image";
import NavLink from '../content/NavLink';

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
]

export default function Header() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 " >
            <div className="flex flex-wrap items-center justify-between mx-auto px-4" >
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold" >
                    <Image
                        src='/images/logo_v4.png'
                        alt="logo"
                        width={50}
                        height={50}
                    />
                </Link>
                <div className="menu hidden md:block md:w-auto" id="navbar" >
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0" >
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} ></NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}