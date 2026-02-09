import React from "react";
import Image from "next/image";
import { Home, MoreHorizontal, X } from "lucide-react";
import BottomNavbar from "@/src/component/bottomNavbar";
import Link from "next/link";

const winners = [
  {
    code: "HPD2XV573L",
    prize: "Xe máy điện Vinfast Feliz 2025",
    name: "Trần Thị Minh Nguyệt",
  },
  {
    code: "SWTDQAXWUF",
    prize: "Máy hút bụi lau nhà cầm tay Roborock F25 ACE Combo",
    name: "Đào Thị Dung",
  },
  {
    code: "SEMQM69NZY",
    prize: "Máy Giặt/Sấy Samsung Inverter 9.5 Kg WD95T4046CE/SV",
    name: "Nguyễn Thị Thanh Thanh",
  },
  {
    code: "984TNS7936",
    prize: "Máy Giặt/Sấy Samsung Inverter 9.5 Kg WD95T4046CE/SV",
    name: "Lê Huỳnh Như Lan",
  },
  {
    code: "XNYNLYSGBV",
    prize: "Smart Tivi QLED Samsung Al 4K 65 inch QA65Q8F5",
    name: "Nguyễn Thị Thu Giang",
  },
  {
    code: "E32BCXFFNR",
    prize: "Smart Tivi QLED Samsung Al 4K 65 inch QA65Q8F5",
    name: "Huỳnh Thị Phương Nhi",
  },
  {
    code: "QYRWUCRGXC",
    prize: "Máy lọc nước nóng lạnh Kangaroo KG10A17",
    name: "Lê Đình Cường",
  },
  {
    code: "8LU56FPVQH",
    prize: "Xiaomi Smart Air Purifier 4 compact EU (BHR5860EU) 27W",
    name: "Nguyễn Thị Thảo",
  },
  {
    code: "SEMESDAK9C",
    prize: "Xiaomi Smart Air Purifier 4 compact EU (BHR5860EU) 27W",
    name: "Nguyễn Thụy Bích Duyên",
  },
  {
    code: "HWGGM8E8SR",
    prize: "Xiaomi Smart Air Purifier 4 compact EU (BHR5860EU) 27W",
    name: "Nguyễn Phùng Như Ý",
  },
  {
    code: "GLTRCZ9TAP",
    prize: "Xiaomi Smart Air Purifier 4 compact EU (BHR5860EU) 27W",
    name: "Trần Thị Bích Hiền",
  },
  {
    code: "SEMFUJL6QW",
    prize: "Xiaomi Smart Air Purifier 4 compact EU (BHR5860EU) 27W",
    name: "Thị Cẩm Hào",
  },
  {
    code: "FWV29HXXWY",
    prize: "Xiaomi Smart Air Purifier 4 compact EU (BHR5860EU) 27W",
    name: "Tẩn San Mẩy",
  },
];

export default function WinnersPageV2() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col font-sans bg-[#C40405] relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="hidden xl:block fixed inset-0 z-0 w-full h-full">
        <Image src="/assets/bg-winner.webp" alt="BG Desktop" fill className="object-fill" priority />
      </div>
      <div className="hidden md:block xl:hidden fixed inset-0 z-0 w-full h-full">
        <Image src="/assets/bg-simple.webp" alt="BG Tablet" fill className="object-cover object-top" priority />
      </div>
      <div className="md:hidden fixed top-[45px] left-0 z-0 w-[100vw] h-[100dvh]">
        <Image
          src="/assets/bg-winner-mobile.webp"
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
          CÔNG BỐ NGƯỜI THẮNG GIẢI ĐỢI 2 CỦA TOPGIA
        </h1>

        {/* TABLE CONTAINER */}
        <div className="w-full max-w-[1200px] bg-white rounded-2xl p-3 md:p-5 shadow-2xl border border-white/30">

          {/* HEADER */}
          <div className="shopee-bold grid grid-cols-12 bg-white text-black text-[11px] md:text-[22px] font-bold uppercase">
            <div className="col-span-4 md:col-span-3 px-1 py-2 border-b-2 border-r border-l border-t text-center">
              Mã dự thưởng
            </div>
            <div className="col-span-6 px-3 py-2 border-b-2 border-r border-t text-center">
              Phần thưởng
            </div>
            <div className="col-span-2 md:col-span-3 px-3 py-2 border-b-2 border-r border-t text-center">
              Khách hàng
            </div>
          </div>

          {/* BODY */}
          <div className="divide-y divide-gray-200">
            {winners.map((item, index) => (
              <div key={index} className="grid grid-cols-12 text-[12px] md:text-[18px] shopee-bold text-black">
                <div className="col-span-4 md:col-span-3 px-1 py-2 border-b border-r border-l text-center">
                  {item.code}
                </div>
                <div className="col-span-6 px-3 py-2 border-b border-r text-center">
                  {item.prize}
                </div>
                <div className="col-span-2 md:col-span-3 px-3 py-2 border-b border-r text-center">
                  {item.name}
                </div>
              </div>
            ))}
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
