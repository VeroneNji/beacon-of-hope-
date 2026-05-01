import { useState } from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Check, Lock, Shield, TrendingUp, Users } from "lucide-react";

export function Donation() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const donationOptions = [
    { amount: 10000, label: "10,000 XAF", impact: "Provides school supplies for 5 children" },
    { amount: 25000, label: "25,000 XAF", impact: "Feeds a family for a month" },
    { amount: 50000, label: "50,000 XAF", impact: "Supports healthcare for 10 people" },
    { amount: 100000, label: "100,000 XAF", impact: "Sponsors a child's education for 6 months" },
  ];

  const handleDonation = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount) {
      alert(`Thank you for your donation of ${amount.toLocaleString()} XAF! You will be redirected to our secure payment page.`);
    }
  };

  return (
    <section id="donation-section" className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Lock className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">Secure & Transparent Donations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Support Our Mission
            </h2>
            <p className="text-xl text-green-100">
              Your donation directly transforms lives in Cameroon
            </p>
          </div>

          {/* Donation Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 lg:p-12">
              {/* Trust Message */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-green-50 rounded-xl p-4 flex items-start gap-3">
                  <div className="bg-green-600 rounded-full p-2 flex-shrink-0">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">100% Secure</h4>
                    <p className="text-xs text-gray-600">Bank-grade encryption</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3">
                  <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Direct Impact</h4>
                    <p className="text-xs text-gray-600">100% goes to programs</p>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 flex items-start gap-3">
                  <div className="bg-yellow-600 rounded-full p-2 flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Tax Deductible</h4>
                    <p className="text-xs text-gray-600">Official receipt provided</p>
                  </div>
                </div>
              </div>

              {/* Campaign Progress */}
              <div className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-gray-900">2026 Community Impact Campaign</span>
                  <span className="text-sm font-bold text-green-700">68% Funded</span>
                </div>
                <Progress value={68} className="h-4 mb-3" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-semibold">6,800,000 XAF raised</span>
                  <span>Goal: 10,000,000 XAF</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Join 1,247 donors who have already contributed this month</p>
              </div>

              {/* Donation Amount Options */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  Select Your Donation Amount
                </label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {donationOptions.map((option) => (
                    <button
                      key={option.amount}
                      onClick={() => {
                        setSelectedAmount(option.amount);
                        setCustomAmount("");
                      }}
                      className={`p-4 rounded-xl border-2 transition-all relative ${
                        selectedAmount === option.amount
                          ? "border-green-600 bg-green-50 shadow-lg"
                          : "border-gray-200 hover:border-green-300 hover:shadow-md"
                      }`}
                    >
                      {selectedAmount === option.amount && (
                        <div className="absolute -top-2 -right-2 bg-green-600 rounded-full p-1">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div className="font-bold text-lg text-gray-900 mb-1">
                        {option.label}
                      </div>
                      <div className="text-xs text-gray-600">
                        {option.impact}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Or Enter Custom Amount (XAF)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      placeholder="Enter amount in XAF"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition pl-12"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                      XAF
                    </span>
                  </div>
                </div>
              </div>

              {/* Impact Visualization */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-8 border border-yellow-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  Your Impact Includes:
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Direct community support with zero administrative fees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Monthly impact reports and project updates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tax-deductible official receipt</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Transparent fund tracking and allocation</span>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <Button 
                onClick={handleDonation}
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all"
                disabled={!selectedAmount && !customAmount}
              >
                <Lock className="w-5 h-5 mr-2" />
                Make Secure Donation
              </Button>

              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Secured by industry-standard encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}