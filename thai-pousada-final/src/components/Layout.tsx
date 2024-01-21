import { About } from '@/components/About'
import { BannerFooter } from '@/components/BannerFooter'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Suites } from '@/components/Suites'
import { Vantages } from '@/components/Vantages'

import Image from 'next/image'
import backgroundImage from '@/images/ita-3-900x480.jpg';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
      <div className="flex w-full max-w-7xl lg:px-8"
        >
          {/* <Image
            src={backgroundImage}
            alt=""
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.5
          }}
          /> */}
          <div className="bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <Hero />
        <About />
        <Suites />
        <Vantages />

        <Footer />
        <BannerFooter />
      </div>
    </>
  )
}
