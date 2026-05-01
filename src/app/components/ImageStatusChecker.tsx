import { useState } from "react";
import { CheckCircle, XCircle, Image as ImageIcon } from "lucide-react";
import { images } from "../config/imageConfig";

/**
 * ImageStatusChecker Component
 * 
 * DEVELOPMENT TOOL - Shows which images are loaded and which are missing
 * Remove this component in production or hide it from regular users
 * 
 * Usage: Add <ImageStatusChecker /> anywhere in your App to see image status
 */
export function ImageStatusChecker() {
  const [isOpen, setIsOpen] = useState(false);

  const allImages = [
    { category: "Hero", path: images.hero.background },
    ...images.gallery.map((img, i) => ({ category: `Gallery ${i + 1}`, path: img.url })),
    { category: "CTA Banner", path: images.ctaBanner.background },
    ...images.team.map((member, i) => ({ category: `Team ${i + 1} (${member.name})`, path: member.image })),
    ...images.testimonials.map((test, i) => ({ category: `Testimonial ${i + 1} (${test.name})`, path: test.image }))
  ];

  const [imageStatuses, setImageStatuses] = useState<Record<string, boolean>>({});

  const checkImage = (path: string) => {
    return new Promise<boolean>((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = path;
    });
  };

  const checkAllImages = async () => {
    const statuses: Record<string, boolean> = {};
    for (const img of allImages) {
      statuses[img.path] = await checkImage(img.path);
    }
    setImageStatuses(statuses);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          setIsOpen(true);
          checkAllImages();
        }}
        className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50"
        title="Check Image Status"
      >
        <ImageIcon className="w-5 h-5" />
      </button>
    );
  }

  const loadedCount = Object.values(imageStatuses).filter(Boolean).length;
  const totalCount = allImages.length;

  return (
    <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-2xl p-4 max-w-md max-h-96 overflow-y-auto z-50 border-2 border-blue-600">
      <div className="flex items-center justify-between mb-3 pb-2 border-b">
        <h3 className="font-bold text-gray-900 flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-blue-600" />
          Image Status
        </h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="mb-3 p-2 bg-blue-50 rounded text-sm">
        <p className="font-semibold text-blue-900">
          {loadedCount} of {totalCount} images loaded
        </p>
        <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${(loadedCount / totalCount) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-2">
        {allImages.map((img, index) => {
          const status = imageStatuses[img.path];
          return (
            <div
              key={index}
              className={`p-2 rounded text-xs ${
                status ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <div className="flex items-start gap-2">
                {status ? (
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{img.category}</p>
                  <p className={`font-mono ${status ? 'text-green-700' : 'text-red-700'}`}>
                    {img.path}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={checkAllImages}
        className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-semibold"
      >
        Recheck Images
      </button>
    </div>
  );
}
