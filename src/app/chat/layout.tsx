import NavigationBar from "@/components/app-ui/navbar";
import type { Metadata } from "next";

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
    <body className="grid grid-rows-[70px_1fr] bg-purple-100 max-h-screen h-screen">
      <NavigationBar />
      {children}
    </body>
  );
}
