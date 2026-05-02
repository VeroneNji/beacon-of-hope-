import { Camera } from "lucide-react";
import { images } from "../config/imageConfig";
import { LocalImage } from "./LocalImage";

export function PhotoGallery() {
  const photos = images.gallery;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Camera className="w-6 h-6 text-green-600" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              Our Impact in Pictures
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Work in Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Witness the transformation happening across Cameroon. Every photo tells a story of hope, resilience, and community empowerment.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
            >
              {/* Image */}
              <LocalImage
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                  {photo.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">
                  {photo.description}
                </p>
              </div>

              {/* Top Badge */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                View Project
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
            <Camera className="w-5 h-5" />
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}