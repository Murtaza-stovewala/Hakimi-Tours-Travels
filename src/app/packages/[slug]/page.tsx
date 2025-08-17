
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { packages } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Check, MessageCircle, Phone } from 'lucide-react';
import AiTravelTips from '@/components/ai-travel-tips';

type PackageDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default function PackageDetailPage({ params }: PackageDetailPageProps) {
  const { slug } = params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary">{pkg.duration}</Badge>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mt-2 text-primary">{pkg.name}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{pkg.description}</p>
        </div>

        {/* Gallery & Booking Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Carousel className="w-full rounded-lg overflow-hidden shadow-lg">
              <CarouselContent>
                {pkg.galleryImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video relative">
                      <Image
                        src={src}
                        alt={`${pkg.name} gallery image ${index + 1}`}
                        fill
                        className="w-full h-full object-cover"
                        data-ai-hint={pkg.imageHint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Book Your Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-6">
                  Rs {pkg.price.toLocaleString()}
                  <span className="text-lg font-normal text-muted-foreground"> / person</span>
                </div>
                <div className="space-y-4">
                  <Button size="lg" className="w-full" asChild>
                    <a href="tel:+918085211718"><Phone className="mr-2 h-5 w-5" /> Call to Book</a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a href="https://wa.me/918085211718" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Inquiry
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Our team is ready to assist you with the booking process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            {/* Itinerary */}
            <h2 className="font-headline text-3xl font-bold mb-4">Detailed Itinerary</h2>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {pkg.itinerary.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-semibold">
                    Day {item.day}: {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12">
                <AiTravelTips packageName={pkg.name} />
            </div>
          </div>

          <div className="lg:col-span-1">
            {/* Inclusions */}
            <h2 className="font-headline text-3xl font-bold mb-4">What's Included</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

    