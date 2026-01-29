import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google"; // Import Bricolage Grotesque
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define variable
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage", // Define variable
});

export const metadata: Metadata = {
  title: "Alvion | Strategic Consulting",
  description: "Premium strategic consulting for enterprise growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${bricolage.variable} antialiased bg-[#F4EEE5] text-black`}
      >
        {children}
      </body>
    </html>
  );
}
