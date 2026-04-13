import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "careho.me | Age-in-Place Insurance — Coming 2027",
  description:
    "Insurance designed for aging in place. Coverage for home care, fall prevention, and the services that keep you home — not in a facility. Join the waitlist.",
  metadataBase: new URL("https://careho.me"),
  openGraph: {
    title: "careho.me | Age-in-Place Insurance",
    description:
      "Insurance that pays for the care that keeps you home. Launching 2027. Join the waitlist.",
    siteName: "careho.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#1B2A4A" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <Script id="sw-register" strategy="afterInteractive">{`
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js');
          }
        `}</Script>
        <Script src="https://solvinghealth.com/footer.js" data-brand="co-op.care" data-theme="light" strategy="lazyOnload" />
      </body>
    </html>
  );
}
