import React from 'react';
import Image from 'next/image';
import { Container } from '../components/Container2';

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import image6 from '@/images/photos/image-3.jpg'
import image7 from '@/images/photos/image-4.jpg'
import image8 from '@/images/photos/image-5.jpg'

// Array de objetos de imagem
const galleryImages = [
  {
    src: image1,
    alt: 'Descrição da imagem 1',
    caption: 'Legenda da imagem 1',
  },
  {
    src: image2,
    alt: 'Descrição da imagem 2',
    caption: 'Legenda da imagem 2',
  },
  {
    src: image3,
    alt: 'Descrição da imagem 3',
    caption: 'Legenda da imagem 3',
  },
  {
    src: image4,
    alt: 'Descrição da imagem 4',
    caption: 'Legenda da imagem 4',
  },
  {
    src: image5,
    alt: 'Descrição da imagem 5',
    caption: 'Legenda da imagem 5',
  },
  {
    src: image6,
    alt: 'Descrição da imagem 6',
    caption: 'Legenda da imagem 6',
  },
  {
    src: image7,
    alt: 'Descrição da imagem 7',
    caption: 'Legenda da imagem 7',
  },
  {
    src: image8,
    alt: 'Descrição da imagem 8',
    caption: 'Legenda da imagem 8',
  },
];

export function Gallery() {
  return (
    <div className="rounded-4xl py-20">
      <Container>
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* ... Código anterior ... */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {galleryImages.map((image, index) => (
                <a key={index} href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                  <Image
                    src={image.src}
                    loading="lazy"
                    alt={image.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{image.caption}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}