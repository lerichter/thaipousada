import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '../components/Container2';

import suitejbay1 from '@/images/suites/jbay/suite-jbay1.jpg';
import suitejbay2 from '@/images/suites/jbay/suite-jbay2.jpg';
import suitejbay3 from '@/images/suites/jbay/suite-jbay3.jpg';
import suitejbay4 from '@/images/suites/jbay/suite-jbay4.jpg';

import suitehonolua1 from '@/images/suites/honolua/suite-honolua1.jpg';
import suitehonolua2 from '@/images/suites/honolua/suite-honolua2.jpg';
import suitehonolua3 from '@/images/suites/honolua/suite-honolua3.jpg';
import suitehonolua4 from '@/images/suites/honolua/suite-honolua4.jpg';

import suiteilhabela1 from '@/images/suites/ilhabela/suite-ilhabela1.jpg';
import suiteilhabela2 from '@/images/suites/ilhabela/suite-ilhabela2.jpg';
import suiteilhabela3 from '@/images/suites/ilhabela/suite-ilhabela3.jpg';

import suiterosarito1 from '@/images/suites/rosarito/suite-rosarito1.jpg';
import suiterosarito2 from '@/images/suites/rosarito/suite-rosarito2.jpg';
import suiterosarito3 from '@/images/suites/rosarito/suite-rosarito3.jpg';
import suiterosarito4 from '@/images/suites/rosarito/suite-rosarito4.jpg';

import suitebali1 from '@/images/suites/bali/suite-bali1.png';
import suitebali2 from '@/images/suites/bali/suite-bali2.png';
import suitebali3 from '@/images/suites/bali/suite-bali3.png';
import suitebali4 from '@/images/suites/bali/suite-bali4.png';
import suitebali5 from '@/images/suites/bali/suite-bali5.png';

import suitebuzios1 from '@/images/suites/buzios/suite-buzios1.jpg';
import suitebuzios2 from '@/images/suites/buzios/suite-buzios2.jpg';
import suitebuzios3 from '@/images/suites/buzios/suite-buzios3.jpg';

import suiteitambuca1 from '@/images/suites/itamambuca/suite-itamambuca1.jpg';
import suiteitambuca2 from '@/images/suites/itamambuca/suite-itamambuca2.jpg';
import suiteitambuca3 from '@/images/suites/itamambuca/suite-itamambuca3.jpg';
import suiteitambuca4 from '@/images/suites/itamambuca/suite-itamambuca4.jpg';
import suiteitambuca5 from '@/images/suites/itamambuca/suite-itamambuca5.jpg';

import suiteitacare1 from '@/images/suites/itacare/suite-itacare1.jpg';
import suiteitacare2 from '@/images/suites/itacare/suite-itacare2.jpg';
import suiteitacare3 from '@/images/suites/itacare/suite-itacare3.jpg';
import suiteitacare4 from '@/images/suites/itacare/suite-itacare4.jpg';

interface CurrentImageIndex {
  [key: number]: number; // This tells TypeScript that the object will have number keys and number values.
}

