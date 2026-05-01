import { Heart, Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "Home", onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: "About", onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: "Programs", onClick: () => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: "Donate", onClick: () => document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: "Volunteer", onClick: () => document.getElementById('volunteer-signup')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: "Contact", onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  const programs = [
    { name: "Education Support", onClick: () => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: "Healthcare Services", onClick: () => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: "Food & Nutrition", onClick: () => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: "Community Development", onClick: () => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }) }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-2 rounded-lg shadow-lg">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold">Beacon of Hope</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Transforming lives and empowering communities across Cameroon through education, 
              healthcare, and sustainable development programs.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" />
                <span>Buea and Bamenda, Cameroon</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 flex-shrink-0 text-green-400" />
                <span>+237 652 572 439</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 flex-shrink-0 text-green-400" />
                <span>info@beaconofhope.cm</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.onClick}
                    className="text-gray-300 hover:text-green-400 transition text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-green-400">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <button 
                    onClick={program.onClick}
                    className="text-gray-300 hover:text-green-400 transition text-sm"
                  >
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & WhatsApp */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-green-400">Stay Connected</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Follow our journey and join our mission to transform Cameroon.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3 mb-6">
              <a 
                href="#" 
                className="bg-green-600 hover:bg-green-700 rounded-lg p-2.5 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-green-600 hover:bg-green-700 rounded-lg p-2.5 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-green-600 hover:bg-green-700 rounded-lg p-2.5 transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-green-600 hover:bg-green-700 rounded-lg p-2.5 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* WhatsApp Contact */}
            <a 
              href="https://wa.me/237652572439"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <div className="text-left">
                <p className="text-xs text-green-100">Chat on WhatsApp</p>
                <p className="text-sm font-bold text-white">+237 652 572 439</p>
              </div>
            </a>
          </div>
        </div>

        {/* Cameroon Identity Badge */}
        <div className="bg-gradient-to-r from-green-700 to-yellow-600 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-3 h-12 bg-green-600 rounded"></div>
                <div className="w-3 h-12 bg-red-600 rounded"></div>
                <div className="w-3 h-12 bg-yellow-500 rounded"></div>
              </div>
              <div className="text-white">
                <p className="font-bold text-lg">Proudly Cameroonian</p>
                <p className="text-sm text-green-100">Serving Communities in Buea, Bamenda & Beyond</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-white font-bold text-sm">🇨🇲 Legally Registered Nonprofit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Beacon of Hope. Lighting the path to a brighter Cameroon.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-white transition">Privacy Policy</button>
              <button className="text-gray-400 hover:text-white transition">Terms of Service</button>
              <button className="text-gray-400 hover:text-white transition">Transparency Report</button>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3">
            Legally registered nonprofit organization • All donations are tax-deductible
          </p>
        </div>
      </div>
    </footer>
  );
}