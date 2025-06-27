import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full mt-12 py-6 bg-background border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm text-muted-foreground px-4">
      <div className="flex flex-col items-center md:items-start">
        <div>
          &copy; {new Date().getFullYear()} Cohort AI. All rights reserved.
        </div>
        <div className="text-xs">This site is for informational purposes only and does not constitute professional advice.</div>
      </div>
      <a
        href="https://www.linkedin.com/company/107527298"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-primary md:ml-auto"
        aria-label="Cohort AI on LinkedIn"
      >
        <FaLinkedin className="h-5 w-5" />
        <span>Connect on LinkedIn</span>
      </a>
    </footer>
  );
}
