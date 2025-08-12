import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/redux/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lunq - Find Top Freelancers",
  description: "Find the best freelancers for your projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
