import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { cn } from "@/lib/utils";
import AuthProvider from "./clerkProvider";
import NavigationBar from "../components/app-ui/navbar";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafiki knows the way",
  description: "AI companion that helps with day to day tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en" className="min-h-screen dark:bg-parentbg">
        <body className={cn("min-h-screen h-screen", nunitoSans.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <NavigationBar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
