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
 *   └── logo/           (Website logo)
 */

export const images = {
  // Logo
  logo: "/images/logo/6028089752625548218_120.png",

  // Hero Section
  hero: {
    background: "/images/gallery/6028089752625548259_121.jpg",
    // Alternative: You can use a solid color or gradient instead
  },

  // Photo Gallery Section - "Our Work in Action"
  gallery: [
    {
      url: "/images/gallery/6028089752625548221_121.jpg",
      title: "Children Education",
      description: "Providing quality education to children across Cameroon"
    },
    {
      url: "/images/gallery/6028089752625548222_121.jpg",
      title: "Food Distribution",
      description: "Ensuring families have access to nutritious meals"
    },
    {
      url: "/images/gallery/6028089752625548223_120.jpg",
      title: "Classroom Learning",
      description: "Creating engaging learning environments for children"
    },
    {
      url: "/images/gallery/6028089752625548224_120.jpg",
      title: "Study Groups",
      description: "Children working together and supporting each other's learning"
    },
    {
      url: "/images/gallery/6028089752625548225_121.jpg",
      title: "Volunteers Working",
      description: "Our dedicated volunteers making a difference daily"
    },
    {
      url: "/images/gallery/6028089752625548226_121.jpg",
      title: "Community Outreach",
      description: "Building stronger connections within communities"
    },
    {
      url: "/images/gallery/6028089752625548227_121.jpg",
      title: "Children Playing",
      description: "Creating safe spaces for children to learn and play"
    },
    {
      url: "/images/gallery/6028089752625548228_120.jpg",
      title: "Outdoor Activities",
      description: "Engaging children in outdoor learning and recreation"
    },
    {
      url: "/images/gallery/6028089752625548229_120.jpg",
      title: "Creative Arts",
      description: "Nurturing creativity through arts and cultural activities"
    },
    {
      url: "/images/gallery/6028089752625548230_120.jpg",
      title: "Sports Programs",
      description: "Promoting physical health and teamwork through sports"
    },
    {
      url: "/images/gallery/6028089752625548231_121.jpg",
      title: "Healthcare Services",
      description: "Providing essential healthcare to underserved communities"
    },
    {
      url: "/images/gallery/6028089752625548232_121.jpg",
      title: "Medical Checkups",
      description: "Regular health screenings and preventive care for children"
    },
    {
      url: "/images/gallery/6028089752625548233_121.jpg",
      title: "Nutrition Programs",
      description: "Ensuring children receive proper nutrition for healthy development"
    },
    {
      url: "/images/gallery/6028089752625548234_121.jpg",
      title: "Community Gatherings",
      description: "Bringing communities together for shared learning and support"
    },
    {
      url: "/images/gallery/6028089752625548235_121.jpg",
      title: "Workshop Training",
      description: "Skills development workshops for community members"
    },
    {
      url: "/images/gallery/6028089752625548236_121.jpg",
      title: "Parent Meetings",
      description: "Engaging parents in their children's education journey"
    },
    {
      url: "/images/gallery/6028089752625548237_121.jpg",
      title: "Library Time",
      description: "Encouraging reading and literacy development"
    },
    {
      url: "/images/gallery/6028089752625548238_121.jpg",
      title: "Science Activities",
      description: "Hands-on science learning and discovery"
    },
    {
      url: "/images/gallery/6028089752625548239_121.jpg",
      title: "Music Classes",
      description: "Developing musical talents and appreciation"
    },
    {
      url: "/images/gallery/6028089752625548240_121.jpg",
      title: "Computer Training",
      description: "Digital literacy and technology skills development"
    },
            {
      url: "/images/gallery/6028089752625548243_121.jpg",
      title: "Clean Water Initiative",
      description: "Providing access to clean drinking water in communities"
    },
    {
      url: "/images/gallery/6028089752625548244_120.jpg",
      title: "Sanitation Programs",
      description: "Promoting hygiene and proper sanitation practices"
    },
    {
      url: "/images/gallery/6028089752625548247_120.jpg",
      title: "Mentorship Sessions",
      description: "One-on-one guidance and support for children"
    },
    {
      url: "/images/gallery/6028089752625548248_120.jpg",
      title: "Career Guidance",
      description: "Helping youth explore future opportunities"
    },
    {
      url: "/images/gallery/6028089752625548249_120.jpg",
      title: "Leadership Training",
      description: "Developing tomorrow's community leaders"
    },
    {
      url: "/images/gallery/6028089752625548250_120.jpg",
      title: "Cultural Events",
      description: "Celebrating diversity and cultural heritage"
    },
    {
      url: "/images/gallery/6028089752625548251_120.jpg",
      title: "Holiday Programs",
      description: "Special activities during school holidays"
    },
    {
      url: "/images/gallery/6028089752625548258_121.jpg",
      title: "Community Service",
      description: "Youth giving back to their communities"
    },
    {
      url: "/images/gallery/6028089752625548259_121.jpg",
      title: "Achievement Celebration",
      description: "Recognizing student accomplishments and milestones"
    }
  ],

  // CTA Banner Background
  ctaBanner: {
    background: "/images/cta/6028089752625548258_121.jpg"
  },

  // Team Members
  team: [
    {
      name: "President",
      role: "President & Founder",
      image: "/images/team/our president.jpg",
      description: "Visionary leader with over 15 years of nonprofit experience, founding Beacon of Hope to create sustainable community development solutions across Cameroon.",
      email: "president@beaconofhope.org"
    },
    {
      name: "CEO",
      role: "Chief Executive Officer",
      image: "/images/team/our ceo.jpg",
      description: "Strategic leader driving organizational excellence and program implementation, ensuring Beacon of Hope achieves its mission and creates lasting impact.",
      email: "ceo@beaconofhope.org"
    },
    {
      name: "Volunteer Network",
      role: "Community Mobilizers",
      image: "/images/team/6028089752625548245_121.jpg",
      description: "Our growing network of 200+ volunteers making grassroots impact and matching skills with community needs.",
      email: "volunteers@beaconofhope.org"
    },
    {
      name: "Education Team",
      role: "Learning & Development",
      image: "/images/team/6028089752625548246_121.jpg",
      description: "Dedicated educators transforming learning opportunities and empowering children through quality education programs.",
      email: "education@beaconofhope.org"
    },
    {
      name: "Healthcare Team",
      role: "Medical Services",
      image: "/images/team/6028089752625548255_121.jpg",
      description: "Compassionate healthcare professionals providing essential medical services to underserved communities.",
      email: "healthcare@beaconofhope.org"
    },
    {
      name: "Outreach Team",
      role: "Community Engagement",
      image: "/images/team/6028089752625548256_121.jpg",
      description: "Dynamic outreach specialists building strong community connections and fostering sustainable development.",
      email: "outreach@beaconofhope.org"
    },
    {
      name: "Youth Programs",
      role: "Young Leaders",
      image: "/images/team/6028089752625548257_121.jpg",
      description: "Energetic youth leaders creating safe spaces and opportunities for children to learn, play and grow.",
      email: "youth@beaconofhope.org"
    },
    {
      name: "Support Team",
      role: "Operations & Logistics",
      image: "/images/team/6028089752625548260_121.jpg",
      description: "Essential support staff ensuring smooth operations and effective resource management for all programs.",
      email: "support@beaconofhope.org"
    },
    {
      name: "Field Team",
      role: "Ground Operations",
      image: "/images/team/6028089752625548261_121.jpg",
      description: "Hardworking field teams implementing projects directly in communities and creating lasting impact.",
      email: "field@beaconofhope.org"
    },
      ],

  // Testimonials
  testimonials: [
    {
      name: "Parent Community",
      role: "Buea Families",
      image: "/images/testimonials/6028089752625548234_121.jpg",
      quote: "Beacon of Hope gave our children the chance to go to school. Today, they dream of becoming doctors, teachers, and leaders. Thank you for believing in our children's future."
    },
    {
      name: "Community Leaders",
      role: "Bamenda Representatives",
      image: "/images/testimonials/6028089752625548235_121.jpg",
      quote: "We've seen many organizations come and go, but Beacon of Hope is different. They listen to our communities and create solutions that actually work and last."
    },
    {
      name: "International Partners",
      role: "Global Supporters",
      image: "/images/testimonials/6028089752625548250_120.jpg",
      quote: "The transparency and regular updates we receive give us complete confidence that our donations are making a real difference in Cameroon's communities."
    },
    {
      name: "Beneficiary Groups",
      role: "Program Participants",
      image: "/images/testimonials/6028089752625548259_121.jpg",
      quote: "Through Beacon of Hope programs, we've gained skills, confidence, and hope. Our community is stronger and our children have brighter futures."
    }
  ]
};

// Placeholder/fallback image (uses Tailwind gradient if image is missing)
export const placeholderConfig = {
  useGradient: true,
  gradientClass: "bg-gradient-to-br from-green-600 to-green-700",
  fallbackText: "Beacon of Hope"
};
