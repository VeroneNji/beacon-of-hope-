import { useState } from "react";
import { Button } from "./ui/button";
import { UserPlus, CheckCircle2, Send } from "lucide-react";

export function VolunteerSignup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    reason: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.fullName}! We will contact you soon at ${formData.email} to discuss volunteer opportunities.`);
    setFormData({ fullName: "", email: "", phone: "", city: "", reason: "" });
  };

  return (
    <section id="volunteer-signup" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <UserPlus className="w-6 h-6 text-green-600" />
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                Join Our Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Volunteer With Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Make a real difference in your community. Join our team of dedicated volunteers and help us transform lives across Cameroon.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sign Up as a Volunteer</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+237 6XX XXX XXX"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-900 mb-2">
                    City *
                  </label>
                  <select
                    id="city"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition"
                  >
                    <option value="">Select your city</option>
                    <option value="Buea">Buea</option>
                    <option value="Bamenda">Bamenda</option>
                    <option value="Douala">Douala</option>
                    <option value="Yaoundé">Yaoundé</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Why Volunteer */}
                <div>
                  <label htmlFor="reason" className="block text-sm font-semibold text-gray-900 mb-2">
                    Why do you want to volunteer? *
                  </label>
                  <textarea
                    id="reason"
                    required
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    placeholder="Tell us about your motivation and how you'd like to contribute..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all group"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            </div>

            {/* Benefits Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Volunteer with Beacon of Hope?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Make Real Impact</h4>
                      <p className="text-sm text-green-100">Directly contribute to transforming lives in your community</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Skill Development</h4>
                      <p className="text-sm text-green-100">Gain valuable experience and professional skills</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Community Network</h4>
                      <p className="text-sm text-green-100">Connect with like-minded individuals passionate about change</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Flexible Commitment</h4>
                      <p className="text-sm text-green-100">Choose opportunities that fit your schedule and interests</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3">Volunteer Opportunities</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Education & Tutoring Programs</p>
                  <p>• Community Outreach & Events</p>
                  <p>• Food Distribution & Support</p>
                  <p>• Healthcare Assistance</p>
                  <p>• Administrative & Tech Support</p>
                  <p>• Fundraising & Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
