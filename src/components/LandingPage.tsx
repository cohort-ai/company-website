import { BrainCog, Users, Sparkles } from "lucide-react";
import { ServiceCard, TestimonialCard } from "@/components/ui/ServiceCard";
import qisRiskLogo from "@/assets/images/testimonials/qis_risk.png";
import dummyImg from "@/assets/images/team/rafal.png";
import HeroCard from "@/components/ui/HeroCard";
import DemoBanner from "@/components/ui/DemoBanner";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Full-width HeroCard */}
      <HeroCard />

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-16">
        {/* Services + Products */}
        <section>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="AI Advisory & Custom Solutions"
              description="Ideation, evaluation, and safe implementation tailored to your business."
              icon={<BrainCog className="h-8 w-8 text-primary" />}
            />
            <ServiceCard
              title="AI Recruitment"
              description="Streamline hiring with our intelligent recruitment platform designed for SMEs."
              icon={<Users className="h-8 w-8 text-primary" />}
            />
            <ServiceCard
              title="More AI-powered tools"
              description="More AI-powered tools coming soon to simplify your workflows."
              icon={<Sparkles className="h-8 w-8 text-primary" />}
            />
          </div>
        </section>

        {/* Case Studies / Success Stories */}
        <section>
          <h2 className="text-xl font-bold mb-6 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              title="SME Retailer"
              testimonial="With Cohort's AI Advisory, we launched a custom chatbot that reduced support tickets by 40%."
              image={dummyImg}
            />
            <TestimonialCard
              title="Digital Assets Platform"
              testimonial="Cohort's team guided our AI adoption from idea to production, unlocking new revenue streams."
              image={qisRiskLogo}
              author="— Fred Cox, Founder"
            />
            <TestimonialCard
              title="Logistics SME"
              testimonial="AI Recruitment helped us hire top engineers 2x faster, saving weeks of manual screening."
              image={dummyImg}
            />
          </div>
        </section>

        {/* Calls to Action */}
        <div className="mt-8">
          <DemoBanner />
        </div>
      </div>
    </div>
  );
}
