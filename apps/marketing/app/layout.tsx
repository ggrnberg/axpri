import type { Metadata } from "next";
import "@repo/ui/globals.css";

export const metadata: Metadata = {
  title: "axpri",
  description: "The marketing engine, built entirely on tokens.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", url: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
