"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

const PublicationHero = () => {
  return (
    <div className="mt-8 mb-8"> {/* Added margin-bottom here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {/* Card 1 */}
        <BackgroundGradient className="rounded-[22px] w-full max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 min-h-[650px] flex flex-col justify-between items-center">
          <Image
            src="https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063555_1280.png" // Replace with the actual URL
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-[22px]" // Added rounded corners here
            unoptimized // Optional, use this if you're experiencing issues with optimization
          />
          <div className="text-center">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Air Jordan 4 Retro Reimagined
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is by
              entering raffles and waiting for the official releases.
            </p>
          </div>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>

        {/* Card 2 */}
        <BackgroundGradient className="rounded-[22px] w-full max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 min-h-[650px] flex flex-col justify-between items-center">
          <Image
            src="https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063555_1280.png" // Replace with the actual URL
            alt="nike shoes"
            height="400"
            width="400"
            className="object-contain rounded-[22px]" // Added rounded corners here
            unoptimized
          />
          <div className="text-center">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Nike Air Max 90
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The classic Nike Air Max 90 in a new colorway. Available starting
              March 10, 2024. Don&apos;t miss out on these timeless kicks!
            </p>
          </div>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $120
            </span>
          </button>
        </BackgroundGradient>

        {/* Card 3 */}
        <BackgroundGradient className="rounded-[22px] w-full max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 min-h-[650px] flex flex-col justify-between items-center">
          <Image
            src="https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063555_1280.png" // Replace with the actual URL
            alt="adidas shoes"
            height="400"
            width="400"
            className="object-contain rounded-[22px]" // Added rounded corners here
            unoptimized
          />
          <div className="text-center">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Adidas Ultraboost 23
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The latest Adidas Ultraboost 23 promises unmatched comfort and style.
              Available for purchase from April 5, 2024.
            </p>
          </div>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $150
            </span>
          </button>
        </BackgroundGradient>

        {/* Card 4 */}
        <BackgroundGradient className="rounded-[22px] w-full max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 min-h-[650px] flex flex-col justify-between items-center">
          <Image
            src="https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063555_1280.png" // Replace with the actual URL
            alt="puma shoes"
            height="400"
            width="400"
            className="object-contain rounded-[22px]" // Added rounded corners here
            unoptimized
          />
          <div className="text-center">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Puma RS-X Reinvent
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The Puma RS-X Reinvent offers bold style and performance. Get yours
              starting February 28, 2024.
            </p>
          </div>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $130
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default PublicationHero;
