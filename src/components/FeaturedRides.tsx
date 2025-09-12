import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Star, 
  Clock, 
  Users, 
  Ruler, 
  ArrowRight, 
  Heart,
  Zap,
  Shield
} from "lucide-react";
import rideCarousel from "@/assets/ride-carousel.jpg";
import ridePirateShip from "@/assets/ride-pirate-ship.jpg";
import rideFunhouse from "@/assets/ride-funhouse.jpg";

const FeaturedRides = () => {
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
      tags: ["Ramah Keluarga", "Klasik", "Anak-anak"],
      intensity: "Ringan",
      featured: true
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
      tags: ["Menantang", "Pemandangan", "Remaja"],
      intensity: "Sedang",
      featured: false
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
      tags: ["Petualangan", "Logika", "Keluarga"],
      intensity: "Ringan",
      featured: false
    }
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Ringan": return "bg-success text-success-foreground";
      case "Sedang": return "bg-primary text-primary-foreground";
      case "Tinggi": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getIntensityIcon = (intensity: string) => {
    switch (intensity) {
      case "Ringan": return Heart;
      case "Sedang": return Zap;
      case "Tinggi": return Shield;
      default: return Heart;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-sunset px-6 py-3 rounded-full mb-6 shadow-glow">
            <Star className="h-5 w-5 text-white fill-white" />
            <span className="text-white font-bold">Wahana Populer</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-foreground mb-6">
            Wahana Terfavorit
            <span className="text-secondary"> Pengunjung</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nikmati pengalaman tak terlupakan dengan wahana-wahana pilihan terbaik yang telah disukai ribuan pengunjung
          </p>
        </div>

        {/* Rides Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rides.map((ride, index) => {
            const IntensityIcon = getIntensityIcon(ride.intensity);
            return (
              <Card 
                key={ride.id} 
                className={`group hover:shadow-float transition-all duration-500 hover:scale-105 animate-slide-in-up border-0 overflow-hidden ${
                  ride.featured 
                    ? "shadow-glow ring-2 ring-primary/30" 
                    : "shadow-fun"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={ride.image} 
                    alt={ride.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="font-bold text-foreground">{ride.rating}</span>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {ride.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-primary text-primary-foreground font-bold shadow-glow animate-pulse-glow">
                        Terpopuler
                      </Badge>
                    </div>
                  )}

                  {/* Intensity Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getIntensityColor(ride.intensity)}`}>
                      <IntensityIcon className="h-4 w-4" />
                      <span className="font-semibold text-sm">{ride.intensity}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Ride Name */}
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {ride.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {ride.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ride.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs hover:shadow-fun transition-all"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Ride Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">{ride.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">{ride.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">{ride.minHeight}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    asChild
                    className={`w-full group-hover:scale-105 transition-all font-bold ${
                      ride.featured 
                        ? "bg-gradient-primary hover:shadow-glow" 
                        : "bg-gradient-sky hover:shadow-float"
                    }`}
                  >
                    <Link to={`/wahana#ride-${ride.id}`}>
                      Lihat Detail Wahana
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-fun hover:shadow-glow px-12 py-4 text-lg font-bold hover:scale-105 transition-all"
          >
            <Link to="/wahana">
              Jelajahi Semua Wahana
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRides;