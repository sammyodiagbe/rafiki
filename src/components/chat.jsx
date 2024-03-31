"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Send } from "lucide-react";
import { ChatBubble } from "./chat_bubble";
import { useState } from "react";

export const ChatComponent = () => {

    const [message, setMessage] = useState("");
    const send = () => {
        sendMessage({ message });
      };

    return <section className="flex-1 bg-red-500 dark:bg-convocolor h-[calc(100vh-70px)]">
    <div className="flex flex-col w-[700px] m-auto min-h-full py-5">
      <div className="flex-1 overflow-y-auto px-[30px]">
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
          message="Hey chat, what is 2 + 2"
          sender={true}
          sentAt="5 mins ago"
        />
        <ChatBubble
          message="Oh that is very easy, 2 + 2 is 4, imagine you have 2 apples and your mom gives you 2 more, now you have 4 apples"
          sender={false}
          sentAt="5 mins ago"
        />
      </div>
      <div className=" flex gap-4 items-center">
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
          onClick={send}
        >
          <Send />
        </Button>
      </div>
    </div>
  </section>
}