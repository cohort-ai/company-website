import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaRocket, FaUsers, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

export default function AIAdvisoryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          AI Advisory Services
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          We serve as your dedicated partner on your AI journey, whether you are taking the first step or looking to accelerate your progress.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRocket className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Expert AI Consulting</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground leading-relaxed">
              We help you identify the most impactful AI opportunities for your business and create a strategic roadmap for implementation.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Hands-On Workshops & Training</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground leading-relaxed">
              We empower your team with the practical skills and knowledge needed to leverage AI tools confidently.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCogs className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Custom AI Solutions</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground leading-relaxed">
              For unique challenges, we design and build bespoke AI systems that deliver a decisive competitive edge.
            </p>
          </CardContent>
        </Card>
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
  );
}
