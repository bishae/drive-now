"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  MapPin,
  Calendar as CalendarIcon,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

const popularLocations = [
  { id: 1, name: "Downtown Office", address: "123 Main St, City Center" },
  { id: 2, name: "Airport Terminal", address: "456 Airport Rd, Terminal 2" },
  {
    id: 3,
    name: "Central Station",
    address: "789 Railway Ave, Central District",
  },
  { id: 4, name: "Beach Resort", address: "101 Coastal Hwy, Beachfront" },
];

export default function SetLocationPage() {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [dropoffDate, setDropoffDate] = useState<Date>();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <MapPin className="h-6 w-6" />
          <span className="sr-only">Acme Car Rentals</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Cars
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Locations
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
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
              Set Your Rental Locations
            </h1>
            <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
              <Card>
                <CardHeader>
                  <CardTitle>Choose Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickup-location">Pickup Location</Label>
                      <Select>
                        <SelectTrigger id="pickup-location">
                          <SelectValue placeholder="Select pickup location" />
                        </SelectTrigger>
                        <SelectContent>
                          {popularLocations.map((location) => (
                            <SelectItem
                              key={location.id}
                              value={location.id.toString()}
                            >
                              {location.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dropoff-location">
                        Drop-off Location
                      </Label>
                      <Select>
                        <SelectTrigger id="dropoff-location">
                          <SelectValue placeholder="Select drop-off location" />
                        </SelectTrigger>
                        <SelectContent>
                          {popularLocations.map((location) => (
                            <SelectItem
                              key={location.id}
                              value={location.id.toString()}
                            >
                              {location.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pickup-date">Pickup Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={`w-full justify-start text-left font-normal ${!pickupDate && "text-muted-foreground"}`}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {pickupDate ? (
                                format(pickupDate, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={pickupDate}
                              onSelect={setPickupDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pickup-time">Pickup Time</Label>
                        <Select>
                          <SelectTrigger id="pickup-time">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }, (_, i) => i).map(
                              (hour) => (
                                <SelectItem
                                  key={hour}
                                  value={hour.toString().padStart(2, "0")}
                                >
                                  {hour.toString().padStart(2, "0")}:00
                                </SelectItem>
                              ),
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dropoff-date">Drop-off Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={`w-full justify-start text-left font-normal ${!dropoffDate && "text-muted-foreground"}`}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {dropoffDate ? (
                                format(dropoffDate, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={dropoffDate}
                              onSelect={setDropoffDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dropoff-time">Drop-off Time</Label>
                        <Select>
                          <SelectTrigger id="dropoff-time">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }, (_, i) => i).map(
                              (hour) => (
                                <SelectItem
                                  key={hour}
                                  value={hour.toString().padStart(2, "0")}
                                >
                                  {hour.toString().padStart(2, "0")}:00
                                </SelectItem>
                              ),
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full">
                      Continue to Select Vehicle{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Location Map</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex aspect-video items-center justify-center rounded-md bg-muted">
                      <p className="text-muted-foreground">
                        Interactive Map Placeholder
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Locations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {popularLocations.map((location) => (
                        <li
                          key={location.id}
                          className="flex items-start space-x-2"
                        >
                          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{location.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {location.address}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
