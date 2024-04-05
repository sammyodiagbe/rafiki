"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Send } from "lucide-react";
import { ChatBubble } from "./chat_bubble";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const createNewConversation = useMutation(
    api.myMutations.createNewConversation
  );
  const sendmessage = useMutation(api.myMutations.sendMessage);
  const searchParams = useSearchParams();
  const convId = searchParams.get("convId");

  const messages = useQuery(
    api.myQuery.getConversationMessages,
    !convId ? "skip" : { conversationId: convId }
  );

  const sendMessage = async () => {
    if (!message) return;

    await sendmessage({ message, conversationId: convId! });
    setMessage("");
  };

  const createNewConvo = async () => {
    if (!message) return;
    const conversationId = await createNewConversation({ message });
    console.log("creaate convo id ", conversationId);
    await sendmessage({ message, conversationId });
    router.push(`/c?convId=${conversationId}`);
  };

  return (
    <section className="h-full max-h-full dark:bg-convocolor overflow-y-hidden">
      <div className="max-h-full h-full grid grid-rows-[1fr_auto] w-[700px] mx-auto py-5 gap-4 ">
        <div className="px-[30px] overflow-auto no-scrollbar">
          {messages && messages.length ? (
            messages.map((m, index) => {
              const { message, type } = m;
              return (
                <ChatBubble
                  message={message}
                  sender={type === "user"}
                  sentAt="4 mins ago"
                />
              );
            })
          ) : (
            <p>You don't no messages right now</p>
          )}
        </div>
        <div className=" flex gap-4 items-center">
          <Button className="h-[60px] w-[65px] rounded-md border-2 bg-white border-solid border-gray-600 hover:bg-gray-100 dark:bg-darkchatcolor dark:text-white">
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
            onClick={() => {
              if (convId) {
                sendMessage();
                return;
              }

              createNewConvo();
            }}
          >
            <Send />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatComponent;
