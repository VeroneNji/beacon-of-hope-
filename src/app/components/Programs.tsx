import { Button } from "./ui/button";
import { BookOpen, Utensils, Heart, Users, Building2, ArrowRight } from "lucide-react";

export function Programs() {
  const programs = [
    {
      title: "Education Support",
      description: "Providing school supplies, scholarships, and tutoring programs to ensure every child has access to quality education.",
      image: "https://images.unsplash.com/photo-1523396140703-e5bdad4e5dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY2hpbGRyZW4lMjByZWFkaW5nJTIwYm9va3N8ZW58MXx8fHwxNzcxNjg2NjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: BookOpen,
      color: "bg-green-600",
    },
    {
      title: "Food and Relief Support",
      description: "Distributing meals and essential supplies to families facing food insecurity and economic hardship.",
      image: "https://images.unsplash.com/photo-1561673879-297ac83cafc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZm9vZCUyMHJlbGllZiUyMHN1cHBvcnR8ZW58MXx8fHwxNzcxNjg2NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Utensils,
      color: "bg-yellow-600",
    },
    {
      title: "Healthcare Outreach",
      description: "Organizing medical camps, health screenings, and providing access to essential healthcare services.",
      image: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwaGVhbHRoY2FyZSUyMG1lZGljYWwlMjBvdXRyZWFjaHxlbnwxfHx8fDE3NzE2ODY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Heart,
      color: "bg-red-600",
    },
    {
      title: "Youth Empowerment",
      description: "Training programs in vocational skills, leadership development, and entrepreneurship for young people.",
      image: "https://images.unsplash.com/photo-1627500091632-247f1fb2d1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIweW91dGglMjBlbXBvd2VybWVudCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcxNjg2NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Users,
      color: "bg-blue-600",
    },
    {
      title: "Community Development",
      description: "Building infrastructure, organizing community programs, and fostering sustainable local development.",
      image: "https://images.unsplash.com/photo-1764145162259-04eaf2b3d86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nJTIwaGFwcHl8ZW58MXx8fHwxNzcxNjg2NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Building2,
      color: "bg-purple-600",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive initiatives designed to create lasting change in the lives of those we serve.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 ${program.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>
                  <Button variant="ghost" className="text-green-700 hover:text-green-800 p-0 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
