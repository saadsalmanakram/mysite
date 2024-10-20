"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

const PublicationHero = () => {
  return (
    <div className="mt-8 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {/* Card 1 */}
        <BackgroundGradient className="rounded-[22px] w-full max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 min-h-[650px] flex flex-col justify-between items-center">
          <Image
            src="https://cdn.pixabay.com/photo/2017/05/28/18/58/cube-2351878_1280.jpg" // Replace with the actual URL
            alt="jordans"
            height={400}
            width={400}
            className="object-cover rounded-[22px] h-64 w-64"
            unoptimized
          />
          <div className="text-center">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              High-Dimensional Space
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Data often exists in high-dimensional spaces, where each feature adds another dimension. 
              This article explores how semantic representation transforms our understanding of these 
              spaces, enhancing our analysis and interpretation of complex information.
            </p>
          </div>
          <Link href="https://medium.com/@saadsalmanakram1/high-dimensional-space-how-semantics-redefined-the-landscape-7ba94c198b58" passHref> {/* Add the link to the article */}
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4">
              Read here!
            </button>
          </Link>
        </BackgroundGradient>

      </div>
    </div>
  );
};

export default PublicationHero;
