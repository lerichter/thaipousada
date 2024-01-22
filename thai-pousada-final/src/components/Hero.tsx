import Image from 'next/image'
// Importação de outros componentes, se necessário

import hero from '@/images/photos/itamambuca4.jpg' //2 ou 3 .. escolher
import logoThai from '@/images/photos/logo-thai.png'

export function Hero() {
  return (
    <div className="w-screen h-screen text-white">
      <div className="relative h-screen w-full">
        <Image src={hero} alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Logo Thai Image */}
          <Image src={logoThai} alt="Thai Pousada Logo" className="w-auto h-32" />
          <p className="mt-6 text-lg text-center text-white bold">O lugar perfeito para quem gosta de se hospedar com estilo, conforto e tranquilidade.</p>
        </div>
      </div>
      {/* <Photos /> */}
    </div>
  );
}

//  export function Hero() {
//   return (
//     <><Container className="mt-9">
//       <div className="max-w-4xl">
//         <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
//           Thai Pousada - Itamambuca
//         </h1>
//         <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
//           Inspirada na arquitetura do Sudeste da Ásia, a Thai Suítes possui oito suítes decoradas com muito charme e exclusividade.
//           <br></br> É o lugar perfeito para quem gosta se hospedar com estilo, conforto e tranquilidade.

//         </p>
//       </div>
//     </Container><Photos /></>
//   );
//  }