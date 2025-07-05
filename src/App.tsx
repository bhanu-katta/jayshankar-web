import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndustrialPark from "./pages/IndustrialPark";
import PulpPaper from "./pages/PulpPaper";
import PowerInfrastructure from "./pages/PowerInfrastructure";
import OdalarevuRLNG from "./pages/OdalarevuRLNG";
import NotFound from "./pages/NotFound";

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
