import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bemnet Portfolio",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/bemnet-icon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
