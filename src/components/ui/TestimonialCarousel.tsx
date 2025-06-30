import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

interface TestimonialCardProps {
  title: string;
  testimonial: string;
  image?: string;
  icon?: React.ReactNode;
  author?: string;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialCardProps[];
  interval?: number;
}

const CARD_HEIGHT = 135;
const VISIBLE_CARDS = 3;
const LOGO_SIZE = 15;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export function TestimonialCarousel({ testimonials, interval = 3000 }: TestimonialCarouselProps) {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0); // index of the center card
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev (future-proof)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate indices for prev, current, next, next+1
  const getIndices = () => {
    const len = testimonials.length;
    const prev = (currentIndex - 1 + len) % len;
    const curr = currentIndex;
    const next = (currentIndex + 1) % len;
    const next2 = (currentIndex + 2) % len;
    return [prev, curr, next, next2];
  };
  const indices = getIndices();

  // Start animation every interval
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDirection(1); // always forward for now
      if (isMobile) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        setIsAnimating(true);
        // After animation, update index and reset animation
        animTimeoutRef.current = setTimeout(() => {
          setIsAnimating(false);
          setCurrentIndex((prev) => (prev + direction + testimonials.length) % testimonials.length);
        }, 700); // match transition duration
      }
    }, interval);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    };
  }, [currentIndex, interval, testimonials.length, direction, isMobile]);

  // Calculate translateY: 0 when not animating, -CARD_HEIGHT when animating forward
  const translateY = isMobile ? 0 : isAnimating ? -CARD_HEIGHT * direction : 0;

  // Determine which card is prominent (center)
  // When not animating, center is at position 1
  // When animating, center is at position 2 (the new center after the slide)
  const prominentIndex = isMobile ? 1 : isAnimating ? 2 : 1;

  return (
    <div
      className="relative flex flex-col items-center overflow-hidden"
      style={{ height: isMobile ? CARD_HEIGHT : CARD_HEIGHT * VISIBLE_CARDS, minHeight: isMobile ? CARD_HEIGHT : CARD_HEIGHT * VISIBLE_CARDS }}
    >
      <div
        className="flex flex-col w-full"
        style={{
          transform: `translateY(${translateY}px)` ,
          transition: isMobile ? 'none' : isAnimating ? 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' : 'none',
        }}
      >
        {indices.map((idx, i) => {
          const isCenter = i === prominentIndex;
          const testimonial = testimonials[idx];
          return (
            <div
              key={`testimonial-${idx}-${i}`}
              className={`flex justify-center w-full ${isCenter ? 'z-10' : 'z-0'} ${isCenter ? '' : 'hidden sm:flex'}`}
              style={{
                height: CARD_HEIGHT,
                opacity: isCenter ? 1 : 0.5,
                transform: isCenter ? 'scale(1)' : 'scale(0.92)',
                transition: isMobile ? 'none' : 'opacity 0.7s, transform 0.7s',
                pointerEvents: 'none',
              }}
            >
              <Card className={`w-full ${isCenter ? 'max-w-none sm:max-w-xl' : 'max-w-xl'} min-h-48 flex flex-col items-center border-2 border-primary/20 bg-background transition-all duration-700 ${isCenter ? 'shadow-xl border-primary/40' : 'shadow-none'}`}>
                <CardContent className={`flex flex-row items-center flex-1 justify-center gap-6 w-full py-10 px-2 sm:px-8`}>
                  {/* Logo/Image on the left */}
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-muted rounded-lg overflow-hidden">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.title + ' logo'}
                        className="object-contain w-12 h-12"
                      />
                    ) : testimonial.icon ? (
                      <span className="flex items-center justify-center" style={{ width: LOGO_SIZE, height: LOGO_SIZE }}>
                        {testimonial.icon}
                      </span>
                    ) : (
                      <ImageIcon className="h-6 w-6 text-primary/50" />
                    )}
                  </div>
                  {/* Text content on the right */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <CardTitle className="text-base font-bold text-foreground mb-1 truncate">{testimonial.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-1 break-words whitespace-pre-line leading-relaxed">
                      {testimonial.testimonial}
                    </p>
                    {testimonial.author && (
                      <span className="text-xs text-muted-foreground mt-1 font-medium">{testimonial.author}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
