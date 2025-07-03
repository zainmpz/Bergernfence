import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fenceImages = [
  "/fences/ac53e5df701c880fd05fcefc4f581c1a.jpeg",
  "/fences/577e9969620c96a20c054c2a5943d049.jpeg",
  "/fences/9273528999de5854828d5042ae62a870.jpeg",
  "/fences/c70c27b96f6e7b999ff25e718f12b16a.jpeg",
  "/fences/ff482e77ad037d3997eb7d456cbef152.jpeg"
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance to next image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % fenceImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % fenceImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + fenceImages.length) % fenceImages.length);
  };
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-white via-modern-gray-50 to-modern-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-modern-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-modern-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggZD0iTTYwIDBIMHY2MCIgc3Ryb2tlPSJyZ2JhKDIwMCwyMDAsMjAwLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBkPSJNMCA2MGg2MFYwIiBzdHJva2U9InJnYmEoMjAwLDIwMCwyMDAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPC9zdmc+')]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-modern-green-100 text-modern-green-700 rounded-full text-sm font-medium mb-6 shadow-sm">
              <span className="mr-2">🏆</span> Trusted Since 1953 • Family Owned & Operated
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-space">
              Premium Fencing Solutions for <span className="text-modern-green-600">Bergen County</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Expert installation, repair, and maintenance of high-quality fences and railings. 
              Serving homeowners and businesses across Bergen County with exceptional craftsmanship 
              and unbeatable customer service.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-modern-green-600 hover:bg-modern-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg transform hover:scale-105"
              >
                <Link to="/quotes">
                  Get Your Free Estimate
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg hover:shadow-md"
              >
                <a href="tel:201-641-2111" className="flex items-center">
                  <span className="mr-2">📞</span> (201) 641-2111
                </a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
              {[
                { value: '70+', label: 'Years Experience' },
                { value: '10,000+', label: 'Projects Completed' },
                { value: 'A+ Rated', label: 'BBB Accredited' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-modern-green-600">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              {/* Main Image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-modern-green-100 to-modern-green-200 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="relative w-full h-full">
                  {fenceImages.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`Fence installation ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {fenceImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 w-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 w-2'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Image attribution or caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm opacity-80">
                    Featured: Custom Vinyl Privacy Fence
                  </div>
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 transform rotate-0 hover:rotate-2 transition-transform">
                <div className="flex items-center">
                  <div className="bg-modern-green-100 p-2 rounded-lg mr-3">
                    <span className="text-modern-green-700 text-xl">🏆</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">#1 Rated</div>
                    <div className="text-xs text-gray-500">In Bergen County</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 transform rotate-0 hover:rotate-2 transition-transform">
                <div className="flex items-center">
                  <div className="bg-modern-green-100 p-2 rounded-lg mr-3">
                    <span className="text-modern-green-700 text-xl">⭐</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">5.0</div>
                    <div className="text-xs text-gray-500">200+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trusted By */}
            <div className="mt-8 text-center lg:text-left">
              <p className="text-sm text-gray-500 mb-3">TRUSTED BY BERGEN COUNTY HOMEOWNERS & BUSINESSES</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-70">
                {['🏠', '🏢', '🏡', '🏘️'].map((icon, i) => (
                  <div key={i} className="text-2xl">{icon}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
