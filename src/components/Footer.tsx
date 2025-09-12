import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Youtube,
  FerrisWheel,
  Clock,
  Car,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Wahana", href: "/wahana" },
    { name: "Jadwal Acara", href: "/jadwal" },
    { name: "Galeri", href: "/galeri" },
    { name: "Tentang Kami", href: "/tentang" }
  ];

  const operatingHours = [
    { day: "Senin - Jumat", hours: "10:00 - 22:00 WIB" },
    { day: "Sabtu - Minggu", hours: "09:00 - 23:00 WIB" },
    { day: "Hari Libur", hours: "09:00 - 23:00 WIB" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <FerrisWheel className="h-32 w-32" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-gentle">
          <FerrisWheel className="h-24 w-24" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white p-2 rounded-2xl">
                  <FerrisWheel className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">THR Taman Ria Fair</h3>
                  <p className="text-sm opacity-90">Taman Hiburan Rakyat</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                Memberikan pengalaman hiburan terbaik untuk keluarga Indonesia dengan wahana seru dan acara menarik setiap hari.
              </p>
            </div>
            
            <div className="flex space-x-3">
              <Button size="sm" variant="secondary" className="p-2 hover:scale-110 transition-transform">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary" className="p-2 hover:scale-110 transition-transform">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary" className="p-2 hover:scale-110 transition-transform">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary" className="p-2 hover:scale-110 transition-transform">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Navigasi Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/90 hover:text-white hover:underline transition-all hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Jam Operasional
            </h4>
            <div className="space-y-3">
              {operatingHours.map((schedule) => (
                <div key={schedule.day} className="flex flex-col">
                  <span className="font-semibold text-white">{schedule.day}</span>
                  <span className="text-white/90 text-sm">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-white/80 flex-shrink-0" />
                <div>
                  <p className="text-white/90 leading-relaxed">
                    Jl. Taman Hiburan No. 123<br />
                    Jakarta Selatan, DKI Jakarta<br />
                    Indonesia 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/80" />
                <a href="tel:+621234567890" className="text-white/90 hover:text-white transition-colors">
                  +62 123 4567 890
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/80" />
                <a href="mailto:info@tamanriafair.id" className="text-white/90 hover:text-white transition-colors">
                  info@tamanriafair.id
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Parking Info */}
            <div className="flex items-center gap-3">
              <Car className="h-5 w-5 text-white/80" />
              <div>
                <h5 className="font-semibold text-white">Parkir Gratis</h5>
                <p className="text-sm text-white/90">Area parkir luas tersedia</p>
              </div>
            </div>

            {/* Safety Info */}
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-white/80" />
              <div>
                <h5 className="font-semibold text-white">Keamanan 24/7</h5>
                <p className="text-sm text-white/90">Keamanan terjamin setiap saat</p>
              </div>
            </div>

            {/* Admin Login */}
            <div className="flex justify-center md:justify-end">
              <Button 
                variant="secondary" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold"
              >
                Login Admin
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-white/80">
            © 2024 THR Taman Ria Fair. Semua hak cipta dilindungi. 
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;