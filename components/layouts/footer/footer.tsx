"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className="flex ">
      <div className="bg-[#01061A] w-1/3 flex-row py-5 2xl:w-2/3">
        <Link href={""} className="flex gap-5 text-xl m-2 md:text-sm">
          <Image
            src={"/images/phone.svg"}
            alt={"phone"}
            width={25}
            height={40}
          />
          <p>تماس با ما</p>
        </Link>
        <Link href={""} className="flex gap-5 text-xl m-2 ">
          <Image
            src={"/images/message.svg"}
            alt={"phone"}
            width={25}
            height={40}
          />
          <p>نظرات کاربران </p>
        </Link>
        <Link href={""} className="flex gap-5 text-xl m-2">
          <Image
            src={"/images/email.svg"}
            alt={"phone"}
            width={25}
            height={40}
          />
          <p> Sadaf.biglarian02@gmail.com </p>
        </Link>
      </div>
      <div className="w-2/3 relative h-[160px] overflow-hidden 2xl:w-1/3 ">
        <Image
          src="/images/image.png"
          alt="footer"
          // width={1000}
          // height={800}
          fill
          // layout="responsive"
          className=" object-cover"
        />
      </div>
    </footer>
  );
}
