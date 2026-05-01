import { Heart, BookOpen, Utensils, Home, Stethoscope, GraduationCap } from "lucide-react";

export function DonationImpact() {
  const impactLevels = [
    {
      amount: "5,000 XAF",
      icon: BookOpen,
      title: "School Supplies Package",
      description: "Provides notebooks, pens, and learning materials for 3 children",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      amount: "10,000 XAF",
      icon: Utensils,
      title: "Feed a Child for a Month",
      description: "Nutritious meals to support healthy growth and learning",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      amount: "25,000 XAF",
      icon: Home,
      title: "Support a Family",
      description: "Food, essential supplies, and emergency assistance for a month",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      amount: "50,000 XAF",
      icon: Stethoscope,
      title: "Healthcare Support",
      description: "Medical care, medicines, and health services for 10 people",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      amount: "100,000 XAF",
      icon: GraduationCap,
      title: "Education Scholarship",
      description: "Full school fees and supplies for a child for 6 months",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4 shadow-lg">
            <Heart className="w-5 h-5 fill-white" />
            <span className="text-sm font-semibold">Your Impact Matters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See the Impact of Your Donation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every franc makes a difference. Here's exactly how your generosity transforms lives in our communities.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {impactLevels.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${impact.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-10 h-10" />
                    <p className="text-2xl font-bold">{impact.amount}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {impact.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {impact.description}
                  </p>

                  {/* Visual Impact Bar */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Heart className={`w-4 h-4 ${impact.iconColor} fill-current`} />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${impact.color} h-2 rounded-full`} style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-600">100%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Direct community impact - zero overhead
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center max-w-4xl mx-auto shadow-2xl">
          <Heart className="w-16 h-16 mx-auto mb-4 fill-white" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            Choose any amount that speaks to your heart. Every donation, no matter the size, creates ripples of hope and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-green-700 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Donate Now
            </button>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-green-800 hover:bg-green-900 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Learn More About Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
