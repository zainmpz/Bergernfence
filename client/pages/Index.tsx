import {
  Header,
  HeroSection,
  PhotoGallery,
  DetailedServices,
  ContactSection,
  Footer,
} from "../components/BergenFenceComponents";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bergen-hero via-bergen-gray-dark to-bergen-gray-dark">
      {/* Main content container - white card centered on colored background */}
      <div className="relative">
        {/* Background wrapper */}
        <div className="absolute inset-0 bg-gradient-to-b from-bergen-hero via-bergen-gray-dark to-bergen-gray-dark"></div>

        {/* Content card */}
        <div className="relative max-w-5xl mx-auto bg-white min-h-screen shadow-2xl">
          <Header />
          <HeroSection />
          <PhotoGallery />
          <DetailedServices />
          <ContactSection />
        </div>
      </div>

      {/* Footer outside the main card */}
      <Footer />
    </div>
  );
}
