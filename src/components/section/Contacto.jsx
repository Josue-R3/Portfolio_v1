import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from 'next/image';
import me from "../../../public/images/me.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleEmailSend = () => {
    console.log("Enviando email con:", formData);
  };

  const handleWhatsAppSend = () => {
    console.log("Enviando WhatsApp con:", formData);
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contáctame</h2>
        <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-2/5 flex flex-col items-center space-y-6">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src={me}
                alt="me"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold text-white">Josue Ricardo Ruiz Rosas</h3>
            <p className="text-gray-200">Desarrollador Web</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
                <FaGithub size={28} />
              </a>
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
                <FaLinkedin size={28} />
              </a>
              <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
                <FaSquareTwitter size={28} />
              </a>
              <a href="mailto:tu@email.com" className="text-white hover:text-blue-200">
                <MdEmail size={28} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                label="Nombre"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white"
              />
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white"
              />
              <Textarea
                name="message"
                label="Mensaje"
                placeholder="Escribe tu mensaje aquí"
                value={formData.message}
                onChange={handleChange}
                required
                minRows={4}
                className="bg-white"
              />
              <div className="flex space-x-4">
                <Button 
                  color="primary" 
                  className="flex-1 h-12"
                  startContent={<MdEmail size={20} />}
                  onClick={handleEmailSend}
                >
                  Enviar Correo
                </Button>
                <Button 
                  color="success" 
                  className="flex-1 h-12"
                  startContent={<FaWhatsapp size={20} />}
                  onClick={handleWhatsAppSend}
                >
                  Enviar WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}