import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/images/logo.png";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b border-border px-4 py-2 flex items-center justify-between">
      {/* Logo always visible */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Cohort Logo" className="h-10 w-auto" />
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="font-medium px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col gap-2 min-w-[320px] p-4">
                  <NavigationMenuLink asChild>
                    <Link to="/solutions/ai-advisory" className="block group px-4 py-3 rounded hover:bg-primary/10 transition-colors">
                      <div className="font-semibold text-base text-foreground">AI Advisory</div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary mt-1">Discover How AI Can Work for You</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/solutions/ai-recruitment" className="block group px-4 py-3 rounded hover:bg-primary/10 transition-colors">
                      <div className="font-semibold text-base text-foreground">AI Recruitment</div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary mt-1">Try our AI Recruitment Tool</div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className="font-medium px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact" className="font-medium px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64" onOpenAutoFocus={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2 p-4">
              <Link to="/" className="flex items-center gap-2 mb-4" onClick={handleLinkClick}>
                <img src={logo} alt="Cohort Logo" className="h-10 w-auto" />
              </Link>
              <Link to="/" className="font-medium py-2 rounded hover:bg-primary hover:text-white" onClick={handleLinkClick}>Home</Link>
              <div>
                <div className="font-medium py-2">Solutions</div>
                <div className="pl-4 flex flex-col gap-1">
                  <Link to="/solutions/ai-advisory" className="py-1 rounded hover:bg-primary hover:text-white" onClick={handleLinkClick}>AI Advisory</Link>
                  <Link to="/solutions/ai-recruitment" className="py-1 rounded hover:bg-primary hover:text-white" onClick={handleLinkClick}>AI Recruitment</Link>
                </div>
              </div>
              <Link to="/about" className="font-medium py-2 rounded hover:bg-primary hover:text-white" onClick={handleLinkClick}>About</Link>
              <Link to="/contact" className="font-medium py-2 rounded hover:bg-primary hover:text-white" onClick={handleLinkClick}>Contact</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
