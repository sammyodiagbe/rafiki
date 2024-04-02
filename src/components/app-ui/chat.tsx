"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Send } from "lucide-react";
import { ChatBubble } from "./chat_bubble";
import { useState } from "react";
const ChatComponent = () => {
  const [message, setMessage] = useState("");

  return (
    <section className=" h-full max-h-full dark:bg-convocolor ">
      <div className="max-h-full h-full grid grid-rows-[1fr_auto] w-[700px] m-auto  py-5 gap-2">
        <div className="px-[30px]">
          <ChatBubble
            message="Hey chat, generate a quote for me."
            sender={true}
            sentAt="5 mins ago"
          />
          <ChatBubble
            message="Our deepest fear is not that we are inadequate our deepest fear is that we are powerful beyond mesure, we ask ourselves, who am i to be pretty, smart and beautiful, actually who are you not to be."
            sender={false}
            sentAt="5 mins ago"
          />
          <ChatBubble
            message="Hey chat, generate a quote for me."
            sender={true}
            sentAt="5 mins ago"
          />
          <ChatBubble
            message="Our deepest fear is not that we are inadequate our deepest fear is that we are powerful beyond mesure, we ask ourselves, who am i to be pretty, smart and beautiful, actually who are you not to be."
            sender={false}
            sentAt="5 mins ago"
          />
        </div>
        <div className=" flex gap-4 items-center sticky bottom-2">
          <Button className="h-[60px] w-[65px] rounded-md bg-white hover:bg-gray-100 dark:bg-darkchatcolor dark:text-white">
            <Camera className="text-gray-400 " />
          </Button>
          <Input
            placeholder="Ask rafiki something"
            className=" h-[60px] rounded-md font-medium dark:bg-darkchatcolor"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            className="h-[60px] w-[65px] rounded-md bg-blue-600 hover:bg-blue-700 dark:text-white"
            onClick={() => {}}
          >
            <Send />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatComponent;
