import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import portraitImage from '@/images/pousada3.png'
import logo from '@/images/logos/Logotipo_Thai-02.png'

export const metadata: Metadata = {
  title: 'Sobre nós',
  description:
    'Sobre nós',
}

export function About() {
  return (
    <div className="rounded-4xl bg-custom-white py-20">
      <Container>
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 bg-transparent">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover"
              />
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-custom-red sm:text-5xl">
              SOBRE A THAI
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600">
              <p>
                A Thai Pousada está localizada na Vila de Itamambuca, em Ubatuba – litoral norte de São Paulo, a 700m de umas das mais belas praias do Brasil.
              </p>
              <p>
                Este refúgio de paz e tranquilidade é rodeado de natureza e oferece um escape da rotina e do stress do dia-a-dia. É o lugar perfeito para quem gosta de se hospedar com estilo, conforto e paz!
              </p>
              <p>
                São 8 suítes com TV, Wi-fi, Ar condicionado e Frigobar.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}


