import { Shield, Target, Eye, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1615463669098-521a22047a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW1lcm9vbiUyMGNvbW11bml0eSUyMHN1cHBvcnQlMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzE2ODY2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Community support"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Beacon of Hope
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Beacon of Hope is a legally registered nonprofit organization dedicated to 
              transforming lives and empowering communities across Cameroon. Founded on the 
              principles of compassion, transparency, and sustainable development, we work 
              tirelessly to create lasting positive change.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our work began in the vibrant communities of Buea and Bamenda, where we've 
              witnessed firsthand the transformative power of education, healthcare, and 
              community support. As we grow, we're committed to expanding our impact across 
              the entire nation.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-700" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower vulnerable communities through sustainable programs in education, 
                    healthcare, and social development, creating pathways to self-sufficiency and hope.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-yellow-700" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    A thriving Cameroon where every individual has access to quality education, 
                    healthcare, and opportunities to build a better future for themselves and their families.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-red-700" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Legal Registration</h3>
                  <p className="text-gray-700">
                    We are a legally registered nonprofit organization operating with full transparency 
                    and accountability to our donors, partners, and the communities we serve.
                  </p>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-green-700" />
                <h3 className="font-bold text-lg text-gray-900">Our Locations</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Currently Operating: Buea and Bamenda</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-gray-700">Future Expansion: Nationwide across Cameroon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
