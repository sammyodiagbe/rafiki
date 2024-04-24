import { mutation, action, internalMutation } from "./_generated/server";
import { ConvexError, v } from "convex/values";
import { openai } from "../src/app/openai";
import { internal } from "./_generated/api";
import OpenAI from "openai";

type MessageType = {
  role: string;
  content: string;
  name?: string;
};

export const createNewConversation = mutation({
  args: {
    message: v.string(),
  },
  async handler(ctx, args) {
    const userIdentity = await ctx.auth.getUserIdentity();
    const { message } = args;
    // conversation does not exist
    // create a new conversation

    if (!userIdentity) throw new ConvexError("unauthorized");

    const { subject } = userIdentity;
    const newConversation = await ctx.db.insert("conversations", {
      userId: subject,
      title: message,
    });
    return newConversation;
  },
});

export const sendMessage = action({
  args: { message: v.string(), conversationId: v.id("conversations") },
  async handler(ctx, args) {
    const { message, conversationId } = args;
    const user = await ctx.auth.getUserIdentity();
    if (!user) throw new ConvexError("You are not authorized");

    // need to get all messages

    await ctx.runMutation(internal.myMutations.saveMessage, {
      message,
      conversationId,
      type: "user",
    });

    const msgs = await ctx.runQuery(internal.myQuery.fetchMessages, {
      conversationId: conversationId,
    });

    const ai = await openai.chat.completions.create({
      messages: msgs as OpenAI.ChatCompletionMessageParam[],

      model: "gpt-3.5-turbo",
    });

    const aiMessage = ai.choices[0].message.content!;

    await ctx.runMutation(internal.myMutations.saveMessage, {
      message: aiMessage,

      conversationId,
      type: "assistant",
    });

    return true;
    //  after a new messsage has been created then we wanna save the message in the db and now we can do anuthing we want with openai
  },
});

export const saveMessage = internalMutation({
  args: {
    message: v.string(),
    conversationId: v.id("conversations"),
    type: v.string(),
  },
  async handler(ctx, args) {
    const user = await ctx.auth.getUserIdentity();
    const { message, type, conversationId } = args;

    if (!user) throw new ConvexError("You are not authorize");
    await ctx.db.insert("messages", {
      message,
      conversationId: conversationId,
      type: type,
      userId: user.subject,
    });
  },
});
