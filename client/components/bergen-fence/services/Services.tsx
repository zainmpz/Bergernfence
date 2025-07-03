import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    {
      title: "Vinyl & PVC Fencing",
      description:
        "Beautiful, durable, and virtually maintenance-free fencing solutions that enhance privacy and curb appeal while standing up to the elements.",
      image: "/fences/3b343051d926404d056cec252a83f481.jpeg",
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
      image: "/fences/4bd47b5c74b368902eb0d603739f3433.jpeg",
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
      image: "/fences/5a3eb5ce87e483e48bef9ec3fd175201.jpeg",
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
      image: "/fences/6b4e368b6d7b982c7630bfe7c2f214fd.jpeg",
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
              asChild
              size="lg"
              className="bg-modern-green-600 hover:bg-modern-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
            >
              <a href="/quotes">
                Get a Free Quote
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-modern-green-200 text-modern-green-700 hover:bg-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg"
            >
              <a href="tel:201-641-2111">
                <span className="mr-2">📞</span> (201) 641-2111
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
