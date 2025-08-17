import Link from "next/link";
import { Mail, MapPin, Phone, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-headline text-lg font-bold">Hakimi Travels</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Crafting sacred journeys with devotion and care since 2005.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/packages" className="text-muted-foreground hover:text-primary">Packages</Link></li>
              <li><Link href="/schedule" className="text-muted-foreground hover:text-primary">Schedule</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary">Gallery</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Contact Info</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Pragati Apartment, Khatiwala Tank, Near Post Office, Indore, India</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary mt-1" />
                <div className="flex flex-col">
                    <a href="tel:+918085211718" className="hover:text-primary">80852 11718</a>
                    <a href="tel:+919826011718" className="hover:text-primary">98260 11718</a>
                </div>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:inquiries@hakimitravels.com" className="hover:text-primary">inquiries@hakimitravels.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Follow Us</h4>
            <div className="flex mt-4 space-x-4">
              <Link href="https://www.instagram.com/hakimi_tours_and_travels" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hakimi Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