const suitesData = [
  {
    id: 1,
    title: 'JBAY - PREMIUM',
    description: 'A suíte premium Jeffreys Bay está localizada no piso superior, com uma sacada de uso privativo com vista para o jardim. No interior da suíte há uma cama de casal, uma cama de solteiro e uma cama auxiliar de solteiro. A suíte é equipada com frigobar, smart TV e ar-condicionado e também conta com uma cozinha equipada com utensílios, fogão e micro-ondas.',
    images: [
      { src: suitejbay1, alt: 'Descrição da imagem 1' },
      { src: suitejbay2, alt: 'Descrição da imagem 1' },
      { src: suitejbay3, alt: 'Descrição da imagem 1' },
      { src: suitejbay4, alt: 'Descrição da imagem 1' },
    ],
    bookingUrl: 'https://hotels.cloudbeds.com/reservas/bPfQcZ',
  },
  {
    id: 3,
    title: 'HONOLUA - EXECUTIVE',
    description: 'A suíte executive Honolua está localizada no piso superior e possui uma sacada privativa. No interior da suíte há uma cama de casal, frigobar, Smart TV e ar-condicionado.',
    images: [
      { src: suitehonolua1, alt: 'Descrição da imagem 1' },
      { src: suitehonolua2, alt: 'Descrição da imagem 1' },
      { src: suitehonolua3, alt: 'Descrição da imagem 1' },
      { src: suitehonolua4, alt: 'Descrição da imagem 1' },
    ],
    bookingUrl: 'https://hotels.cloudbeds.com/reservas/bPfQcZ',
  },
  {
    id: 5,
    title: 'ILHA BELA - MASTER',
    description: 'A suíte master Ilha Bela está localizada no piso superior, com uma sacada com vista para o jardim. No interior da suíte há uma cama de casal, duas camas de solteiro e uma cama auxiliar de solteiro. A suíte é equipada com frigobar, smart TV e ar-condicionado.',
    images: [
      { src: suiteilhabela1, alt: 'Descrição da imagem 1' },
      { src: suiteilhabela2, alt: 'Descrição da imagem 1' },
      { src: suiteilhabela3, alt: 'Descrição da imagem 1' },
    ],
    bookingUrl: 'https://hotels.cloudbeds.com/reservas/bPfQcZ',
  },
  {
    id: 7,
    title: 'ROSARITO - STANDART',
    description: 'A suíte standard Rosarito está localizada no piso superior e possui uma sacada com vista para o jardim. No interior da suíte há uma cama de casal e uma cama auxiliar de solteiro. A suíte é equipada com  frigobar, Smart TV e ar-condicionado.',
    images: [
      { src: suiterosarito1, alt: 'Descrição da imagem 1' },
      { src: suiterosarito2, alt: 'Descrição da imagem 1' },
      { src: suiterosarito3, alt: 'Descrição da imagem 1' },
      { src: suiterosarito4, alt: 'Descrição da imagem 1' },
    ],
    bookingUrl: 'https://hotels.cloudbeds.com/reservas/bPfQcZ',
  },


  {
    id: 2,
    title: 'BALI - PREMIUM',
    description: 'A suíte premium Bali está localizada no térreo, com uma varanda aconchegante de uso privativo com vista para o jardim. Na varanda há redes para descanso e uma mesa para refeições e afins. No interior da suíte há uma cama de casal, uma cama de solteiro e uma cama auxiliar de solteiro. A suíte é quipada com frigobar, smart TV e ar-condicionado e também conta com uma cozinha equipada com utensílios, fogão e micro-ondas.',
    images: [
      { src: suitebali1, alt: 'Descrição da imagem 1' },
      { src: suitebali2, alt: 'Descrição da imagem 1' },
      { src: suitebali3, alt: 'Descrição da imagem 1' },
      { src: suitebali4, alt: 'Descrição da imagem 1' },
      { src: suitebali5, alt: 'Descrição da imagem 1' },
    ],
    bookingUrl: "https://hotels.cloudbeds.com/reservas/bPfQcZ",
  },  
  {
    id: 4,
    title: 'BUZIOS - EXECUTIVE',
    description: 'A suíte executive Búzios está localizada no térreo, possui uma varanda privativa aconchegante com um sofá para relaxar. No interior da suíte há cama de casal. A suíte é equipada com  frigobar, Smart TV e ar-condicionado.',
    images: [
      { src: suitebuzios1, alt: 'Descrição da imagem 1' },
      { src: suitebuzios2, alt: 'Descrição da imagem 1' },
      { src: suitebuzios3, alt: 'Descrição da imagem 1' },
    ],
    bookingUrl: 'https://hotels.cloudbeds.com/reservas/bPfQcZ',
  },
  {
    id: 6,
    title: 'ITAMAMBUCA - MASTER',
    description: 'A suíte master Itamambuca está localizada no térreo, com uma varanda aconchegante de uso privativo com vista para o jardim. Na varanda há uma rede para descanso, um sofá e uma mesa para refeições e afins. No interior da suíte há uma cama de casal, duas camas de solteiro e uma auxiliar cama de solteiro. A suíte é equipada com frigobar, smart TV e ar-condicionado.',
    images: [
      { src: suiteitambuca1, alt: 'Descrição da imagem 1' },
      { src: suiteitambuca2, alt: 'Descrição da imagem 1' },
      { src: suiteitambuca3, alt: 'Descrição da imagem 1' },
      { src: suiteitambuca4, alt: 'Descrição da imagem 1' },
      { src: suiteitambuca5, alt: 'Descrição da imagem 1' },
    ],
    bookingUrl: 'https://hotels.cloudbeds.com/reservas/bPfQcZ',
  },
  {
    id: 8,
    title: 'ITACARÉ - STANDART',
    description: 'A suíte standard Itacaré está localizada no térreo, com uma varanda aconchegante de uso privativo com vista para o jardim. Na varanda há uma mesa de uso privativo para refeições e afins. No interior da suíte há uma cama de casal e uma cama auxiliar de solteiro. A suíte é equipada com  frigobar, Smart TV e ar-condicionado.',
    images: [
      { src: suiteitacare1, alt: 'Descrição da imagem 1' },
      { src: suiteitacare2, alt: 'Descrição da imagem 1' },
      { src: suiteitacare3, alt: 'Descrição da imagem 1' },
      { src: suiteitacare4, alt: 'Descrição da imagem 1' },
    ],
    bookingUrl: 'https://hotels.cloudbeds.com/reservas/bPfQcZ',
  }
];

