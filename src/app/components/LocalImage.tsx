import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface LocalImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackGradient?: string;
}

/**
 * LocalImage Component
 * 
 * Displays local images from /public/images/ folder
 * Shows a gradient placeholder if image is not found
 * 
 * Usage: <LocalImage src="/images/gallery/photo.jpg" alt="Description" />
 */
export function LocalImage({ src, alt, className = "", fallbackGradient = "from-green-600 to-green-700" }: LocalImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Show gradient placeholder if image fails to load
    return (
      <div className={`${className} bg-gradient-to-br ${fallbackGradient} flex items-center justify-center`}>
        <div className="text-center text-white p-6">
          <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p className="text-sm opacity-75">Add your image to:</p>
          <p className="text-xs font-mono mt-1 opacity-60">{src}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}
