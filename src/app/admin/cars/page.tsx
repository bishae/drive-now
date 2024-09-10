"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Bell,
  Car,
  Edit,
  Filter,
  Home,
  MapPin,
  Menu,
  Package,
  Plus,
  Search,
  Settings,
  Trash2,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Dummy data for car list
const carList = [
  {
    id: 1,
    name: "Sedan Model X",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    pricePerDay: 50,
    status: "Available",
  },
  {
    id: 2,
    name: "SUV Model Y",
    type: "SUV",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    pricePerDay: 75,
    status: "Rented",
  },
  {
    id: 3,
    name: "Hatchback Model Z",
    type: "Hatchback",
    seats: 5,
    transmission: "Manual",
    fuelType: "Electric",
    pricePerDay: 45,
    status: "Maintenance",
  },
  {
    id: 4,
    name: "Luxury Sedan A",
    type: "Luxury",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Hybrid",
    pricePerDay: 100,
    status: "Available",
  },
  {
    id: 5,
    name: "Compact Model B",
    type: "Compact",
    seats: 4,
    transmission: "Manual",
    fuelType: "Petrol",
    pricePerDay: 40,
    status: "Available",
  },
];

interface ICar {
  id: number;
  name: string;
  type: string;
  seats: number;
  transmission: string;
  fuelType: string;
  pricePerDay: number;
  status: string;
}

export default function AdminCarsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddCarModalOpen, setIsAddCarModalOpen] = useState(false);
  const [editingCar, setEditingCar] = useState<ICar>({
    id: 0,
    name: "",
    type: "",
    seats: 0,
    transmission: "",
    fuelType: "",
    pricePerDay: 0,
    status: "",
  });

  const handleAddCar = (carData: ICar) => {
    // Logic to add new car
    console.log("Adding new car:", carData);
    setIsAddCarModalOpen(false);
  };

  const handleEditCar = (carData: ICar) => {
    // Logic to edit car
    console.log("Editing car:", carData);
    setEditingCar({
      id: 0,
      name: "",
      type: "",
      seats: 0,
      transmission: "",
      fuelType: "",
      pricePerDay: 0,
      status: "",
    });
  };

  const handleDeleteCar = (carId: number) => {
    // Logic to delete car
    console.log("Deleting car with ID:", carId);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`min-h-screen w-64 bg-gray-800 text-white ${isSidebarOpen ? "block" : "hidden"} md:block`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-8">
          <Link
            href="#"
            className="block rounded px-4 py-2.5 transition duration-200 hover:bg-gray-700"
          >
            <Home className="mr-2 inline-block h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="block rounded bg-gray-700 px-4 py-2.5 transition duration-200"
          >
            <Car className="mr-2 inline-block h-5 w-5" />
            Cars
          </Link>
          <Link
            href="#"
            className="block rounded px-4 py-2.5 transition duration-200 hover:bg-gray-700"
          >
            <Users className="mr-2 inline-block h-5 w-5" />
            Customers
          </Link>
          <Link
            href="#"
            className="block rounded px-4 py-2.5 transition duration-200 hover:bg-gray-700"
          >
            <Package className="mr-2 inline-block h-5 w-5" />
            Bookings
          </Link>
          <Link
            href="#"
            className="block rounded px-4 py-2.5 transition duration-200 hover:bg-gray-700"
          >
            <MapPin className="mr-2 inline-block h-5 w-5" />
            Locations
          </Link>
          <Link
            href="#"
            className="block rounded px-4 py-2.5 transition duration-200 hover:bg-gray-700"
          >
            <Settings className="mr-2 inline-block h-5 w-5" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Search cars..."
                className="mr-2 w-64"
              />
              <Button size="icon" variant="ghost">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center">
              <Button size="icon" variant="ghost" className="mr-2">
                <Bell className="h-5 w-5" />
              </Button>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      width={32}
                      height={32}
                      className="mr-2 rounded-full"
                      alt="Admin"
                    />
                    <SelectValue placeholder="Admin User" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="profile">Profile</SelectItem>
                  <SelectItem value="settings">Settings</SelectItem>
                  <SelectItem value="logout">Logout</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-3xl font-medium text-gray-700">
                Cars Management
              </h3>
              <Button onClick={() => setIsAddCarModalOpen(true)}>
                <Plus className="mr-2 h-4 w-4" /> Add New Car
              </Button>
            </div>

            {/* Filters */}
            <div className="mb-6 flex flex-wrap gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="hatchback">Hatchback</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="compact">Compact</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="rented">Rented</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Apply Filters
              </Button>
            </div>

            {/* Cars Table */}
            <Card>
              <CardHeader>
                <CardTitle>Car Fleet</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Seats</TableHead>
                      <TableHead>Transmission</TableHead>
                      <TableHead>Fuel Type</TableHead>
                      <TableHead>Price/Day</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {carList.map((car) => (
                      <TableRow key={car.id}>
                        <TableCell>{car.name}</TableCell>
                        <TableCell>{car.type}</TableCell>
                        <TableCell>{car.seats}</TableCell>
                        <TableCell>{car.transmission}</TableCell>
                        <TableCell>{car.fuelType}</TableCell>
                        <TableCell>${car.pricePerDay}</TableCell>
                        <TableCell>{car.status}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setEditingCar(car)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDeleteCar(car.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Add/Edit Car Modal */}
      <Dialog
        open={isAddCarModalOpen || editingCar !== null}
        onOpenChange={(open) => {
          if (!open) {
            setIsAddCarModalOpen(false);
            setEditingCar({
              id: 0,
              name: "",
              type: "",
              seats: 0,
              transmission: "",
              fuelType: "",
              pricePerDay: 0,
              status: "",
            });
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingCar ? "Edit Car" : "Add New Car"}</DialogTitle>
            <DialogDescription>
              {editingCar
                ? "Edit the details of the selected car."
                : "Enter the details of the new car to add to the fleet."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue={editingCar?.name}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <Select defaultValue={editingCar?.type}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select car type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="hatchback">Hatchback</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="compact">Compact</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="seats" className="text-right">
                Seats
              </Label>
              <Input
                id="seats"
                type="number"
                defaultValue={editingCar?.seats}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="transmission" className="text-right">
                Transmission
              </Label>
              <Select defaultValue={editingCar?.transmission}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select transmission type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="automatic">Automatic</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fuelType" className="text-right">
                Fuel Type
              </Label>
              <Select defaultValue={editingCar?.fuelType}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select fuel type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="petrol">Petrol</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="pricePerDay" className="text-right">
                Price/Day
              </Label>
              <Input
                id="pricePerDay"
                type="number"
                defaultValue={editingCar?.pricePerDay}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select defaultValue={editingCar?.status}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select car status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="rented">Rented</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() =>
                editingCar
                  ? handleEditCar(editingCar)
                  : handleAddCar({
                      id: 0,
                      name: "",
                      type: "",
                      seats: 0,
                      transmission: "",
                      fuelType: "",
                      pricePerDay: 0,
                      status: "",
                    })
              }
            >
              {editingCar ? "Save Changes" : "Add Car"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
