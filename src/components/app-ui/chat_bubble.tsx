"use client";

import { cn } from "@/lib/utils";
import React from "react";
import moment from "moment";

type ChatProps = {
  message: string;
  sentAt: number | string;
  sender: boolean;
};

export const ChatBubble: React.FC<ChatProps> = ({
  message,
  sentAt,
  sender,
}) => {
  let m = moment(sentAt);
  return (
    <div
      className={cn(
        "flex mb-5 p-5 rounded-lg",
        sender ? "bg-tranparent" : "bg-white dark:bg-darkchatcolor"
      )}
    >
      <div className="h-[35px] w-[35px] rounded-full bg-gray-700 mr-4"></div>
      <div className="flex-1">
        <div className="">
          <div className="mb-3 flex justify-between">
            <p className="font-bold text-gray-500 text-sm dark:text-gray-200">
              {sender ? "You" : "Rafiki"}
            </p>
            <span className="text-sm text-gray-400 dark:text-gray-400">
              {m.format("lll")}
            </span>
          </div>
        </div>
        <p className="text-gray-800 leading-9 dark:text-gray-200">{message}</p>
      </div>
    </div>
  );
};
