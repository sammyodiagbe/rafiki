import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  conversations: defineTable({
    title: v.string(),
    userId: v.string(),
  }),
  messages: defineTable({
    conversationId: v.id("conversations"),
    message: v.string(),
    type: v.string(),
    userId: v.string(),
  }),
});