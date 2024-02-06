import { Container } from '../components/Container2'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import Image from 'next/image';

import icone1 from '@/images/coffee.jpg'
import icone2 from '@/images/parking.png'
import icone3 from '@/images/family.png'
import icone4 from '@/images//vacations.png'

const vantagens = [
  {
    icone: icone1,
    texto: "Café da Manhã incluso na diária",
  },
  {
    icone: icone2,
    texto: "Estacionamento Gratuito separado por suíte",
  },
  {
    icone: icone3,
    texto: "Toda nossa estrutura é voltada para conforto de sua família",
  },
  {
    icone: icone4,
    texto: "à 700 metros da Praia de Itamambuca - Ubatuba/SP",
  },
];

export function Vantages() {
  const vantagens = [
    { icone: icone1, texto: "Café da Manhã incluso na diária" },
    { icone: icone2, texto: "Estacionamento Gratuito separado por suíte" },
    { icone: icone3, texto: "Toda nossa estrutura é voltada para conforto de sua família" },
    { icone: icone4, texto: "à 700 metros da Praia de Itamambuca - Ubatuba/SP" },
  ];

  return (
    <div className="rounded-4xl bg-custom-red py-20">
      <Container>
        <h2 className="flex justify-center font-display text-4xl font-bold tracking-wider text-white">
          Nossas Vantagens
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 mt-8 text-xl p-10">
          {vantagens.map((vantagem, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={vantagem.icone} alt={`Ícone ${index + 1}`} width={64} height={64} />
              <p className="mt-4 text-white text-center">{vantagem.texto}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};