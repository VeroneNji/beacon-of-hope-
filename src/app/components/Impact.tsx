import { Users, Heart, Handshake, Home } from "lucide-react";

export function Impact() {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Children Supported",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: Heart,
      number: "1,200+",
      label: "Families Helped",
      color: "bg-red-100 text-red-700",
    },
    {
      icon: Handshake,
      number: "350+",
      label: "Volunteers Engaged",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: Home,
      number: "45+",
      label: "Communities Reached",
      color: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <section id="impact" className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Every number represents a life transformed, a family empowered, and a community strengthened.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Impact Statement */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 italic">
            "Through education, healthcare, and community support, we're not just changing lives today — 
            we're building a brighter tomorrow for all of Cameroon."
          </p>
        </div>
      </div>
    </section>
  );
}
