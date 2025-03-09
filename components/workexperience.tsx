"use client";

import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";

export default function WorkExperience() {
  const { ref } = useSectionInView("Work Experience");

  return (
    <section ref={ref} id="workexperience" className="text-center py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Professional Software Development Experience
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
        I have worked on the following domains:
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Trading and Derivatives */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full min-h-[30rem]">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/trading.png"
              alt="Trading and Derivatives"
              width={400}
              height={250}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
          <h3 className="text-2xl font-semibold mt-5 text-gray-900 dark:text-white">
            Trading and Derivatives
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-3 flex-grow">
            I started working as a Software Developer in the Trading Domain, first in an OTC Front Office product, and then developing features and providing L2 support for a back-office trading software in the US/EU region.
          </p>
          <a href="https://corporatefinanceinstitute.com/resources/career-map/sell-side/capital-markets/trading-software/" className="inline-block mt-5 px-5 py-2 border border-gray-800 text-gray-800 dark:border-white dark:text-white rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition">
            Learn More
          </a>
        </div>

        {/* Sportsbook and Betting */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full min-h-[30rem]">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/sportsbook.jpg"
              alt="Sportsbook and Betting"
              width={400}
              height={250}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
          <h3 className="text-2xl font-semibold mt-5 text-gray-900 dark:text-white">
            Sportsbook and Betting
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-3 flex-grow">
            Responsible for designing features from scratch on a Sportsbook, and collaborating with third-party APIs to integrate MVP of the product to the website. Successfully delivered the project during go-live in Germany.
          </p>
          <a href="https://www.investopedia.com/sportsbook-5217715" className="inline-block mt-5 px-5 py-2 border border-gray-800 text-gray-800 dark:border-white dark:text-white rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
