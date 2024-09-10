const cars = [
  {
    id: 1,
    name: "Toyota Camry",
    brand: "Sedan",
    thumbnail:
      "https://dam.alfuttaim.com/dx/api/dam/v1/collections/dc9b6eaa-cc71-4e6b-b9a8-2ede7939749f/items/636636eb-97a8-4c33-9018-dd9aeeee4cb3/renditions/3a456e07-36a8-45e0-a80f-0cec233d81bd?binary=true",
  },
  {
    id: 2,
    name: "BMW X6",
    brand: "BMW",
    thumbnail:
      "https://images.netdirector.auto/eyJrZXkiOiJuZHN0b2NrL2ltYWdlcy9zdG9jay8wZTNkZmU4OTM5OTg3YTFjOTZlNzI4YmJiMmIyNmY1NzdhMjNiZmFkL1dCQTQxRUUwN1I1WjY3NzM4XzEuanBnIiwiYnVja2V0IjoiYXV0b2ZzIiwibGFzdF9tb2RpZmllZCI6IjE3MjE3MTcwNjIiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc2OCwiaGVpZ2h0Ijo1MTIsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
  },
];

import { Button } from "@/components/ui/button";
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
  CalendarIcon,
  Facebook,
  Instagram,
  MapPin,
  Search,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
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
        <section className="w-full bg-black py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Rent Your Perfect Ride
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover our wide range of vehicles and book your next
                  adventure today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2">
                  <Select>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-york">New York</SelectItem>
                      <SelectItem value="los-angeles">Los Angeles</SelectItem>
                      <SelectItem value="chicago">Chicago</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex space-x-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className="w-full justify-start bg-white text-left font-normal text-black"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          Pick-up Date
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar />
                      </PopoverContent>
                    </Popover>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className="w-full justify-start bg-white text-left font-normal text-black"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          Return Date
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Button
                    className="bg-white text-black hover:bg-gray-200"
                    type="submit"
                  >
                    Search Cars
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Cars
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="flex flex-col justify-between overflow-hidden rounded-lg bg-white shadow-lg"
                >
                  <Image
                    src={car.thumbnail}
                    width={300}
                    height={200}
                    alt={`Featured Car ${car.name}`}
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold">
                      Car Model {car.name}
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Short description of the car and its features.
                    </p>
                    <Button className="w-full">Rent Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Wide Selection",
                  description:
                    "Choose from a variety of vehicles to suit your needs.",
                },
                {
                  title: "Competitive Prices",
                  description: "Get the best rates for your car rental.",
                },
                {
                  title: "24/7 Support",
                  description:
                    "Our customer service team is always here to help.",
                },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary p-3">
                    <Search className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
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
