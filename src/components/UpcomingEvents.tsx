import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ArrowRight, Star } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Festival Musik Keluarga",
      date: "25 Desember 2024",
      time: "16:00 - 22:00 WIB",
      location: "Panggung Utama",
      description: "Konser musik keluarga dengan berbagai artis lokal dan permainan seru",
      attendees: "500+ peserta",
      category: "Musik",
      featured: true
    },
    {
      id: 2,
      title: "Lomba Mewarnai Anak",
      date: "28 Desember 2024",
      time: "10:00 - 15:00 WIB",
      location: "Area Bermain",
      description: "Kompetisi mewarnai untuk anak-anak usia 5-12 tahun dengan hadiah menarik",
      attendees: "100+ peserta",
      category: "Anak-anak",
      featured: false
    },
    {
      id: 3,
      title: "Perayaan Tahun Baru 2025",
      date: "31 Desember 2024",
      time: "19:00 - 01:00 WIB",
      location: "Seluruh Taman",
      description: "Pesta kembang api spektakuler dan pertunjukan cahaya menakjubkan",
      attendees: "1000+ peserta",
      category: "Perayaan",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-primary px-6 py-3 rounded-full mb-6 shadow-glow">
            <Calendar className="h-5 w-5 text-primary-foreground" />
            <span className="text-primary-foreground font-bold">Acara Mendatang</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-foreground mb-6">
            Jangan Lewatkan
            <span className="text-primary"> Keseruan Berikutnya!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ikuti berbagai acara seru dan menarik yang telah kami persiapkan khusus untuk keluarga Indonesia
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={event.id} 
              className={`group hover:shadow-float transition-all duration-300 hover:scale-105 animate-slide-in-up border-0 overflow-hidden ${
                event.featured 
                  ? "bg-gradient-fun shadow-glow" 
                  : "bg-card shadow-fun"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Event Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    event.featured 
                      ? "bg-white/20 text-white" 
                      : "bg-primary/10 text-primary"
                  }`}>
                    {event.category}
                  </span>
                  {event.featured && (
                    <div className="flex items-center gap-1 text-white/90">
                      <Star className="h-4 w-4 fill-white" />
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  )}
                </div>

                {/* Event Title */}
                <h3 className={`font-display font-bold text-xl mb-3 ${
                  event.featured ? "text-white" : "text-foreground"
                }`}>
                  {event.title}
                </h3>

                {/* Event Description */}
                <p className={`mb-6 leading-relaxed ${
                  event.featured ? "text-white/90" : "text-muted-foreground"
                }`}>
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className={`h-4 w-4 ${
                      event.featured ? "text-white/80" : "text-primary"
                    }`} />
                    <span className={`font-medium ${
                      event.featured ? "text-white" : "text-foreground"
                    }`}>
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className={`h-4 w-4 ${
                      event.featured ? "text-white/80" : "text-primary"
                    }`} />
                    <span className={`font-medium ${
                      event.featured ? "text-white" : "text-foreground"
                    }`}>
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className={`h-4 w-4 ${
                      event.featured ? "text-white/80" : "text-primary"
                    }`} />
                    <span className={`font-medium ${
                      event.featured ? "text-white" : "text-foreground"
                    }`}>
                      {event.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className={`h-4 w-4 ${
                      event.featured ? "text-white/80" : "text-primary"
                    }`} />
                    <span className={`font-medium ${
                      event.featured ? "text-white" : "text-foreground"
                    }`}>
                      {event.attendees}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full group-hover:scale-105 transition-all ${
                    event.featured 
                      ? "bg-white text-primary hover:bg-white/90 font-bold" 
                      : "bg-gradient-primary hover:shadow-glow font-bold"
                  }`}
                >
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-4 text-lg font-bold hover:shadow-fun hover:scale-105 transition-all border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Lihat Semua Acara
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;