import { Link, useLocation } from "wouter";
import { Heart, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Nav() {
  const [location] = useLocation();

  const navLinks = [
    { href: "/learn", label: "Learn" },
    { href: "/tools", label: "Self-Help Tools" },
    { href: "/journal", label: "Mood Journal" },
    { href: "/about", label: "About & Support" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <Heart className="h-6 w-6 fill-current" />
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">Mindful Space</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
          
          <Button variant="outline" className="gap-2 border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive rounded-full" asChild>
            <Link href="/about#crisis">
              <Phone className="h-4 w-4" />
              Need Help Now?
            </Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l-border/50 w-64 pt-12">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a className={`text-lg font-medium transition-colors hover:text-primary ${
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {link.label}
                    </a>
                  </Link>
                ))}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <Button variant="outline" className="w-full gap-2 border-destructive/30 text-destructive hover:bg-destructive/10 rounded-full" asChild>
                    <Link href="/about#crisis">
                      <Phone className="h-4 w-4" />
                      Crisis Support
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}