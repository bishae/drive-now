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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  Car,
  Home,
  MapPin,
  Menu,
  Package,
  Save,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdminSettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSaveSettings = () => {
    // Logic to save settings
    console.log("Saving settings...");
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
            className="block rounded bg-gray-700 px-4 py-2.5 transition duration-200"
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
              <h2 className="text-xl font-semibold">Settings</h2>
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
            <Tabs defaultValue="general" className="space-y-4">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="user-management">
                  User Management
                </TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="api-integration">
                  API Integration
                </TabsTrigger>
                <TabsTrigger value="backup-maintenance">
                  Backup & Maintenance
                </TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>
                      Manage your company information and site settings.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input
                        id="company-name"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="site-url">Site URL</Label>
                      <Input id="site-url" placeholder="https://example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Contact Email</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="contact@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select>
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc">UTC</SelectItem>
                          <SelectItem value="est">Eastern Time</SelectItem>
                          <SelectItem value="pst">Pacific Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="user-management">
                <Card>
                  <CardHeader>
                    <CardTitle>User Management Settings</CardTitle>
                    <CardDescription>
                      Configure user roles and permissions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="default-role">Default User Role</Label>
                      <Select>
                        <SelectTrigger id="default-role">
                          <SelectValue placeholder="Select default role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="customer">Customer</SelectItem>
                          <SelectItem value="staff">Staff</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="approve-registrations" />
                      <Label htmlFor="approve-registrations">
                        Require approval for new registrations
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="two-factor" />
                      <Label htmlFor="two-factor">
                        Enable two-factor authentication
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                      Manage email and push notification preferences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email-provider">Email Provider</Label>
                      <Select>
                        <SelectTrigger id="email-provider">
                          <SelectValue placeholder="Select email provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="smtp">SMTP</SelectItem>
                          <SelectItem value="sendgrid">SendGrid</SelectItem>
                          <SelectItem value="mailgun">Mailgun</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-host">SMTP Host</Label>
                      <Input id="smtp-host" placeholder="smtp.example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-port">SMTP Port</Label>
                      <Input id="smtp-port" placeholder="587" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="enable-push" />
                      <Label htmlFor="enable-push">
                        Enable push notifications
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="api-integration">
                <Card>
                  <CardHeader>
                    <CardTitle>API Integration Settings</CardTitle>
                    <CardDescription>
                      Manage API keys and webhooks.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="api-key">API Key</Label>
                      <Input id="api-key" placeholder="Your API key" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="webhook-url">Webhook URL</Label>
                      <Input
                        id="webhook-url"
                        placeholder="https://example.com/webhook"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="enable-api" />
                      <Label htmlFor="enable-api">Enable API access</Label>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="backup-maintenance">
                <Card>
                  <CardHeader>
                    <CardTitle>Backup & Maintenance Settings</CardTitle>
                    <CardDescription>
                      Configure system backups and maintenance schedules.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="backup-frequency">Backup Frequency</Label>
                      <Select>
                        <SelectTrigger id="backup-frequency">
                          <SelectValue placeholder="Select backup frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="backup-retention">
                        Backup Retention (days)
                      </Label>
                      <Input
                        id="backup-retention"
                        type="number"
                        placeholder="30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maintenance-window">
                        Maintenance Window
                      </Label>
                      <Select>
                        <SelectTrigger id="maintenance-window">
                          <SelectValue placeholder="Select maintenance window" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sunday">Sunday 2AM-4AM</SelectItem>
                          <SelectItem value="wednesday">
                            Wednesday 1AM-3AM
                          </SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <div className="mt-6">
              <Button onClick={handleSaveSettings}>
                <Save className="mr-2 h-4 w-4" /> Save All Settings
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
