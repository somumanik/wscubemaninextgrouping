import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import 'leaflet/dist/leaflet.css';
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Rubik } from 'next/font/google';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Load Rubik font
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Jo weights chahiye unhe list karein
  display: 'swap',              // Optional but recommended
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",

};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
