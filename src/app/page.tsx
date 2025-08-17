
"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Star } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"


import { packages, testimonials } from '@/lib/data';
import ContactForm from '@/components/contact-form';
import Carousel3D, { Carousel3DItem } from '@/components/carousel-3d';
import React from 'react';
import { ThreeDMarquee, type MarqueeImage } from '@/components/three-d-marquee';

const heroSlides = [
    {
        id: 1,
        superTitle: "Let's Go Now",
        title: "Uncovering Stories, One Trip At A Time",
        description: "Every journey has a tale waiting to be told. We craft unique travel experiences that turn ordinary trips into extraordinary stories.",
        buttonText: "Explore Packages",
        buttonLink: "/packages",
        image1: "https://www.zaereen.com/gifs/photo.jpg",
        image1Hint: "karbala shrine",
        image2: "https://mgtourstravels.com/wp-content/uploads/2022/11/Karbala01.webp",
        image2Hint: "mosque architecture"
    },
    {
        id: 2,
        superTitle: "Discover Your Path",
        title: "Spiritual Journeys, Expertly Crafted",
        description: "Embark on a pilgrimage with us and find peace, community, and a deeper connection to your faith. Every detail is handled with care.",
        buttonText: "View Schedule",
        buttonLink: "/schedule",
        image1: "https://www.zaereen.com/gifs/photo.jpg",
        image1Hint: "karbala shrine",
        image2: "https://mgtourstravels.com/wp-content/uploads/2022/11/Karbala01.webp",
        image2Hint: "mosque architecture"
    },
    {
        id: 3,
        superTitle: "Book With Confidence",
        title: "Your Sacred Trust, Our Commitment",
        description: "With years of experience and a passion for service, we ensure your Ziyarat is seamless, meaningful, and unforgettable.",
        buttonText: "Contact Us",
        buttonLink: "/contact",
        image1: "https://www.zaereen.com/gifs/photo.jpg",
        image1Hint: "karbala shrine",
        image2: "https://mgtourstravels.com/wp-content/uploads/2022/11/Karbala01.webp",
        image2Hint: "mosque architecture"
    }
];

const marqueeImages: MarqueeImage[] = [
    { src: 'https://i.ibb.co/jks1NN1b/image.png', alt: 'karbala shrine', href: '/packages/full-ziyarat' },
    { src: 'https://i.ibb.co/gbVBVqgd/image.png', alt: 'mosque architecture', href: '/packages/full-ziyarat' },
    { src: 'https://www.zaereen.com/gifs/photo.jpg', alt: 'pyramids giza', href: '/packages/mishr-only' },
    { src: 'https://mgtourstravels.com/wp-content/uploads/2022/11/Karbala01.webp', alt: 'karbala shrine', href: '/packages/karbala-najaf' },
    { src: 'https://i.ibb.co/jks1NN1b/image.png', alt: 'mosque architecture', href: '/packages/full-ziyarat' },
    { src: 'https://www.zaereen.com/gifs/photo.jpg', alt: 'pyramids giza', href: '/packages/mishr-only' },
];

