import { Handshake, Building2 } from "lucide-react";

export function Partners() {
  // Placeholder partner logos with different colors for visual distinction
  const partners = [
    { name: "UN Foundation", color: "from-blue-600 to-blue-700" },
    { name: "Global Health Initiative", color: "from-green-600 to-green-700" },
    { name: "Education First", color: "from-purple-600 to-purple-700" },
    { name: "African Development Bank", color: "from-orange-600 to-orange-700" },
    { name: "World Food Programme", color: "from-red-600 to-red-700" },
    { name: "Community Foundation", color: "from-teal-600 to-teal-700" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Handshake className="w-6 h-6 text-green-600" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              Trusted Collaborations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Working together with organizations and institutions that share our commitment to community development and sustainable impact across Cameroon.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center border border-gray-100 group aspect-square"
            >
              {/* Placeholder Logo with Gradient */}
              <div className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <p className="text-xs text-center text-gray-700 font-semibold">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* Become a Partner CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Become a Partner
                </h3>
                <p className="text-gray-600 mb-4">
                  Join us in creating sustainable impact. We welcome corporate sponsors, NGOs, foundations, and community organizations who share our vision.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>Corporate Social Responsibility Programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>Foundation Partnerships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>Institutional Collaborations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>Community Organization Alliances</span>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-right">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
                  <Handshake className="w-5 h-5" />
                  Partner With Us
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  Contact us to discuss partnership opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Strategic Alignment</h4>
              <p className="text-sm text-gray-600">
                Collaborate on initiatives that align with your organization's mission and values.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Brand Visibility</h4>
              <p className="text-sm text-gray-600">
                Gain recognition through our platforms, events, and community outreach programs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Measurable Impact</h4>
              <p className="text-sm text-gray-600">
                Receive detailed reports on how your partnership creates real community transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
