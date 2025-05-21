import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "angle",
  description: "Created by angle",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-oid="afs4akn">
      <body className="antialiased" data-oid="3-fe--q">
        {children}
      </body>
    </html>
  );
}
