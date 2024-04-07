import { ChatCompletionMessageParam } from "openai/resources";
import { internalQuery, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const getConversations = query({
  args: {},
  async handler(ctx) {
    const user = await ctx.auth.getUserIdentity();

    if (!user) throw new ConvexError("You are not authorized");



    const conversations = await ctx.db
      .query("conversations")
      .filter((q) => q.eq(q.field("userId"), user.subject))
      .collect();

      console.log("typeof - ",typeof conversations[0]);
    return conversations;
  },
});

export const getConversationMessages = query({
  args: { conversationId: v.string() },
  async handler(ctx, args) {
    const { conversationId } = args;
    const user = await ctx.auth.getUserIdentity();
    if (!user) throw new ConvexError("You are not authorized");

    const messages = await ctx.db
      .query("messages")
      .filter((q) => q.eq(q.field("conversationId"), conversationId)).collect();
    return messages;
  },
});

export const fetchMessages = internalQuery({
  args: {
    conversationId: v.id("conversations")
  },
  async handler(ctx, args) {
    const { conversationId } = args;
    let messages = await ctx.db.query("messages").filter(q => q.eq(q.field("conversationId"), conversationId as string)).collect();
    let newMessages = messages.map(message => ({role: message.type, content: message.message})) as ChatCompletionMessageParam[];

    return newMessages;
  }
})
