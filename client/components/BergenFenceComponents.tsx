import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";

export function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-white shadow-md' 
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-modern-green-600 to-modern-green-800 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                BF
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 font-space">
                  Bergen Fence
                </h1>
                <p className="text-sm text-modern-green-600 font-medium">
                  Since 1953
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-modern-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact CTA - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <a 
                  href="tel:201-641-2111" 
                  className="text-lg font-semibold text-gray-900 hover:text-modern-green-600 transition-colors"
                >
                  201-641-2111
                </a>
                <p className="text-sm text-modern-green-600">Free Estimates</p>
              </div>
              <Button 
                asChild
                className="bg-modern-green-600 hover:bg-modern-green-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 transform"
              >
                <Link to="#contact">
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-modern-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-modern-green-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-modern-green-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 border-t border-gray-200">
            <a
              href="tel:201-641-2111"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-modern-green-600"
            >
              <span className="font-semibold">Call Us:</span> 201-641-2111
            </a>
            <Button
              asChild
              className="w-full mt-3 bg-modern-green-600 hover:bg-modern-green-700 text-white py-2.5 rounded-lg font-medium shadow-lg"
            >
              <Link to="#contact" onClick={() => setIsOpen(false)}>
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function ModernHero() {
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
                size="lg"
                className="bg-modern-green-600 hover:bg-modern-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg transform hover:scale-105"
              >
                Get Your Free Estimate
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg hover:shadow-md"
              >
                <span className="mr-2">📞</span> (201) 641-2111
              </Button>
            </div>

            {/* Trust Indicators */}
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-modern-green-700 opacity-20">
                    🏡
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

export function ModernServices() {
  const services = [
    {
      title: "Vinyl & PVC Fencing",
      description:
        "Beautiful, durable, and virtually maintenance-free fencing solutions that enhance privacy and curb appeal while standing up to the elements.",
      icon: "🏡",
      popular: true,
      features: [
        "20+ year lifespan",
        "No painting or staining",
        "Weather resistant",
        "Custom colors & styles"
      ]
    },
    {
      title: "Aluminum Fencing",
      description:
        "Elegant and durable fencing that combines strength with sophisticated design, perfect for pools and decorative boundaries.",
      icon: "✨",
      popular: false,
      features: [
        "Rust-proof & weather resistant",
        "Low maintenance",
        "Decorative options",
        "Great for slopes"
      ]
    },
    {
      title: "Wood Fencing",
      description:
        "Classic, natural fencing that provides privacy and enhances the beauty of any property with timeless appeal.",
      icon: "🌲",
      popular: true,
      features: [
        "Natural beauty",
        "Custom designs",
        "Various wood types",
        "Stain or paint options"
      ]
    },
    {
      title: "Commercial Fencing",
      description:
        "Secure, durable fencing solutions designed to protect your business property while maintaining a professional appearance.",
      icon: "🏢",
      popular: false,
      features: [
        "High security options",
        "Perimeter protection",
        "Custom heights",
        "Access control"
      ]
    },
    {
      title: "Custom Railings",
      description:
        "Enhance your home's safety and style with custom aluminum and vinyl railings for decks, stairs, and balconies.",
      icon: "🔧",
      popular: false,
      features: [
        "Code compliant",
        "Custom designs",
        "Durable materials",
        "Professional installation"
      ]
    },
    {
      title: "Repairs & Maintenance",
      description:
        "Expert fence and gate repair services to restore your fence's functionality and appearance, extending its lifespan.",
      icon: "🛠️",
      popular: false,
      features: [
        "Post replacement",
        "Gate repair",
        "Pickett replacement",
        "Hardware updates"
      ]
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-modern-green-100 text-modern-green-700 rounded-full text-sm font-medium mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-space">
            Premium Fencing Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600">
            From classic wood to modern vinyl, we provide top-quality fencing solutions tailored to your specific requirements and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-modern-green-200 ${service.popular ? 'ring-2 ring-modern-green-500' : ''}`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-modern-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="w-16 h-16 bg-modern-green-100 rounded-xl flex items-center justify-center text-3xl mb-6 text-modern-green-700">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-modern-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full border-modern-green-200 text-modern-green-700 hover:bg-modern-green-50 hover:border-modern-green-300 transition-colors duration-200 py-3"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-modern-green-400 to-modern-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 bg-modern-green-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-space">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We offer custom fencing solutions for any need. Contact us to discuss your project and get a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-modern-green-600 hover:bg-modern-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-modern-green-200 text-modern-green-700 hover:bg-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg"
            >
              <span className="mr-2">📞</span> (201) 641-2111
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ModernTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Robert Johnson",
      role: "Homeowner, Ridgewood",
      content:
        "Bergen Fence transformed our backyard with a beautiful vinyl fence. The crew was professional, on time, and the quality exceeded our expectations. We couldn't be happier with the results!",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Business Owner, Paramus",
      content:
        "As a business owner, I needed a secure and professional-looking fence for our property. Bergen Fence delivered exactly what we needed. Their attention to detail and customer service was outstanding.",
      rating: 5,
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Property Manager, Englewood",
      content:
        "We've used Bergen Fence for multiple properties in our portfolio. Consistent quality, fair pricing, and reliable service every time. Highly recommend for any fencing needs in Bergen County.",
      rating: 5,
      date: "3 months ago"
    },
    {
      id: 4,
      name: "Jennifer Martinez",
      role: "Homeowner, Teaneck",
      content:
        "The team at Bergen Fence was amazing from start to finish. They helped us choose the perfect fence style for our home and the installation was flawless. Our neighbors have been complimenting us non-stop!",
      rating: 5,
      date: "1 week ago"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-modern-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-modern-green-100 text-modern-green-700 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-space">
            Trusted by Homeowners & Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with Bergen Fence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${
                        i < testimonial.rating
                          ? 'text-yellow-400'
                          : 'text-gray-200'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    {testimonial.date}
                  </span>
                </div>
                
                <blockquote className="mb-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-modern-green-100 rounded-full flex items-center justify-center text-modern-green-700 text-xl font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-space">
              Ready to Transform Your Property with a New Fence?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied Bergen County homeowners who trust us with their fencing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-modern-green-600 hover:bg-modern-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
              >
                Get Your Free Estimate
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-modern-green-200 text-modern-green-700 hover:bg-modern-green-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg"
              >
                <span className="mr-2">📞</span> (201) 641-2111
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              No obligation • Free on-site consultation • Licensed & insured
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '70+', label: 'Years Experience' },
            { value: 'A+ Rated', label: 'BBB Accredited' },
            { value: '5.0', label: 'Average Rating' },
            { value: '100%', label: 'Satisfaction Guarantee' },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-modern-green-600 mb-2">
                {item.value}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ModernCTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-modern-green-600 to-modern-green-700">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-white"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-modern-green-800"></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgogICAgICA8cGF0aCBkPSJNMzAgMTV2MzBNMTUgMzBoMzBNMTIgMTguNSBsLTMtMyA0LjUtNC41IDkgOSA0LjUtNC41IDMgM2wtNy41IDcuNXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              LIMITED TIME OFFER
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space leading-tight">
              Get <span className="text-yellow-300">15% Off</span> Your First Fence Installation
            </h2>
            
            <p className="text-xl text-modern-green-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your property with our premium fencing solutions. Book your free consultation today and mention this offer to claim your exclusive discount.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-modern-green-700 hover:bg-modern-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg transform hover:scale-105"
              >
                📞 Call (201) 641-2111
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg backdrop-blur-sm"
              >
                Get Free Estimate
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-modern-green-100 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free On-Site Estimate
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No Obligation
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Licensed & Insured
              </div>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-space">
                Request a Free Quote
              </h3>
              <p className="text-gray-600">
                Fill out the form and we'll get back to you within 24 hours
              </p>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all"
                  placeholder="(201) 555-0123"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="vinyl">Vinyl Fencing</option>
                  <option value="aluminum">Aluminum Fencing</option>
                  <option value="wood">Wood Fencing</option>
                  <option value="commercial">Commercial Fencing</option>
                  <option value="repair">Fence Repair</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-modern-green-600 hover:bg-modern-green-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
              >
                Get My Free Quote
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our Privacy Policy and consent to be contacted by Bergen Fence.
              </p>
            </form>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-modern-green-100 text-sm font-medium mb-6">
            TRUSTED BY BERGEN COUNTY HOMEOWNERS & BUSINESSES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
            {['🏆', '⭐', '🔒', '🏡', '🏢'].map((icon, i) => (
              <div key={i} className="text-3xl">{icon}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ModernFooter() {
  return (
    <footer className="bg-modern-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-modern-green-500 to-modern-green-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                BF
              </div>
              <div>
                <h3 className="text-xl font-bold font-space">Bergen Fence</h3>
                <p className="text-modern-gray-200">Since 1953</p>
              </div>
            </div>
            <p className="text-modern-gray-300 mb-6 max-w-md">
              Bergen County's premier fencing company, delivering exceptional
              installations and repairs for over 70 years.
            </p>
            <div className="space-y-2 text-modern-gray-300">
              <p>📍 279 Bergen Turnpike, Ridgefield Park, NJ 07660</p>
              <p>📞 (201) 641-2111</p>
              <p>🕒 Mon-Fri: 8AM-5PM, Sat: 9AM-3PM</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-modern-gray-300">
              <li>Vinyl & PVC Fencing</li>
              <li>Aluminum Fencing</li>
              <li>Wood Fencing</li>
              <li>Commercial Fencing</li>
              <li>Custom Railings</li>
              <li>Repairs & Maintenance</li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-modern-gray-300">
              <li>Bergen County</li>
              <li>Ridgefield Park</li>
              <li>Hackensack</li>
              <li>Teaneck</li>
              <li>Englewood</li>
              <li>Fort Lee</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-modern-gray-800 mt-12 pt-8 text-center">
          <p className="text-modern-gray-400">
            © 2025 Bergen Fence. All rights reserved. Licensed & Insured in New
            Jersey.
          </p>
        </div>
      </div>
    </footer>
  );
}
