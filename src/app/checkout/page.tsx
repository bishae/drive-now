"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Calendar,
  Car,
  Shield,
  Navigation,
  Baby,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const rentalDetails = {
  car: "Sedan Model X",
  pickupLocation: "Downtown Office",
  dropoffLocation: "Airport Terminal",
  pickupDate: "2024-07-15",
  dropoffDate: "2024-07-20",
  basePrice: 250,
};

const additionalOptions = [
  { id: "insurance", label: "Insurance", price: 50, icon: Shield },
  { id: "gps", label: "GPS Navigation", price: 25, icon: Navigation },
  { id: "childSeat", label: "Child Seat", price: 15, icon: Baby },
];

export default function Component() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId],
    );
  };

  const calculateTotal = () => {
    const optionsTotal = selectedOptions.reduce((total, optionId) => {
      const option = additionalOptions.find((opt) => opt.id === optionId);
      return total + (option?.price ?? 0);
    }, 0);
    return rentalDetails.basePrice + optionsTotal;
  };

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
              Checkout
            </h1>
            <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Rental Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <Car className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">{rentalDetails.car}</p>
                        <p className="text-sm text-gray-500">
                          Your selected vehicle
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">
                          Pickup: {rentalDetails.pickupLocation}
                        </p>
                        <p className="font-medium">
                          Drop-off: {rentalDetails.dropoffLocation}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">
                          Pickup: {rentalDetails.pickupDate}
                        </p>
                        <p className="font-medium">
                          Drop-off: {rentalDetails.dropoffDate}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Options</CardTitle>
                    <CardDescription>
                      Enhance your rental experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    {additionalOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={option.id}
                          checked={selectedOptions.includes(option.id)}
                          onCheckedChange={() => handleOptionChange(option.id)}
                        />
                        <Label
                          htmlFor={option.id}
                          className="flex items-center gap-2"
                        >
                          <option.icon className="h-5 w-5 text-gray-500" />
                          {option.label} (${option.price})
                        </Label>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name on Card</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="card">Card Number</Label>
                      <Input id="card" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="month">Expiry Month</Label>
                        <Select>
                          <SelectTrigger id="month">
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(
                              (month) => (
                                <SelectItem
                                  key={month}
                                  value={month.toString().padStart(2, "0")}
                                >
                                  {month.toString().padStart(2, "0")}
                                </SelectItem>
                              ),
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="year">Expiry Year</Label>
                        <Select>
                          <SelectTrigger id="year">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from(
                              { length: 10 },
                              (_, i) => new Date().getFullYear() + i,
                            ).map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Price Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex justify-between">
                      <span>Base Rental Price</span>
                      <span>${rentalDetails.basePrice.toFixed(2)}</span>
                    </div>
                    {selectedOptions.map((optionId) => {
                      const option = additionalOptions.find(
                        (opt) => opt.id === optionId,
                      );
                      return option ? (
                        <div key={option.id} className="flex justify-between">
                          <span>{option.label}</span>
                          <span>${option.price.toFixed(2)}</span>
                        </div>
                      ) : null;
                    })}
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" size="lg">
                      Complete Booking
                    </Button>
                  </CardFooter>
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
