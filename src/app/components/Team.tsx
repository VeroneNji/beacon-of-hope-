import { Linkedin, Mail, Users } from "lucide-react";
import { images } from "../config/imageConfig";
import { LocalImage } from "./LocalImage";

export function Team() {
  const teamMembers = images.team;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Users className="w-6 h-6 text-green-600" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              Leadership Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals committed to creating lasting change. Our team brings together expertise, passion, and local knowledge to serve communities across Cameroon.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <LocalImage
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links on Hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white hover:bg-green-600 text-gray-900 hover:text-white p-2 rounded-full transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <a 
                    href={`mailto:${member.email}`}
                    className="bg-white hover:bg-green-600 text-gray-900 hover:text-white p-2 rounded-full transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
                
                {/* Email */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-sm text-gray-500 hover:text-green-600 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Want to Join Our Team?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference. Check our current openings or submit your interest.
          </p>
          <button className="bg-white hover:bg-gray-100 text-green-700 font-semibold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl">
            View Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}