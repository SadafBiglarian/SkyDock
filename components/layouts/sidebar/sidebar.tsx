<<<<<<< HEAD
"use client";
import Image from "next/image";
import Link from "next/link";
import useSidebarStore from "@/stores/store";
///
export default function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen);

  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <div
      className="bg-linear-to-b from-[#0C2D42] to-[#1D6B9C] w-24
    fixed z-20 flex flex-col h-full px-1 gap-4 py-4"
    >
      <Link href={"/"} className="text-lg flex gap-1 items-center">
        <Image alt="" width={20} height={20} src="/images/house-solid.svg" />
        <p>خانه</p>
      </Link>
      <div className="text-lg flex gap-1 items-center">
        <Image alt="" width={20} height={20} src="/images/shopping.svg" />
        <p>محصولات</p>
      </div>
      <Link
        href={"/cloudShop"}
        className="font-vazir w-full text-sm text-white"
      >
        <p> ☁️ سرور ابری</p>
      </Link>
      <Link
        href={"/storageShop"}
        className="font-vazir w-full text-sm text-white"
      >
        <p> 💾 فضای ذخیره سازی </p>
      </Link>
    </div>
  );
}
=======
"use client";
import Image from "next/image";
import Link from "next/link";
import useSidebarStore from "@/stores/store";
///
export default function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen);

  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <div
      className="bg-linear-to-b from-[#0C2D42] to-[#1D6B9C] w-24
    fixed z-20 flex flex-col h-full px-1 gap-4 py-4"
    >
      <Link href={"/"} className="text-lg flex gap-1 items-center">
        <Image alt="" width={20} height={20} src="/images/house-solid.svg" />
        <p>خانه</p>
      </Link>
      <div className="text-lg flex gap-1 items-center">
        <Image alt="" width={20} height={20} src="/images/shopping.svg" />
        <p>محصولات</p>
      </div>
      <Link
        href={"/cloudShop"}
        className="font-vazir w-full text-sm text-white"
      >
        <p> ☁️ سرور ابری</p>
      </Link>
      <Link
        href={"/storageShop"}
        className="font-vazir w-full text-sm text-white"
      >
        <p> 💾 فضای ذخیره سازی </p>
      </Link>
    </div>
  );
}
>>>>>>> c7249ea678efd73d55f858c23828662990b7d767
