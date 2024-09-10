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
  Eye,
  Filter,
  Home,
  MapPin,
  Menu,
  Package,
  Plus,
  Search,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Dummy data for locations list
const locationsList = [
  {
    id: 1,
    name: "Downtown Office",
    address: "123 Main St, City Center",
    phoneNumber: "+1 (555) 123-4567",
    totalCars: 50,
    availableCars: 35,
    status: "Active",
  },
  {
    id: 2,
    name: "Airport Terminal",
    address: "456 Airport Rd, Terminal 2",
    phoneNumber: "+1 (555) 987-6543",
    totalCars: 75,
    availableCars: 40,
    status: "Active",
  },
  {
    id: 3,
    name: "Suburban Branch",
    address: "789 Oak Ave, Suburbia",
    phoneNumber: "+1 (555) 246-8135",
    totalCars: 30,
    availableCars: 22,
    status: "Active",
  },
  {
    id: 4,
    name: "Beach Resort Kiosk",
    address: "101 Coastal Hwy, Beachtown",
    phoneNumber: "+1 (555) 369-2580",
    totalCars: 20,
    availableCars: 5,
    status: "Active",
  },
  {
    id: 5,
    name: "Mountain Lodge",
    address: "202 Pine Rd, Mountain View",
    phoneNumber: "+1 (555) 147-2589",
    totalCars: 15,
    availableCars: 10,
    status: "Inactive",
  },
];

interface ILocation {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  totalCars: number;
  availableCars: number;
  status: string;
}

export default function AdminLocationsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<ILocation>({
    id: 0,
    name: "",
    address: "",
    phoneNumber: "",
    totalCars: 0,
    availableCars: 0,
    status: "",
  });
  const [isAddLocationModalOpen, setIsAddLocationModalOpen] =
    useState<boolean>(false);

  const handleViewLocation = (location: ILocation) => {
    setSelectedLocation(location);
  };

  const handleEditLocation = (locationData: ILocation) => {
    // Logic to edit location
    console.log("Editing location:", locationData);
    setSelectedLocation({
      id: 0,
      name: "",
      address: "",
      phoneNumber: "",
      totalCars: 0,
      availableCars: 0,
      status: "",
    });
  };

  // const handleAddLocation = (locationData: ILocation) => {
  //   // Logic to add new location
  //   console.log("Adding new location:", locationData);
  //   setIsAddLocationModalOpen(false);
  // };

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
            className="block rounded px-4 py-2.5 transition duration-200 hover:bg-gray-700"
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
            className="block rounded bg-gray-700 px-4 py-2.5 transition duration-200"
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
                placeholder="Search locations..."
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
                Locations Management
              </h3>
              <Button onClick={() => setIsAddLocationModalOpen(true)}>
                <Plus className="mr-2 h-4 w-4" /> Add New Location
              </Button>
            </div>

            {/* Filters */}
            <div className="mb-6 flex flex-wrap gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="totalCars">Total Cars</SelectItem>
                  <SelectItem value="availableCars">Available Cars</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Apply Filters
              </Button>
            </div>

            {/* Locations Table */}
            <Card>
              <CardHeader>
                <CardTitle>Locations List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Phone Number</TableHead>
                      <TableHead>Total Cars</TableHead>
                      <TableHead>Available Cars</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {locationsList.map((location) => (
                      <TableRow key={location.id}>
                        <TableCell>{location.name}</TableCell>
                        <TableCell>{location.address}</TableCell>
                        <TableCell>{location.phoneNumber}</TableCell>
                        <TableCell>{location.totalCars}</TableCell>
                        <TableCell>{location.availableCars}</TableCell>
                        <TableCell>{location.status}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleViewLocation(location)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleViewLocation(location)}
                            >
                              <Edit className="h-4 w-4" />
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

      {/* View/Edit Location Modal */}
      <Dialog
        open={selectedLocation !== null}
        onOpenChange={(open) => {
          if (!open)
            setSelectedLocation({
              id: 0,
              name: "",
              address: "",
              phoneNumber: "",
              totalCars: 0,
              availableCars: 0,
              status: "",
            });
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Location Details</DialogTitle>
            <DialogDescription>
              View and edit location information.
            </DialogDescription>
          </DialogHeader>
          {selectedLocation && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue={selectedLocation.name}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="address" className="text-right">
                  Address
                </Label>
                <Input
                  id="address"
                  defaultValue={selectedLocation.address}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="text-right">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  defaultValue={selectedLocation.phoneNumber}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="totalCars" className="text-right">
                  Total Cars
                </Label>
                <Input
                  id="totalCars"
                  type="number"
                  defaultValue={selectedLocation.totalCars}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="availableCars" className="text-right">
                  Available Cars
                </Label>
                <Input
                  id="availableCars"
                  type="number"
                  defaultValue={selectedLocation.availableCars}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select defaultValue={selectedLocation.status}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => handleEditLocation(selectedLocation)}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add New Location Modal */}
      <Dialog
        open={isAddLocationModalOpen}
        onOpenChange={setIsAddLocationModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Location</DialogTitle>
            <DialogDescription>
              Enter the details for the new rental location.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newName" className="text-right">
                Name
              </Label>
              <Input id="newName" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newAddress" className="text-right">
                Address
              </Label>
              <Input id="newAddress" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newPhoneNumber" className="text-right">
                Phone Number
              </Label>
              <Input id="newPhoneNumber" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newTotalCars" className="text-right">
                Total Cars
              </Label>
              <Input id="newTotalCars" type="number" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newStatus" className="text-right">
                Status
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              onClick={() => handleEditLocation(selectedLocation)}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
