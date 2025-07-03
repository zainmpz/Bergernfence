import { Navbar } from "@/components/bergen-fence/header/Navbar";
import { Footer } from "@/components/bergen-fence/footer/Footer";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white to-modern-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
                About Bergen Fence
              </h1>
              <p className="text-xl text-gray-600">
                For over 70 years, we've been the trusted name in fencing solutions throughout Bergen County.
                Our commitment to quality, integrity, and customer satisfaction has made us the go-to choice
                for homeowners and businesses alike.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-space">
                  Our Story
                </h2>
                <div className="prose max-w-none text-gray-600 space-y-4">
                  <p>
                    Founded in 1953, Bergen Fence began as a small family business with a simple mission: 
                    to provide high-quality fencing solutions with exceptional customer service. What started 
                    as a local operation has grown into Bergen County's most trusted fencing company, serving 
                    thousands of satisfied customers.
                  </p>
                  <p>
                    Through the years, we've maintained our commitment to quality workmanship, using only 
                    the finest materials and employing skilled craftsmen who take pride in their work. 
                    Our dedication to excellence has earned us numerous industry awards and, more importantly, 
                    the trust of our community.
                  </p>
                  <p>
                    Today, we continue to be family-owned and operated, with multiple generations working 
                    together to uphold the values that have made us successful for over seven decades.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-2 shadow-lg">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="text-4xl">🏡</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-modern-green-600 text-white p-4 rounded-lg shadow-xl">
                  <div className="text-4xl font-bold">70+</div>
                  <div className="text-sm">Years in Business</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-modern-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-space">
                Meet Our Team
              </h2>
              <p className="text-gray-600">
                Our team of experienced professionals is dedicated to providing you with the best fencing 
                solutions and customer service in the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Bergen",
                  role: "Founder & CEO",
                  bio: "With over 40 years in the fencing industry, John leads our team with expertise and vision.",
                  image: "👨‍💼"
                },
                {
                  name: "Sarah Johnson",
                  role: "Operations Manager",
                  bio: "Sarah ensures every project runs smoothly from start to finish with her exceptional organizational skills.",
                  image: "👩‍💼"
                },
                {
                  name: "Mike Rodriguez",
                  role: "Lead Installer",
                  bio: "Mike's craftsmanship and attention to detail make him one of the best in the business.",
                  image: "👷"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-32 h-32 mx-auto bg-modern-green-100 rounded-full flex items-center justify-center text-5xl mb-6">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-modern-green-600 text-center font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-center">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-modern-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 font-space">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-modern-green-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and estimate. Our team is ready to bring your fencing vision to life.
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
