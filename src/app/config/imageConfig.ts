/**
 * CENTRALIZED IMAGE CONFIGURATION
 * 
 * HOW TO ADD YOUR OWN IMAGES:
 * 1. Create folder: /public/images/
 * 2. Add your images to the appropriate subfolders
 * 3. Update the paths below to match your image filenames
 * 
 * FOLDER STRUCTURE:
 * /public/images/
 *   ├── hero/           (Hero section background)
 *   ├── gallery/        (Photo gallery images)
 *   ├── team/           (Team member photos)
 *   ├── cta/            (Call-to-action banner)
 *   └── testimonials/   (Testimonial photos)
 */

export const images = {
  // Hero Section
  hero: {
    background: "/images/hero/hero-background.jpg",
    // Alternative: You can use a solid color or gradient instead
  },

  // Photo Gallery Section - "Our Work in Action"
  gallery: [
    {
      url: "/images/gallery/children-education.jpg",
      title: "Children Support",
      description: "Providing quality education to children across Cameroon"
    },
    {
      url: "/images/gallery/food-distribution.jpg",
      title: "Food Distribution",
      description: "Ensuring families have access to nutritious meals"
    },
    {
      url: "/images/gallery/volunteers-working.jpg",
      title: "Volunteers Working",
      description: "Our dedicated volunteers making a difference daily"
    },
    {
      url: "/images/gallery/community-outreach.jpg",
      title: "Community Outreach",
      description: "Building stronger connections within communities"
    },
    {
      url: "/images/gallery/children-playing.jpg",
      title: "Children Support",
      description: "Creating safe spaces for children to learn and play"
    },
    {
      url: "/images/gallery/healthcare-services.jpg",
      title: "Healthcare Services",
      description: "Providing essential healthcare to underserved communities"
    }
  ],

  // CTA Banner Background
  ctaBanner: {
    background: "/images/cta/emotional-banner.jpg"
  },

  // Team Members
  team: [
    {
      name: "Dr. Amina Njoh",
      role: "Founder & Executive Director",
      image: "/images/team/founder.jpg",
      description: "With over 15 years of experience in nonprofit leadership, Dr. Njoh founded Beacon of Hope to create sustainable community development solutions across Cameroon.",
      email: "amina@beaconofhope.org"
    },
    {
      name: "Emmanuel Tanyi",
      role: "Programs Coordinator",
      image: "/images/team/coordinator.jpg",
      description: "Emmanuel oversees all community programs, ensuring quality implementation and measurable impact. His dedication has transformed educational opportunities for thousands.",
      email: "emmanuel@beaconofhope.org"
    },
    {
      name: "Grace Mbah",
      role: "Volunteer Coordinator",
      image: "/images/team/volunteer-coordinator.jpg",
      description: "Grace manages our growing network of 200+ volunteers, matching skills with community needs. Her passion for people mobilization drives our grassroots impact.",
      email: "grace@beaconofhope.org"
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Marie Kouam",
      role: "Parent, Buea",
      image: "/images/testimonials/testimonial-1.jpg",
      quote: "Beacon of Hope gave my daughter the chance to go to school. Today, she dreams of becoming a doctor. Thank you for believing in our children."
    },
    {
      name: "Dr. Joseph Ngwa",
      role: "Community Leader, Bamenda",
      image: "/images/testimonials/testimonial-2.jpg",
      quote: "I've seen many organizations come and go, but Beacon of Hope is different. They listen to our community and create solutions that actually work."
    },
    {
      name: "Sarah Williams",
      role: "International Donor, UK",
      image: "/images/testimonials/testimonial-3.jpg",
      quote: "The transparency and regular updates I receive give me complete confidence that my donations are making a real difference in Cameroon."
    }
  ]
};

// Placeholder/fallback image (uses Tailwind gradient if image is missing)
export const placeholderConfig = {
  useGradient: true,
  gradientClass: "bg-gradient-to-br from-green-600 to-green-700",
  fallbackText: "Beacon of Hope"
};
