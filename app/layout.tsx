import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Klipp – Privacy Policy & Integritetspolicy",
    description:
      "Privacy information for Klipp, including local storage, iCloud, Firebase Analytics, Crashlytics, Photos, and Klipp Pro.",
    icons: {
      icon: "/klipp-icon.png",
      shortcut: "/klipp-icon.png",
      apple: "/klipp-icon.png",
    },
    openGraph: {
      title: "Klipp – Privacy Policy",
      description: "Your data. Your Klipp. Read how Klipp protects and processes information.",
      type: "website",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 1024,
          alt: "Klipp – Din data. Ditt Klipp.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Klipp – Privacy Policy",
      description: "Your data. Your Klipp.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
