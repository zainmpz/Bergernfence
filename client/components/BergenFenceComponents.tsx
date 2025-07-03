import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full bg-white relative">
      {/* Top contact bar */}
      <div className="bg-bergen-green text-bergen-green-light py-2 px-6 text-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span>Call us: 201-641-2111</span>
          <span>279 Bergen Turnpike, Ridgefield Park, NJ 07660</span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-bergen-green rounded-full flex items-center justify-center text-white font-bold text-xl">
              BF
            </div>
            <div>
              <h1 className="text-2xl font-bold text-bergen-green-dark font-open-sans">
                Bergen Fence
              </h1>
              <p className="text-sm text-bergen-gray">Since 1953</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-bergen-green-dark">
              201-641-2111
            </p>
            <p className="text-sm text-bergen-gray">Free Estimates</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-200 pt-4">
          <ul className="flex space-x-8 font-open-sans text-lg">
            <li>
              <a
                href="#"
                className="text-bergen-green-dark hover:text-bergen-green font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-bergen-gray hover:text-bergen-green">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-bergen-gray hover:text-bergen-green">
                Fences
              </a>
            </li>
            <li>
              <a href="#" className="text-bergen-gray hover:text-bergen-green">
                Railings
              </a>
            </li>
            <li>
              <a href="#" className="text-bergen-gray hover:text-bergen-green">
                Arbors
              </a>
            </li>
            <li>
              <a href="#" className="text-bergen-gray hover:text-bergen-green">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="text-bergen-gray hover:text-bergen-green">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-bergen-gray hover:text-bergen-green">
                More
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="bg-white px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-bergen-green-dark mb-6 font-open-sans leading-tight">
          Fence Company in Bergen County New Jersey Since 1953
        </h2>

        <p className="text-bergen-gray leading-relaxed mb-8 font-lucida">
          For over 70 years, Bergen Fence has delivered expert fence and railing
          installation services throughout Bergen County and Northern New
          Jersey. Our family-owned business specializes in residential and
          commercial fencing solutions, offering everything from vinyl and
          aluminum fences to custom railings and arbors.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-bergen-green-dark mb-4 font-open-sans">
              Fencing
            </h3>
            <ul className="space-y-2 text-bergen-gray font-lucida">
              <li>• Vinyl & PVC Fences</li>
              <li>• Aluminum Fences</li>
              <li>• Wood Fences</li>
              <li>• Commercial Fencing</li>
            </ul>

            <h3 className="text-xl font-semibold text-bergen-green-dark mb-4 mt-6 font-open-sans">
              Railings
            </h3>
            <ul className="space-y-2 text-bergen-gray font-lucida">
              <li>• Aluminum & Vinyl Railings</li>
              <li>• Custom Exterior Railings</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-bergen-green-dark mb-4 font-open-sans">
              Why Choose Bergen Fence?
            </h3>
            <ul className="space-y-2 text-bergen-gray font-lucida">
              <li>• Full-Service Installations</li>
              <li>• Fence & Gate Repairs</li>
              <li>• Direct Material Sales</li>
              <li>• Material Sales & Installation</li>
              <li>• Over 70 Years Experience</li>
              <li>• Licensed & Insured</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button
            className="bg-bergen-green hover:bg-bergen-green-dark text-white px-8 py-3 text-lg font-semibold rounded-md"
            size="lg"
          >
            Request An Estimate
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PhotoGallery() {
  const images = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-bergen-green-dark mb-8 text-center font-open-sans">
          Our Work Gallery
        </h3>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {images.map((img) => (
            <div
              key={img}
              className="aspect-square bg-gray-200 rounded-md overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-bergen-green to-bergen-green-dark opacity-20 flex items-center justify-center">
                <span className="text-white font-semibold">{img}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DetailedServices() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-bergen-green-dark mb-8 font-open-sans">
          Custom Fence & Railing Installation for Homes and Businesses Across NJ
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-bergen-green-dark mb-4 font-open-sans">
              Residential Services
            </h4>
            <ul className="space-y-2 text-bergen-gray font-lucida text-sm">
              <li>• Privacy Fences</li>
              <li>• Pool Fencing</li>
              <li>• Deck Railings</li>
              <li>• Garden Fencing</li>
              <li>• Property Line Fencing</li>
              <li>• Security Fencing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-bergen-green-dark mb-4 font-open-sans">
              Commercial Services
            </h4>
            <ul className="space-y-2 text-bergen-gray font-lucida text-sm">
              <li>• Industrial Fencing</li>
              <li>• Chain Link Fencing</li>
              <li>• Security Gates</li>
              <li>• Perimeter Fencing</li>
              <li>• Access Control Systems</li>
              <li>• Government Contracts</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h4 className="text-lg font-semibold text-bergen-green-dark mb-4 font-open-sans">
            Service Areas
          </h4>
          <p className="text-bergen-gray font-lucida leading-relaxed">
            Serving Bergen County, Northern New Jersey, New Jersey & Tri-State
            Contractors. We proudly serve Ridgefield Park, Hackensack, Teaneck,
            Englewood, Fort Lee, Paramus, Fair Lawn, and surrounding communities
            throughout Bergen County.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="bg-bergen-gray-light px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-bergen-green-dark mb-6 font-open-sans">
              Contact Information
            </h3>

            <div className="space-y-4 text-bergen-gray font-lucida">
              <div>
                <h4 className="font-semibold text-bergen-green-dark">Phone</h4>
                <p className="text-lg">201-641-2111</p>
              </div>

              <div>
                <h4 className="font-semibold text-bergen-green-dark">
                  Address
                </h4>
                <p>
                  279 Bergen Turnpike
                  <br />
                  Ridgefield Park, NJ 07660
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-bergen-green-dark font-francois">
                  Office Hours
                </h4>
                <div className="text-sm">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-bergen-green-dark mb-6 font-open-sans">
              Get A Free Estimate
            </h3>

            <div className="space-y-4">
              <Button
                className="w-full bg-bergen-green hover:bg-bergen-green-dark text-white py-3 font-semibold"
                size="lg"
              >
                Call Now: 201-641-2111
              </Button>

              <p className="text-bergen-gray text-sm font-lucida text-center">
                Licensed & Insured • Free Estimates • Over 70 Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-bergen-green text-white px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h4 className="font-bold mb-4 font-open-sans">Bergen Fence</h4>
            <p className="text-sm font-lucida text-bergen-green-light">
              Serving Bergen County since 1953 with quality fence and railing
              installations.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-open-sans">Services</h4>
            <ul className="text-sm space-y-2 font-lucida text-bergen-green-light">
              <li>Vinyl & PVC Fences</li>
              <li>Aluminum Fences</li>
              <li>Wood Fences</li>
              <li>Railings & Arbors</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-open-sans">Connect</h4>
            <div className="flex space-x-4">
              <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs">
                G
              </span>
              <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs">
                I
              </span>
              <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs">
                T
              </span>
              <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs">
                P
              </span>
              <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs">
                H
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-6 text-center">
          <p className="text-sm font-lucida text-bergen-green-light">
            Copyright © 2025 Bergen Fence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
