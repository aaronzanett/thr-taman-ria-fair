import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Plus,
  CalendarDays
} from "lucide-react";

const Jadwal = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Festival Musik Keluarga",
      date: "25 Desember 2024",
      time: "16:00 - 22:00 WIB",
      location: "Panggung Utama",
      description: "Konser musik keluarga dengan berbagai artis lokal dan permainan seru untuk semua usia",
      attendees: "500+ peserta",
      category: "Musik",
      status: "Tersedia"
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
      status: "Hampir Penuh"
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
      status: "Tersedia"
    },
    {
      id: 4,
      title: "Workshop Membuat Boneka",
      date: "3 Januari 2025",
      time: "13:00 - 16:00 WIB",
      location: "Ruang Kreatif",
      description: "Belajar membuat boneka dari kain flanel bersama keluarga",
      attendees: "50+ peserta",
      category: "Workshop",
      status: "Tersedia"
    },
    {
      id: 5,
      title: "Pertunjukan Sulap Spektakuler",
      date: "5 Januari 2025",
      time: "15:00 - 17:00 WIB",
      location: "Panggung Utama",
      description: "Pertunjukan sulap menakjubkan yang akan memukau seluruh keluarga",
      attendees: "300+ peserta",
      category: "Pertunjukan",
      status: "Tersedia"
    },
    {
      id: 6,
      title: "Lomba Foto Keluarga Terbaik",
      date: "7 Januari 2025",
      time: "09:00 - 18:00 WIB",
      location: "Seluruh Area Taman",
      description: "Kompetisi fotografi keluarga dengan berbagai kategori dan hadiah jutaan rupiah",
      attendees: "200+ peserta",
      category: "Kompetisi",
      status: "Baru Dibuka"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Tersedia": return "bg-success text-success-foreground";
      case "Hampir Penuh": return "bg-primary text-primary-foreground";
      case "Penuh": return "bg-destructive text-destructive-foreground";
      case "Baru Dibuka": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-sky py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm">
            <CalendarDays className="h-6 w-6" />
            <span className="font-bold text-lg">Jadwal Acara</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl mb-6">
            Acara Mendatang
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Jangan lewatkan berbagai acara seru yang telah kami persiapkan khusus untuk keluarga Indonesia
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id}
                className="group hover:shadow-float transition-all duration-300 hover:scale-[1.02] border-0 overflow-hidden shadow-fun animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Date Card */}
                    <div className="lg:col-span-2">
                      <div className="bg-gradient-primary p-4 rounded-2xl text-center shadow-fun">
                        <div className="text-primary-foreground">
                          <div className="font-bold text-2xl">
                            {event.date.split(' ')[0]}
                          </div>
                          <div className="font-medium text-sm opacity-90">
                            {event.date.split(' ')[1]} {event.date.split(' ')[2]}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Event Content */}
                    <div className="lg:col-span-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-display font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                              {event.title}
                            </h3>
                            <Badge className={getStatusColor(event.status)}>
                              {event.status}
                            </Badge>
                          </div>
                          <Badge variant="secondary" className="mb-3">
                            {event.category}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="font-medium">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="font-medium">{event.attendees}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="lg:col-span-2 flex flex-col gap-3">
                      <Button 
                        className="w-full bg-gradient-primary hover:shadow-glow font-bold group-hover:scale-105 transition-all"
                        disabled={event.status === "Penuh"}
                      >
                        {event.status === "Penuh" ? "Acara Penuh" : "Daftar Sekarang"}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full hover:shadow-fun transition-all"
                        onClick={() => {
                          const startDate = new Date(event.date + " " + event.time.split(" - ")[0]);
                          const endDate = new Date(event.date + " " + event.time.split(" - ")[1]);
                          const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
                          window.open(googleCalendarUrl, '_blank');
                        }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Tambah ke Kalender
                      </Button>
                    </div>
                  </div>
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

export default Jadwal;