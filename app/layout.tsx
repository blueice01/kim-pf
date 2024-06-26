import type { Metadata } from "next";
import { Inter, Judson, Libre_Franklin } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const judson = Judson({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${judson.className} ${libre_franklin.className}`}>
        {children}
      </body>
    </html>
  );
}
