import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Calendar, 
  MapPin, 
  Eye,
  Download,
  Heart,
  Share2
} from "lucide-react";

const Galeri = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Festival Musik Keluarga 2024",
      date: "15 Desember 2024",
      location: "Panggung Utama",
      type: "Foto",
      images: 25,
      views: "1,234",
      category: "Acara"
    },
    {
      id: 2,
      title: "Wahana Roller Coaster Terbaru",
      date: "10 Desember 2024", 
      location: "Area Wahana Ekstrem",
      type: "Video",
      images: 1,
      views: "2,567",
      category: "Wahana"
    },
    {
      id: 3,
      title: "Lomba Mewarnai Anak-Anak",
      date: "5 Desember 2024",
      location: "Area Bermain",
      type: "Foto",
      images: 18,
      views: "890",
      category: "Kompetisi"
    },
    {
      id: 4,
      title: "Perayaan HUT Taman Ria",
      date: "1 Desember 2024",
      location: "Seluruh Area",
      type: "Foto",
      images: 42,
      views: "3,456",
      category: "Perayaan"
    },
    {
      id: 5,
      title: "Pertunjukan Kembang Api",
      date: "25 November 2024",
      location: "Area Terbuka",
      type: "Video",
      images: 3,
      views: "4,789",
      category: "Pertunjukan"
    },
    {
      id: 6,
      title: "Workshop Kerajinan Keluarga",
      date: "20 November 2024",
      location: "Ruang Kreatif",
      type: "Foto",
      images: 16,
      views: "567",
      category: "Workshop"
    }
  ];

  const categories = ["Semua", "Acara", "Wahana", "Kompetisi", "Perayaan", "Pertunjukan", "Workshop"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-sunset py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm">
            <Camera className="h-6 w-6" />
            <span className="font-bold text-lg">Galeri</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl mb-6">
            Momen Berharga Kami
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Saksikan kembali berbagai momen kebahagiaan dan keseruan yang telah tercipta di Taman Ria Fair
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-full font-medium transition-all hover:scale-105 ${
                  index === 0 
                    ? "bg-gradient-primary shadow-glow" 
                    : "hover:shadow-fun"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-br from-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card 
                key={item.id}
                className="group hover:shadow-float transition-all duration-500 hover:scale-105 border-0 overflow-hidden shadow-fun animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-primary overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Camera className="h-12 w-12 mx-auto mb-2 opacity-80" />
                      <p className="font-semibold">{item.images} {item.type}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button size="sm" variant="secondary" className="rounded-full shadow-glow">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full shadow-glow">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full shadow-glow">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary font-bold">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      {item.type}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-primary" />
                      <span>{item.views} dilihat</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-primary hover:shadow-glow font-bold group-hover:scale-105 transition-all">
                      <Eye className="mr-2 h-4 w-4" />
                      Lihat
                    </Button>
                    <Button variant="outline" size="sm" className="px-3 hover:shadow-fun">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="px-12 py-4 text-lg font-bold hover:shadow-fun hover:scale-105 transition-all border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Muat Lebih Banyak
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galeri;