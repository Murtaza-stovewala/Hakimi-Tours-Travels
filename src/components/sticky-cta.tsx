"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyCta() {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-background/80 backdrop-blur-sm p-2 border-t z-40">
      <div className="grid grid-cols-2 gap-2">
        <Button asChild size="lg">
          <a href="tel:+918085211718" className="flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary text-primary">
          <a href="https://wa.me/918085211718" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
