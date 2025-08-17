
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { packages, type Package as PackageType } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const packageTypes = ["All", "Full Ziyarat", "Karbala & Najaf", "Mishr"];

export default function PackagesPage() {
  const [filter, setFilter] = useState('All');

  const filteredPackages = packages.filter(pkg => {
    if (filter === 'All') return true;
    if (filter === 'Full Ziyarat') return pkg.slug === 'full-ziyarat';
    if (filter === 'Karbala & Najaf') return pkg.slug === 'karbala-najaf';
    if (filter === 'Mishr') return pkg.slug === 'mishr-only';
    return false;
  });

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Ziyarat Packages</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our carefully designed packages to find the spiritual journey that resonates with you.
        </p>
      </div>

      <div className="mb-8 flex justify-center">
        <div className="w-full max-w-xs">
          <Select onValueChange={setFilter} defaultValue={filter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by package type" />
            </SelectTrigger>
            <SelectContent>
              {packageTypes.map(type => (
                 <SelectItem key={type} value={type}>
                  {type}
                 </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg: PackageType) => (
          <Card key={pkg.slug} className="flex flex-col bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={pkg.galleryImages[0]}
                  alt={pkg.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={pkg.imageHint}
                />
              </div>
              <CardTitle className="font-headline pt-4">{pkg.name}</CardTitle>
              <Badge variant="secondary" className="w-fit">{pkg.duration}</Badge>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{pkg.description}</p>
              <p className="text-3xl font-bold text-primary mt-4">Rs {pkg.price.toLocaleString()}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/packages/${pkg.slug}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {filteredPackages.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
            <p>No packages found for this filter.</p>
        </div>
      )}
    </div>
  );
}

    