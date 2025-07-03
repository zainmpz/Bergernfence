import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-modern-green-600 to-modern-green-700">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-white"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-modern-green-800"></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgogICAgICA8cGF0aCBkPSJNMzAgMTV2MzBNMTUgMzBoMzBNMTIgMTguNSBsLTMtMyA0LjUtNC41IDkgOSA0LjUtNC41IDMgM2wtNy41IDcuNXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+CiAgICA8L3BhdHRlcj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPgo8L3N2Zz4=')] opacity-20"></div>
      
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
                asChild
                size="lg"
                className="bg-white text-modern-green-700 hover:bg-modern-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg transform hover:scale-105"
              >
                <a href="tel:201-641-2111">
                  📞 Call (201) 641-2111
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg backdrop-blur-sm"
              >
                <a href="/quotes">
                  Get Free Estimate
                </a>
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
