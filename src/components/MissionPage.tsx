import { PageHeader } from "@/components/ui/PageHeader";

export default function MissionPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Our Mission"
        subtitle="In today's competitive landscape, Artificial Intelligence is not just an advantage – it's a necessity. Yet, for many Small and Medium-sized Enterprises (SMEs) across Asia, the path to AI adoption can seem complex, costly, and out of reach."
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center"></h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              At Cohort AI, we believe that the future belongs to everyone. We are here to bridge the gap between ambition and execution, making the power of Artificial Intelligence accessible, understandable, and profitable for your business.
            </p>
            <p>
              Empowering small and medium enterprises across Asia to unlock the full potential of artificial intelligence by providing accessible education, tailored workflow solutions, and practical tools - democratizing AI adoption so every business can thrive in the digital era.
            </p>
            <p>
              We serve as your dedicated partner on your AI journey, whether you are taking the first step or looking to accelerate your progress.
            </p>
            <p className="font-semibold text-foreground">
              Let us be the expert cohort on your side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
