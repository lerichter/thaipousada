"use client"; // This is a client component 👈🏽
import { useState, useEffect} from 'react'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { FloatingButtons } from '@/components/FloatingButtons'
import { Gallery } from '@/components/Gallery'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Suites } from '@/components/Suites'
import { Vantages } from '@/components/Vantages'

import Image from 'next/image'
import backgroundImage from '@/images/photos/itacare-5-480x360.jpg';

export function Layout({ children }: { children: React.ReactNode }) {
  const [pageData, setPageData] = useState(null);

  return (
    <>
      <div className="fixed inset-0 flex justify-center">
        <div className="flex w-full max-w-7xl lg:px-8">

        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <Hero />
        <About />
        <Suites />
        <Vantages />

        <Footer />

        <FloatingButtons pageData={pageData} />
      </div>
    </>
  )
}
