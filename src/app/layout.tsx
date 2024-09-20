import { api } from "@/api";
import { FavoriteMoviesProvider } from "@/provider/FavoriteMoviesProvider";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import "./globals.css";
const FilterMovie = dynamic(() => import("@/components/FilterMovie"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: " template ",
  description: "template",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.JSX.Element> {
  const { genres } = await api.fetchGenres();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <FavoriteMoviesProvider>
          <header>
            <nav className="w-full text-center text-xl font-semibold gap-5 grid grid-cols-7 h-16 justify-center items-center px-10">
              <Link href={"/"}>Home</Link>
              <Link href={"/movie/popular"}>Popular</Link>
              <Link href={"/SignIn"}>SignIn</Link>
              <Link href={"/SignUIp"}>SignUp</Link>
            </nav>
          </header>
          <main className="grid sm:grid-cols-[minmax(80px,250px),1fr] xl:px-40 md:px-10 sm:px-8 px-5 grid-cols-1">
            <aside>
              <FilterMovie genres={genres} />
            </aside>
            <section>{children}</section>
          </main>
        </FavoriteMoviesProvider>
      </body>
    </html>
  );
}
