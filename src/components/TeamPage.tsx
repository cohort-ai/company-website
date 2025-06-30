import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaLinkedin } from "react-icons/fa";
import rafalPhoto from "@/assets/images/team/rafal.png";
import tonyPhoto from "@/assets/images/team/tony.jpg";
import { PageHeader } from "@/components/ui/PageHeader";

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
    <div className="flex flex-col">
      <PageHeader
        title="Meet the Experts Behind Cohort AI"
        subtitle="We are a team of seasoned technology professionals with decades of collective experience leading major initiatives at large global corporations. Having seen firsthand the transformative power of AI, we founded Cohort AI with a single, clear mission: to democratize access to world-class technological expertise for the businesses that form the backbone of Asia's economy."
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="w-full py-16 px-4 rounded-lg">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="flex flex-col items-center p-6">
                <CardHeader className="flex flex-col items-center w-full">
                  <div className="w-96 h-96 overflow-hidden mb-4 border-2 bg-muted flex items-center justify-center rounded-lg">
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
      </div>
    </div>
  );
}
