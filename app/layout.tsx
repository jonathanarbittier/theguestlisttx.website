import type { Metadata, Viewport } from "next";
import { StableViewport } from "@/components/StableViewport";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Guest List | Luxury Photo Booth Experiences",
  description:
    "Custom photo booth experiences for parties, showers, pop-ups, and unforgettable events in Waco, Texas.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StableViewport />
        {children}
      </body>
    </html>
  );
}
