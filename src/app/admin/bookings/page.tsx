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
  Search,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Dummy data for bookings list
const bookingsList = [
  {
    id: 1,
    customer: "John Doe",
    car: "Sedan Model X",
    startDate: "2024-04-01",
    endDate: "2024-04-05",
    totalCost: 250,
    status: "Confirmed",
  },
  {
    id: 2,
    customer: "Jane Smith",
    car: "SUV Model Y",
    startDate: "2024-04-02",
    endDate: "2024-04-04",
    totalCost: 225,
    status: "In Progress",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    car: "Hatchback Model Z",
    startDate: "2024-04-05",
    endDate: "2024-04-07",
    totalCost: 135,
    status: "Pending",
  },
  {
    id: 4,
    customer: "Alice Brown",
    car: "Luxury Sedan A",
    startDate: "2024-04-10",
    endDate: "2024-04-15",
    totalCost: 750,
    status: "Confirmed",
  },
  {
    id: 5,
    customer: "Charlie Davis",
    car: "Compact Model B",
    startDate: "2024-04-12",
    endDate: "2024-04-14",
    totalCost: 120,
    status: "Cancelled",
  },
];

interface IBooking {
  id: number;
  customer: string;
  car: string;
  startDate: string;
  endDate: string;
  totalCost: number;
  status: string;
}

export default function AdminBookingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<IBooking>({
    id: 0,
    customer: "",
    car: "",
    startDate: "",
    endDate: "",
    totalCost: 0,
    status: "",
  });

  const handleViewBooking = (booking: IBooking) => {
    setSelectedBooking(booking);
  };

  const handleEditBooking = (bookingData: IBooking) => {
    // Logic to edit booking
    console.log("Editing booking:", bookingData);
    setSelectedBooking({
      id: 0,
      customer: "",
      car: "",
      startDate: "",
      endDate: "",
      totalCost: 0,
      status: "",
    });
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
            className="block rounded bg-gray-700 px-4 py-2.5 transition duration-200"
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
                placeholder="Search bookings..."
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
                Bookings Management
              </h3>
            </div>

            {/* Filters */}
            <div className="mb-6 flex flex-wrap gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="startDate">Start Date</SelectItem>
                  <SelectItem value="endDate">End Date</SelectItem>
                  <SelectItem value="totalCost">Total Cost</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Apply Filters
              </Button>
            </div>

            {/* Bookings Table */}
            <Card>
              <CardHeader>
                <CardTitle>Bookings List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Car</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Total Cost</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookingsList.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>{booking.id}</TableCell>
                        <TableCell>{booking.customer}</TableCell>
                        <TableCell>{booking.car}</TableCell>
                        <TableCell>{booking.startDate}</TableCell>
                        <TableCell>{booking.endDate}</TableCell>
                        <TableCell>${booking.totalCost}</TableCell>
                        <TableCell>{booking.status}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleViewBooking(booking)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleViewBooking(booking)}
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

      {/* View/Edit Booking Modal */}
      <Dialog
        open={selectedBooking !== null}
        onOpenChange={(open) => {
          if (!open)
            setSelectedBooking({
              id: 0,
              customer: "",
              car: "",
              startDate: "",
              endDate: "",
              totalCost: 0,
              status: "",
            });
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Booking Details</DialogTitle>
            <DialogDescription>
              View and edit booking information.
            </DialogDescription>
          </DialogHeader>
          {selectedBooking && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customer" className="text-right">
                  Customer
                </Label>
                <Input
                  id="customer"
                  defaultValue={selectedBooking.customer}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="car" className="text-right">
                  Car
                </Label>
                <Input
                  id="car"
                  defaultValue={selectedBooking.car}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="startDate" className="text-right">
                  Start Date
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  defaultValue={selectedBooking.startDate}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="endDate" className="text-right">
                  End Date
                </Label>
                <Input
                  id="endDate"
                  type="date"
                  defaultValue={selectedBooking.endDate}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="totalCost" className="text-right">
                  Total Cost
                </Label>
                <Input
                  id="totalCost"
                  type="number"
                  defaultValue={selectedBooking.totalCost}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select defaultValue={selectedBooking.status}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Confirmed">Confirmed</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => handleEditBooking(selectedBooking)}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
