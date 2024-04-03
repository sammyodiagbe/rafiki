"use client";

import SideBar from "@/components/app-ui/sidebar";
import ChatComponent from "@/components/app-ui/chat";

const ChatScreen = () => {
  return (
    <main className="max-h-[calc(100vh-70px)]  h-[calc(100vh-70px)] flex-1 grid grid-cols-[280px_1fr] sticky top-0">
      <SideBar />
      <ChatComponent />
    </main>
  );
};

export default ChatScreen;
