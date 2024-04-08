"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Send } from "lucide-react";
import { ChatBubble } from "./chat_bubble";
import { useRef, useState } from "react";
import { useAction, useMutation, Watch } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Id } from "../../../convex/_generated/dataModel";
import { messageType } from "@/app/custom-type";

type ComponentProps = {
  messages?: messageType[];
};

const ChatComponent: React.FC<ComponentProps> = ({ messages }) => {
  const [message, setMessage] = useState("");
  const convoRef = useRef<HTMLDivElement | null>(null);
  const pathName = usePathname();
  const router = useRouter();

  const createNewConversation = useMutation(
    api.myMutations.createNewConversation
  );
  const sendmessage = useAction(api.myMutations.sendMessage);
  const searchParams = useSearchParams();
  const convId = searchParams.get("convoId");

  const sendMessage = async () => {
    if (!message) return;

    await sendmessage({
      message,
      conversationId: convId as Id<"conversations">,
    });

    convoRef.current!.scrollTop =
      convoRef.current!.scrollHeight - convoRef.current!.clientHeight;
    setMessage("");
  };

  const createNewConvo = async () => {
    if (!message) return;
    const conversationId = await createNewConversation({ message });
    await sendmessage({ message, conversationId });
    router.push(`/c?convId=${conversationId}`);
  };

  return (
    <section className="h-full max-h-full dark:bg-convocolor overflow-y-hidden">
      <div className="max-h-full h-full grid grid-rows-[1fr_auto] w-[700px] mx-auto pb-5 gap-4 ">
        <div className="px-[30px] overflow-auto no-scrollbar" ref={convoRef}>
          {messages && messages.length
            ? messages.map((m, index) => {
                const { message, type } = m;
                return (
                  <ChatBubble
                    message={message}
                    sender={type === "user"}
                    sentAt="4 mins ago"
                  />
                );
              })
            : null}
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
              if (pathName === "/c") {
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
