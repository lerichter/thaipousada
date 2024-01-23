import React from 'react';
import Image from 'next/image';
import { Container } from '../components/Container2';
import { FadeIn, FadeInStagger } from '../components/FadeIn';

// Importe suas imagens
import suite1 from '@/images/photos/image-1.jpg';


// Crie um array de objetos com os dados de cada suíte
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
    image: suite1,
  },
  {
    id: 3,
    title: 'ILHA BELA - MASTER',
    description: 'A suíte master Ilha Bela está localizada no piso superior e possui varanda com vista para o jardim. No interior da suíte possuem duas camas de solteiro e uma cama de casal com uma auxiliar de solteiro embaixo. A suíte é equipada com frigobar, smart TV e ar-condicionado.',
    image: suite1,
  },
  {
    id: 4,
    title: 'ITAMAMBUCA - MASTER',
    description: 'A suíte master Itamambuca está localizada no térreo, com uma varanda aconchegante de uso privativo com vista para o jardim. Na varanda contém rede para descanso, um sofá e uma mesa para refeições e afins. No interior da suíte possuem duas camas de solteiro e uma cama de casal com uma auxiliar de solteiro em baixo. A suíte é equipada com frigobar, smart TV e ar-condicionado.',
    image: suite1,
  },
];

export function Suites() {
  return (
    <div className="rounded-4xl bg-white py-20">
      <Container>
        <h2 className="flex justify-center font-display text-4xl font-semibold tracking-wider text-custom-red">
          Nossas Suítes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 m-10 mt-8 text-xl">
          {suitesData.map((suite) => (
            <div key={suite.id} className="flex flex-col justify-between h-full bg-custom-red p-4 rounded-lg shadow-md">
              <div>
                <div className="w-32 h-32 bg-white p-1 overflow-hidden">
                  <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src={suite1} layout='responsive'/>
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
      </Container>
    </div>
  );
};