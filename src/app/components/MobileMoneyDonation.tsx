import { useState } from "react";
import { Button } from "./ui/button";
import { Copy, Check, Smartphone, MessageCircle, Shield, Clock } from "lucide-react";

export function MobileMoneyDonation() {
  const [copied, setCopied] = useState(false);
  const mobileMoneyNumber = "+237 652 572 439";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mobileMoneyNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppConfirmation = () => {
    const message = encodeURIComponent("Hello, I just made a donation via Mobile Money. Here are the details:");
    window.open(`https://wa.me/237652572439?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full mb-4 shadow-lg">
              <Smartphone className="w-5 h-5" />
              <span className="text-sm font-semibold">Popular in Cameroon</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Donate via Mobile Money
            </h2>
            <p className="text-lg text-gray-600">
              MTN MoMo / Orange Money - Fast, Secure, and Convenient
            </p>
          </div>

          {/* Main Mobile Money Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-200 mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6 text-white">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Smartphone className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Send Your Donation To:</h3>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {/* Mobile Money Providers */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="bg-yellow-500 rounded-2xl px-8 py-4 shadow-lg">
                  <p className="text-white font-bold text-xl">MTN MoMo</p>
                </div>
                <div className="bg-orange-600 rounded-2xl px-8 py-4 shadow-lg">
                  <p className="text-white font-bold text-xl">Orange Money</p>
                </div>
              </div>

              {/* Phone Number Display */}
              <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 mb-8 border-2 border-orange-300">
                <p className="text-sm font-semibold text-gray-600 text-center mb-3 uppercase tracking-wide">
                  Mobile Money Number
                </p>
                <div className="text-center mb-4">
                  <p className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 tracking-wider">
                    {mobileMoneyNumber}
                  </p>
                  <p className="text-lg text-gray-700 font-semibold">
                    Account Name: <span className="text-green-700">Beacon of Hope</span>
                  </p>
                </div>

                {/* Copy Button */}
                <Button
                  onClick={copyToClipboard}
                  size="lg"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-6 h-6 mr-2" />
                      Number Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-6 h-6 mr-2" />
                      Copy Mobile Money Number
                    </>
                  )}
                </Button>
              </div>

              {/* How to Donate Steps */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border border-green-200">
                <h4 className="font-bold text-gray-900 mb-4 text-center text-lg">
                  📱 How to Donate in 3 Simple Steps
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 mx-auto">
                      1
                    </div>
                    <p className="text-sm text-center text-gray-700">
                      <strong>Open</strong> MTN MoMo or Orange Money app
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 mx-auto">
                      2
                    </div>
                    <p className="text-sm text-center text-gray-700">
                      <strong>Send Money</strong> to +237 652 572 439
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 mx-auto">
                      3
                    </div>
                    <p className="text-sm text-center text-gray-700">
                      <strong>Confirm</strong> on WhatsApp below
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Confirmation Button */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <MessageCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Confirm Your Donation on WhatsApp</h4>
                    <p className="text-sm text-green-100">
                      After donating, please send us a WhatsApp message with your transaction confirmation so we can acknowledge your generous support and send you a receipt.
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleWhatsAppConfirmation}
                  size="lg"
                  className="w-full bg-white hover:bg-gray-100 text-green-700 text-lg py-6 shadow-lg hover:shadow-xl transition-all font-bold"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Send WhatsApp Confirmation
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3">
                  <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">100% Secure</h5>
                    <p className="text-xs text-gray-600">Official Mobile Money account</p>
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 flex items-start gap-3">
                  <div className="bg-green-600 rounded-full p-2 flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">Instant Transfer</h5>
                    <p className="text-xs text-gray-600">Donations processed immediately</p>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 flex items-start gap-3">
                  <div className="bg-yellow-600 rounded-full p-2 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">Receipt Provided</h5>
                    <p className="text-xs text-gray-600">Official donation receipt via WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Donation Amounts */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 text-center mb-4">💚 Popular Donation Amounts</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-green-50 rounded-xl p-4 text-center border-2 border-green-200 hover:border-green-500 transition-colors cursor-pointer">
                <p className="text-xl font-bold text-green-700">5,000 XAF</p>
                <p className="text-xs text-gray-600 mt-1">School supplies</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center border-2 border-green-200 hover:border-green-500 transition-colors cursor-pointer">
                <p className="text-xl font-bold text-green-700">10,000 XAF</p>
                <p className="text-xs text-gray-600 mt-1">Feed a child</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center border-2 border-green-200 hover:border-green-500 transition-colors cursor-pointer">
                <p className="text-xl font-bold text-green-700">25,000 XAF</p>
                <p className="text-xs text-gray-600 mt-1">Family support</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center border-2 border-green-200 hover:border-green-500 transition-colors cursor-pointer">
                <p className="text-xl font-bold text-green-700">50,000 XAF</p>
                <p className="text-xs text-gray-600 mt-1">Healthcare aid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