export function Suites() {
  const [visibleSuites, setVisibleSuites] = useState(4);
  const [currentImageIndex, setCurrentImageIndex] = useState<CurrentImageIndex>(suitesData.reduce((acc, suite) => ({...acc, [suite.id]: 0}), {}));

  const toggleSuitesVisibility = () => {
    setVisibleSuites(prevVisibleSuites => prevVisibleSuites === 4 ? suitesData.length : 4);
  };

  const goToNextImage = (suiteId: number) => {
    setCurrentImageIndex((prevIndexes: CurrentImageIndex) => {
      const suite = suitesData.find(suite => suite.id === suiteId);
      if (!suite) return prevIndexes; // Handle the case when suite is undefined.
      const newIndex = (prevIndexes[suiteId] + 1) % suite.images.length;
      return {
        ...prevIndexes,
        [suiteId]: newIndex,
      };
    });
  };

  const goToPrevImage = (suiteId: number) => {
    setCurrentImageIndex((prevIndexes: CurrentImageIndex) => {
      const suite = suitesData.find(suite => suite.id === suiteId);
      if (!suite) return prevIndexes; // Handle the case when suite is undefined.
      const totalImages = suite.images.length;
      const newIndex = (prevIndexes[suiteId] - 1 + totalImages) % totalImages;
      return {
        ...prevIndexes,
        [suiteId]: newIndex,
      };
    });
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
                <div className="flex justify-center items-center overflow-hidden relative">
                  <Image className="object-cover object-center" alt={suite.images[currentImageIndex[suite.id]].alt} src={suite.images[currentImageIndex[suite.id]].src} layout='responsive'/>
                  <button onClick={() => goToPrevImage(suite.id)} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none" data-carousel-prev>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                          <svg className="w-4 h-4 text-custom-red rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                          </svg>
                          <span className="sr-only">Previous</span>
                      </span>
                    </button>
                    <button onClick={() => goToNextImage(suite.id)}  type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none" data-carousel-next>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                        <svg className="w-4 h-4 text-custom-red rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                      </span>
                    </button>
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