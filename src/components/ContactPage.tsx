import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/PageHeader";

const SERVICE_ID = 'service_l97mruk';
const TEMPLATE_ID = 'template_tnp2onj';
const PUBLIC_KEY = 'q75gBBMSjQY2tOkhV';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    if (!form.current) return;
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.current?.reset();
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex flex-col">
      <PageHeader
        title="Demystify AI for your business"
        subtitle="Schedule a consultation today"
      />

      <div className="flex justify-center px-4 py-6 sm:py-12">
        <div className="max-w-2xl w-full">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 bg-card p-6 sm:p-8 rounded-lg shadow-lg">
            <Input name="name" placeholder="Name" required autoComplete="name" className="h-10 sm:h-12 text-base sm:text-lg" />
            <Input name="email" placeholder="Email" type="email" required autoComplete="email" className="h-10 sm:h-12 text-base sm:text-lg" />
            <Input name="company" placeholder="Company" required autoComplete="organization" className="h-10 sm:h-12 text-base sm:text-lg" />
            <Input name="number" placeholder="Phone Number" required autoComplete="tel" className="h-10 sm:h-12 text-base sm:text-lg" />
            <Textarea name="message" placeholder="Your message" required rows={6} className="text-base sm:text-lg min-h-24 sm:min-h-48 sm:rows-12" />
            <Button type="submit" disabled={loading} className="mt-2 sm:mt-4 h-10 sm:h-12 text-base sm:text-lg">
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {status === "success" && <div className="text-green-500 text-center mt-2 sm:mt-4 text-base sm:text-lg">Message sent! We'll be in touch soon.</div>}
            {status === "error" && <div className="text-red-500 text-center mt-2 sm:mt-4 text-base sm:text-lg">Something went wrong. Please try again.</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
