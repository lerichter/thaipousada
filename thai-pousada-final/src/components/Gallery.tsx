import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '../components/Container2';

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'

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

export function Gallery() {
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
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
       <div className="relative w-[300px] h-[300px] overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === currentSlide ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <Image
              src={image.image}
              layout="fill"
              objectFit="cover"
              className="absolute"
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-1 mt-2">
        {images.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <Image
            key={index}
            src={image.image}
            alt={image.alt}
            className={`w-16 h-16 cursor-pointer border-2 ${index === currentSlide ? 'border-custom-red' : 'border-transparent'}`}
            onClick={() => goToSlide(index)}
          />
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