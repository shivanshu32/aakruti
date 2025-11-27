import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    plotType: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '', plotType: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9105079000'],
      action: 'tel:919105079000',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['aakrutidevelopers1@hotmail.com'],
      action: 'mailto:aakrutidevelopers1@hotmail.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Satoha - Naugaon Road,', 'Goverdhan Road, Mathura'],
      action: '#location',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-[#C9A962] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-wide">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
          <p className="font-elegant text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to own your dream plot? Get in touch with our team for site visits, 
            pricing details, and personalized assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6 tracking-wide">Send us a Message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="font-serif text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
                <p className="font-sans text-gray-600">
                  We've received your inquiry. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-sans block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-sans block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-sans block text-sm font-medium text-gray-700 mb-2">
                    Interested In
                  </label>
                  <select
                    name="plotType"
                    value={formData.plotType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select plot type</option>
                    <option value="21x60">Premium Villa (21'-5" × 60'-0")</option>
                    <option value="20x53">Classic Villa (20'-9" × 53'-0")</option>
                    <option value="21x43">Compact Villa (21'-5" × 43'-8")</option>
                    <option value="plot">Plot Only</option>
                  </select>
                </div>

                <div>
                  <label className="font-sans block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="font-sans w-full flex items-center justify-center space-x-2 bg-[#C9A962] text-white py-4 rounded-xl font-semibold tracking-wide hover:bg-[#A68B4B] transition-colors duration-300"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action || '#'}
                className={`flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 ${
                  info.action ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#C9A962] to-[#A68B4B] rounded-2xl flex items-center justify-center">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-gray-900 mb-1">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="font-sans text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </a>
            ))}

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-[#1A5F5E] to-[#0D3D3C] rounded-2xl p-8 text-white">
              <h4 className="font-serif text-2xl font-semibold mb-4">Schedule a Site Visit</h4>
              <p className="font-sans text-white/80 mb-6">
                Experience the grandeur of Shri Vrinda Aakruti Village in person. 
                Book a free site visit today!
              </p>
              <a
                href="tel:919105079000"
                className="font-sans inline-flex items-center space-x-2 bg-[#C9A962] text-white px-6 py-3 rounded-xl font-semibold tracking-wide hover:bg-[#A68B4B] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +91 9105079000</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
