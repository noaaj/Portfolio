import type { Metadata } from "next";
import { Oswald, Montserrat } from "next/font/google";

export const oswald = Oswald( {
  subsets: ["latin"], 
  display: "swap", 
  variable: '--font-oswald'
})

export const montserrat = Montserrat( {
  subsets: ["latin"], 
  display: "swap", 
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "Angel Noa - Front End Developer",
  description: "The portfolio for Angel Noa, showcasing his talent, skill, and work as a front end developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable + oswald.variable}>{children}</body>
    </html>
  );
}