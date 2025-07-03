import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function ModernNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-modern-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-modern-green-500 to-modern-green-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              BF
            </div>
            <div>
              <h1 className="text-xl font-bold text-modern-gray-900 font-space">
                Bergen Fence
              </h1>
              <p className="text-sm text-modern-green-600 font-medium">
                Since 1953
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-modern-gray-600 hover:text-modern-green-600 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-modern-gray-600 hover:text-modern-green-600 font-medium transition-colors"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-modern-gray-600 hover:text-modern-green-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-modern-gray-600 hover:text-modern-green-600 font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Contact CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-right">
              <p className="text-lg font-semibold text-modern-gray-900">
                201-641-2111
              </p>
              <p className="text-sm text-modern-green-600">Free Estimates</p>
            </div>
            <Button className="bg-modern-green-600 hover:bg-modern-green-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function ModernHero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-modern-gray-50 via-white to-modern-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')]'
          }
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-modern-green-100 text-modern-green-700 rounded-full text-sm font-medium">
              ✨ Trusted for 70+ Years
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-modern-gray-900 leading-tight font-space">
              Premium Fence & Railing
              <span className="text-modern-green-600"> Solutions</span>
            </h1>

            <p className="text-xl text-modern-gray-600 leading-relaxed max-w-lg">
              Bergen County's premier fencing company, delivering exceptional
              installations and repairs since 1953. Quality craftsmanship,
              modern materials, timeless results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-modern-green-600 hover:bg-modern-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
              >
                Get Free Estimate
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-modern-gray-300 text-modern-gray-700 hover:bg-modern-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg"
              >
                View Gallery
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-modern-green-600">
                  70+
                </div>
                <div className="text-sm text-modern-gray-600">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-modern-green-600">
                  1000+
                </div>
                <div className="text-sm text-modern-gray-600">
                  Projects Done
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-modern-green-600">
                  100%
                </div>
                <div className="text-sm text-modern-gray-600">Licensed</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-modern-green-100 to-modern-green-200 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-modern-green-500/20 to-modern-green-700/30 flex items-center justify-center">
                <div className="text-6xl text-modern-green-700 opacity-50">
                  🏠
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <div className="text-sm font-semibold text-modern-gray-900">
                  Vinyl Fencing
                </div>
                <div className="text-xs text-modern-gray-600">Most Popular</div>
              </div>
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <div className="text-sm font-semibold text-modern-gray-900">
                  Free Quote
                </div>
                <div className="text-xs text-modern-green-600">
                  24hr Response
                </div>
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
        "Durable, low-maintenance fencing perfect for privacy and property lines.",
      icon: "🏘️",
      popular: true,
    },
    {
      title: "Aluminum Fencing",
      description:
        "Elegant, rust-resistant fencing ideal for pools and decorative boundaries.",
      icon: "✨",
      popular: false,
    },
    {
      title: "Wood Fencing",
      description:
        "Classic, natural wood fencing for traditional and rustic aesthetics.",
      icon: "🌲",
      popular: false,
    },
    {
      title: "Commercial Fencing",
      description:
        "Heavy-duty security and perimeter fencing for businesses and institutions.",
      icon: "🏢",
      popular: false,
    },
    {
      title: "Custom Railings",
      description:
        "Aluminum and vinyl railings for decks, stairs, and custom applications.",
      icon: "🔧",
      popular: false,
    },
    {
      title: "Repairs & Maintenance",
      description:
        "Expert fence and gate repairs to extend the life of your investment.",
      icon: "🛠️",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-modern-gray-900 mb-4 font-space">
            Our Services
          </h2>
          <p className="text-xl text-modern-gray-600 max-w-2xl mx-auto">
            Comprehensive fencing solutions for residential and commercial
            properties throughout Bergen County
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-modern-gray-100 hover:border-modern-green-200 relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-modern-green-100 text-modern-green-700 text-xs font-medium px-2 py-1 rounded-full">
                  Popular
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-modern-gray-900 mb-3 group-hover:text-modern-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-modern-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Button
                    variant="ghost"
                    className="text-modern-green-600 hover:text-modern-green-700 p-0 h-auto font-medium"
                  >
                    Learn More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ModernTestimonials() {
  return (
    <section className="py-20 bg-modern-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-modern-gray-900 mb-4 font-space">
            What Our Customers Say
          </h2>
          <p className="text-xl text-modern-gray-600">
            Over 1000 satisfied customers across Bergen County
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-modern-gray-600 mb-6 italic">
                  "Exceptional service and quality. Bergen Fence exceeded our
                  expectations with their professionalism and attention to
                  detail."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-modern-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-modern-green-700 font-semibold">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-modern-gray-900">
                      Customer {i}
                    </div>
                    <div className="text-sm text-modern-gray-600">
                      Bergen County Resident
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ModernCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-modern-green-600 to-modern-green-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <h2 className="text-4xl font-bold text-white mb-4 font-space">
          Ready to Transform Your Property?
        </h2>
        <p className="text-xl text-modern-green-100 mb-8 max-w-2xl mx-auto">
          Get a free estimate today and discover why Bergen County chooses
          Bergen Fence for their fencing needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-modern-green-700 hover:bg-modern-gray-50 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            📞 Call (201) 641-2111
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-modern-green-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg"
          >
            Get Free Estimate
          </Button>
        </div>

        <div className="mt-8 text-modern-green-100">
          <p className="text-sm">
            Licensed & Insured • Free Estimates • Same Day Response
          </p>
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
