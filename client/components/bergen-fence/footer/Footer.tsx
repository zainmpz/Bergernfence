import { Link } from "react-router-dom";

export function Footer() {
  const services = [
    { name: "Vinyl & PVC Fencing", href: "/services/vinyl" },
    { name: "Aluminum Fencing", href: "/services/aluminum" },
    { name: "Wood Fencing", href: "/services/wood" },
    { name: "Commercial Fencing", href: "/services/commercial" },
    { name: "Fence Repair", href: "/services/repair" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/gallery" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact Us", href: "/contact" },
    { name: "Get a Quote", href: "/quotes" },
  ];

  const contact = [
    { 
      text: "123 Fence Street, Bergen County, NJ 07601", 
      icon: (
        <img
          src="/fences/location-icon.png"
          alt="Location"
          className="w-6 h-6 object-contain text-modern-green-600"
        />
      )
    },
    { 
      text: "(201) 641-2111", 
      icon: (
        <svg className="h-5 w-5 text-modern-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      href: "tel:201-641-2111"
    },
    { 
      text: "info@bergenfence.com", 
      icon: (
        <svg className="h-5 w-5 text-modern-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: "mailto:info@bergenfence.com"
    },
  ];

  const hours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Bergen Fence Logo"
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-xl font-bold text-white font-space">
                Bergen Fence
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing top-quality fencing solutions to Bergen County since 1953. 
              We specialize in custom fencing installations, repairs, and maintenance 
              for both residential and commercial properties.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', icon: '/fences/social/facebook.png' },
                { name: 'Instagram', icon: '/fences/social/instagram.png' },
                { name: 'Twitter', icon: '/fences/social/twitter.png' },
                { name: 'Yelp', icon: '/fences/social/yelp.png' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={`#${social.name.toLowerCase()}`} 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={`${social.name} icon`}
                    className="w-6 h-6 object-contain hover:scale-110 transition-transform duration-200"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 font-space">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 font-space">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 font-space">Contact Us</h3>
            <ul className="space-y-4">
              {contact.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="text-white font-medium mb-3">Business Hours</h4>
              <ul className="space-y-2">
                {hours.map((item, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.day}</span>
                    <span className="text-gray-300">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Bergen Fence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
