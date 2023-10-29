import { Inter } from "next/font/google";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
