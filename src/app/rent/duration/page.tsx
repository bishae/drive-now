import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { BellIcon, CalendarDaysIcon, CalendarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-5xl rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Rental Options</h1>
            <p className="text-gray-500">2023 Toyota Camry</p>
          </div>
          <BellIcon className="h-6 w-6 text-gray-500" />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Image
              src="https://dam.alfuttaim.com/dx/api/dam/v1/collections/dc9b6eaa-cc71-4e6b-b9a8-2ede7939749f/items/636636eb-97a8-4c33-9018-dd9aeeee4cb3/renditions/3a456e07-36a8-45e0-a80f-0cec233d81bd?binary=true"
              alt="Car"
              className="w-full rounded-lg"
              width="600"
              height="400"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold">Rental Duration</h2>
            <div className="mb-4">
              <RadioGroup
                defaultValue="daily"
                className="grid grid-cols-3 gap-4"
              >
                <div>
                  <RadioGroupItem
                    value="daily"
                    id="daily"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="daily"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <CalendarDaysIcon className="mb-3 h-6 w-6" />
                    Daily
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="weekly"
                    id="weekly"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="weekly"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <CalendarDaysIcon className="mb-3 h-6 w-6" />
                    Weekly
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="monthly"
                    id="monthly"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="monthly"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <CalendarIcon className="mb-3 h-6 w-6" />
                    Monthly
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mt-8">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:underline"
                prefetch={false}
              >
                Terms and Conditions
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <Button asChild>
                <Link href="/payment">Rent Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
