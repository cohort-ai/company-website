import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BrainCog, Users, Sparkles, Calendar, Rocket } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-16">
      {/* Value Proposition */}
      <section className="text-center">
        <blockquote className="text-2xl md:text-3xl font-semibold text-foreground/90">
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
          <Card className="h-56 flex flex-col transition-transform hover:shadow-lg hover:scale-[1.03]">
            <CardHeader>
              <CardTitle>SME Retailer</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-end">
              <p className="text-sm text-muted-foreground">"With Cohort's AI Advisory, we launched a custom chatbot that reduced support tickets by 40%."</p>
            </CardContent>
          </Card>
          <Card className="h-56 flex flex-col transition-transform hover:shadow-lg hover:scale-[1.03]">
            <CardHeader>
              <CardTitle>Tech Startup</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-end">
              <p className="text-sm text-muted-foreground">"AI Recruitment helped us hire top engineers 2x faster, saving weeks of manual screening."</p>
            </CardContent>
          </Card>
          <Card className="h-56 flex flex-col transition-transform hover:shadow-lg hover:scale-[1.03]">
            <CardHeader>
              <CardTitle>Logistics SME</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-end">
              <p className="text-sm text-muted-foreground">"Cohort's team guided our AI adoption from idea to production, unlocking new revenue streams."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calls to Action */}
      <section className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
        <Button asChild size="lg" className="w-full md:w-auto flex items-center gap-2" variant="default">
          <Link to="/contact">
            <Calendar className="h-5 w-5" />
            Book a Consultation to Discover How AI Can Work for You
          </Link>
        </Button>
        <Button asChild size="lg" className="w-full md:w-auto flex items-center gap-2" variant="secondary">
          <Link to="/solutions/ai-recruitment">
            <Rocket className="h-5 w-5" />
            Try Our AI Recruitment Tool Today
          </Link>
        </Button>
      </section>
    </div>
  );
}
