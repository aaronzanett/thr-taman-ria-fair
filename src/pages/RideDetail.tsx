import { useParams, Link } from "react-router-dom";
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
  ArrowLeft,
  Heart,
  Zap,
  Shield,
  MapPin,
  Calendar
} from "lucide-react";
import rideCarousel from "@/assets/ride-carousel.jpg";
import ridePirateShip from "@/assets/ride-pirate-ship.jpg";
import rideFunhouse from "@/assets/ride-funhouse.jpg";

const RideDetail = () => {
  const { id } = useParams();

  const rides = [
    {
      id: 1,
      name: "Komidi Putar Klasik",
      image: rideCarousel,
      description: "Wahana klasik yang tak lekang waktu dengan kuda-kuda cantik berputar diiringi musik merdu. Nikmati momen nostalgia bersama keluarga dengan suasana yang penuh kehangatan dan kegembiraan.",
      longDescription: "Komidi Putar Klasik adalah wahana ikonik yang telah menjadi bagian tak terpisahkan dari Taman Ria Fair sejak awal berdirinya. Dengan desain vintage yang memukau dan kuda-kuda kayu yang diukir dengan indah, wahana ini menghadirkan pengalaman magis yang akan membawa Anda kembali ke masa kecil. Diiringi musik klasik yang merdu, setiap putaran akan menciptakan kenangan yang tak terlupakan bersama orang-orang terkasih.",
      rating: 4.8,
      duration: "5 menit",
      capacity: "32 orang",
      minHeight: "90 cm",
      category: "Keluarga",
      intensity: "Ringan",
      tags: ["Ramah Keluarga", "Klasik", "Anak-anak"],
      operatingHours: "09:00 - 22:00 WIB",
      location: "Area Tengah Taman",
      safetyRequirements: [
        "Anak di bawah 120 cm harus didampingi orang dewasa",
        "Tidak diperbolehkan membawa makanan dan minuman",
        "Wajib menggunakan sabuk pengaman",
        "Tidak diperbolehkan berdiri saat wahana beroperasi"
      ]
    },
    {
      id: 2,
      name: "Kapal Bajak Laut",
      image: ridePirateShip,
      description: "Rasakan sensasi mengayun tinggi seperti bajak laut sejati dengan pemandangan menakjubkan dari ketinggian.",
      longDescription: "Kapal Bajak Laut adalah wahana yang akan menguji keberanian Anda dengan ayunan ekstrem hingga ketinggian 25 meter. Rasakan sensasi adrenalin yang memompa jantung saat kapal berayun maju mundur dengan kecepatan tinggi. Pemandangan spektakuler dari puncak ayunan akan memberikan pengalaman yang tak terlupakan, sambil merasakan angin segar yang menerpa wajah.",
      rating: 4.9,
      duration: "8 menit",
      capacity: "24 orang",
      minHeight: "120 cm",
      category: "Menantang",
      intensity: "Sedang",
      tags: ["Menantang", "Pemandangan", "Remaja"],
      operatingHours: "10:00 - 21:30 WIB",
      location: "Area Wahana Ekstrem",
      safetyRequirements: [
        "Tinggi minimum 120 cm",
        "Tidak diperbolehkan untuk ibu hamil",
        "Tidak diperbolehkan bagi penderita penyakit jantung",
        "Wajib menggunakan pengaman bahu dan pinggang"
      ]
    },
    {
      id: 3,
      name: "Rumah Cermin Ajaib",
      image: rideFunhouse,
      description: "Jelajahi labirin cermin penuh kejutan dan teka-teki yang akan mengasah logika dan keberanian.",
      longDescription: "Rumah Cermin Ajaib adalah petualangan misterius yang akan menguji kemampuan navigasi dan keberanian Anda. Dengan lebih dari 100 cermin yang dipasang secara strategis, setiap sudut ruangan akan memberikan ilusi optik yang menakjubkan. Dilengkapi dengan efek suara dan pencahayaan dramatis, wahana ini memberikan pengalaman yang menantang sekaligus menghibur untuk seluruh keluarga.",
      rating: 4.7,
      duration: "15 menit",
      capacity: "20 orang",
      minHeight: "100 cm",
      category: "Petualangan",
      intensity: "Ringan",
      tags: ["Petualangan", "Logika", "Keluarga"],
      operatingHours: "09:30 - 22:30 WIB",
      location: "Area Petualangan",
      safetyRequirements: [
        "Anak di bawah 110 cm harus didampingi orang dewasa",
        "Tidak diperbolehkan berlari di dalam wahana",
        "Wajib mengikuti jalur yang telah ditentukan",
        "Tidak diperbolehkan menyentuh cermin"
      ]
    }
  ];

  const currentRide = rides.find(ride => ride.id === parseInt(id || "1"));
  
  if (!currentRide) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Wahana tidak ditemukan</h1>
          <Button asChild>
            <Link to="/wahana">Kembali ke Wahana</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

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

  const IntensityIcon = getIntensityIcon(currentRide.intensity);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <section className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Beranda</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/wahana" className="text-muted-foreground hover:text-primary">Wahana</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{currentRide.name}</span>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild className="mb-4">
            <Link to="/wahana">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Wahana
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="relative animate-fade-in">
              <img 
                src={currentRide.image} 
                alt={currentRide.name}
                className="w-full h-96 object-cover rounded-3xl shadow-float"
              />
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="font-bold text-foreground">{currentRide.rating}</span>
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <Badge className="bg-gradient-primary text-primary-foreground">
                  {currentRide.category}
                </Badge>
              </div>
              <div className="absolute bottom-6 left-6">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getIntensityColor(currentRide.intensity)}`}>
                  <IntensityIcon className="h-4 w-4" />
                  <span className="font-semibold text-sm">{currentRide.intensity}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-slide-in-up">
              <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-6">
                {currentRide.name}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {currentRide.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {currentRide.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="hover:shadow-fun transition-all"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{currentRide.duration}</p>
                    <p className="text-sm text-muted-foreground">Durasi</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{currentRide.capacity}</p>
                    <p className="text-sm text-muted-foreground">Kapasitas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Ruler className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{currentRide.minHeight}</p>
                    <p className="text-sm text-muted-foreground">Tinggi Minimum</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{currentRide.location}</p>
                    <p className="text-sm text-muted-foreground">Lokasi</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-primary hover:shadow-glow font-bold px-8">
                Kunjungi Wahana Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Description */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-fun">
                <CardContent className="p-8">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                    Tentang Wahana
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {currentRide.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Safety Requirements */}
              <Card className="border-0 shadow-fun mt-8">
                <CardContent className="p-8">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                    Persyaratan Keselamatan
                  </h2>
                  <ul className="space-y-3">
                    {currentRide.safetyRequirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Operating Info */}
            <div>
              <Card className="border-0 shadow-fun">
                <CardContent className="p-8">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                    Informasi Operasional
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Jam Operasional</p>
                        <p className="text-muted-foreground">{currentRide.operatingHours}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Lokasi</p>
                        <p className="text-muted-foreground">{currentRide.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Rating Pengunjung</p>
                        <p className="text-muted-foreground">{currentRide.rating}/5.0</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <Button className="w-full bg-gradient-primary hover:shadow-glow font-bold">
                      Lihat Wahana Lainnya
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RideDetail;