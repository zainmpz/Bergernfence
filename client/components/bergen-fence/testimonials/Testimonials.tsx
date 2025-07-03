import { Button } from "@/components/ui/button";

export function Testimonials() {
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
                asChild
                size="lg"
                className="bg-modern-green-600 hover:bg-modern-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
              >
                <a href="/quotes">
                  Get Your Free Estimate
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-modern-green-200 text-modern-green-700 hover:bg-modern-green-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg"
              >
                <a href="tel:201-641-2111">
                  <span className="mr-2">📞</span> (201) 641-2111
                </a>
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
