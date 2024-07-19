import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <section id="home">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-12">
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto sm:ml-0 sm:mr-8">
                        <Image
                            src="/images/avatar_v3.png"
                            alt="me"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                        <span className="text-white">Hola, Soy</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-200 to-cyan-400">
                            <TypeAnimation
                                sequence={[
                                    'Josue Ruiz',
                                    1000,
                                    'Un Frontend Developer',
                                    1000,
                                    'Un Mobile Developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    {/*<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Tecnólogo en Desarrollo de Aplicaciones Web<br />
                        Joven y entusiasta en la búsqueda de soluciones que influyan de manera positiva a las personas y a largo plazo.
                    </p>

                    <div>
                        <Button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-white hover:text-black" variant="ghost">
                            Descargar CV
                        </Button>
                        <Button className="px-6 py-3 w-full sm:w-fit rounded-full bg-white mt-3" variant="ghost">
                            Contactame
                        </Button>
                    </div>*/}
                </div>
            </div>
        </section>
    );
}
