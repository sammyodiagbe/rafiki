"use client";

import SideBar from "@/components/app-ui/sidebar";
import ChatComponent from "@/components/app-ui/chat";
import { useSearchParams } from "next/navigation";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { messageType } from "../custom-type";
import { useUser } from "@clerk/nextjs";

const ChatConversation = () => {
  const params = useSearchParams();
  const user = useUser();
  const conversationId = params.get("convoId") as Id<"conversations">;

  console.log(conversationId);

  // so what happens is i want to be able to get the conversation for thisconst messages = useQuery(
  const messages = useQuery(
    api.myQuery.getConversationMessages,
    !user.isLoaded
      ? "skip"
      : {
          conversationId,
        }
  ) as messageType[];

  return (
    <main className="max-h-[calc(100vh-70px)]  h-[calc(100vh-70px)] flex-1 grid grid-cols-[280px_1fr] sticky top-0">
      <SideBar />
      <ChatComponent messages={messages} />
    </main>
  );
};

export default ChatConversation;
