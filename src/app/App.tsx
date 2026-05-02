import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBadges } from "./components/TrustBadges";
import { About } from "./components/About";
import { Impact } from "./components/Impact";
import { Programs } from "./components/Programs";
import { PhotoGallery } from "./components/PhotoGallery";
import { CTABanner } from "./components/CTABanner";
import { DonationImpact } from "./components/DonationImpact";
import { Donation } from "./components/Donation";
import { MobileMoneyDonation } from "./components/MobileMoneyDonation";
import { GetInvolved } from "./components/GetInvolved";
import { VolunteerSignup } from "./components/VolunteerSignup";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Partners } from "./components/Partners";
import { Newsletter } from "./components/Newsletter";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBadges />
      <About />
      <Impact />
      <Programs />
      <PhotoGallery />
      <CTABanner />
      <DonationImpact />
      <Donation />
      <MobileMoneyDonation />
      <GetInvolved />
      <VolunteerSignup />
      <Testimonials />
      <Team />
      <Partners />
      <Newsletter />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}