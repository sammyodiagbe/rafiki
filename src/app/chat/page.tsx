"use client";

import SideBar from "@/components/sidebar";
import { ChatComponent } from "@/components/chat";

const ChatScreen = () => {
  return (
    <main className="grid grid-cols-[280px_1fr]">
      <SideBar />
      <ChatComponent />
    </main>
  );
};

export default ChatScreen;
