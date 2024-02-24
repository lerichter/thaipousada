import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '../components/Container2';

import suite1 from '@/images/suites/bali.jpg';
import suite2 from '@/images/suites/jbay.jpg';
import suite3 from '@/images/suites/ilha-bela.jpg';
import suite4 from '@/images/suites/itamambuca.jpg';

import suite5 from '@/images/suites/itacare.jpg';
import suite6 from '@/images/suites/rosarito.jpg';
import suite7 from '@/images/suites/buzios.jpg';
import suite8 from '@/images/suites/honolua.jpg';

const suitesData = [
  {
    id: 1,
    title: 'JBAY - PREMIUM',
    description: 'A suíte premium Jeffreys Bay está localizada no piso superior, com uma sacada de uso privativo com vista para o jardim. No interior da suíte há uma cama de casal, uma cama de solteiro e uma cama auxiliar de solteiro. A suíte é quipada com frigobar, smart TV e ar-condicionado e também conta com uma cozinha equipada com utensílios, fogão e micro-ondas.',
    image: suite2,
    bookingUrl: 'https://api.whatsapp.com/send?phone=+55(12)99143-0148&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+consultar+a+disponibilidade+da+su%C3%ADte+JBay.+',
  },
  {
    id: 3,
    title: 'HONOLUA - EXECUTIVE',
    description: 'A suíte standard HonoLua está localizada no piso superior e possui uma sacada privativa. No interior da suíte há uma cama de casal, frigobar, Smart TV e ar-condicionado.',
    image: suite8,
    bookingUrl: 'https://api.whatsapp.com/send?phone=+55(12)99143-0148&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+consultar+a+disponibilidade+da+su%C3%ADte+Honolua.+',
  },
  {
    id: 5,
    title: 'ILHA BELA - MASTER',
    description: 'A suíte master Ilha Bela está localizada no piso superior, com uma sacada com vista para o jardim. No interior da suíte há uma cama de casal, duas camas de solteiro e uma cama auxiliar de solteiro. A suíte é equipada com frigobar, smart TV e ar-condicionado.',
    image: suite3,
    bookingUrl: 'https://api.whatsapp.com/send?phone=+55(12)99143-0148&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+consultar+a+disponibilidade+da+su%C3%ADte+Ilha+Bela.+',
  },
  {
    id: 7,
    title: 'ROSARITO - STANDART',
    description: 'A suíte standard Rosarito está localizada no piso superior e possui uma sacada com vista para o jardim. No interior da suíte há uma cama de casal e uma cama auxiliar de solteiro. A suíte é equipada com  frigobar, Smart TV e ar-condicionado.',
    image: suite6,
    bookingUrl: 'https://api.whatsapp.com/send?phone=+55(12)99143-0148&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+consultar+a+disponibilidade+da+su%C3%ADte+Rosarito.+',
  },


  {
    id: 2,
    title: 'BALI - PREMIUM',
    description: 'A suíte premium Bali está localizada no térreo, com uma varanda aconchegante de uso privativo com vista para o jardim. Na varanda há redes para descanso e uma mesa para refeições e afins. No interior da suíte há uma cama de casal, uma cama de solteiro e uma cama auxiliar de solteiro. A suíte é quipada com frigobar, smart TV e ar-condicionado e também conta com uma cozinha equipada com utensílios, fogão e micro-ondas.',
    image: suite1,
    bookingUrl: 'https://api.whatsapp.com/send?phone=+55(12)99143-0148&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+consultar+a+disponibilidade+da+su%C3%ADte+Bali.+',
  },  
  {
    id: 4,
    title: 'BUZIOS - EXECUTIVE',
    description: 'A suíte standard Búzios está localizada no térreo, possui uma varanda privativa aconchegante com um sofá para relaxar. No interior da suíte há cama de casal. A suíte é equipada com  frigobar, Smart TV e ar-condicionado.',
    image: suite7,
    bookingUrl: 'https://api.whatsapp.com/send?phone=+55(12)99143-0148&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+consultar+a+disponibilidade+da+su%C3%ADte+Buzios.+',
  },
  {
    id: 6,
    title: 'ITAMAMBUCA - MASTER',
    description: 'A suíte master Itamambuca está localizada no térreo, com uma varanda aconchegante de uso privativo com vista para o jardim. Na varanda há uma rede para descanso, um sofá e uma mesa para refeições e afins. No interior da suíte há uma cama de casal, duas camas de solteiro e uma auxiliar cama de solteiro. A suíte é equipada com frigobar, smart TV e ar-condicionado.',
    image: suite4,
    bookingUrl: 'https://api.whatsapp.com/send?phone=+55(12)99143-0148&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+consultar+a+disponibilidade+da+su%C3%ADte+Itamambuca.+',
  },
  {
    id: 8,
    title: 'ITACARÉ - STANDART',
    description: 'A suíte standard Itacaré está localizada no térreo, com uma varanda aconchegante de uso privativo com vista para o jardim. Na varanda há uma mesa de uso privativo para refeições e afins. No interior da suíte há uma cama de casal e uma cama auxiliar de solteiro. A suíte é equipada com  frigobar, Smart TV e ar-condicionado.',
    image: suite5,
    bookingUrl: 'https://api.whatsapp.com/send?phone=+55(12)99143-0148&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+consultar+a+disponibilidade+da+su%C3%ADte+Itacaré.+',
  },  
];

export function Suites() {
    const [visibleSuites, setVisibleSuites] = useState(4);

    const toggleSuitesVisibility = () => {
      setVisibleSuites(prevVisibleSuites => prevVisibleSuites === 4 ? suitesData.length : 4);
    };

  return (
    <div className="rounded-4xl bg-white py-20">
      <Container>
        <h2 className="flex justify-center font-display text-4xl font-bold tracking-wider text-custom-red">
          Nossas Suítes 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 m-10 mt-8 text-xl">
        {suitesData.slice(0, visibleSuites).map((suite) => (
          <div key={suite.id} className="flex flex-col justify-between h-full bg-custom-red p-4 rounded-lg shadow-md">
            <div>
              <div className="flex justify-center items-center overflow-hidden">
                <Image className="object-cover object-center" alt={suite.title} src={suite.image} layout='responsive'/>
              </div>
              <h1 className="mt-4 text-lg text-black font-semibold">{suite.title}</h1>
              <p className="text-white mt-2 text-xs">{suite.description}</p>
            </div>
            <div className="flex justify-center mt-4">
              <a href={suite.bookingUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-custom-red font-bold py-2 px-6 rounded hover:bg-gray-200 transition-all">
                  Reservar
                </button>
              </a>
            </div>
          </div>
        ))}
        </div>
        <div className="flex justify-center mt-6">
          <button 
            onClick={toggleSuitesVisibility} 
            className="bg-custom-red text-white font-bold py-2 px-6 rounded hover:bg-red-700 transition-all"
          >
            {visibleSuites === 4 ? 'Ver mais' : 'Ver menos'}
          </button>
        </div>
      </Container>
    </div>
  );
};