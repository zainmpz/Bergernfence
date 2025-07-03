import { useState } from 'react';
import { Navbar } from "@/components/bergen-fence/header/Navbar";
import { Footer } from "@/components/bergen-fence/footer/Footer";
import { Button } from "@/components/ui/button";

// Sample gallery data - in a real app, this would come from an API
const galleryItems = [
  {
    id: 1,
    title: 'Vinyl Privacy Fence',
    category: 'residential',
    location: 'Ridgewood, NJ',
    image: 'https://images.unsplash.com/photo-1581362072978-14998d01cdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: true
  },
  {
    id: 2,
    title: 'Aluminum Fence Installation',
    category: 'commercial',
    location: 'Paramus, NJ',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    featured: true
  },
  {
    id: 3,
    title: 'Wood Privacy Fence',
    category: 'residential',
    location: 'Englewood, NJ',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: true
  },
  {
    id: 4,
    title: 'Chain Link Fence',
    category: 'commercial',
    location: 'Teaneck, NJ',
    image: 'https://images.unsplash.com/photo-1592409065737-a25380aaed1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    featured: false
  },
  {
    id: 5,
    title: 'Vinyl Picket Fence',
    category: 'residential',
    location: 'Hackensack, NJ',
    image: 'https://images.unsplash.com/photo-1582311074826-0b3f9c9c9e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: false
  },
  {
    id: 6,
    title: 'Commercial Security Fence',
    category: 'commercial',
    location: 'Fort Lee, NJ',
    image: 'https://images.unsplash.com/photo-1581362072978-14998d01cdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: true
  },
  {
    id: 7,
    title: 'Privacy Fence with Lattice',
    category: 'residential',
    location: 'Closter, NJ',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    featured: false
  },
  {
    id: 8,
    title: 'Ornamental Iron Fence',
    category: 'residential',
    location: 'Demarest, NJ',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    featured: true
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'featured', name: 'Featured' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : activeFilter === 'featured'
      ? galleryItems.filter(item => item.featured)
      : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
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
                Our Work
              </h1>
              <p className="text-xl text-gray-600">
                Browse through our gallery of completed projects to see the quality and craftsmanship 
                we bring to every fencing installation in Bergen County.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Filters */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-modern-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No projects found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        onClick={() => openLightbox(item)}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-500">{item.location}</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-modern-green-100 text-modern-green-800">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    {item.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-modern-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 font-space">
              Ready to Start Your Fencing Project?
            </h2>
            <p className="text-xl text-modern-green-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and estimate. Let us help you enhance your property's 
              security, privacy, and curb appeal with our premium fencing solutions.
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
      
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button 
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            &times;
          </button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.location}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
