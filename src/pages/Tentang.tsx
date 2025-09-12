import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FerrisWheel, 
  Users, 
  Award, 
  MapPin, 
  Clock, 
  Phone,
  Mail,
  Calendar,
  Star,
  Heart,
  Shield
} from "lucide-react";

const Tentang = () => {
  const stats = [
    { icon: Users, number: "1M+", label: "Pengunjung per Tahun" },
    { icon: FerrisWheel, number: "25+", label: "Wahana Seru" },
    { icon: Award, number: "15+", label: "Penghargaan" },
    { icon: Calendar, number: "10+", label: "Tahun Beroperasi" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Kebahagiaan Keluarga",
      description: "Kami berkomitmen memberikan pengalaman terbaik untuk menciptakan momen kebahagiaan yang tak terlupakan bagi setiap keluarga."
    },
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description: "Keselamatan pengunjung adalah prioritas utama dengan standar keamanan internasional dan perawatan wahana berkala."
    },
    {
      icon: Star,
      title: "Kualitas Terbaik",
      description: "Setiap wahana dan fasilitas dirancang dengan standar kualitas tinggi untuk memberikan pengalaman yang memuaskan."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-fun py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 animate-float">
            <FerrisWheel className="h-24 w-24" />
          </div>
          <div className="absolute bottom-20 right-20 animate-bounce-gentle">
            <FerrisWheel className="h-32 w-32" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm">
            <FerrisWheel className="h-6 w-6" />
            <span className="font-bold text-lg">Tentang Kami</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl mb-6">
            THR Taman Ria Fair
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Taman Hiburan Rakyat terdepan di Indonesia yang telah memberikan kebahagiaan untuk jutaan keluarga
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={stat.label}
                  className="text-center border-0 shadow-fun hover:shadow-float transition-all duration-300 hover:scale-105 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="font-display font-black text-3xl text-foreground mb-2">
                      {stat.number}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="animate-fade-in">
              <h2 className="font-display font-black text-4xl text-foreground mb-6">
                Sejarah <span className="text-primary">Taman Ria Fair</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  THR Taman Ria Fair didirikan pada tahun 2014 dengan visi menjadi taman hiburan keluarga terbaik di Indonesia. Bermula dari sebuah impian untuk memberikan tempat rekreasi yang aman, menyenangkan, dan terjangkau bagi seluruh keluarga Indonesia.
                </p>
                <p>
                  Selama lebih dari 10 tahun beroperasi, kami telah melayani lebih dari 1 juta pengunjung setiap tahunnya dan terus berinovasi menghadirkan wahana-wahana baru yang menantang dan menyenangkan.
                </p>
                <p>
                  Dengan komitmen terhadap keselamatan, kualitas, dan kepuasan pengunjung, THR Taman Ria Fair telah meraih berbagai penghargaan sebagai taman hiburan terbaik dan menjadi destinasi favorit keluarga di Jakarta dan sekitarnya.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative animate-slide-in-up">
              <div className="bg-gradient-primary rounded-3xl h-96 flex items-center justify-center shadow-float">
                <div className="text-center text-white">
                  <FerrisWheel className="h-24 w-24 mx-auto mb-4" />
                  <p className="text-xl font-bold">Foto Sejarah Taman</p>
                  <p className="text-sm opacity-80">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl text-foreground mb-6">
              Nilai-Nilai <span className="text-secondary">Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Prinsip yang memandu setiap langkah kami dalam memberikan pengalaman terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="text-center border-0 shadow-fun hover:shadow-float transition-all duration-300 hover:scale-105 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8">
                    <div className="bg-gradient-sunset w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-4xl text-foreground mb-6">
              Kunjungi <span className="text-accent">Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Kami siap menyambut kedatangan Anda dan keluarga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Location */}
            <Card className="text-center border-0 shadow-fun hover:shadow-float transition-all">
              <CardContent className="p-8">
                <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-4">Lokasi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jl. Taman Hiburan No. 123<br />
                  Jakarta Selatan, DKI Jakarta<br />
                  Indonesia 12345
                </p>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="text-center border-0 shadow-fun hover:shadow-float transition-all">
              <CardContent className="p-8">
                <div className="bg-gradient-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-4">Jam Operasional</h3>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Senin - Jumat:</strong><br />10:00 - 22:00 WIB</p>
                  <p><strong>Sabtu - Minggu:</strong><br />09:00 - 23:00 WIB</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="text-center border-0 shadow-fun hover:shadow-float transition-all">
              <CardContent className="p-8">
                <div className="bg-gradient-sunset w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-4">Kontak</h3>
                <div className="text-muted-foreground space-y-2">
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    +62 123 4567 890
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    info@tamanriafair.id
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16 animate-fade-in">
            <Card className="border-0 shadow-float overflow-hidden">
              <div className="bg-gradient-primary h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-2xl font-bold mb-2">Peta Lokasi</p>
                  <p className="opacity-80">Interactive Map Coming Soon</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tentang;