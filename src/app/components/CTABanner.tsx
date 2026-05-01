import { Button } from "./ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { images } from "../config/imageConfig";
import { LocalImage } from "./LocalImage";

export function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <LocalImage
          src={images.ctaBanner.background}
          alt="Emotional family"
          className="w-full h-full object-cover"
        />
        {/* Strong Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85"></div>
        {/* Color Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-transparent to-green-900/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heart Icon with Animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative bg-red-600 rounded-full p-5">
                <Heart className="w-12 h-12 text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            You Can Change a <span className="text-yellow-400">Life Today</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto">
            Every donation, every hour volunteered, every act of kindness creates ripples of hope across Cameroon.
          </p>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Join us in our mission to transform lives. Your support provides education, healthcare, food, and hope to families who need it most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-10 py-7 shadow-2xl hover:shadow-red-600/50 transition-all group min-w-[220px]"
              onClick={() => document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="w-6 h-6 mr-2 fill-white" />
              Donate Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-7 shadow-2xl hover:shadow-green-600/50 transition-all group min-w-[220px]"
              onClick={() => document.getElementById('volunteer-signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Become a Volunteer
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <p className="text-3xl font-bold text-yellow-400">5,000+</p>
              <p className="text-sm text-gray-300">Lives Changed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <p className="text-3xl font-bold text-yellow-400">200+</p>
              <p className="text-sm text-gray-300">Active Volunteers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <p className="text-3xl font-bold text-yellow-400">50+</p>
              <p className="text-sm text-gray-300">Community Projects</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <p className="text-3xl font-bold text-yellow-400">100%</p>
              <p className="text-sm text-gray-300">Transparency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}