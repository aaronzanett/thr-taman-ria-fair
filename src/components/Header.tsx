import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FerrisWheel, Calendar, Camera, Info, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Beranda", href: "/", icon: FerrisWheel },
    { name: "Wahana", href: "/wahana", icon: Ticket },
    { name: "Jadwal Acara", href: "/jadwal", icon: Calendar },
    { name: "Galeri", href: "/galeri", icon: Camera },
    { name: "Tentang Kami", href: "/tentang", icon: Info },
  ];

  return (
    <header className="bg-gradient-primary shadow-fun sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-card p-2 rounded-2xl shadow-float group-hover:animate-bounce-gentle transition-all">
              <FerrisWheel className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-primary-foreground">
                THR Taman Ria Fair
              </h1>
              <p className="text-sm text-primary-foreground/80 font-medium">
                Taman Hiburan Rakyat
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl text-primary-foreground hover:bg-card/20 transition-all hover:shadow-fun hover:scale-105"
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Admin Login Button */}
          <div className="hidden md:block">
            <Button variant="secondary" className="shadow-float hover:shadow-glow">
              Login Admin
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-card/20 text-primary-foreground hover:bg-card/30 transition-all"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <nav className="bg-card rounded-2xl shadow-fun p-4 space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-muted transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-border">
                <Button variant="secondary" className="w-full">
                  Login Admin
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;