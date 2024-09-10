"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Bell,
  Car,
  DollarSign,
  Home,
  MapPin,
  Menu,
  Package,
  Percent,
  Search,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recentBookings = [
  {
    id: 1,
    customer: "John Doe",
    car: "Sedan Model X",
    date: "2024-07-15",
    status: "Confirmed",
  },
  {
    id: 2,
    customer: "Jane Smith",
    car: "SUV Model Y",
    date: "2024-07-16",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    car: "Luxury Model Z",
    date: "2024-07-17",
    status: "Completed",
  },
  {
    id: 4,
    customer: "Alice Brown",
    car: "Hatchback Model A",
    date: "2024-07-18",
    status: "Cancelled",
  },
  {
    id: 5,
    customer: "Charlie Davis",
    car: "Sedan Model B",
    date: "2024-07-19",
    status: "Confirmed",
  },
];

const barChartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
  { name: "Jun", value: 239 },
];

const pieChartData = [
  { name: "Sedan", value: 400 },
  { name: "SUV", value: 300 },
  { name: "Hatchback", value: 200 },
  { name: "Luxury", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                placeholder="Search..."
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
            <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>

            {/* Metrics */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Bookings
                  </CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Available Cars
                  </CardTitle>
                  <Car className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">456</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Customer Satisfaction
                  </CardTitle>
                  <Percent className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98.5%</div>
                  <p className="text-xs text-muted-foreground">
                    +2% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Car Types Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Bookings */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>
                  A list of recent car rental bookings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Car</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>{booking.id}</TableCell>
                        <TableCell>{booking.customer}</TableCell>
                        <TableCell>{booking.car}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>{booking.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button>Add New Car</Button>
              <Button variant="outline">Generate Report</Button>
              <Button variant="secondary">Manage Inventory</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
