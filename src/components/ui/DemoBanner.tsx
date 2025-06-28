import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function DemoBanner() {
  return (
    <section className="w-full rounded-3xl p-10 md:p-16 bg-gradient-to-br from-[#e8f6d2] via-[#d6f0fa] to-[#ffe6d2]">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Discover How AI Can Work for You
        </h2>
        <p className="text-lg md:text-2xl text-gray-800 max-w-2xl">
          The best way to understand what AI could do for you is to see it in action. Sign up for a consultation or try our recruitment tool today.
        </p>
        <div className="flex flex-col sm:flex-row mt-2">
          <Button asChild className="flex items-center gap-2 px-8 py-5 text-lg font-medium bg-gray-900 text-white hover:bg-gray-800 rounded-none rounded-l-lg" variant="default">
            <Link to="/contact">
              Request a Consultation
              <ArrowUpRight className="h-6 w-6" />
            </Link>
          </Button>
          <Button asChild className="flex items-center gap-2 px-8 py-5 text-lg font-medium bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 rounded-none rounded-r-lg" variant="secondary">
            <Link to="/solutions/ai-recruitment">
              Try our AI Recruitment Tool Today
              <ArrowUpRight className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
