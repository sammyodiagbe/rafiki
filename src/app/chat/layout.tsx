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
    <body className="min-h-screen  w-full grid grid-flow-row grid-rows-[70px_1fr] h-screen">
      {children}
    </body>
  );
}
