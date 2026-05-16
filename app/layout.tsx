import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Outpilot AI — LinkedIn content co-pilot for B2B SaaS GTM teams",
  description: "Go from idea to published LinkedIn post in 3 minutes. Carousels, comments, engagement — in your brand voice. Built for Indian B2B SaaS founders and GTM teams.",
  openGraph: {
    title: "Outpilot AI — LinkedIn content co-pilot for B2B SaaS GTM teams",
    description: "Go from idea to published LinkedIn post in 3 minutes. Built for Indian B2B SaaS GTM teams.",
    url: "https://opuzai.com",
    siteName: "Outpilot AI",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
