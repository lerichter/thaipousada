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
    title: 'BALI - PREMIUM',
    description: 'A suíte premium Bali está localizada no térreo, com uma varanda aconchegante de uso privativo com vista para o jardim. Na varanda possui rede para descanso, um sofá e uma mesa para refeições e afins. No interior da suíte possui uma cama de solteiro, uma cama de casal com uma auxiliar de solteiro embaixo, smart TV, ar-condicionado e frigobar. A suíte também conta com uma cozinha equipada com utensílios, fogão e micro-ondas.',
    image: suite1,
  },
  {
    id: 2,
    title: 'JBAY - PREMIUM',
    description: 'A suíte premium Jeffreys Bay está localizada no piso superior, com uma varanda de uso privativo com vista para o jardim. No interior da suíte possui uma cama de solteiro e uma cama de casal com uma auxiliar de solteiro embaixo. Além de Smart TV, ar-condicionado e frigobar, a suíte também possui em seu interior uma cozinha equipada com utensílios, fogão, micro-ondas e liquidificador.',
    image: suite2,
  },
  {
    id: 3,
    title: 'ILHA BELA - MASTER',
    description: 'A suíte master Ilha Bela está localizada no piso superior e possui varanda com vista para o jardim. No interior da suíte possuem duas camas de solteiro e uma cama de casal com uma auxiliar de solteiro embaixo. A suíte é equipada com frigobar, smart TV e ar-condicionado.',
    image: suite3,
  },
  {
    id: 4,
    title: 'ITAMAMBUCA - MASTER',
    description: 'A suíte master Itamambuca está localizada no térreo, com uma varanda aconchegante de uso privativo com vista para o jardim. Na varanda contém rede para descanso, um sofá e uma mesa para refeições e afins. No interior da suíte possuem duas camas de solteiro e uma cama de casal com uma auxiliar de solteiro em baixo. A suíte é equipada com frigobar, smart TV e ar-condicionado.',
    image: suite4,
  },
  {
    id: 5,
    title: 'ITACARÉ - STANDART',
    description: 'A suíte standard Itacaré está localizada no térreo, sua varanda com vista para o jardim possui uma mesa de uso privativo para refeições e afins. No interior da suíte contém uma cama de casal com uma auxiliar de solteiro embaixo.',
    image: suite5,
  },
  {
    id: 6,
    title: 'ROSARITO - STANDART',
    description: 'A suíte standard Rosarito está localizada no piso superior e possui uma varanda com vista para o jardim.No interior da suíte possui uma cama de casal com uma auxiliar de solteiro embaixo. A suíte é equipada com frigobar.',
    image: suite6,
  },
  {
    id: 7,
    title: 'BUZIOS - STANDART',
    description: 'A suíte standard Búzios está localizada no térreo, possui uma varanda privativa aconchegante com um sofá para relaxar. No interior da suíte possui uma cama de casal.',
    image: suite7,
  },
  {
    id: 8,
    title: 'HONOLUA - STANDART',
    description: 'A suíte standard HonoLua está localizada no piso superior e possui uma varanda privativa. No interior da suíte possui uma cama de casal, frigobar, Smart TV e ar-condicionado.',
    image: suite8,
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
              <button className="mt-4 bg-white text-custom-red font-bold py-2 px-6 rounded hover:bg-gray-200 transition-all">
                Reservar
              </button>
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