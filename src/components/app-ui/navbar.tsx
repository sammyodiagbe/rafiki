"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
const NavigationBar = () => {
  const { setTheme, theme } = useTheme();

  const { isSignedIn } = useSession();
  // //   if (!user) {
  //     router.push("/");
  //     return;
  //   }
  return (
    <nav className="px-[30px] flex items-center bg-gray-100 dark:bg-backgroundCol">
      <div className=" min-w-[280px] ">
        <Link href={"/"}>
          <h1 className="text-2xl font-black">Rafiki</h1>
        </Link>
      </div>
      <div
        className={cn(
          "flex-1 pl-2 flex  items-center",
          isSignedIn ? "justify-between" : "justify-end"
        )}
      >
        <SignedIn>
          <span className="font-bold">Chats</span>
        </SignedIn>
        <div className="flex items-center">
          {/* toggle switch */}
          <div className="mr-3 p-3  rounded-md ">
            <Button
              className={cn(
                "mr-2 bg-transparent text-black hover:bg-transparent h-[50px] w-[50px] dark:text-white",

                theme == "light"
                  ? "bg-blue-400 hover:bg-blue-600 text-white"
                  : "bg-transparent text-gray-400"
              )}
              onClick={() => {
                setTheme("light");
              }}
            >
              <Sun />
            </Button>
            <Button
              className={cn(
                "mr-2 bg-transparent text-black hover:bg-transparent h-[50px] w-[50px]",
                theme === "dark"
                  ? "bg-blue-300 hover:bg-blue-600 text-white"
                  : "bg-transparent text-gray-400"
              )}
              onClick={() => {
                setTheme("dark");
              }}
            >
              <Moon />
            </Button>
          </div>
          <SignedOut>
            <Button variant={"outline"}>
              <SignInButton mode="modal" afterSignInUrl="/chat">
                Login
              </SignInButton>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" userProfileMode="navigation" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
