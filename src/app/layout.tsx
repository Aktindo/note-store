import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Note Store",
  description: "An easy and a minimal place to store all of your thoughts!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          manrope.className +
          " bg-gradient-to-b from-white to-primary min-h-screen m-10"
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
