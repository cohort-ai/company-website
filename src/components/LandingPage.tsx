import { BrainCog, Users, Sparkles } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import qisRiskLogo from "@/assets/images/testimonials/qis_risk.png";
import dummyImg from "@/assets/images/logo.png";
import HeroCard from "@/components/ui/HeroCard";
import DemoBanner from "@/components/ui/DemoBanner";

const testimonials = [
  {
    title: "SME Retailer",
    testimonial: "With Cohort's AI Advisory, we launched a custom chatbot that reduced support tickets by 40%.",
    image: dummyImg,
  },
  {
    title: "Digital Assets Platform",
    testimonial: "Cohort's team guided our AI adoption from idea to production, unlocking new revenue streams.",
    image: qisRiskLogo,
    author: "— Fred Cox, Founder",
  },
  {
    title: "Logistics SME",
    testimonial: "AI Recruitment helped us hire top engineers 2x faster, saving weeks of manual screening.",
    image: dummyImg,
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Full-width HeroCard */}
      <HeroCard />

      {/* Main content container */}
      <div className="w-full sm:max-w-6xl mx-auto px-0 sm:px-4 py-8 sm:py-12 flex flex-col gap-12 sm:gap-16">
        {/* Services + Products */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            <ServiceCard
              title="AI Advisory & Custom Solutions"
              description="Ideation, evaluation, and safe implementation tailored to your business."
              icon={<BrainCog className="h-8 w-8 text-primary" />}
              className="w-full"
            />
            <ServiceCard
              title="AI Recruitment"
              description="Streamline hiring with our intelligent recruitment platform designed for SMEs."
              icon={<Users className="h-8 w-8 text-primary" />}
              className="w-full"
            />
            <ServiceCard
              title="More AI-powered tools"
              description="More AI-powered tools coming soon to simplify your workflows."
              icon={<Sparkles className="h-8 w-8 text-primary" />}
              className="w-full"
            />
          </div>
        </section>

        {/* Case Studies / Success Stories */}
        <section className="w-full">
          <h2 className="text-xl font-bold mb-6 text-center">Success Stories</h2>
          <div className="w-full">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* Calls to Action */}
        <div className="mt-8 w-full">
          <DemoBanner />
        </div>
      </div>
    </div>
  );
}
