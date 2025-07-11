"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex ">
        <div className="bg-[#a0b7c6] w-1/2 flex-row py-5 ">
          <div className="text-center pt-5">
            <p className="font-extrabold text-4xl">
              <span className=" text-white text-shadow-lg text-shadow-[#0B2A3D] ">
                ذخیره سازی ابری امن و سریع با{" "}
              </span>
              <span className="text-[#0B293C]">SkyDock</span>
            </p>
            <p className="pt-8 font-semibold text-2xl text-[#0B293C] text-shadow-md text-shadow-white ">
              همین حالا فضای ابری خود را سفارشی کنید
            </p>
          </div>
        </div>
        <div className="w-1/2 relative h-[250px] overflow-hidden  ">
          <Image
            src="/images/cloudsUP.png"
            alt="footer"
            // width={1000}
            // height={800}
            fill
            // layout="responsive"
            className=" object-cover"
          />
        </div>
      </div>

      <div className="flex mt-12 ">
        <div className="w-1/2 relative h-[150px] overflow-hidden  ">
          <Image
            src="/images/cloudsMid.png"
            alt="footer"
            // width={1000}
            // height={800}
            fill
            // layout="responsive"
            className=" object-cover"
          />
        </div>
        <div className="bg-gradient-to-r  from-[#010810] to-[#3F6488] w-1/2 flex-row py-5 font-vazir text-3xl pt-7 ">
          <p className=" px-5">ترافیک سایت شما را کند کرده است؟</p>
          <p className=" pr-24 pt-2">با سرویس CDN ما سرعت را تجربه کنید</p>
        </div>
      </div>
    </>
  );
}
