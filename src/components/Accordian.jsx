import React from 'react';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JYBIYDouTD3
 */
export default function Component() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8">Common Questions</h2>
      <div className="space-y-4">
        <details className="group">
          <summary className="flex justify-between items-center p-4 cursor-pointer">
            <span className="text-lg font-medium">What services do you offer for branding?</span>
            <PlusIcon className="w-6 h-6" />
          </summary>
          <p className="pl-4 pr-4 pb-4 text-gray-600">
            We offer a comprehensive range of branding services, including brand strategy development, visual identity
            design, brand positioning, messaging, brand guidelines, and brand implementation across various platforms.
          </p>
        </details>
        <details className="group">
          <summary className="flex justify-between items-center p-4 cursor-pointer">
            <span className="text-lg font-medium">Can you help with rebranding an existing company?</span>
            <PlusIcon className="w-6 h-6" />
          </summary>
          <p className="pl-4 pr-4 pb-4 text-gray-600">
            Yes, we specialize in rebranding and can help your company develop a new brand identity that resonates with
            your target audience and reflects your company's values and mission.
          </p>
        </details>
        <details className="group">
          <summary className="flex justify-between items-center p-4 cursor-pointer">
            <span className="text-lg font-medium">How do you measure the success of a branding?</span>
            <PlusIcon className="w-6 h-6" />
          </summary>
          <p className="pl-4 pr-4 pb-4 text-gray-600">
            The success of branding can be measured through various metrics such as brand recognition, customer loyalty,
            market share, and overall impact on sales and revenue.
          </p>
        </details>
        <details className="group">
          <summary className="flex justify-between items-center p-4 cursor-pointer">
            <span className="text-lg font-medium">
              How do you ensure brand consistency across all marketing materials and platforms?
            </span>
            <PlusIcon className="w-6 h-6" />
          </summary>
          <p className="pl-4 pr-4 pb-4 text-gray-600">
            We establish comprehensive brand guidelines that cover all aspects of the brand, including typography, color
            palette, imagery, and voice, to ensure consistency across all marketing materials and platforms.
          </p>
        </details>
        <details className="group">
          <summary className="flex justify-between items-center p-4 cursor-pointer">
            <span className="text-lg font-medium">What is your approach to creating a brand strategy?</span>
            <PlusIcon className="w-6 h-6" />
          </summary>
          <p className="pl-4 pr-4 pb-4 text-gray-600">
            Our approach involves in-depth research, understanding the target audience, analyzing competitors, and
            aligning the brand strategy with the company's long-term goals and objectives.
          </p>
        </details>
      </div>
    </div>
  )
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
