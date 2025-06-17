import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import OurStory from "./pages/about";
import Plant from "./pages/plant";
import Quality from "./pages/quality";
import Products from "./pages/products";
import Partner from "./pages/partner";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="plant" element={<Plant />} />
            <Route path="quality" element={<Quality />} />
            <Route path="products" element={<Products />} />
            <Route path="partner" element={<Partner />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
