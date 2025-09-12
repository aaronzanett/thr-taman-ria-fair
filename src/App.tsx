import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Wahana from "./pages/Wahana";
import RideDetail from "./pages/RideDetail";
import Jadwal from "./pages/Jadwal";
import Galeri from "./pages/Galeri";
import Tentang from "./pages/Tentang";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wahana" element={<Wahana />} />
          <Route path="/wahana/:id" element={<RideDetail />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/tentang" element={<Tentang />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
