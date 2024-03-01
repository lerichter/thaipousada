import { Container } from '@/components/Container2';

export function BookNow() {
  // Substitua 'https://example.com/reserve' pelo URL real de reserva
  const bookingUrl = "https://hotels.cloudbeds.com/reservas/bPfQcZ";

  return (
    <div className="rounded-4xl bg-custom-white py-10 md:py-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <h2 className="text-xl md:text-3xl font-semibold tracking-wider text-custom-red text-center md:text-left flex-shrink-0">
            RESERVE AGORA
          </h2>
          <div className="w-full bg-custom-red h-0.5 md:flex-auto" />
        </div>
        <p className="mt-6 md:mt-10 text-zinc-600 text-lg md:text-xl text-center md:text-left">
          Venha para a Thai Pousada em Itamambuca! <br></br>
          Praia, natureza, esportes radicais, muito verde, super aconchegante e tranquilo. <br></br> 
          Esperamos por você!
        </p>
        <div className="text-center mt-6 md:mt-10">
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-custom-red text-custom-white font-bold py-2 px-4 md:px-8 rounded hover:bg-red-700 hover:text-white transition-colors duration-300">
              RESERVAR
            </button>
          </a>
        </div>
      </Container>
    </div>
  );
}