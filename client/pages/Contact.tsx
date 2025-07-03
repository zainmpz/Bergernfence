import { useState } from 'react';
import { Navbar } from "@/components/bergen-fence/header/Navbar";
import { Footer } from "@/components/bergen-fence/footer/Footer";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
      });
      
      // Reset form on successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'There was an error sending your message. Please try again or call us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white to-modern-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600">
                Have questions or ready to start your fencing project? Get in touch with our team today 
                for expert advice and a free, no-obligation quote.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 font-space">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-modern-green-100 p-3 rounded-lg">
                      <svg className="h-6 w-6 text-modern-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                      <p className="mt-1 text-gray-600">123 Fence Street, Bergen County, NJ 07601</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-modern-green-100 p-3 rounded-lg">
                      <svg className="h-6 w-6 text-modern-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Phone Number</h3>
                      <p className="mt-1 text-gray-600">
                        <a href="tel:201-641-2111" className="hover:text-modern-green-600 transition-colors">
                          (201) 641-2111
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-modern-green-100 p-3 rounded-lg">
                      <svg className="h-6 w-6 text-modern-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                      <p className="mt-1 text-gray-600">
                        <a href="mailto:info@bergenfence.com" className="hover:text-modern-green-600 transition-colors">
                          info@bergenfence.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-modern-green-100 p-3 rounded-lg">
                      <svg className="h-6 w-6 text-modern-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                      <div className="mt-1 space-y-1">
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Facebook', icon: '📘', url: '#' },
                      { name: 'Instagram', icon: '📸', url: '#' },
                      { name: 'Twitter', icon: '🐦', url: '#' },
                      { name: 'Yelp', icon: '⭐', url: '#' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="w-12 h-12 bg-gray-100 hover:bg-modern-green-100 rounded-full flex items-center justify-center text-2xl transition-colors duration-200"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-space">
                  Send Us a Message
                </h2>
                
                {submitStatus.message && (
                  <div 
                    className={`p-4 mb-6 rounded-lg ${
                      submitStatus.success 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all"
                        placeholder="(201) 555-0123"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
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
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-modern-green-600 hover:bg-modern-green-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11808618370616!3d40.70331251490075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }}  
                  loading="lazy"
                  title="Bergen Fence Location"
                ></iframe>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-space">Our Office</h3>
                <p className="text-gray-600">123 Fence Street, Bergen County, NJ 07601</p>
                <div className="mt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-modern-green-200 text-modern-green-700 hover:bg-modern-green-50"
                  >
                    <a 
                      href="https://www.google.com/maps/dir//123+Fence+Street,+Bergen+County,+NJ+07601" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
