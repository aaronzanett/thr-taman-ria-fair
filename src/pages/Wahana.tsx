import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Clock, 
  Users, 
  Ruler, 
  ArrowRight,
  Filter,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import rideCarousel from "@/assets/ride-carousel.jpg";
import ridePirateShip from "@/assets/ride-pirate-ship.jpg";
import rideFunhouse from "@/assets/ride-funhouse.jpg";

const Wahana = () => {
  const rides = [
    {
      id: 1,
      name: "Komidi Putar Klasik",
      image: rideCarousel,
      description: "Wahana klasik yang tak lekang waktu dengan kuda-kuda cantik berputar diiringi musik merdu",
      rating: 4.8,
      duration: "5 menit",
      capacity: "32 orang",
      minHeight: "90 cm",
      category: "Keluarga",
      intensity: "Ringan"
    },
    {
      id: 2,
      name: "Kapal Bajak Laut",
      image: ridePirateShip,
      description: "Rasakan sensasi mengayun tinggi seperti bajak laut sejati dengan pemandangan menakjubkan",
      rating: 4.9,
      duration: "8 menit",
      capacity: "24 orang",
      minHeight: "120 cm",
      category: "Menantang",
      intensity: "Sedang"
    },
    {
      id: 3,
      name: "Rumah Cermin Ajaib",
      image: rideFunhouse,
      description: "Jelajahi labirin cermin penuh kejutan dan teka-teki yang akan mengasah logika dan keberanian",
      rating: 4.7,
      duration: "15 menit",
      capacity: "20 orang",
      minHeight: "100 cm",
      category: "Petualangan",
      intensity: "Ringan"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-fun py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-black text-5xl md:text-6xl mb-6">
            Semua Wahana Seru
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Temukan wahana yang cocok untuk semua anggota keluarga, dari yang santai hingga yang menantang adrenalin
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Cari wahana favorit Anda..."
                className="pl-10 py-3 border-2 focus:border-primary"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter Kategori
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rides Grid */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rides.map((ride, index) => (
              <Card 
                key={ride.id}
                className="group hover:shadow-float transition-all duration-300 hover:scale-105 border-0 overflow-hidden shadow-fun animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={ride.image} 
                    alt={ride.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="font-bold text-foreground">{ride.rating}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      {ride.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {ride.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {ride.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{ride.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{ride.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4 text-primary" />
                      <span>{ride.minHeight}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-primary hover:shadow-glow font-bold">
                    Lihat Detail
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wahana;