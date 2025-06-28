import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { ReactNode } from "react";
import { ImageIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export function ServiceCard({ title, description, icon, className = "" }: ServiceCardProps) {
  return (
    <Card className={`h-72 flex flex-col py-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg ${className}`}>
      <CardHeader className="flex flex-col items-center justify-start">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <CardTitle className="text-lg font-bold text-foreground text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center">
        <div className="flex-1" />
        <CardDescription className="text-base text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

interface TestimonialCardProps {
  title: string;
  testimonial: string;
  image?: string; // image URL
  icon?: ReactNode; // fallback icon
  author?: string;
  className?: string;
}

export function TestimonialCard({ title, testimonial, image, icon, author, className = "" }: TestimonialCardProps) {
  return (
    <Card className={`min-h-56 flex flex-col items-center border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg ${className}`}>
      <CardContent className="flex flex-col items-center flex-1 justify-center gap-2 w-full py-6">
        <div className="flex items-center justify-center mb-2" style={{ minHeight: 48, minWidth: 48 }}>
          <div className="  flex items-center justify-center" style={{ minHeight: 48, minWidth: 48, maxHeight: 64, maxWidth: 64 }}>
            {image ? (
              <img src={image} alt={title + ' logo'} style={{ maxHeight: 120, maxWidth: 120, objectFit: 'contain' }} />
            ) : icon ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: 40, maxWidth: 40 }}>
                {icon}
              </span>
            ) : (
              <ImageIcon className="h-6 w-6 text-primary/50" />
            )}
          </div>
        </div>
        <CardTitle className="text-base font-bold text-foreground mt-2 text-center">{title}</CardTitle>
        <p className="text-sm text-muted-foreground text-center mt-2 px-2 break-words whitespace-pre-line">{testimonial}</p>
        {author && <span className="text-xs text-muted-foreground mt-1">{author}</span>}
      </CardContent>
    </Card>
  );
}
