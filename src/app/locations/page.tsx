"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Search,
  Phone,
  Clock,
  Car,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Dummy data for locations
const locations = [
  {
    id: 1,
    name: "Downtown Office",
    address: "123 Main St, City Center, 12345",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM",
    availableCars: 15,
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 2,
    name: "Airport Terminal",
    address: "456 Airport Rd, Terminal 2, 67890",
    phone: "+1 (555) 987-6543",
    hours: "24/7",
    availableCars: 30,
    coordinates: { lat: 40.6413, lng: -73.7781 },
  },
  {
    id: 3,
    name: "Suburban Branch",
    address: "789 Oak Ave, Suburbia, 54321",
    phone: "+1 (555) 246-8135",
    hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-4PM",
    availableCars: 20,
    coordinates: { lat: 40.8559, lng: -74.1709 },
  },
];

export default function Component() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="/">
          <MapPin className="h-6 w-6" />
          <span className="sr-only">Acme Car Rentals</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="/cars"
          >
            Cars
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="/locations"
          >
            Locations
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="/about"
          >
            About
          </Link>
        </nav>
        <Button className="ml-4" size="sm">
          Sign In
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Our Locations
            </h1>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
              <Card>
                <CardHeader>
                  <CardTitle>Rental Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-4">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      className="pl-8"
                      placeholder="Search locations..."
                      type="search"
                    />
                  </div>
                  <Tabs defaultValue="list" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="list">List View</TabsTrigger>
                      <TabsTrigger value="map">Map View</TabsTrigger>
                    </TabsList>
                    <TabsContent value="list">
                      <div className="space-y-4">
                        {locations.map((location) => (
                          <Card
                            key={location.id}
                            className="cursor-pointer hover:bg-gray-100"
                            onClick={() => setSelectedLocation(location)}
                          >
                            <CardHeader>
                              <CardTitle>{location.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-500">
                                {location.address}
                              </p>
                              <p className="text-sm text-gray-500">
                                Available Cars: {location.availableCars}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="map">
                      <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-100">
                        <p className="text-gray-500">
                          Interactive Map Placeholder
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{selectedLocation?.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <MapPin className="mt-0.5 h-5 w-5 text-gray-500" />
                      <p>{selectedLocation?.address}</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Phone className="mt-0.5 h-5 w-5 text-gray-500" />
                      <p>{selectedLocation?.phone}</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="mt-0.5 h-5 w-5 text-gray-500" />
                      <p>{selectedLocation?.hours}</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Car className="mt-0.5 h-5 w-5 text-gray-500" />
                      <p>Available Cars: {selectedLocation?.availableCars}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="mb-2 font-semibold">Location Preview</h3>
                    <Image
                      src={`/placeholder.svg?height=200&width=400`}
                      width={400}
                      height={200}
                      alt={`${selectedLocation?.name} preview`}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <Button className="mt-6 w-full">
                    Reserve at This Location
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500">
          © 2024 Acme Car Rentals. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
