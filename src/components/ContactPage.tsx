import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
    <div className="max-w-lg mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4 bg-card p-6 rounded-lg shadow">
        <Input name="name" placeholder="Name" required autoComplete="name" />
        <Input name="company" placeholder="Company" required autoComplete="organization" />
        <Input name="number" placeholder="Phone Number" autoComplete="tel" />
        <Textarea name="message" placeholder="Your message" required rows={5} />
        <Button type="submit" disabled={loading} className="mt-2">
          {loading ? "Sending..." : "Send Message"}
        </Button>
        {status === "success" && <div className="text-green-500 text-center mt-2">Message sent! We'll be in touch soon.</div>}
        {status === "error" && <div className="text-red-500 text-center mt-2">Something went wrong. Please try again.</div>}
      </form>
    </div>
  );
}
