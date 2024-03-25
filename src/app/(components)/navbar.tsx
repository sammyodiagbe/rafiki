import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const NavigationBar = () => {
  return (
    <nav className="h-[70px] px-[30px] flex items-center">
      <div className=" min-w-[280px] ">
        <h1 className="text-2xl font-black">Rafiki</h1>
      </div>
      <div className="flex-1 pl-2 flex justify-between bg-red items-center">
        <span className="font-bold">Chats</span>
        <div className="flex items-center">
          {/* toggle switch */}
          <div className="mr-3 p-1 bg-gray-200 rounded-md">
            <Button className="mr-2 bg-transparent text-black hover:bg-transparent">
              <Sun />
            </Button>
            <Button className="mr-2 bg-transparent text-black hover:bg-transparent">
              <Moon />
            </Button>
          </div>
          <div className=" h-[40px] w-[40px] rounded-full bg-black"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
