import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaHeart, FaBrain, FaHandshake } from "react-icons/fa";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { useState } from "react";
import { mailerlite } from "@/services/mailerlite";

const MAILERLITE_GROUP = 'recruitment-ai';

export default function AIRecruitmentPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");

    const result = await mailerlite.addSubscriber(email, MAILERLITE_GROUP);

    if (result.success) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
      console.error("MailerLite error:", result.error);
    }
  };

  return (
    <div className="flex flex-col">
      <PageHeader
        title="Human-Centric AI for Smarter Recruitment"
        subtitle="Workforce is an AI-powered virtual recruitment agent designed to transform hiring by combining intelligent technology with personalized career coaching. We help companies find the right talent and empower candidates to discover and achieve their ideal careers."
      />

      {/* Waitlist Section */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get Early Access
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be among the first to experience the future of recruitment. Join forward-thinking companies and candidates already on our waitlist.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {status === "success" ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-500 mb-2">You're on the list!</h3>
                <p className="text-muted-foreground">Thanks for joining! We'll notify you when Workforce launches.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      disabled={status === "loading"}
                      className="h-12 text-base bg-background/50 backdrop-blur-sm border-primary/30 focus:border-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="h-12 px-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Joining...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 mr-2" />
                        Join Waitlist
                      </>
                    )}
                  </Button>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong. Please try again.
                  </div>
                )}

                <p className="text-xs text-muted-foreground text-center">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Personalized Career Coaching"
            description="Our AI helps candidates explore their career goals, providing tailored guidance and building profiles that go beyond CV/resumes to include aspirations and potential."
            icon={<FaHeart className="h-8 w-8 text-primary" />}
          />
          <ServiceCard
            title="Intelligent Job & Team Profiling"
            description="We analyze job roles and hiring teams deeply to identify critical success factors, ensuring candidates are matched not just by skills but by fit and potential."
            icon={<FaBrain className="h-8 w-8 text-primary" />}
          />
          <ServiceCard
            title="Human-AI Collaboration"
            description="Workforce augments recruiters and hiring managers by automating routine tasks while preserving human judgment for nuanced decisions, creating a balanced and effective hiring process."
            icon={<FaHandshake className="h-8 w-8 text-primary" />}
          />
        </div>
      </div>
    </div>
  );
}
