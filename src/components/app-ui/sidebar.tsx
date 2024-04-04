"use client";

import { useQuery } from "convex/react";
import { Button } from "../ui/button";
import { EditIcon } from "lucide-react";
import { api } from "../../../convex/_generated/api";
const SideBar = () => {
  const conversations = useQuery(api.myQuery.getConversations);

  return (
    <div className="w-[280px] p-[30px] max-h-full h-full bg-gray-100 dark:bg-transparent ">
      <Button className="w-full py-7 mb-5" variant={"default"}>
        <EditIcon />
        <span className="ml-2">New Conversation</span>
      </Button>
      <div className="">
        <h2 className="mb-2 font-bold">Your conversations</h2>

        <div className="">
          {conversations?.map((convo, index) => {
            return (
              <p className="mb-2" key={index}>
                {convo.title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
