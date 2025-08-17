
"use client";

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { carFleet, Car } from '@/lib/data';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Users, Car as CarIcon, ArrowRight, MessageCircle, ThermometerSun, ThermometerSnowflake } from "lucide-react";
import { format, differenceInDays, addDays } from "date-fns";
import { type DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Switch } from '@/components/ui/switch';

const vehicleTypes = [
    { label: "All", value: "All" },
    { label: "Sedan (4 Seater)", value: "Sedan" },
    { label: "SUV (7 Seater)", value: "SUV" },
    { label: "Van (17-26 Seater)", value: "Van" },
    { label: "Bus (35-52 Seater)", value: "Bus" },
];
const tripTypes = ["One Way", "Round Trip"];

export default function CarBookingPage() {
  const [filter, setFilter] = useState('All');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isAc, setIsAc] = useState(true);
  const [tripType, setTripType] = useState<"One Way" | "Round Trip">("Round Trip");

  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [passengers, setPassengers] = useState(1);
  
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 4),
  });

  const [distance, setDistance] = useState<number | null>(null);
  const [fare, setFare] = useState<number | null>(null);

  const { toast } = useToast();

  const filteredCars = useMemo(() => carFleet.filter(car => {
    if (filter === 'All') return true;
    return car.type === filter;
  }), [filter]);

  const numberOfDays = useMemo(() => {
    if (tripType === "Round Trip" && dateRange?.from && dateRange?.to) {
      const days = differenceInDays(dateRange.to, dateRange.from);
      return days >= 0 ? days + 1 : 0;
    }
    return 1;
  }, [dateRange, tripType]);

  useEffect(() => {
    if (selectedCar) {
      const carRates = isAc ? selectedCar.rates.ac : selectedCar.rates.nonAc;
      let finalFare = 0;

      if (tripType === 'Round Trip' && numberOfDays > 0) {
        const dailyFare = carRates.perDay * numberOfDays;
        finalFare = dailyFare;
        if (distance && distance > 0) {
          // For round trips, let's assume distance is one way and double it for fare.
          const kmFare = carRates.perKm * distance * 2;
          finalFare = Math.max(dailyFare, kmFare);
        }
      } else if (tripType === 'One Way') {
          if (distance && distance > 0) {
            finalFare = carRates.perKm * distance;
          } else {
            finalFare = carRates.perDay; // Minimum one day charge
          }
      }
      
      setFare(finalFare > 0 ? finalFare : null);
    } else {
      setFare(null);
    }
  }, [selectedCar, numberOfDays, distance, isAc, tripType]);

  const handleBookingRequest = () => {
    const isDateSet = tripType === 'One Way' ? !!date : !!dateRange?.from;
    if (!selectedCar || !pickup || !dropoff || !isDateSet) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all trip details and select a car.",
      });
      return;
    }

    const tripDateInfo = tripType === 'One Way'
      ? `*Date:* ${date ? format(date, "PPP") : 'N/A'}`
      : `*From:* ${dateRange?.from ? format(dateRange.from, "PPP") : 'N/A'}\n*To:* ${dateRange?.to ? format(dateRange.to, "PPP") : 'N/A'}`;

    const bookingDetails = `
      *New Car Booking Request*
      -------------------------
      *Trip Type:* ${tripType}
      *Car:* ${selectedCar.name} (${isAc ? 'AC' : 'Non-AC'})
      *Pickup:* ${pickup}
      *Drop-off:* ${dropoff}
      ${tripDateInfo}
      *Days:* ${tripType === "Round Trip" ? numberOfDays : "N/A"}
      *Passengers:* ${passengers}
      *Est. Distance:* ${distance || 'N/A'} km
      *Estimated Fare:* Rs ${fare?.toLocaleString()}
    `.trim().replace(/ /g, '%20').replace(/\n/g, '%0A');

    const whatsappUrl = `https://wa.me/918085211718?text=${bookingDetails}`;

    console.log("Booking Request Submitted:", {
      tripType,
      car: selectedCar.name,
      ac: isAc,
      pickup,
      dropoff,
      date: tripType === 'One Way' ? date : dateRange,
      passengers,
      distance,
      fare
    });

    toast({
      title: "Booking Request Sent!",
      description: "Your request has been submitted. We will contact you shortly via WhatsApp.",
    });

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Book a Car</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Choose your ride, calculate the fare, and book your journey with ease.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">1. Calculate Your Fare & Select a Car</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 p-4 border rounded-lg">
                <h3 className="font-semibold text-lg">Trip Details</h3>
                 <div>
                    <Label>Trip Type</Label>
                    <RadioGroup
                        value={tripType}
                        onValueChange={(value) => setTripType(value as "One Way" | "Round Trip")}
                        className="flex items-center space-x-4"
                      >
                        {tripTypes.map(type => (
                           <div key={type} className="flex items-center space-x-2">
                            <RadioGroupItem value={type} id={type} />
                            <Label htmlFor={type}>{type}</Label>
                          </div>
                        ))}
                    </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <Input id="pickup" placeholder="e.g. Indore Airport" value={pickup} onChange={e => setPickup(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="dropoff">Drop-off Location</Label>
                  <Input id="dropoff" placeholder="e.g. Karbala Hotel" value={dropoff} onChange={e => setDropoff(e.target.value)} />
                </div>
                <div>
                  <Label>Trip Dates</Label>
                  {tripType === "Round Trip" ? (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date"
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !dateRange && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateRange?.from ? (
                            dateRange.to ? (
                              <>
                                {format(dateRange.from, "LLL dd, y")} -{" "}
                                {format(dateRange.to, "LLL dd, y")}
                              </>
                            ) : (
                              format(dateRange.from, "LLL dd, y")
                            )
                          ) : (
                            <span>Pick a date range</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={dateRange?.from}
                          selected={dateRange}
                          onSelect={setDateRange}
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                  ) : (
                     <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date-one-way"
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                           {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="passengers">Passengers</Label>
                    <Input id="passengers" type="number" min="1" value={passengers} onChange={e => setPassengers(parseInt(e.target.value) || 1)} />
                  </div>
                  <div>
                    <Label htmlFor="distance">Est. Distance (km)</Label>
                    <Input id="distance" type="number" min="0" placeholder="Optional" onChange={e => setDistance(e.target.value ? parseInt(e.target.value) : null)} />
                  </div>
                </div>
                 <div className="flex items-center justify-between rounded-lg border p-3">
                    <Label htmlFor="ac-mode" className="flex items-center gap-2">
                        <ThermometerSun className="h-5 w-5 text-yellow-500" />
                        <span>Non-AC</span>
                    </Label>
                    <Switch
                        id="ac-mode"
                        checked={isAc}
                        onCheckedChange={setIsAc}
                    />
                     <Label htmlFor="ac-mode" className="flex items-center gap-2">
                        <ThermometerSnowflake className="h-5 w-5 text-blue-500" />
                        <span>AC</span>
                    </Label>
                </div>
              </div>
              <div className="space-y-4 p-4 border rounded-lg">
                <h3 className="font-semibold text-lg">Available Vehicles</h3>
                <div className="flex justify-center">
                  <Select onValueChange={setFilter} defaultValue={filter}>
                    <SelectTrigger className='w-full md:w-2/3'>
                      <SelectValue placeholder="Filter by vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                        {vehicleTypes.map(type => (
                            <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <RadioGroup onValueChange={(carId) => setSelectedCar(carFleet.find(c => c.id === parseInt(carId)) || null)} className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                  {filteredCars.map(car => {
                    const rates = isAc ? car.rates.ac : car.rates.nonAc;
                    return (
                      <Label key={car.id} htmlFor={`car-${car.id}`} className={cn("flex flex-col items-start p-3 border rounded-lg cursor-pointer transition-all", selectedCar?.id === car.id && "border-primary ring-2 ring-primary")}>
                        <div className="flex items-center w-full">
                          <RadioGroupItem value={String(car.id)} id={`car-${car.id}`} className="mr-4" />
                          <div className="flex-1">
                            <p className="font-semibold">{car.name}</p>
                            <div className="text-sm text-muted-foreground flex items-center gap-4">
                              <span><Users className="inline h-4 w-4 mr-1" />{car.capacity} Seater</span>
                              <span><CarIcon className="inline h-4 w-4 mr-1" />{car.type}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">Rs {rates.perDay.toLocaleString()}/day</p>
                            <p className="text-xs text-muted-foreground">Rs {rates.perKm}/km</p>
                          </div>
                        </div>
                      </Label>
                    )
                  })}
                </RadioGroup>
                {filteredCars.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No cars match the selected filter.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">2. Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedCar ? (
                <div>
                  <Image
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg object-cover mb-4"
                    data-ai-hint={selectedCar.imageHint}
                  />
                  <h3 className="font-bold text-lg">{selectedCar.name} <span className='text-sm font-medium text-muted-foreground'>({isAc ? "AC" : "Non-AC"})</span></h3>
                  <p className="text-muted-foreground">{pickup || "Pickup Location"} <ArrowRight className="inline h-4 w-4 mx-1" /> {dropoff || "Drop-off Location"}</p>
                  <p className="text-sm text-muted-foreground">
                    {tripType === "Round Trip" ? `${numberOfDays} Days` : "One Way Trip"} ({passengers} Passengers)
                  </p>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-muted-foreground">Estimated Fare</p>
                    <p className="text-3xl font-bold text-primary">
                      {fare ? `Rs ${fare.toLocaleString()}` : "Enter details..."}
                    </p>
                    <p className="text-xs text-muted-foreground">Final price may vary based on actual distance and tolls.</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 text-muted-foreground">
                  <p>Please select a car to see the booking summary.</p>
                </div>
              )}

              <Button size="lg" className="w-full" onClick={handleBookingRequest} disabled={!selectedCar || !fare}>
                <MessageCircle className="mr-2 h-5 w-5" /> Request to Book via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

