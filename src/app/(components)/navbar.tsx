"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const NavigationBar = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="h-[70px] px-[30px] flex items-center dark:bg-black">
      <div className=" min-w-[280px] ">
        <h1 className="text-2xl font-black">Rafiki</h1>
      </div>
      <div className="flex-1 pl-2 flex justify-between bg-red items-center">
        <span className="font-bold">Chats</span>
        <div className="flex items-center">
          {/* toggle switch */}
          <div className="mr-3 p-1 bg-gray-200 rounded-md dark:bg-darkchatcolor">
            <Button
              className={cn(
                "mr-2 bg-transparent text-black hover:bg-transparent h-[50px] w-[50px]",
                {
                  "bg-blue-500 hover:bg-blue-600 text-white": theme === "light",
                }
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
                { "bg-blue-500 hover:bg-blue-600 text-white": theme === "dark" }
              )}
              onClick={() => {
                setTheme("dark");
              }}
            >
              <Moon />
            </Button>
          </div>
          <div className=" h-[40px] w-[40px] rounded-full bg-black dark:bg-gray-300"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
