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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Top-notch
                <br />
                <span className="text-blue-600">Laundry & Dry</span>
                <br />
                <span className="text-blue-600">Cleaning</span> Solutions
              </h1>
              <p className="text-xl font-medium text-gray-700">
                "Care for Your Clothes Like Our Own"
              </p>
              <p className="text-gray-600">
                We pickup, clean and return your clean clothes in as little as
                24 hours
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 max-w-md">
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger className="w-full md:w-auto">
                  <SelectValue placeholder="Please Select Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="suburbs">Suburbs</SelectItem>
                  <SelectItem value="uptown">Uptown</SelectItem>
                </SelectContent>
              </Select>

              <Button
                className="bg-[#3546AE] hover:bg-blue-700 w-full md:w-auto"
                size="lg"
              >
                Proceed Next
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center items-center">
  {/* Background Circle Shape */}
  <div className="absolute bg-purple-100 rounded-full w-72 h-72 md:w-[420px] md:h-[420px] z-0"></div>

  {/* Main Image */}
  <div className="relative z-10 w-72 md:w-[420px] aspect-[3/4]">
    <Image
      src="/marketinggirl.png" // Replace with your image path
      alt="Laundry Service"
      fill
      className="object-contain"
      priority
    />
  </div>

  {/* Floating Badges */}
  <div className="absolute z-20 w-full h-full">
    {/* Badge 1 */}
    <div
      className="absolute bg-slate-800 text-white flex items-center shadow-lg rounded-[8px]"
      style={{
        width: "175px",
        height: "56px",
        top: "152px",
        left: "49px",
        padding: "16px",
        gap: "15px",
      }}
    >
      <Clock className="w-5 h-5 text-yellow-400" />
      <span className="whitespace-nowrap">Open 24 Hours</span>
    </div>

    {/* Badge 2 */}
    <div
      className="absolute bg-slate-800 text-white flex items-center shadow-lg rounded-[8px]"
      style={{
        width: "163px",
        height: "56px",
        top: "350px",
        left: "27px",
        padding: "16px",
        gap: "15px",
      }}
    >
      <Truck className="w-5 h-5 text-red-400" />
      <span className="whitespace-nowrap">Free Delivery</span>
    </div>

    {/* Badge 3 */}
    <div
      className="absolute bg-slate-800 text-white flex items-center shadow-lg rounded-[8px]"
      style={{
        width: "206px",
        height: "56px",
        top: "460px",
        left: "216px",
        padding: "16px",
        gap: "15px",
      }}
    >
      <Shield className="w-5 h-5 text-green-400" />
      <span className="whitespace-nowrap">Safety Guaranteed</span>
    </div>
  </div>

  {/* Floating Balls */}
  <div className="absolute z-10 w-full h-full pointer-events-none">
    {/* Ball 1 */}
    <div className="absolute bg-blue-400 rounded-full w-4 h-4 top-[50px] left-[100px] animate-pulse"></div>
    {/* Ball 2 */}
    <div className="absolute bg-pink-400 rounded-full w-6 h-6 top-[120px] right-[80px] animate-bounce"></div>
    {/* Ball 3 */}
    <div className="absolute bg-yellow-300 rounded-full w-3 h-3 bottom-[150px] left-[60px] animate-ping"></div>
    {/* Ball 4 */}
    <div className="absolute bg-green-400 rounded-full w-5 h-5 bottom-[80px] right-[40px] animate-pulse"></div>
    {/* Ball 5 */}
    <div className="absolute bg-purple-500 rounded-full w-8 h-8 top-[200px] left-[200px] animate-bounce"></div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
