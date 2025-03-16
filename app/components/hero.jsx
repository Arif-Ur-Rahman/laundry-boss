"use client";

import { useState } from "react";
import { Clock, Truck, Shield } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LaundryHero() {
  const [area, setArea] = useState("");

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center justify-center px-4 py-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">
        {/* Left Column */}
        <div className="space-y-8 max-w-xl text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Top-notch
              <br />
              <span className="text-blue-600">Laundry & Dry</span>
              <br />
              <span className="text-blue-600">Cleaning</span> Solutions
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-700">
              "Care for Your Clothes Like Our Own"
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              We pickup, clean and return your clean clothes in as little as 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Select value={area} onValueChange={setArea}>
              <SelectTrigger className="w-full sm:w-60">
                <SelectValue placeholder="Please Select Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="downtown">Downtown</SelectItem>
                <SelectItem value="suburbs">Suburbs</SelectItem>
                <SelectItem value="uptown">Uptown</SelectItem>
              </SelectContent>
            </Select>

            <Button
              className="bg-[#3546AE] hover:bg-blue-700 w-full sm:w-auto"
              size="lg"
            >
              Proceed Next
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex justify-center items-center w-full lg:w-[500px] h-auto">
          {/* Background Circle */}
          <div className="absolute bg-purple-100 rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] z-0"></div>

          {/* Main Image */}
          <div className="relative z-10 w-64 sm:w-80 lg:w-[420px] aspect-[3/4]">
            <Image
              src="/marketinggirl.png"
              alt="Laundry Service"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Floating Badges */}
          <div className="absolute z-20 w-full h-full hidden sm:block">
            <div className="absolute bg-slate-800 text-white flex items-center shadow-lg rounded-[8px] px-4 py-2 gap-3 top-[15%] left-[5%]">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="text-sm whitespace-nowrap">Open 24 Hours</span>
            </div>

            <div className="absolute bg-slate-800 text-white flex items-center shadow-lg rounded-[8px] px-4 py-2 gap-3 top-[60%] left-[0%]">
              <Truck className="w-5 h-5 text-red-400" />
              <span className="text-sm whitespace-nowrap">Free Delivery</span>
            </div>

            <div className="absolute bg-slate-800 text-white flex items-center shadow-lg rounded-[8px] px-4 py-2 gap-3 top-[70%] right-[0%]">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm whitespace-nowrap">Safety Guaranteed</span>
            </div>
          </div>

          {/* Floating Balls */}
          <div className="absolute z-10 w-full h-full pointer-events-none hidden sm:block">
            <div className="absolute bg-blue-400 rounded-full w-4 h-4 top-[10%] left-[30%] animate-pulse"></div>
            <div className="absolute bg-pink-400 rounded-full w-6 h-6 top-[25%] right-[20%] animate-bounce"></div>
            <div className="absolute bg-yellow-300 rounded-full w-3 h-3 bottom-[40%] left-[15%] animate-ping"></div>
            <div className="absolute bg-green-400 rounded-full w-5 h-5 bottom-[15%] right-[10%] animate-pulse"></div>
            <div className="absolute bg-purple-500 rounded-full w-8 h-8 top-[45%] left-[40%] animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
