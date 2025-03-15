'use client';

import Image from 'next/image';

export default function DownloadApp() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-16 gap-10">
      {/* Left Side - Mobile UI Mockup */}
      <div className="relative flex-shrink-0">
        <div className="relative w-[250px] h-[500px] bg-black rounded-3xl overflow-hidden border-8 border-black shadow-xl">
          <Image
            src="/app.png" // Replace with actual image path
            alt="Mobile App Screenshot"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      
      {/* Right Side - Download Section */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Download Our <br /> Mobile App
        </h2>
        <p className="text-gray-600 mt-4">
          Get easy access to our services anytime, anywhere. Download now and experience convenience at your fingertips.
        </p>
        
        {/* App Store Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <a href="#" className="">
            <Image src="/google-play.png" alt="Google Play" width={150} height={50} />
          </a>
          <a href="#" className="">
            <Image src="/app-store.png" alt="App Store" width={150} height={50} />
          </a>
        </div>
      </div>
    </section>
  );
}