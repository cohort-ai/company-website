import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Rocket } from "lucide-react";

// You can replace this with any royalty-free AI/tech video URL
const STOCK_VIDEO_URL = "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4";

export default function HeroCard() {
  return (
    <section className="relative w-full h-auto min-h-[60vh] sm:min-h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src={STOCK_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        Sorry, your browser does not support embedded videos.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Empowering SMEs Across Asia with AI-Driven Growth
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
          We democratize AI to help SMEs unlock growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
          <Button asChild className="w-full sm:w-auto flex items-center gap-2 py-6 px-8 bg-white text-gray-900 hover:bg-gray-100" variant="default">
            <Link to="/contact">
              <Calendar className="h-5 w-5 flex-shrink-0" />
              <span className="whitespace-normal">Book a Consultation</span>
            </Link>
          </Button>
          <Button asChild className="w-full sm:w-auto flex items-center gap-2 py-6 px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900" variant="secondary">
            <Link to="/solutions/ai-recruitment">
              <Rocket className="h-5 w-5 flex-shrink-0" />
              <span className="whitespace-normal">Try our AI Recruitment Platform</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
