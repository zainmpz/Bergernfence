import { useState } from 'react';
import { Navbar } from "@/components/bergen-fence/header/Navbar";
import { Footer } from "@/components/bergen-fence/footer/Footer";
import { Button } from "@/components/ui/button";

export default function Quotes() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    fenceType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const fenceTypes = [
    'Vinyl Privacy Fence',
    'Aluminum Fence',
    'Wood Fence',
    'Chain Link Fence',
    'Ornamental Iron',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get a Free Quote</h1>
          <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                />
              </div>

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
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="fenceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Fence Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="fenceType"
                  name="fenceType"
                  value={formData.fenceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select a fence type</option>
                  {fenceTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modern-green-500 focus:border-transparent transition-all"
                  placeholder="Please describe your project in detail..."
                ></textarea>
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-modern-green-600 hover:bg-modern-green-700 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
              >
                Request Free Quote
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
