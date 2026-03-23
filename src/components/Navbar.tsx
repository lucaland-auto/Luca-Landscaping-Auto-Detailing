import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-heading text-xl font-bold tracking-tight text-primary">
                Luca<span className="text-secondary">Landscaping</span> & Detailing
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </a>
            <Button asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-border">
              <a href="tel:+1234567890" className="flex items-center gap-2 px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary">
                <Phone className="h-5 w-5" />
                (555) 123-4567
              </a>
              <div className="px-3 mt-4">
                <Button className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
