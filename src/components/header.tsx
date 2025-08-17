
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/packages", label: "Packages" },
  { href: "/car-booking", label: "Car Booking" },
  { href: "/schedule", label: "Schedule" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground"
      )}
      onClick={() => setMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 4c-2.93 0-5.46 1.6-6.83 4.01l1.52.86C7.62 6.88 9.67 5.8 12 5.8s4.38 1.08 5.31 3.07l1.52-.86C17.46 5.6 14.93 4 12 4zm0 14c2.93 0 5.46-1.6 6.83-4.01l-1.52-.86C16.38 15.12 14.33 16.2 12 16.2s-4.38-1.08-5.31-3.07l-1.52.86C6.54 16.4 9.07 18 12 18z"/>
          </svg>
          <span className="font-headline text-lg font-bold">Hakimi Travels</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+918085211718"><Phone className="mr-2 h-4 w-4"/>Call Now</a>
            </Button>
            <Button size="sm" asChild>
              <a href="https://wa.me/918085211718" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4"/>WhatsApp</a>
            </Button>
          </div>
        </nav>
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                  <span className="font-headline text-lg font-bold">Hakimi Travels</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                </nav>
                 <div className="flex flex-col gap-2 pt-4 border-t">
                    <Button variant="ghost" size="sm" asChild>
                      <a href="tel:+918085211718"><Phone className="mr-2 h-4 w-4"/>Call Now</a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href="https://wa.me/918085211718" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4"/>WhatsApp Inquiry</a>
                    </Button>
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
