"use client";

import { Source_Sans_3, Ubuntu } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";



// import i18n (needs to be bundled ;))
import "./i18n";

import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";


const sourceSans = Source_Sans_3({ subsets: ["latin"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  //disable SSR whole project, this will make the project to be rendered only on client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html hola="bye">
      <body className={sourceSans.className}>
        <Header/>
        {isClient ? (
          <div className={ubuntu.className}>
            <h1 className={ubuntu.className}></h1>
            <h2 className={ubuntu.className}></h2>
            <h3 className={ubuntu.className}></h3>
            {children}
          </div>
        ) : null}
        <Footer />
      </body>
    </html>
  );
}
