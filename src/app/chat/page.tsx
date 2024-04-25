"use client";

import SideBar from "@/components/app-ui/sidebar";
import ChatComponent from "@/components/app-ui/chat";
import { Suspense } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";

const ChatScreen = () => {
  const user = useUser();
  const conversations = useQuery(
    api.myQuery.getConversations,
    user.isLoaded ? {} : "skip"
  );
  return (
    <main className="max-h-[calc(100vh-70px)]  h-[calc(100vh-70px)] flex-1 grid grid-cols-[280px_1fr] sticky top-0">
      <SideBar conversations={conversations || []} />
      <ChatComponent />
    </main>
  );
};

const ChatScreenWithSuspense = () => {
  return (
    <Suspense>
      <ChatScreen />
    </Suspense>
  );
};

export default ChatScreenWithSuspense;
