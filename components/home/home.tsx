"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <section
        className="home__hero relative overflow-hidden pt-[56px] pb-[262px] 
sm:pt-[106px] sm:pb-[458px] md:py-[140px] lg:pt-[128px] lg:pb-[146px] 
lg:max-h-[620px] before:absolute before:content-[''] before:left-0 
before:top-0 sm:top-0 before:w-full before:h-full before:rotate-y-180
 before:sm:rotate-none before:bg-[url('/images/v6/home/bg-mobile.webp')]
  md:before:bg-[url('/images/v6/home/bg.webp')] before:bg-center 
  sm:before:bg-cover md:before:bg-auto before:bg-no-repeat"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div
              className="max-w-full sm:max-w-[400px] md:max-w-[460px]
             lg:max-w-[560px] xl:max-w-[584px] xl:ltr:max-w-[668px]
              text-start lg:text-start z-20"
            >
              <h1
                className="lg:text-4xl xl:text-5xl text-[32px] 
                xl:leading-[56px]! text-gray-900 font-semibold mb-3"
              >
                زیرساخت یکپارچه ابری
              </h1>
              <div
                className="text-2xl ltr:text-xl lg:text-[36px]
                 text-[#394460] mb-8"
              >
                جهانی امن‌تر، سریع‌تر و دردسترس‌تر
              </div>
              <div
                className="text-sm lg:text-lg text-gray-700 mb-10
                 sm:mb-14 md:mb-[72px]"
              >
                با استفاده از زیرساخت یکپارچه، پایدار، امن و همیشه در دسترس ابر
                آروان، بدون دغدغه‌های زیرساختی به وب‌سایت و سرویس‌های خود سرعت
                ببخشید و تجربه‌ی کاربران‌تان را به شکل چشم‌گیری بهبود دهید.
              </div>
              <div
                className="flex gap-x-4 justify-center sm:justify-start
                 before:content-[''] before:absolute before:w-full 
                 before:h-[60px] before:bg-white sm:before:hidden 
                 before:blur-2xl"
              >
                <a
                  href="https://accounts.arvancloud.ir/login?lang=fa"
                  className="flex items-center justify-center w-44 
                  lg:w-auto h-12 rounded-lg text-sm lg:text-base
                   font-semibold py-4 px-6 bg-green-600 text-white
                    hover:bg-green-800 transition-all z-20"
                  id=""
                >
                  شروع کنید
                </a>
                <a
                  href="https://www.arvancloud.ir/fa/contact/sales"
                  className="solutions-hero__btn flex items-center 
                  justify-center w-44 lg:w-auto h-12 py-4 px-6 gap-x-2
                   rounded-lg text-sm lg:text-base font-semibold
                    text-green-600 border-[1.5px] border-green-600
                     hover:bg-green-600 hover:border-green-600
                      hover:text-white transition-all z-20"
                  id=""
                >
                  تماس با فروش
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="   overflow-hidden  pb-[262px]
        sm:pb-[458px] md:py-[140px]  lg:pb-[146px]
        lg:max-h-[620px] before:absolute before:content-[''] before:left-0 before:top-0 
        sm:top-0 before:w-full before:h-full before:rotate-y-180 before:sm:rotate-none
         before:bg-[url('/images/cloudsUP-mobile.jpg')] md:before:bg-[url('/images/cloudsUP.jpg')] 
         before:bg-center sm:before:bg-cover md:before:bg-auto before:bg-no-repeat"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div
              className="max-w-full sm:max-w-[400px] md:max-w-[460px] 
            lg:max-w-[560px] xl:max-w-[584px] xl:ltr:max-w-[668px] 
            text-start lg:text-start z-20"
            >
              <p className="lg:text-3xl xl:text-4xl text-[28px] xl:leading-[56px]!">
                <span
                  className="
                text-white text-shadow-lg text-shadow-[#0B2A3D] font-semibold pt-10"
                >
                  ذخیره سازی ابری امن و سریع با{" "}
                </span>
                <span className=" font-extrabold text-[#0B293C]">SkyDock</span>
              </p>
              <div
                className="text-2xl ltr:text-xl lg:text-[36px] text-[#0B293C] 
              text-shadow-md text-shadow-white mb-8"
              >
                همین حالا فضای ابری خود را سفارشی کنید
              </div>
              <div
                className="flex gap-x-4 justify-center sm:justify-start before:content-[''] 
                before:absolute before:w-full before:h-[60px]
               before:bg-white sm:before:hidden before:blur-2xl"
              >
                <a
                  href=""
                  className="flex items-center justify-center w-44 lg:w-auto h-12 
                  rounded-lg text-sm lg:text-base font-semibold border-[1.5px
                   border-white py-4 px-6 bg-[#536F80] text-white hover:bg-white
                   hover:text-[#536F80] hover:border-[#536F80] hover:border-[1.5px]
                     transition-all z-20"
                  id=""
                >
                  شروع رایگان
                </a>
                <a
                  href=""
                  className="solutions-hero__btn flex items-center justify-center w-44 
                  lg:w-auto h-12 py-4 px-6 gap-x-2 rounded-lg text-sm lg:text-base
                   font-semibold bg-[#154F74] text-white border-[1.5px]
                   border-white hover:bg-white hover:text-[#154F74] hover:border-[#154F74] hover:border-[1.5px]
                   transition-all z-20"
                  id=""
                >
                  مشاهده تعرفه ها
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row">
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
    </main>
  );
}
