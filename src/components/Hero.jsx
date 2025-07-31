import { useEffect, useState } from "react";

const bgImages = [
  "https://images.pexels.com/photos/157827/oil-pump-jack-sunset-silhouette-157827.jpeg",
  "https://images.pexels.com/photos/3855965/pexels-photo-3855965.jpeg",
  "https://images.pexels.com/photos/5854199/pexels-photo-5854199.jpeg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const firstImg = new Image();
    firstImg.src = bgImages[0];
    firstImg.onload = () => setIsLoaded(true);
    firstImg.onerror = () => setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // 5 sec
    return () => clearInterval(interval);
  }, [isLoaded]);

  if (!isLoaded) {
    return <div className="h-screen w-full bg-black" />;
  }

  return (
    <div
      className="h-screen w-full bg-cover bg-center transition-all duration-1000 ease-in-out relative"
      style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />

      <div className="relative z-20 h-full w-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-xl">
            Welcome to Akashy Oil Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light drop-shadow">
            Your trusted partner in energy exploration, refining, and delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300">
              Our Services
            </button>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
