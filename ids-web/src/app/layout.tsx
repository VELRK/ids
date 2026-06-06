import { Metadata } from "next";
import "../styles/index.scss";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: '--heading-font',
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: '--body-font',
});

export const metadata: Metadata = {
  title: "IntellectWorks Digital Solutions",
  description: "IntellectWorks Digital Solutions",
  keywords: [
    "IntellectWorks Digital Solutions",
    "IT Service",
    "IT Solution",
    "React",
    "Next.js Template",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${plusJakarta.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}