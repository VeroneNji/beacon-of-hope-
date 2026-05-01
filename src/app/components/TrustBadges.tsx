import { Shield, Award, Lock, Users, CheckCircle2, FileCheck } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Legally Registered",
      subtitle: "Nonprofit Organization",
      description: "Fully registered and compliant with Cameroonian nonprofit regulations",
      color: "from-green-600 to-green-700",
      accentColor: "text-green-700",
      bgColor: "bg-green-50",
    },
    {
      icon: FileCheck,
      title: "100% Transparent",
      subtitle: "Financial Reporting",
      description: "Complete transparency in how every donation is utilized and tracked",
      color: "from-blue-600 to-blue-700",
      accentColor: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: Lock,
      title: "Secure Donations",
      subtitle: "Protected Payments",
      description: "Bank-grade security for all transactions and donor information",
      color: "from-red-600 to-red-700",
      accentColor: "text-red-700",
      bgColor: "bg-red-50",
    },
    {
      icon: Award,
      title: "Community Verified",
      subtitle: "Trusted Partner",
      description: "Recognized and trusted by local communities and international partners",
      color: "from-yellow-600 to-yellow-700",
      accentColor: "text-yellow-700",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              Trust & Credibility
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Trusted by Community Members and Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to transparency, accountability, and impact is recognized across Cameroon and beyond.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-100 group"
              >
                {/* Icon with Gradient Background */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className={`font-bold text-base ${badge.accentColor} mb-1`}>
                    {badge.title}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                    {badge.subtitle}
                  </p>
                  <p className="text-sm text-gray-600">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 rounded-full p-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">5,000+</p>
                <p className="text-sm text-gray-600">Lives Transformed</p>
              </div>
            </div>
            
            <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
            
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 rounded-full p-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Accountability</p>
              </div>
            </div>
            
            <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
            
            <div className="flex items-center gap-4">
              <div className="bg-red-600 rounded-full p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">5+ Years</p>
                <p className="text-sm text-gray-600">Community Trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
