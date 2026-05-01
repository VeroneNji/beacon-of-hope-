import { useState } from "react";
import { Button } from "./ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We've received your message and will get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to learn more or to get involved.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Locations</h4>
                  <p className="text-gray-600">Buea and Bamenda, Cameroon</p>
                  <p className="text-sm text-gray-500 mt-1">Expanding nationwide</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/237652572439" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800 hover:underline"
                  >
                    +237 652 572 439
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a 
                    href="mailto:info@beaconofhope.cm" 
                    className="text-green-700 hover:text-green-800 hover:underline"
                  >
                    info@beaconofhope.cm
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-green-600 hover:bg-green-700 rounded-lg p-3 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="bg-green-600 hover:bg-green-700 rounded-lg p-3 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="bg-green-600 hover:bg-green-700 rounded-lg p-3 transition-colors"
                  aria-label="TikTok"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
