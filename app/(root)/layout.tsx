import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-gradient-to-l  from-[#0C2D42] to-[#1D6B9C] sticky top-0 text-white">
        <Header />
      </header>
      <main className="flex-1 bg-[#E6EDEF]">{children}</main>

        <Footer />
      
    </>
  );
}
