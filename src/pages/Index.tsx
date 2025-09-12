import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import UpcomingEvents from "@/components/UpcomingEvents";
import FeaturedRides from "@/components/FeaturedRides";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <UpcomingEvents />
        <FeaturedRides />
      </main>
      <Footer />
    </div>
  );
};

export default Index;