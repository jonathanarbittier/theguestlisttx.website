import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Guest List | Luxury Photo Booth Experiences",
  description:
    "Custom photo booth experiences for parties, showers, pop-ups, and unforgettable events in Waco, Texas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
