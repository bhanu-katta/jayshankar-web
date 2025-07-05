import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndustrialPark from "./pages/IndustrialPark";
import PulpPaper from "./pages/PulpPaper";
import PowerInfrastructure from "./pages/PowerInfrastructure";
import NotFound from "./pages/NotFound";

// Placeholder for Odalarevu RLNG page
function OdalarevuRLNG() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">ODALAREVU RLNG IMPORTS PVT LTD</h1>
      <p className="max-w-2xl text-lg text-gray-700 text-center mb-8">
        RLNG, Fertilizer, and Captive Port projects in Andhra Pradesh. (Full content coming soon!)
      </p>
    </div>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industrial-park" element={<IndustrialPark />} />
          <Route path="/pulp-paper" element={<PulpPaper />} />
          <Route path="/power-infrastructure" element={<PowerInfrastructure />} />
          <Route path="/odalarevu-rlng" element={<OdalarevuRLNG />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
