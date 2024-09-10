import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-5xl rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Car Details</h1>
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
            <h2 className="mb-4 text-xl font-semibold">Car Details</h2>
            <div className="mb-4">
              <p className="mb-1 text-gray-500">Make:</p>
              <p>Toyota</p>
            </div>
            <div className="mb-4">
              <p className="mb-1 text-gray-500">Model:</p>
              <p>Camry</p>
            </div>
            <div className="mb-4">
              <p className="mb-1 text-gray-500">Year:</p>
              <p>2023</p>
            </div>
            <div className="mb-4">
              <p className="mb-1 text-gray-500">Mileage:</p>
              <p>25,000 miles</p>
            </div>
            <div className="mb-4">
              <p className="mb-1 text-gray-500">Price:</p>
              <p className="text-2xl font-bold">$25/h</p>
            </div>
            <div className="flex items-center justify-between">
              <Button asChild>
                <Link href="/rent/duration">Rent Now</Link>
              </Button>
              <Button variant="secondary">Add to Favorites</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
