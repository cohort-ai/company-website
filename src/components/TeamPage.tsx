import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaLinkedin } from "react-icons/fa";
import rafalPhoto from "@/assets/images/team/rafal.png";
import tonyPhoto from "@/assets/images/team/tony.jpg";

const team = [
  {
    name: "Tony Ng",
    photo: tonyPhoto,
    linkedin: "https://www.linkedin.com/in/tonyktng/",
    bio: "Tony Ng leads with key recruitment market insights & product design 20+ years experience as a Technology Consultant in London, NYC & HK."
  },
  {
    name: "Rafal Koziarz",
    photo: rafalPhoto,
    linkedin: "https://www.linkedin.com/in/rafalkoziarz/",
    bio: "Rafal Koziarz drives AI and technical development goals with 15 years experience as a Technical Lead & Architect in London & HK."
  }
];

export default function TeamPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Meet the Experts Behind Cohort AI
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          In today's competitive landscape, <span className="font-semibold text-foreground">Artificial Intelligence</span> is not just an advantage – it's a necessity. Yet, for many Small and Medium-sized Enterprises (SMEs) across Asia, the path to AI adoption can seem complex, costly, and out of reach.<br/><br/>
          <span className="font-semibold text-foreground">This is where Cohort AI comes in.</span><br/><br/>
          We are a team of seasoned technology professionals with decades of collective experience leading major initiatives at large global corporations. Having seen firsthand the transformative power of AI, we founded Cohort AI with a single, clear mission: to democratize access to world-class technological expertise for the businesses that form the backbone of Asia's economy.
        </p>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
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

      <section className="w-full bg-gradient-to-br from-[#f0e7ff] via-[#e0f7fa] to-[#fffbe6] py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="flex flex-col items-center p-6">
              <CardHeader className="flex flex-col items-center w-full">
                <div className="w-full h-full overflow-hidden mb-4 border-2 bg-muted flex items-center justify-center rounded-lg">
                  <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <CardDescription className="mb-4 text-center">{member.bio}</CardDescription>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 rounded bg-primary text-white hover:bg-primary/80 transition-colors"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <FaLinkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
