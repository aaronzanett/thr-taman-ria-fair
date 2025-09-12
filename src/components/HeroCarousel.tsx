import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, PlayCircle, Star } from "lucide-react";
import heroRollerCoaster from "@/assets/hero-roller-coaster.jpg";
import heroFerrisWheel from "@/assets/hero-ferris-wheel.jpg";
import heroBumperCars from "@/assets/hero-bumper-cars.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroRollerCoaster,
      title: "Roller Coaster Terbesar!",
      subtitle: "Rasakan sensasi kecepatan dan ketinggian yang mendebarkan",
      cta: "Coba Sekarang",
      badge: "Wahana Terpopuler"
    },
    {
      image: heroFerrisWheel,
      title: "Bianglala Raksasa",
      subtitle: "Nikmati pemandangan kota dari ketinggian 50 meter",
      cta: "Naik Bianglala",
      badge: "Pemandangan Terbaik"
    },
    {
      image: heroBumperCars,
      title: "Bumper Car Seru!",
      subtitle: "Berkendara dan bertabrakan dengan aman bersama keluarga",
      cta: "Main Sekarang",
      badge: "Ramah Keluarga"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl animate-slide-in-up">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full mb-6 shadow-glow animate-pulse-glow">
                    <Star className="h-4 w-4 text-primary-foreground" />
                    <span className="text-primary-foreground font-semibold">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="font-display font-black text-5xl md:text-7xl text-white mb-6 leading-tight animate-fade-in">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium leading-relaxed animate-fade-in delay-200">
                    {slide.subtitle}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-400">
                    <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4 rounded-2xl shadow-fun hover:scale-105 transition-all font-bold">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      {slide.cta}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4 rounded-2xl backdrop-blur-sm font-bold"
                    >
                      Lihat Semua Wahana
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all hover:scale-110 shadow-fun"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all hover:scale-110 shadow-fun"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white shadow-glow scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce-gentle">
        <div className="text-white text-center">
          <div className="text-sm mb-2 font-medium">Scroll untuk melihat lebih</div>
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
            <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;