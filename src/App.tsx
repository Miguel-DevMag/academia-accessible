import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Treinos from "./pages/Treinos";
import Suplementos from "./pages/Suplementos";
import Videos from "./pages/Videos";
import Depoimentos from "./pages/Depoimentos";
import Contato from "./pages/Contato";
import Auth from "./pages/Auth";
import Perfil from "./pages/Perfil";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AccessibilityProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/treinos" element={<Treinos />} />
              <Route path="/suplementos" element={<Suplementos />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/depoimentos" element={<Depoimentos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AccessibilityProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
