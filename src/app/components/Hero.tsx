import { Button } from "./ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { images } from "../config/imageConfig";
import { LocalImage } from "./LocalImage";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <LocalImage
          src={images.hero.background}
          alt="Beacon of Hope - Transforming Lives in Cameroon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        {/* Animated overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Legally Registered Nonprofit in Cameroon</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Lighting the Path to Hope and Opportunity
          </h1>
          <p className="text-xl sm:text-2xl text-yellow-400 mb-4 font-semibold animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Transforming lives, creating futures, and building hope one step at a time.
          </p>
          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Beacon of Hope is a legally registered nonprofit organization transforming 
            communities in Cameroon through education, support, and empowerment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 shadow-2xl hover:shadow-red-600/50 transition-all group"
              onClick={() => document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Donate Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white text-lg px-8 py-6 group"
              onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Become a Volunteer
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 text-white animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm sm:text-base">Legally Registered Nonprofit</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm sm:text-base">100% Transparent</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm sm:text-base">Community Driven</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}