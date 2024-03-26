"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignOutButton, useSession } from "@clerk/nextjs";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useRouter } from "next/navigation";
const NavigationBar = () => {
  const { setTheme, theme } = useTheme();
  const router = useRouter();
  const { isSignedIn } = useSession();
  const [themecolor, setThemeColor] = useState(theme || "light");
  // //   if (!user) {
  //     router.push("/");
  //     return;
  //   }
  return (
    <nav className="px-[30px] flex items-center dark:bg-black sticky top-0">
      <div className=" min-w-[280px] ">
        <h1 className="text-2xl font-black">Rafiki</h1>
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
                "mr-2 bg-transparent text-black hover:bg-transparent h-[50px] w-[50px] dark:text-gray-500",
                {
                  "bg-blue-500 hover:bg-blue-600 text-white":
                    themecolor === "light",
                }
              )}
              onClick={() => {
                setTheme("light");
                setThemeColor("light");
              }}
            >
              <Sun />
            </Button>
            <Button
              className={cn(
                "mr-2 bg-transparent text-black hover:bg-transparent h-[50px] w-[50px]",
                {
                  "bg-blue-500 hover:bg-blue-600 text-white":
                    themecolor === "dark",
                }
              )}
              onClick={() => {
                setTheme("dark");
                setThemeColor("dark");
              }}
            >
              <Moon />
            </Button>
          </div>
          <SignedOut>
            <Button variant={"outline"}>Login</Button>
          </SignedOut>
          <SignedIn>
            {/* <div className=" h-[40px] w-[40px] rounded-full bg-gray-500 dark:bg-gray-300"></div> */}
            <SignOutButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
