"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MapPin,
  Search,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Dummy data for car list
const carList = Array(20)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    name: `Car Model ${i + 1}`,
    type: ["Sedan", "SUV", "Hatchback", "Luxury"][
      Math.floor(Math.random() * 4)
    ],
    seats: Math.floor(Math.random() * 3) + 4,
    transmission: Math.random() > 0.5 ? "Automatic" : "Manual",
    fuelType: ["Petrol", "Diesel", "Electric", "Hybrid"][
      Math.floor(Math.random() * 4)
    ],
    pricePerDay: Math.floor(Math.random() * 100) + 50,
  }));

export default function Component() {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);
  const carsPerPage = 9;
  const totalPages = Math.ceil(carList.length / carsPerPage);

  const filteredCars = carList.filter(
    (car) =>
      car.pricePerDay >= priceRange[0]! && car.pricePerDay <= priceRange[1]!,
  );

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

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
              Our Cars
            </h1>
            <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
              <div className="space-y-6">
                <div>
                  <h2 className="mb-2 text-lg font-semibold">Search</h2>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      className="pl-8"
                      placeholder="Search cars..."
                      type="search"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="mb-2 text-lg font-semibold">Filters</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Car Type
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select car type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="hatchback">Hatchback</SelectItem>
                          <SelectItem value="luxury">Luxury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Price Range
                      </label>
                      <Slider
                        min={0}
                        max={200}
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="mt-2 flex justify-between text-sm text-gray-500">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Transmission
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="automatic" />
                          <label htmlFor="automatic">Automatic</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="manual" />
                          <label htmlFor="manual">Manual</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {currentCars.map((car) => (
                    <div
                      key={car.id}
                      className="overflow-hidden rounded-lg shadow-lg"
                    >
                      <Image
                        src={`/placeholder.svg?height=200&width=300`}
                        width={300}
                        height={200}
                        alt={car.name}
                        className="w-full"
                      />
                      <div className="p-4">
                        <h3 className="mb-2 text-lg font-semibold">
                          {car.name}
                        </h3>
                        <p className="mb-4 text-sm text-gray-600">
                          {car.type} • {car.seats} Seats • {car.transmission} •{" "}
                          {car.fuelType}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold">
                            ${car.pricePerDay}/day
                          </span>
                          <Button size="sm">Rent Now</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="icon"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ),
                  )}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
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
