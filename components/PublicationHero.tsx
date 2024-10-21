"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

const PublicationHero = () => {
  return (
    <div className="mt-8 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {/* Card 1 */}
        <BackgroundGradient className="rounded-[22px] w-full max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 min-h-[650px] flex flex-col justify-between items-center">
          <Image
            src="https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063555_1280.png" // Replace with the actual URL
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-[22px]"
            unoptimized
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
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Read here!
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
            className="object-contain rounded-[22px]"
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
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Read here!
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
            className="object-contain rounded-[22px]"
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
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Read here!
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
            className="object-contain rounded-[22px]"
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
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Read here!
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default PublicationHero;
