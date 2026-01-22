import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Why Us", to: "why-us" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <ScrollLink to="home" smooth={true} duration={500} className="flex items-center gap-2">
             <div className="bg-primary p-1.5 rounded-lg">
               {/* Tooth Icon placeholder */}
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2C7 2 5 6 5 9c0 4.5 2.5 7.5 7 11.5 4.5-4 7-7 7-11.5 0-3-2-7-7-7z"/></svg>
             </div>
             <span className={cn(
               "text-2xl font-bold tracking-tight font-heading",
               isScrolled ? "text-primary" : "text-primary md:text-slate-800" // Always visible
             )}>
               DENT-O-CARE
             </span>
          </ScrollLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm font-medium hover:text-primary cursor-pointer transition-colors"
            >
              {item.name}
            </ScrollLink>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 rounded-full px-6 shadow-lg shadow-primary/20"
            onClick={() => window.open('tel:09663661131')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book Now
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                {NAV_ITEMS.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary cursor-pointer border-b pb-2"
                  >
                    {item.name}
                  </ScrollLink>
                ))}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 mt-4"
                  onClick={() => {
                    window.open('tel:09663661131');
                    setIsOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
