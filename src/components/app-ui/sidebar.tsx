"use client";

import { Button } from "../ui/button";
import { EditIcon } from "lucide-react";
const SideBar = () => {
  return (
    <div className="sticky bottom-0 top-[70px] min-w-[280px] p-[30px] bg-gray-100 dark:bg-transparent ">
      <Button className="w-full py-7 mb-5" variant={"default"}>
        <EditIcon />
        <span className="ml-2">New Conversation</span>
      </Button>
      <div className="">
        <h2 className="mb-2 font-bold">Your conversations</h2>
      </div>
    </div>
  );
};

export default SideBar;
