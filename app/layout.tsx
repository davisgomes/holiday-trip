import type { Metadata } from "next";
import { Geist, Geist_Mono, Tangerine } from "next/font/google";
import "./globals.css";
import { prefix } from '@/lib/prefix';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holiday Trip Planner",
  description:
    "Plan your perfect holiday trip with accommodations, travel, activities, and packing lists",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✈️</text></svg>",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="min-h-screen w-full bg-white"
          style={{
            backgroundImage: `url(${prefix}/images/art-deco-bg.jpg)`,
            backgroundRepeat: "repeat",
            backgroundSize: "500px 500px",
            backgroundPosition: "center",
          }}
        >
          {children}
          <footer className="w-full py-8 bg-zinc-900 flex flex-col items-center justify-center gap-4">
            <span
              className={`text-2xl font-light text-white text-center ${tangerine.className}`}
            >
              © {new Date().getFullYear()} Our Cancun Vacation
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
