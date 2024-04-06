"use client";

import { useQuery } from "convex/react";
import { Button } from "../ui/button";
import { EditIcon } from "lucide-react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
const SideBar = () => {
  const user = useUser();
  const conversations = useQuery(
    api.myQuery.getConversations,
    !user.isLoaded ? "skip" : {}
  );

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
            console.log(convo);
            const { _id } = convo;
            return (
              <div className="" key={_id}>
                <Link href={`/c?convoId=${_id}`} className="mb-2">
                  {convo.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
