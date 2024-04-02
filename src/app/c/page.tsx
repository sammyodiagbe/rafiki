"use client";

import SideBar from "@/components/app-ui/sidebar";
import ChatComponent from "@/components/app-ui/chat";

const ChatConversation = () => {
  return (
    <main className="flex">
      <SideBar />
      <ChatComponent />
    </main>
  );
};

export default ChatConversation;
