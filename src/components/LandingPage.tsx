import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BrainCog, Users, Sparkles, Calendar, Rocket, Store, Truck } from "lucide-react";
import qisRiskLogo from "@/assets/images/testimonials/qis_risk.png";

export default function LandingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-16">
      {/* Value Proposition */}
      <section className="text-center">
        <blockquote className="text-2xl md:text-3xl font-semibold text-foreground/90 italic">
          From expert guidance to innovative AI tools like AI Recruitment, we help SMEs across Asia unlock AI's potential - whether you need a trusted partner to start your AI journey or ready-made solutions to accelerate growth.
        </blockquote>
      </section>

      {/* Services + Products */}
      <section>
        <div className="grid md:grid-cols-3 gap-6">
          {/* AI Advisory & Custom Solutions */}
          <Card className="h-72 flex flex-col py-6 transition-transform hover:shadow-lg hover:scale-[1.03]">
            <CardHeader className="flex flex-col items-center justify-start">
              <CardTitle className="text-lg font-bold text-foreground">AI Advisory & Custom Solutions</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center justify-center">
              <BrainCog className="h-12 w-12 text-primary mb-2" />
              <div className="flex-1" />
              <CardDescription className="text-base">
                Ideation, evaluation, and safe implementation tailored to your business.
              </CardDescription>
            </CardContent>
          </Card>
          {/* AI Recruitment */}
          <Card className="h-72 flex flex-col py-6 transition-transform hover:shadow-lg hover:scale-[1.03]">
            <CardHeader className="flex flex-col items-center justify-start">
              <CardTitle className="text-lg font-bold text-foreground">AI Recruitment</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center justify-center">
              <Users className="h-12 w-12 text-primary mb-2" />
              <div className="flex-1" />
              <CardDescription className="text-base">
                Streamline hiring with our intelligent recruitment platform designed for SMEs.
              </CardDescription>
            </CardContent>
          </Card>
          {/* More AI-powered tools */}
          <Card className="h-72 flex flex-col py-6 transition-transform hover:shadow-lg hover:scale-[1.03]">
            <CardHeader className="flex flex-col items-center justify-start">
              <CardTitle className="text-lg font-bold text-foreground">More AI-powered tools</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center justify-center">
              <Sparkles className="h-12 w-12 text-primary mb-2" />
              <div className="flex-1" />
              <CardDescription className="text-base">
                More AI-powered tools coming soon to simplify your workflows.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies / Success Stories */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* SME Retailer */}
          <Card className="h-56 flex flex-col items-center transition-transform hover:shadow-lg hover:scale-[1.03]">
            <CardContent className="flex flex-col items-center flex-1 justify-center gap-2 w-full">
              <Store className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-base font-bold text-foreground mt-2">SME Retailer</CardTitle>
              <p className="text-sm text-muted-foreground text-center mt-2">"With Cohort's AI Advisory, we launched a custom chatbot that reduced support tickets by 40%."</p>
            </CardContent>
          </Card>
          {/* Digital Assets Platform (QIS Risk) */}
          <Card className="h-56 flex flex-col items-center transition-transform hover:shadow-lg hover:scale-[1.03]">
            <CardContent className="flex flex-col items-center flex-1 justify-center gap-2 w-full">
              <img src={qisRiskLogo} alt="QIS Risk Logo" className="h-10 mb-2" />
              <CardTitle className="text-base font-bold text-foreground mt-2">Digital Assets Platform</CardTitle>
              <p className="text-sm text-muted-foreground text-center mt-2">"Cohort's team guided our AI adoption from idea to production, unlocking new revenue streams."</p>
              <span className="text-xs text-muted-foreground mt-1">— Fred Cox, Founder</span>
            </CardContent>
          </Card>
          {/* Logistics SME */}
          <Card className="h-56 flex flex-col items-center transition-transform hover:shadow-lg hover:scale-[1.03]">
            <CardContent className="flex flex-col items-center flex-1 justify-center gap-2 w-full">
              <Truck className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-base font-bold text-foreground mt-2">Logistics SME</CardTitle>
              <p className="text-sm text-muted-foreground text-center mt-2">"AI Recruitment helped us hire top engineers 2x faster, saving weeks of manual screening."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calls to Action */}
      <section className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center mt-8 w-full">
        <Button asChild className="w-full md:w-auto flex items-center gap-2 py-8 rounded-md" variant="default">
          <Link to="/contact">
            <Calendar className="h-5 w-5 flex-shrink-0" />
            <span className="whitespace-normal">Book a Consultation to Discover How AI Can Work for You</span>
          </Link>
        </Button>
        <Button asChild className="w-full md:w-auto flex items-center gap-2 py-8 rounded-md" variant="secondary">
          <Link to="/solutions/ai-recruitment">
            <Rocket className="h-5 w-5 flex-shrink-0" />
            <span className="whitespace-normal">Try Our AI Recruitment Tool Today</span>
          </Link>
        </Button>
      </section>
    </div>
  );
}
