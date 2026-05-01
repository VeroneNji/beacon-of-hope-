import { Button } from "./ui/button";
import { HandHeart, Building, HeartHandshake } from "lucide-react";

export function GetInvolved() {
  const opportunities = [
    {
      icon: HandHeart,
      title: "Volunteer With Us",
      description: "Help directly in community programs and make a hands-on difference in people's lives.",
      buttonText: "Become a Volunteer",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700",
    },
    {
      icon: Building,
      title: "Partner With Us",
      description: "Collaborate as an organization or company to amplify our impact and reach more communities.",
      buttonText: "Explore Partnership",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      icon: HeartHandshake,
      title: "Sponsor a Cause",
      description: "Help support children, families, and communities through dedicated sponsorship programs.",
      buttonText: "Sponsor Now",
      color: "bg-yellow-600",
      hoverColor: "hover:bg-yellow-700",
    },
  ];

  return (
    <section id="get-involved" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            There are many ways to support our mission and make a lasting impact on communities in Cameroon.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className={`${opportunity.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600 mb-6 min-h-[4rem]">
                  {opportunity.description}
                </p>
                <Button 
                  className={`w-full ${opportunity.color} ${opportunity.hoverColor} text-white`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {opportunity.buttonText}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
            Join our community of changemakers and help us transform lives across Cameroon.
          </p>
          <Button 
            size="lg"
            className="bg-white text-green-700 hover:bg-green-50"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
}
