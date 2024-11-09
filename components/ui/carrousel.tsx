"use client";

import { useEffect, useState } from 'react';

interface ImageCarouselProps {
  fileNames: string[];
}

const ImageCarousel = ({ fileNames }: ImageCarouselProps) => {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = fileNames.map(fileName => `/waVapeBot/img/${fileName}`);

  // Only start carousel after component mounts on client
  useEffect(() => {
    setMounted(true);
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Show first image during SSG, prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative w-[400px] h-[600px] overflow-hidden">
        <img
          src={images[0]}
          alt="Demo WhatsApp 1"
          className="absolute top-0 left-0 min-w-[400px] min-h-[600px] object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div className="relative w-[400px] h-[600px] overflow-hidden">
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Demo WhatsApp ${index + 1}`}
          className={`
            absolute top-0 left-0
            min-w-[400px] min-h-[600px]
            object-cover object-center
            transition-all duration-500 ease-in-out
            ${currentIndex === index ? 
              'opacity-100 translate-x-0' : 
              'opacity-0 translate-x-full'
            }
          `}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;