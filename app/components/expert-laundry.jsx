import Image from "next/image";
import { CheckCircle2 } from "lucide-react"; // Optional: Lucide icons for the green checks

export default function ExpertLaundry() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-16 bg-white md:gap-x-12">
      {/* Image Section */}
      <div className="mb-8 md:mb-0 md:w-[590px] flex justify-center">
        <Image
          src="/expert.jpg" // Replace with your actual image path
          alt="Laundry Service"
          width={550}
          height={400}
          className="rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-[537px]">
        <h2 className="text-[#3546AE] text-3xl md:text-4xl font-bold mb-4">
          Expert Laundry & Cleaning Service
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6 font-medium">
          Just place an order, relax and enjoy the easiest laundry and cleaning
          service delivered to your door!
        </p>

        {/* Features List */}
        <ul className="space-y-4">
          {[
            "Lowest price guaranteed",
            "Highest Quality Assurance",
            "Dedicated support",
            "Convenient 24 hour service",
            "Pick up & Delivery Free as standard",
            "Corporate & Business services available",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="text-green-500 w-5 h-5 mt-1 mr-3" />
              <span className="text-gray-700 font-normal">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
