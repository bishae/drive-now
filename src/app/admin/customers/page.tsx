/* eslint-disable @typescript-eslint/no-unsafe-argument */
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

// Dummy data for customer list
const customerList = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234-567-8901",
    totalBookings: 5,
    lastBooking: "2024-03-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 234-567-8902",
    totalBookings: 3,
    lastBooking: "2024-02-28",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "+1 234-567-8903",
    totalBookings: 1,
    lastBooking: "2024-01-10",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    phone: "+1 234-567-8904",
    totalBookings: 7,
    lastBooking: "2024-03-20",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phone: "+1 234-567-8905",
    totalBookings: 2,
    lastBooking: "2024-02-05",
    status: "Active",
  },
];

interface ICustomer {
  id: number;
  name: string;
  email: string;
  phone: string;
  totalBookings: number;
  lastBooking: string;
  status: string;
}

export default function AdminCustomersPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>({
    id: 0,
    name: "",
    email: "",
    phone: "",
    totalBookings: 0,
    lastBooking: "",
    status: "",
  });

  const handleViewCustomer = (customer: ICustomer) => {
    setSelectedCustomer(customer);
  };

  const handleEditCustomer = (customerData: ICustomer) => {
    // Logic to edit customer
    console.log("Editing customer:", customerData);
    setSelectedCustomer({
      id: 0,
      name: "",
      email: "",
      phone: "",
      totalBookings: 0,
      lastBooking: "",
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
            className="block rounded bg-gray-700 px-4 py-2.5 transition duration-200"
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
                placeholder="Search customers..."
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
                Customer Management
              </h3>
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
                  <SelectItem value="totalBookings">Total Bookings</SelectItem>
                  <SelectItem value="lastBooking">Last Booking</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Apply Filters
              </Button>
            </div>

            {/* Customers Table */}
            <Card>
              <CardHeader>
                <CardTitle>Customer List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Total Bookings</TableHead>
                      <TableHead>Last Booking</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customerList.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.phone}</TableCell>
                        <TableCell>{customer.totalBookings}</TableCell>
                        <TableCell>{customer.lastBooking}</TableCell>
                        <TableCell>{customer.status}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleViewCustomer(customer)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleViewCustomer(customer)}
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

      {/* View/Edit Customer Modal */}
      <Dialog
        open={selectedCustomer !== null}
        onOpenChange={(open) => {
          if (!open)
            setSelectedCustomer({
              id: 0,
              name: "",
              email: "",
              phone: "",
              totalBookings: 0,
              lastBooking: "",
              status: "",
            });
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Customer Details</DialogTitle>
            <DialogDescription>
              View and edit customer information.
            </DialogDescription>
          </DialogHeader>
          {selectedCustomer && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue={selectedCustomer.name}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  defaultValue={selectedCustomer.email}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="phone"
                  defaultValue={selectedCustomer.phone}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select defaultValue={selectedCustomer.status}>
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
              onClick={() => handleEditCustomer(selectedCustomer)}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
