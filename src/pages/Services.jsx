import React from "react";

function Services() {
    return (
      <section className="bg-[#f4ede4] text-black py-16 px-8 md:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              As a finance firm
            </h2>
            <p className="text-sm uppercase tracking-widest">(what we do)</p>
            <div className="flex space-x-2">
              <span className="block w-2.5 h-2.5 bg-black rounded-full" />
              <span className="block w-2.5 h-2.5 bg-gray-300 rounded-full" />
              <span className="block w-2.5 h-2.5 bg-gray-300 rounded-full" />
            </div>
            <div className="border-t border-black pt-6">
              <p className="text-xs uppercase tracking-widest mb-1">(What I do)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold">Mortgage Loan</h3>
                  <p className="text-sm">
                    Create stunning, on-brand designs and improve your audience & let my creativity translate it into my
                    skills.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Car Loan</h3>
                  <p className="text-sm">
                    My aesthetic and visually stunning work ensures that your project is on brand, on message, and
                    visually harmonious. Let's tell your story together.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Home Loan</h3>
                  <p className="text-sm">
                    I specialize in designing intuitive user experiences that are both functional and beautiful.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Gold loan</h3>
                  <p className="text-sm">
                    From animated logos to explainer videos, I bring your message to life with visually stunning motion
                    design.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              alt="Designer"
              className="h-[400px] w-[300px] object-cover rounded-lg"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
        </div>
        <div className="mt-16">
          <marquee className="text-center text-6xl font-bold tracking-tighter leading-none">Finance Finance Finance Finance Finance Finance Finance  </marquee>
        </div>
      </section>
    )
  }
  
export default Services;