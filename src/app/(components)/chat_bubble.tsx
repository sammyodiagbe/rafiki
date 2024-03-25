import { cn } from "@/lib/utils";
import React from "react";

type ChatProps = {
  message: string;
  sentAt: string;
  sender: boolean;
};

export const ChatBubble: React.FC<ChatProps> = ({
  message,
  sentAt,
  sender,
}) => {
  return (
    <div
      className={cn(
        "flex mb-5 p-5 rounded-lg",
        sender ? "bg-tranparent" : "bg-white"
      )}
    >
      <div className="h-[50px] w-[50px] rounded-full bg-gray-700 mr-4"></div>
      <div className="flex-1">
        <div className="">
          <div className="mb-3 flex justify-between">
            <p className="font-bold text-gray-500 text-sm">
              {sender ? "You" : "Rafiki"}
            </p>
            <span className="text-sm text-gray-400">{sentAt}</span>
          </div>
        </div>
        <p className="text-gray-700 font-medium leading-relaxed">{message}</p>
      </div>
    </div>
  );
};
