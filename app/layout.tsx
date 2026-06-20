import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rana Research Portfolio",
  description: "Showcase healthcare and data analytics research projects, publications, academic background at University of Waterloo, and research interests in clinical data, predictive modeling, and health informatics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}