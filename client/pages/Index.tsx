import {
  ModernNavbar,
  ModernHero,
  ModernServices,
  ModernTestimonials,
  ModernCTA,
  ModernFooter,
} from "../components/BergenFenceComponents";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <ModernNavbar />
      <ModernHero />
      <ModernServices />
      <ModernTestimonials />
      <ModernCTA />
      <ModernFooter />
    </div>
  );
}
