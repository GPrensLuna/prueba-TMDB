import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: " template ",
  description: "template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <header>
          <nav className="w-full text-center text-xl font-semibold gap-5 grid grid-cols-7 h-16 justify-center items-center px-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/movie/popular"}>Popular</Link>
          </nav>
        </header>
        <main className="grid grid-cols-[minmax(80px,300px),1fr] xl:px-40 md:px-24 sm:px-10 ">
          <aside>Filter</aside>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
