import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductsCarousel from './components/ProductsCarousel';
import ProjectGallery from './components/ProjectGallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Decorative Paints - Interior
import MapleLuxuryInteriorPage from './pages/MapleLuxuryInteriorPage';
import MapleAntiFungalInteriorPage from './pages/MapleAntiFungalInteriorPage';

// Decorative Paints - Exterior
import AlluraExteriorPage from './pages/AlluraExteriorPage';
import AlluraAntiFungalExteriorPage from './pages/AlluraAntiFungalExteriorPage';

// Enamels
import EnamelsPage from './pages/EnamelsPage';

// Wood Coatings
import WoodvibeStainsPage from './pages/WoodvibeStainsPage';
import WoodvibeClearCoatsPage from './pages/WoodvibeClearCoatsPage';

// Textured Finishes
import InteriorTexturedFinishesPage from './pages/InteriorTexturedFinishesPage';
import ExteriorTexturedFinishesPage from './pages/ExteriorTexturedFinishesPage';
import StuccoPaintPage from './pages/StuccoPaintPage';

// Primer & Putty
import GrippaWashPrimerPage from './pages/GrippaWashPrimerPage';
import GrippaWoodPrimerPage from './pages/GrippaWoodPrimerPage';
import GrippaInteriorPrimerPage from './pages/GrippaInteriorPrimerPage';
import GrippaBarrierCoatingPage from './pages/GrippaBarrierCoatingPage';
import GrippaDampproofPrimerPage from './pages/GrippaDampproofPrimerPage';
import SlikoAcrylicPuttyPage from './pages/SlikoAcrylicPuttyPage';
import SlikoCrackfillPage from './pages/SlikoCrackfillPage';
import WoodvibeWoodPuttyPage from './pages/WoodvibeWoodPuttyPage';

// Thinner
import EpoxyThinnerPage from './pages/EpoxyThinnerPage';
import PuThinnerPage from './pages/PuThinnerPage';
import AllInOneThinnerPage from './pages/AllInOneThinnerPage';

// Protective Coatings
import BondxPuClearCoatPage from './pages/BondxPuClearCoatPage';
import BondxPuTopcoatPage from './pages/BondxPuTopcoatPage';
import ZbondEpoxyMasticPage from './pages/ZbondEpoxyMasticPage';
import ZbondEpoxyPrimerPage from './pages/ZbondEpoxyPrimerPage';

// Marine Protection
import HawkyAntifoulingPage from './pages/HawkyAntifoulingPage';
import HawkyAntiCorrosivePaintPage from './pages/HawkyAntiCorrosivePaintPage';
import HawkyPrimersTopcoatsPage from './pages/HawkyPrimersTopcoatsPage';

// Floor Systems
import StepinFloorCoatingSystemPage from './pages/StepinFloorCoatingSystemPage';

// Waterproofing (Wbond)
import WbondHr500Page from './pages/WbondHr500Page';
import WbondHrClear250Page from './pages/WbondHrClear250Page';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');

    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        const navHeight = 64;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  }, [location.search]);

  return (
    <div className="min-h-screen">
      <Hero />
      <ProductsCarousel />
      <Services />
      <ProjectGallery />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Decorative Paints - Interior */}
          <Route path="/products/maple-luxury-interior" element={<MapleLuxuryInteriorPage />} />
          <Route path="/products/maple-anti-fungal-interior" element={<MapleAntiFungalInteriorPage />} />

          {/* Decorative Paints - Exterior */}
          <Route path="/products/allura-exterior" element={<AlluraExteriorPage />} />
          <Route path="/products/allura-anti-fungal-exterior" element={<AlluraAntiFungalExteriorPage />} />

          {/* Enamels */}
          <Route path="/products/enamels" element={<EnamelsPage />} />

          {/* Wood Coatings */}
          <Route path="/products/woodvibe-stains" element={<WoodvibeStainsPage />} />
          <Route path="/products/woodvibe-clear-coats" element={<WoodvibeClearCoatsPage />} />

          {/* Textured Finishes */}
          <Route path="/products/interior-textured-finishes" element={<InteriorTexturedFinishesPage />} />
          <Route path="/products/exterior-textured-finishes" element={<ExteriorTexturedFinishesPage />} />
          <Route path="/products/stucco-paint" element={<StuccoPaintPage />} />

          {/* Primer & Putty */}
          <Route path="/products/grippa-2k-wash-primer" element={<GrippaWashPrimerPage />} />
          <Route path="/products/grippa-2k-wood-primer" element={<GrippaWoodPrimerPage />} />
          <Route path="/products/grippa-interior-primer" element={<GrippaInteriorPrimerPage />} />
          <Route path="/products/grippa-barrier-coating" element={<GrippaBarrierCoatingPage />} />
          <Route path="/products/grippa-dampproof-primer" element={<GrippaDampproofPrimerPage />} />
          <Route path="/products/sliko-acrylic-putty" element={<SlikoAcrylicPuttyPage />} />
          <Route path="/products/sliko-crackfill" element={<SlikoCrackfillPage />} />
          <Route path="/products/woodvibe-wood-putty" element={<WoodvibeWoodPuttyPage />} />

          {/* Thinner */}
          <Route path="/products/epoxy-thinner" element={<EpoxyThinnerPage />} />
          <Route path="/products/pu-thinner" element={<PuThinnerPage />} />
          <Route path="/products/all-in-one-thinner" element={<AllInOneThinnerPage />} />

          {/* Protective Coatings */}
          <Route path="/products/bondx-pu-clear-coat" element={<BondxPuClearCoatPage />} />
          <Route path="/products/bondx-pu-topcoat" element={<BondxPuTopcoatPage />} />
          <Route path="/products/zbond-epoxy-mastic" element={<ZbondEpoxyMasticPage />} />
          <Route path="/products/zbond-epoxy-primer" element={<ZbondEpoxyPrimerPage />} />

          {/* Marine Protection */}
          <Route path="/products/hawky-antifouling" element={<HawkyAntifoulingPage />} />
          <Route path="/products/hawky-anti-corrosive-paint" element={<HawkyAntiCorrosivePaintPage />} />
          <Route path="/products/hawky-primers-topcoats" element={<HawkyPrimersTopcoatsPage />} />

          {/* Floor Systems */}
          <Route path="/products/stepin-floor-coating-system" element={<StepinFloorCoatingSystemPage />} />

          {/* Waterproofing */}
          <Route path="/products/wbond-hr500" element={<WbondHr500Page />} />
          <Route path="/products/wbond-hr-clear250" element={<WbondHrClear250Page />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
