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
    <div className="w-[280px] pt-[30px] max-h-full h-full bg-gray-100 dark:bg-transparent ">
      <div className="px-4 mb-4 max-w-full">
        <Link href="/chat">
          <Button className=" w-full py-7 mb-5" variant={"default"}>
            <EditIcon />
            <span className="ml-2">New Conversation</span>
          </Button>
        </Link>
      </div>

      <div className="">
        <h2 className="mb-2 font-bold px-2 text-gray-400">
          Your conversations
        </h2>

        <div className="">
          {conversations?.map((convo) => {
            console.log(convo);
            const { _id } = convo;
            return (
              <div
                className="p-2 py-3 hover:bg-gray-200 dark:hover:bg-hover"
                key={_id}
              >
                <Link href={`/c?convoId=${_id}`} className="mb-2">
                  {convo.title.length > 30
                    ? `${convo.title.slice(0, 30)}..`
                    : convo.title}
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
