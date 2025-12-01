// Filename: app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App Guru | Digital Products That Drive Results",
  description: "App Guru transforms complex challenges into high-performance applications. Expert strategy, design, and development for startups and enterprises.",
  keywords: "product development, UI/UX design, software development, MVP, startup, mobile app, web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
