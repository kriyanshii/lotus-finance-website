import React from "react";
import Header from "../../components/Header";
import image from "../../assets/hourglass.webp"

function HomeLoan(){
    return (
        <>
        <Header />
        <div className="bg-white text-black py-24 px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={image} alt="Web Design" width={500} height={500} className="rounded-lg" />
        </div>
        <div>
          <div className="flex items-center mb-8">
            <div className="bg-pink-500 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                color="white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold ml-4">HOME LOAN</h2>
          </div>
          <h1 className="text-4xl font-bold mb-6">
          Lorem ipsum dolor sit amet</h1>
          <blockquote className="text-lg italic mb-8">
            "Home is where the heart is."
          </blockquote>
          <p className="mb-4">
            We understand the importance of a Home in today's digital landscape. Our team
            works closely with you to understand your financial goals to create a
            get you the plan that suits your need.
          </p>
          <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
        </>
    )
}
export default HomeLoan;