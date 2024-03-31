"use client";

import { Button } from "./ui/button";
import { EditIcon } from "lucide-react";

export default function SideBar() {
  return (
    <div className="min-w-[280px] p-[30px] dark:bg-red-300">
      <Button className="w-full py-7 mb-5" variant={"default"}>
        <EditIcon />
        <span className="ml-2">New Conversation</span>
      </Button>
      <div className="">
        <h2 className="mb-2 font-bold">Your conversations..</h2>
      </div>
    </div>
  );
}
