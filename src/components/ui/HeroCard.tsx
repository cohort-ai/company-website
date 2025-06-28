import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Rocket } from "lucide-react";

// You can replace this with any royalty-free AI/tech video URL
const STOCK_VIDEO_URL = "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4";

export default function HeroCard() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0a1837] to-[#101c2c] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Empowering SMEs Across Asia with AI-Driven Growth
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-8">
            We democratize AI to help SMEs unlock growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button asChild className="w-full sm:w-auto flex items-center gap-2 py-6 px-8 bg-white text-gray-900 hover:bg-gray-100" variant="default">
              <Link to="/contact">
                <Calendar className="h-5 w-5 flex-shrink-0" />
                <span className="whitespace-normal">Book a Consultation</span>
              </Link>
            </Button>
            <Button asChild className="w-full sm:w-auto flex items-center gap-2 py-6 px-8" variant="secondary">
              <Link to="/solutions/ai-recruitment">
                <Rocket className="h-5 w-5 flex-shrink-0" />
                <span className="whitespace-normal">Try AI Recruitment</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Right: Video */}
        <div className="flex-1 flex items-center justify-center w-full max-w-lg">
          <video
            src={STOCK_VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl shadow-3xl w-full h-auto object-cover min-h-[340px] max-h-[600px] bg-black"
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      </div>
    </section>
  );
}
