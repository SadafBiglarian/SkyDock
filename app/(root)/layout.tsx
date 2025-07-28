<<<<<<< HEAD
import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className=" bg-[#E6EDEF]">{children}</main>

      <Footer />
    </>
  );
}
=======
import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className=" bg-[#E6EDEF]">{children}</main>

      <Footer />
    </>
  );
}
>>>>>>> c7249ea678efd73d55f858c23828662990b7d767
