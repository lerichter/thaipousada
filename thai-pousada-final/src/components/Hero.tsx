import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Supondo que logoThai também esteja na pasta public
import logoThai from '@/images/logos/Logotipo_Thai-03.png';
import image1 from '@/images/photos/itamambuca3.jpg';
import image2 from '@/images/photos/itamambuca2.jpg';
import image3 from '@/images/photos/itamambuca4.jpg';
import image4 from '@/images/photos/itamambuca1.jpg';

const images = [
  {
    id: 1,
    image: image1,
    alt: 'Imagem 1'
  },
  {
    id: 2,
    image: image2,
    alt: 'Imagem 2'
  },
  {
    id: 3,
    image: image3,
    alt: 'Imagem 3'
  },
  {
    id: 4,
    image: image4,
    alt: 'Imagem 4'
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentSlide(slideIndex);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Define um intervalo para mudar para o próximo slide
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Muda a imagem a cada 5 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === currentSlide ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <Image
              src={image.image}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full bg-custom-red ${index === currentSlide ? 'opacity-100' : 'opacity-50'}`}
            aria-current={index === currentSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToPrevSlide} data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-4 h-4 text-custom-red rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
      </button>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 px-4 max-w-xs md:max-w-sm lg:max-w-md">
        <Image src={logoThai} alt="Logo" layout="responsive" width={300} height={150} />
        {/* <p className="mt-6 text-lg text-center text-white bold">O lugar perfeito para quem gosta de se hospedar com estilo, conforto e tranquilidade.</p> */}
      </div>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToNextSlide} data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg className="w-4 h-4 text-custom-red rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}