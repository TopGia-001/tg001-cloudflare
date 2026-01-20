import React from "react";
import Image from "next/image";
import { Home, MoreHorizontal, X } from "lucide-react";
import BottomNavbar from "@/src/component/bottomNavbar";
import Link from "next/link";

const winners = Array.from({ length: 24 }).map((_, i) => ({
  name: "Nguyễn Văn A",
  prize: "Xe máy điện Vinfast Feliz 2025",
}));

export default function WinnersPageV2() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col font-sans bg-[#C40405] relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="hidden xl:block fixed inset-0 z-0 w-full h-full">
        <Image src="/assets/bg-simple.webp" alt="BG Desktop" fill className="object-fill" priority />
      </div>
      <div className="hidden md:block xl:hidden fixed inset-0 z-0 w-full h-full">
        <Image src="/assets/bg-simple.webp" alt="BG Tablet" fill className="object-cover object-top" priority />
      </div>
      <div className="md:hidden fixed top-[45px] left-0 z-0 w-[100vw] h-[100dvh]">
        <Image
          src="/assets/bg-simple-mobile.webp"
          alt="BG Mobile"
          fill
          priority
          className="object-cover object-top scale-[1.25]"
        />
      </div>

      {/* MOBILE HEADER */}
      <header className="md:hidden bg-[#b91c1c] text-white px-4 py-2 flex justify-between items-center shadow-lg z-50 relative border-b border-red-900/30 h-[45px]">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Home className="w-5 h-5" />
          </Link>
          <span className="font-bold text-[10px] uppercase bg-black/20 px-2 py-1 rounded">
            DANH SÁCH TRÚNG THƯỞNG
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MoreHorizontal size={20} />
          <X size={20} />
        </div>
      </header>

      {/* MAIN */}
      <main className="relative z-10 flex-1 flex flex-col items-center pt-[10vh] md:pt-[12vh] pb-[90px] px-4 md:px-8">

        {/* TITLE */}
        <h1
          className="shopee-extrabold text-center text-white font-black tracking-wide
          text-[22px] md:text-[40px]
          [-webkit-text-stroke:5px_#701318] md:[-webkit-text-stroke:9px_#701318]
          drop-shadow-lg mb-6"
          style={{ paintOrder: "stroke fill" }}
        >
          CẬP NHẬT NGƯỜI TRÚNG GIẢI
        </h1>

        {/* TABLE CONTAINER */}
        <div className="w-full max-w-[1200px] bg-[#701318]/90 rounded-2xl p-3 md:p-5 shadow-2xl border border-white/30">

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">

            {winners.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl px-4 py-3 flex flex-col items-center justify-center text-center shadow-md"
              >
                <span className="font-bold text-[#701318] text-[14px] md:text-[15px]">
                  {item.name}
                </span>

                <span className="mt-1 text-[13px] md:text-[14px] font-semibold text-gray-800">
                  {item.prize}
                </span>
              </div>
            ))}

          </div>

          {/* PAGINATION (giống ảnh) */}
          <div className="flex justify-center items-center gap-3 mt-4 text-white font-bold text-sm">
            <button className="w-8 h-8 rounded-full bg-white/20">‹</button>
            {[1, 2, 3, "...", 14, 15].map((p, i) => (
              <span key={i} className="px-1 opacity-90">{p}</span>
            ))}
            <button className="w-8 h-8 rounded-full bg-white/20">›</button>
          </div>

        </div>
      </main>

      {/* BOTTOM NAVBAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[60]">
        <BottomNavbar hideDecor />
      </div>

    </div>
  );
}

