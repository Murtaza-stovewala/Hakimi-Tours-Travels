
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const allImages = [
    { src: 'https://i.ibb.co/jks1NN1b/image.png', alt: 'Holy shrine in Karbala', hint: 'karbala shrine', category: 'Karbala' },
    { src: 'https://i.ibb.co/gbVBVqgd/image.png', alt: 'Architectural detail of a mosque in Najaf', hint: 'mosque architecture', category: 'Najaf' },
    { src: 'https://www.zaereen.com/gifs/photo.jpg', alt: 'Pyramids of Giza', hint: 'pyramids giza', category: 'Misr' },
    { src: 'https://i.ibb.co/jks1NN1b/image.png', alt: 'Holy shrine in Karbala', hint: 'karbala shrine', category: 'Karbala' },
    { src: 'https://www.zaereen.com/gifs/photo.jpg', alt: 'Pyramids of Giza', hint: 'pyramids giza', category: 'Misr' },
    { src: 'https://i.ibb.co/gbVBVqgd/image.png', alt: 'Architectural detail of a mosque in Najaf', hint: 'mosque architecture', category: 'Najaf' },
    { src: 'https://www.zaereen.com/gifs/photo.jpg', alt: 'Pyramids of Giza', hint: 'pyramids giza', category: 'Misr' },
    { src: 'https://i.ibb.co/jks1NN1b/image.png', alt: 'Holy shrine in Karbala', hint: 'karbala shrine', category: 'Karbala' },
    { src: 'https://i.ibb.co/gbVBVqgd/image.png', alt: 'Architectural detail of a mosque in Najaf', hint: 'mosque architecture', category: 'Najaf' },
];

const categories = ["Karbala", "Najaf", "Misr"];

export default function GalleryPage() {
    const [filter, setFilter] = useState("Karbala");

    const filteredImages = allImages.filter(image => image.category === filter);

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Glimpses of Our Journeys</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Explore moments of faith, community, and spiritual serenity from our past pilgrimages.
                    </p>
                </div>

                <Tabs defaultValue="Karbala" onValueChange={setFilter} className="w-full flex flex-col items-center">
                    <TabsList className="bg-card p-1 rounded-lg mb-12">
                        {categories.map(category => (
                            <TabsTrigger key={category} value={category} className="px-6 py-2 text-sm">
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    
                    {categories.map(category => (
                         <TabsContent key={category} value={category} className="w-full">
                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                {allImages.filter(img => img.category === category).map((item, index) => (
                                    <div key={`${category}-${index}`} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                        <div className="relative aspect-square">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                                data-ai-hint={item.hint}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                         </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}

    