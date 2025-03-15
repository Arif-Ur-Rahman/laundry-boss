import Image from "next/image";

export default function Barbar() {
  return (
    <div className="bg-gray-100 py-16 px-4 mt-[200px]">
      <div className="max-w-6xl mx-auto text-center">

        {/* SMOOTH DRY CLEANING AND LAUNDRY Text */}
        <p
          className="text-center text-[#687387] mb-4"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "0",
          }}
        >
          SMOOTH DRY CLEANING AND LAUNDRY
        </p>

        <h3 className="text-center text-[#3546AE] md:text-4xl font-medium mb-8"
        style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "48px",
            lineHeight: "56px",
            letterSpacing: "0",
        }}>
          How BarberShop Works
        </h3>

        {/* Steps */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-[20px] bg-[#FCFCFF]"
          style={{ width: "1201px", height: "338px" }}
        >
          {/* Step 1 */}
          <div
            className="bg-[#F1F5FD] rounded-lg shadow-lg"
            style={{ height: "338px" }}
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/barbar1.jpg"
                alt="Delivery Icon"
                width={387}
                height={236}
              />
            </div>
            <p className="text-[#3546AE] px-4 text-center">
              Arrange A Collection Online Or By Using Our App.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="bg-[#F1F5FD] rounded-lg shadow-lg"
            style={{ height: "338px" }}
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/barbar2.jpg"
                alt="Delivery Icon"
                width={387}
                height={236}
              />
            </div>
            <p className="text-[#3546AE] px-4 text-center">
              We work our magic, cleaning your clothes, removing stains and beautifully ironing them.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="bg-[#F1F5FD] rounded-lg shadow-lg"
            style={{ height: "338px" }}
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/barbar3.jpg"
                alt="Delivery Icon"
                width={387}
                height={236}
              />
            </div>
            <p className="text-[#3546AE] px-4 text-center">
              We deliver your clean clothes back to you, so you are ready to go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
