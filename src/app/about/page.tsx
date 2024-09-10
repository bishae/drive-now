import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "John Smith",
    role: "COO",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Alice Johnson",
    role: "Head of Customer Experience",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Bob Williams",
    role: "Fleet Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
];

const stats = [
  { label: "Vehicles in Fleet", value: "500+" },
  { label: "Satisfied Customers", value: "100,000+" },
  { label: "Cities Served", value: "50+" },
  { label: "Years in Business", value: "15+" },
];

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
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About Acme Car Rentals
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Driving innovation in car rentals since 2009. We&apos;re
                  committed to providing exceptional service and a wide range of
                  vehicles to meet your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Acme Car Rentals, our mission is to provide convenient,
                  reliable, and affordable transportation solutions. We strive
                  to exceed customer expectations by offering a diverse fleet of
                  well-maintained vehicles and exceptional customer service.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Values
                </h2>
                <ul className="grid list-inside list-disc gap-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  <li>Customer-First Approach</li>
                  <li>Environmental Responsibility</li>
                  <li>Innovation in Mobility</li>
                  <li>Transparency and Integrity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Team
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center p-4 text-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="mb-4 rounded-full"
                    />
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Achievements
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold">
                      {stat.value}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or want to learn more about our services?
                  We&apos;re here to help!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  Contact Us
                </Button>
              </div>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="flex items-center space-x-2 text-gray-500 hover:text-gray-600"
                >
                  <Mail className="h-5 w-5" />
                  <span>info@acmecarrentals.com</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-2 text-gray-500 hover:text-gray-600"
                >
                  <Phone className="h-5 w-5" />
                  <span>+1 (555) 123-4567</span>
                </Link>
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
