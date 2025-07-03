import { 
  Navbar, 
  Hero, 
  Services, 
  Testimonials, 
  CTA, 
  Footer 
} from "@/components/bergen-fence";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
