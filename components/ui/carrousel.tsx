import { useState, useEffect } from 'react';

interface ImageCarouselProps {
  fileNames: string[];
}

const ImageCarousel = ({ fileNames }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = fileNames.map(fileName => `/waVapeBot/img/${fileName}`);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-[400px] h-[600px] mx-auto overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
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