"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from 'react';
import { ChevronsUp } from 'lucide-react';
import Image from 'next/image';
import whatsAppIcon from '@/images/whatsapp-icon.svg';

function WhatsappIcon(whatsappLink) {
  return (
    <>
      {whatsappLink &&
        <a
        href={whatsappLink.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#4aca59] rounded-full h-14 w-14 4xl:w-36 4xl:h-36 flex items-center justify-center shadow-lg hover:bg-[#3e9e4f] transition-all hover:translate-y-[-4px]"
        >
          <Image
            src={whatsAppIcon}
            className='w-10 h-10 4xl:w-20 4xl:h-20'
            alt="Whatsapp"
            width={40}
            height={40}
          />
        </a>
      }
    </>
  )
}

function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="bg-custom-white bg-opacity-50 rounded-full h-14 w-14 md:h-20 md:w-20 lg:h-14 lg:w-14 flex items-center justify-center shadow-lg hover:bg-custom-red transition-all hover:translate-y-[-4px]"
    >
      <ChevronsUp className="text-custom-red hover:text-white h-10 w-10 md:h-14 md:w-14 lg:w-20 lg:h-20" />
    </button>
  );
}

export function FloatingButtons({ pageData }) {
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    if(pageData?.data){
      setWhatsappLink(pageData.data.whatsapp_link[0].text);
    }
  }, [pageData]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4">
      <WhatsappIcon whatsappLink={whatsappLink} />
      <ScrollToTopButton />
    </div>
  );
}