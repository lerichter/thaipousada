import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '../components/Container2';

// Importações diretas das imagens
import image1 from '@/images/photos/image-1.jpg';
import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/image-3.jpg';
import image4 from '@/images/photos/image-4.jpg';
import image5 from '@/images/photos/image-2.jpg';
import image6 from '@/images/photos/image-3.jpg';
import image7 from '@/images/photos/image-4.jpg';
import image8 from '@/images/photos/image-4.jpg';

const images = [
  { id: 1, src: image1, alt: 'Imagem 1' },
  { id: 2, src: image2, alt: 'Imagem 2' },
  { id: 3, src: image3, alt: 'Imagem 3' },
  { id: 4, src: image4, alt: 'Imagem 4' },
  { id: 5, src: image5, alt: 'Imagem 5' },
  { id: 6, src: image6, alt: 'Imagem 6' },
  { id: 7, src: image7, alt: 'Imagem 7' },
  { id: 8, src: image8, alt: 'Imagem 8' },
];

export function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <Container>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          {images.map((image, index) => (
            <div key={image.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-2 p-4">
          {images.map((_, index) => (
            <button key={index} aria-label={`Go to slide ${index + 1}`} className={`w-4 h-4 rounded-full ${index === currentSlide ? 'bg-red-500' : 'bg-white'}`} onClick={() => goToSlide(index)} />
          ))}
        </div>
      </Container>
    </div>
  );
}