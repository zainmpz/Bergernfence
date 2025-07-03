import { Navbar } from "@/components/bergen-fence/header/Navbar";
import { Footer } from "@/components/bergen-fence/footer/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 'vinyl',
    title: 'Vinyl Fencing',
    description: 'Durable, low-maintenance vinyl fencing solutions that provide privacy and enhance your property\'s curb appeal. Perfect for homeowners seeking a long-lasting, attractive fencing option.',
    features: [
      'Virtually maintenance-free',
      'Won\'t rot, warp, or fade',
      'Available in various styles and colors',
      'Perfect for privacy and security',
      '30+ year lifespan'
    ],
    image: 'https://images.unsplash.com/photo-1581362072978-14998d01cdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    popular: true
  },
  {
    id: 'aluminum',
    title: 'Aluminum Fencing',
    description: 'Elegant and durable aluminum fencing that combines strength with beauty. Ideal for both residential and commercial properties looking for security without sacrificing style.',
    features: [
      'Rust and corrosion resistant',
      'Low maintenance',
      'Decorative and functional',
      'Long-lasting durability',
      'Perfect for pools and gardens'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    popular: false
  },
  {
    id: 'wood',
    title: 'Wood Fencing',
    description: 'Classic wood fencing that brings natural beauty to your property. Customizable options to match your home\'s architecture and your personal style.',
    features: [
      'Natural, timeless look',
      'Fully customizable',
      'Great for privacy',
      'Various wood types available',
      'Can be painted or stained'
    ],
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    popular: true
  },
  {
    id: 'chain-link',
    title: 'Chain Link Fencing',
    description: 'Affordable and practical chain link fencing that provides security and durability. Ideal for both residential and commercial applications.',
    features: [
      'Cost-effective solution',
      'Low maintenance',
      'Durable and long-lasting',
      'Great for security',
      'Available in various heights'
    ],
    image: 'https://images.unsplash.com/photo-1592409065737-a25380aaed1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    popular: false
  },
  {
    id: 'commercial',
    title: 'Commercial Fencing',
    description: 'Professional fencing solutions for businesses, industrial sites, and commercial properties. We offer security, durability, and professional installation.',
    features: [
      'Enhanced security options',
      'Custom solutions available',
      'Durable materials',
      'Meets all local codes',
      'Professional installation'
    ],
    image: 'https://images.unsplash.com/photo-1581362072978-14998d01cdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    popular: true
  },
  {
    id: 'repair',
    title: 'Fence Repair',
    description: 'Expert fence repair services to restore your fence to its original condition. We fix all types of fencing materials with quality craftsmanship.',
    features: [
      'All fence types repaired',
      'Quick response time',
      'Affordable solutions',
      'Quality workmanship',
      'Free estimates'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    popular: false
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white to-modern-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
                Our Fencing Services
              </h1>
              <p className="text-xl text-gray-600">
                Explore our comprehensive range of high-quality fencing solutions designed to meet your 
                specific needs, whether residential or commercial. Quality materials and expert 
                installation guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 ${
                    service.popular ? 'ring-2 ring-modern-green-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 font-space">
                      {service.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-medium text-gray-900">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-modern-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button
                      asChild
                      className={`w-full ${
                        service.popular 
                          ? 'bg-modern-green-600 hover:bg-modern-green-700' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      } text-white py-3 rounded-xl font-medium transition-colors duration-200`}
                    >
                      <a href={`/quotes?service=${service.id}`}>
                        Get a Free Estimate
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-modern-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-space">
                Why Choose Bergen Fence?
              </h2>
              <p className="text-gray-600">
                With over 70 years of combined experience, we're the trusted name in fencing throughout 
                Bergen County. Here's what sets us apart:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expert Craftsmanship',
                  description: 'Our skilled professionals take pride in every project, ensuring the highest quality workmanship.',
                  icon: '🔨'
                },
                {
                  title: 'Quality Materials',
                  description: 'We use only the finest materials from trusted manufacturers to ensure durability and longevity.',
                  icon: '🏗️'
                },
                {
                  title: 'Satisfaction Guaranteed',
                  description: 'Your satisfaction is our top priority. We stand behind our work with comprehensive warranties.',
                  icon: '✅'
                },
                {
                  title: 'Free Estimates',
                  description: 'Get a no-obligation, detailed estimate for your project with no hidden fees.',
                  icon: '📝'
                },
                {
                  title: 'Timely Service',
                  description: 'We respect your time and complete projects on schedule with minimal disruption.',
                  icon: '⏱️'
                },
                {
                  title: 'Local & Trusted',
                  description: "As a locally owned and operated business, we're proud to serve our community with integrity.",
                  icon: '🏠'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-modern-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 font-space">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-modern-green-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation consultation and estimate. 
              Our team is ready to help you find the perfect fencing solution for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-modern-green-700 hover:bg-modern-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
              >
                <a href="/quotes">
                  Get a Free Quote
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg"
              >
                <a href="tel:201-641-2111">
                  <span className="mr-2">📞</span> (201) 641-2111
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
