import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import TeamCarousel from '@/components/team-carousel';


const videoItems = [
    {
      id: '1',
      name: 'Our Founder\'s Story',
      role: 'Founder Interview',
      image: 'https://placehold.co/400x600.png',
    },
    {
      id: '2',
      name: 'Community Service Initiative',
      role: 'Social Responsibility',
      image: 'https://placehold.co/400x600.png',
    },
     {
      id: '3',
      name: 'A Pilgrim\'s Journey',
      role: 'Customer Testimonial',
      image: 'https://placehold.co/400x600.png',
    },
     {
      id: '4',
      name: 'Behind the Scenes',
      role: 'A Day at Hakimi Travels',
      image: 'https://placehold.co/400x600.png',
    },
  ];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">About Hakimi Travels</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Crafting unforgettable spiritual journeys with devotion and excellence since 2005.
            </p>
            <p className="mt-6 text-foreground/80">
              Hakimi Travels was founded with a singular vision: to provide a seamless, spiritual, and deeply meaningful Ziyarat experience for pilgrims. We understand that a Ziyarat is more than just a trip; it's a sacred obligation and a journey of a lifetime. Our team is composed of dedicated professionals who are not only experts in travel logistics but also share a deep respect for the spiritual significance of these holy sites.
            </p>
             <p className="mt-4 text-foreground/80">
              From visa assistance to comfortable accommodations and knowledgeable guides, we handle every detail with meticulous care, allowing you to immerse yourself fully in your spiritual devotion.
            </p>
          </div>
           <Card className="overflow-hidden rounded-lg shadow-xl">
             <Image
              src="https://i.ibb.co/gbVBVqgd/image.png"
              alt="A collage of Ziyarat destinations"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              data-ai-hint="mosque architecture"
            />
          </Card>
        </div>

        <div className="mt-16 md:mt-24">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Our Commitment to You</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                <Card>
                    <CardContent className="pt-6">
                        <CheckCircle className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-headline text-xl font-semibold">Spiritual Focus</h3>
                        <p className="mt-2 text-sm text-muted-foreground">We manage all logistics so you can focus entirely on your spiritual practices and reflections.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="pt-6">
                        <CheckCircle className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-headline text-xl font-semibold">Quality & Comfort</h3>
                        <p className="mt-2 text-sm text-muted-foreground">We partner with trusted hotels and transport services to ensure your comfort and safety throughout the journey.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="pt-6">
                        <CheckCircle className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-headline text-xl font-semibold">Expert Guidance</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Our experienced guides provide historical context and spiritual insights at every holy site.</p>
                    </CardContent>
                </Card>
            </div>
        </div>

         <div className="mt-16 md:mt-24">
             <TeamCarousel 
                members={videoItems} 
                infoPosition='bottom' 
                title="In the News"
                titleClassName='text-3xl md:text-4xl font-bold text-center text-primary'
                titleSize='lg'
                titleColor='hsl(var(--primary))'
                showDots={true}
                cardHeight={480}
                cardWidth={280}
                autoPlay={3000}
                visibleCards={1}
            />
        </div>

      </div>
    </div>
  );
}

    