export default function Home() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    const offers: Carousel3DItem[] = [
    {
      id: 1,
      title: 'Early Bird Discount',
      brand: 'Special Offer',
      description: 'Book your Full Ziyarat package 3 months in advance and get 10% off!',
      tags: ['Discount', 'Full Ziyarat', 'Limited Time'],
      imageUrl: 'https://i.ibb.co/jks1NN1b/image.png',
      link: '/packages/full-ziyarat',
    },
    {
      id: 2,
      title: 'Group Booking Special',
      brand: 'Group Deal',
      description: 'Travel with a group of 10 or more and receive a special discounted rate per person.',
      tags: ['Groups', 'Savings', 'Community'],
      imageUrl: 'https://i.ibb.co/gbVBVqgd/image.png',
      link: '/contact',
    },
     {
      id: 3,
      title: 'Misr Exclusive',
      brand: 'Egypt Special',
      description: 'Explore the rich Islamic heritage and historical wonders of Misr (Egypt) with our focused package.',
      tags: ['Misr', 'History', 'Spiritual'],
      imageUrl: 'https://www.zaereen.com/gifs/photo.jpg',
      link: '/packages/mishr-only',
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleStepClick = (index: number) => {
    if (api) {
        api.scrollTo(index);
        // Also reset the autoplay plugin to avoid weird interactions
        if(plugin.current) {
            plugin.current.reset();
        }
    }
  }


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-background overflow-hidden relative">
         <div className="absolute inset-0 z-0 opacity-20">
            <ThreeDMarquee images={marqueeImages} />
         </div>
         <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/20 to-transparent"></div>
         <div className="relative z-20">
            <Carousel 
                className="w-full" 
                opts={{ loop: true }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                setApi={setApi}
            >
                <CarouselContent>
                    {heroSlides.map((slide, index) => (
                        <CarouselItem key={slide.id}>
                            <div className="w-full py-20 md:py-32">
                                <div className="container mx-auto px-4 md:px-6">
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div className="max-w-xl">
                                            <div className="flex items-start gap-4">
                                                <div className="flex flex-col items-center mt-2">
                                                    <div onClick={() => handleStepClick(0)} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold cursor-pointer transition-colors ${current === 0 ? 'bg-primary text-primary-foreground' : 'bg-primary/20 text-primary'}`}>1</div>
                                                    <div className="w-px h-8 bg-primary/30 my-1"></div>
                                                    <div onClick={() => handleStepClick(1)} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold cursor-pointer transition-colors ${current === 1 ? 'bg-primary text-primary-foreground' : 'bg-primary/20 text-primary'}`}>2</div>
                                                    <div className="w-px h-8 bg-primary/30 my-1"></div>
                                                    <div onClick={() => handleStepClick(2)} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold cursor-pointer transition-colors ${current === 2 ? 'bg-primary text-primary-foreground' : 'bg-primary/20 text-primary'}`}>3</div>
                                                </div>
                                                <div>
                                                    <p className="text-primary font-semibold mb-2">{slide.superTitle}</p>
                                                    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                                                        {slide.title}
                                                    </h1>
                                                    <p className="mt-4 text-muted-foreground">
                                                        {slide.description}
                                                    </p>
                                                    <Button asChild size="lg" className="mt-8">
                                                        <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                         <div className="relative h-96">
                                            <div className="absolute -bottom-16 -right-10 w-80 h-80 rounded-full bg-primary/10"></div>
                                            <Image
                                                src={slide.image1}
                                                alt={slide.title}
                                                width={500}
                                                height={350}
                                                className="absolute top-0 left-0 rounded-3xl shadow-lg object-cover"
                                                data-ai-hint={slide.image1Hint}
                                            />
                                            <Image
                                                src={slide.image2}
                                                alt={slide.title}
                                                width={300}
                                                height={300}
                                                className="absolute bottom-0 right-0 rounded-3xl shadow-2xl object-cover border-8 border-background"
                                                data-ai-hint={slide.image2Hint}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
         </div>
      </section>

      {/* Current Offers Section */}
      <section className="w-full py-12 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Current Offers</h2>
          <p className="mt-2 text-center text-muted-foreground">Don't miss out on our special deals.</p>
          <Carousel3D items={offers} />
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Our Ziyarat Packages</h2>
          <p className="mt-2 text-center text-muted-foreground">Choose the journey that calls to your heart.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {packages.map((pkg) => (
              <Card key={pkg.slug} className="flex flex-col bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={pkg.galleryImages[0]}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                      data-ai-hint={pkg.imageHint}
                    />
                  </div>
                  <CardTitle className="font-headline pt-4">{pkg.name}</CardTitle>
                   <Badge variant="secondary" className="w-fit">{pkg.duration}</Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{pkg.description}</p>
                  <p className="text-2xl font-bold text-primary mt-4">Rs {pkg.price.toLocaleString()}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/packages/${pkg.slug}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">What Our Pilgrims Say</h2>
           <Carousel className="w-full max-w-4xl mx-auto mt-8" opts={{ loop: true }} plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                   <Card className="h-full bg-background">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="happy person" />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 mt-4 text-accent">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                      </div>
                      <blockquote className="mt-4 text-foreground/80 italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Have Questions?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our team is here to assist you with any inquiries about our packages, booking process, or any special requests you may have.
              </p>
              <div className="mt-6 space-y-4">
                 <p>Fill out the form, and we'll get back to you promptly.</p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

    