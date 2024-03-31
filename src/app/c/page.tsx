"use client";

import { ChatComponent } from "@/components/chat";
import SideBar from "@/components/sidebar";

const ChatConversation = () => {
  return (
    <main className="grid grid-cols-[280px_1fr]">
      <SideBar />
      <ChatComponent />
    </main>
  );
};

export default ChatConversation;
