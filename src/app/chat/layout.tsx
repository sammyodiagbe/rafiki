import type { Metadata } from "next";
import NavigationBar from "../(components)/navbar";

export const metadata: Metadata = {
  title: "Chat with rafiki",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className="min-h-screen w-full grid grid-flow-row grid-rows-[70px_1fr]">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}