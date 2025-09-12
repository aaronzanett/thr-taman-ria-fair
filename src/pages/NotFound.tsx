import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FerrisWheel, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-fun relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-float">
          <FerrisWheel className="h-32 w-32 text-white" />
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce-gentle">
          <FerrisWheel className="h-24 w-24 text-white" />
        </div>
        <div className="absolute top-1/2 left-10 animate-float">
          <FerrisWheel className="h-16 w-16 text-white" />
        </div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-4 animate-fade-in">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-display font-black text-8xl md:text-9xl text-white mb-4 animate-pulse-glow">
            404
          </h1>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-flex items-center gap-3 shadow-glow">
            <FerrisWheel className="h-6 w-6 text-white animate-spin" />
            <span className="text-white font-bold text-lg">Halaman Tidak Ditemukan</span>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Oops! Wahana Ini Sedang Maintenance
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Sepertinya halaman yang Anda cari sedang dalam perbaikan atau tidak tersedia. 
            Mari kembali ke area yang aman dan nikmati wahana lainnya!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            size="lg" 
            className="bg-white hover:bg-white/90 text-primary font-bold px-8 py-4 text-lg shadow-glow hover:scale-105 transition-all"
          >
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Kembali ke Beranda
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="text-white border-white/50 hover:bg-white/10 backdrop-blur-sm font-bold px-8 py-4 text-lg hover:scale-105 transition-all"
            onClick={() => window.history.back()}
          >
            <button>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Halaman Sebelumnya
            </button>
          </Button>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/80 mb-4 font-medium">Atau jelajahi area lainnya:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link to="/wahana">Wahana</Link>
            </Button>
            <Button asChild variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link to="/jadwal">Jadwal Acara</Link>
            </Button>
            <Button asChild variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link to="/galeri">Galeri</Link>
            </Button>
            <Button asChild variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link to="/tentang">Tentang Kami</Link>
            </Button>
          </div>
        </div>

        {/* Error Details (for debugging) */}
        <div className="mt-8 text-xs text-white/60">
          Halaman yang dicari: <code className="bg-white/10 px-2 py-1 rounded">{location.pathname}</code>
        </div>
      </div>
    </div>
  );
};

export default NotFound;