import { Id } from "../../convex/_generated/dataModel";

export type messageType = {
  _id: Id<"messages">;
  _creationTime: number;
  type: string;
  userId: string;
  conversationId: string;
  message: string;
};
