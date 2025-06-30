import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaRocket, FaUsers, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PageHeader } from "@/components/ui/PageHeader";

export default function AIAdvisoryPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="AI Advisory Services"
        subtitle="We serve as your dedicated partner on your AI journey, whether you are taking the first step or looking to accelerate your progress."
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="Expert AI Consulting"
            description="We help you identify the most impactful AI opportunities for your business and create a strategic roadmap for implementation."
            icon={<FaRocket className="h-8 w-8 text-primary" />}
          />
          <ServiceCard
            title="Hands-On Workshops & Training"
            description="We empower your team with the practical skills and knowledge needed to leverage AI tools confidently."
            icon={<FaUsers className="h-8 w-8 text-primary" />}
          />
          <ServiceCard
            title="Custom AI Solutions"
            description="For unique challenges, we design and build bespoke AI systems that deliver a decisive competitive edge."
            icon={<FaCogs className="h-8 w-8 text-primary" />}
          />
        </div>

        {/* Approach Section */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Our Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our approach is comprehensive and tailored to your unique needs, offering a full spectrum of services designed to transform your business through strategic AI implementation.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
        <Button asChild className="w-full md:w-auto flex items-center gap-2 py-8 rounded-md" variant="default">
            <Link to="/contact">
              <Calendar className="h-5 w-5 flex-shrink-0" />
              <span className="whitespace-normal">Book a Consultation to Discover How AI Can Work for You</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
