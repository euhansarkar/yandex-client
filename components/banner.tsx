import { Star, Clock, Info, OctagonAlert } from "lucide-react";
import Image from "next/image";


interface BannerProps {
  id: string;
  name: string;
  logo: string;
  isClosed: string;
  description: string;
  location: string;
  businessHour: string;
  estDeliveryTime: string;
}

export default function Banner({ name, logo, businessHour, estDeliveryTime, isClosed}: BannerProps) {
  return (
    <div className="space-y-4 mb-6">
      <div className="relative h-[200px] rounded-lg overflow-hidden">
        <Image
          src={logo}
          alt="KFC promotional banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <div className="flex gap-2">
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{estDeliveryTime}</span>
            </div>
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Star className="h-4 w-4" />
              <span className="text-sm">4.5</span>
              <span className="text-sm text-white/70">{businessHour}</span>
            </div>
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Info className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      {isClosed && (
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-red-600 rounded-lg flex items-center justify-center">
              <OctagonAlert color="#d12929" />
            </div>
            <p className="text-blue-200">Restaurant not open yet :(</p>
          </div>
        </div>
      )}
      <div className="bg-green-50 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-green-600 rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
              <path d="M16.5 9.4 7.55 4.24" />
            </svg>
          </div>
          <p className="text-green-700">Free delivery – on any order</p>
        </div>
      </div>
    </div>
  );
}
