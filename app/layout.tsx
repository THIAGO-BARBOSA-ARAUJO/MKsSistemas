import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components";
import { Footer } from "@/components/Footer/Footer";
import { ToastContainer } from 'react-toastify';

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'] 
  });

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "MKS Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <ToastContainer />
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
