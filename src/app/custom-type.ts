import { Id } from "../../convex/_generated/dataModel";

export type messageType = {
  _id: Id<"messages">;
  _creationTime: number;
  type: string;
  userId: string;
  conversationId: string;
  message: string;
};

export type ConversationType = {
  _id: Id<"conversations">;
  _creationTime: number;
  title: string;
  userId: string;
};
