import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../public/fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "../public/fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Afryan Fanindya Prayogi | Cybersecurity Portfolio",
  description:
    "Cybersecurity portfolio of Afryan Fanindya Prayogi, an Information Technology graduate focused on security monitoring, incident response, vulnerability assessment, network security, Wazuh SIEM, and Linux.",
  keywords: [
    "Afryan Fanindya Prayogi",
    "Cybersecurity Portfolio",
    "SOC Analyst",
    "Wazuh SIEM",
    "Incident Response",
    "Vulnerability Assessment",
    "Network Security",
    "Information Technology Graduate",
    "Indonesia Cybersecurity",
  ],
  alternates: {
    canonical: "https://example.com",
  },
  openGraph: {
    title: "Afryan Fanindya Prayogi | Cybersecurity Portfolio",
    description:
      "Security monitoring, incident response, vulnerability assessment, network security, Wazuh SIEM, and Linux portfolio.",
    url: "https://example.com",
    siteName: "Afryan Fanindya Prayogi",
    images: [
      {
        url: "/images/afryan-graduation-hero-close.jpeg",
        width: 1200,
        height: 1600,
        alt: "Portrait of Afryan Fanindya Prayogi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afryan Fanindya Prayogi | Cybersecurity Portfolio",
    description:
      "Information Technology graduate focused on cybersecurity, Wazuh SIEM, incident response, and vulnerability assessment.",
    images: ["/images/afryan-graduation-hero-close.jpeg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <a className="skip-link mono" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
