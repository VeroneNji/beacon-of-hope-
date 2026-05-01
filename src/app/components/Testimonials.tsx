import { Star } from "lucide-react";
import { images } from "../config/imageConfig";
import { LocalImage } from "./LocalImage";

export function Testimonials() {
  const testimonials = images.testimonials.map(t => ({ ...t, rating: 5 }));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stories of Hope
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from the people whose lives have been transformed by our work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <LocalImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    fallbackGradient="from-blue-500 to-purple-500"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Element */}
        <div className="mt-16 text-center bg-green-50 rounded-2xl p-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            <span className="font-bold text-green-700">Join thousands of supporters</span> who have 
            experienced the joy of giving and seeing real transformation in communities across Cameroon.
          </p>
        </div>
      </div>
    </section>
  );
}