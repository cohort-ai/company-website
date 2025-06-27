import { Link } from "react-router-dom";
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
  return (
    <nav className="w-full bg-background/80 backdrop-blur border-b border-border px-4 py-2 flex items-center justify-between">
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
                <Link to="/" className="font-medium px-4 py-2 hover:text-primary transition-colors">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col min-w-[180px] p-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/solutions/ai-advisory" className="block px-4 py-2 hover:bg-muted rounded">AI Advisory</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/solutions/ai-recruitment" className="block px-4 py-2 hover:bg-muted rounded">AI Recruitment</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className="font-medium px-4 py-2 hover:text-primary transition-colors">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/team" className="font-medium px-4 py-2 hover:text-primary transition-colors">Team</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact" className="font-medium px-4 py-2 hover:text-primary transition-colors">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <div className="flex flex-col gap-2 p-4">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Cohort Logo" className="h-10 w-auto" />
              </Link>
              <Link to="/" className="font-medium py-2">Home</Link>
              <div>
                <div className="font-medium py-2">Solutions</div>
                <div className="pl-4 flex flex-col gap-1">
                  <Link to="/solutions/ai-advisory" className="py-1">AI Advisory</Link>
                  <Link to="/solutions/ai-recruitment" className="py-1">AI Recruitment</Link>
                </div>
              </div>
              <Link to="/about" className="font-medium py-2">About</Link>
              <Link to="/team" className="font-medium py-2">Team</Link>
              <Link to="/contact" className="font-medium py-2">Contact</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
