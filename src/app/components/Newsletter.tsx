import { useState } from "react";
import { Button } from "./ui/button";
import { Mail, Send, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">Monthly Updates</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Stay Updated
                </h2>
                <p className="text-lg text-green-100 mb-6">
                  Get monthly impact stories, project updates, and exclusive insights delivered straight to your inbox.
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Monthly impact reports and success stories</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Early access to volunteer opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Community event invitations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Exclusive donor updates and transparency reports</span>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div>
                {!subscribed ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="bg-white rounded-2xl p-6 shadow-xl">
                      <label htmlFor="newsletter-email" className="block text-sm font-semibold text-gray-900 mb-3">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        id="newsletter-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition mb-4"
                      />
                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Subscribe Now
                      </Button>
                      <p className="text-xs text-gray-500 text-center mt-3">
                        We respect your privacy. Unsubscribe anytime.
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      You're Subscribed!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for joining our community. Check your inbox for a welcome message.
                    </p>
                  </div>
                )}

                {/* Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <p className="text-2xl font-bold text-white">5,000+</p>
                    <p className="text-xs text-green-100">Newsletter Subscribers</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <p className="text-2xl font-bold text-white">98%</p>
                    <p className="text-xs text-green-100">Engagement Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
