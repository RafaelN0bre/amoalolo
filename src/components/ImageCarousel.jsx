import { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = ["images/colagem.jpg", "images/colagem2.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); 
      }, 200); 
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full md:w-2/5 h-[300px] md:h-full relative overflow-hidden">
      <img
        className={`w-full absolute top-0 rounded-xl h-full object-contain transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        src={images[currentImageIndex]}
        alt={`Carousel ${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default ImageCarousel;
