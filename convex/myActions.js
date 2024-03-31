import { action } from "./_generated/server";
import { v } from "convex/values";
import { openai } from "../src/app/openai";
import { internalMutation } from "./_generated/server";

//Todo
/*
  when a user sends a first message for the first
  new conversation is created, title is saved as the message user has sent
  { type: 'system', content: 'This is the instruction part '}


  //if there was conversation id message is just saved and an the last message is gotten
  and is sent with new message to the api so the api knows how to continue the conversation
*/

const createNewConversation = action({
  args: {
    message: v.string(),
    userId: v.string(),
  },
  async handler(ctx, args) {
    const { message, userId } = args;
    const subject = ctx.auth.getUserIdentity();
    if (!subject) throw new Error("You must be logged in");
    if (!conversationId) throw new Error("No Conversation Id provided");

    // check to see if there is conversation with that id
    // if there is no need to create a new conversation entry, if not create one
    let convo = await ctx.runMutation(createConversation, {
      message,
      userId,
    });
    if (!convo) throw new Error("Something went wrog");
    const saveMessage = await ctx.runMutation(createNewMessage, {
      message,
      userId,
      conversationId: convo._id,
    });

    return;
    // so if the conversation id is valid then we can create a message
  },
});

const createNewMessage = internalMutation({
  args: {
    message: v.string(),
    conversationId: v.string("conversations"),
    userId: v.id("users"),
  },
  async handler(ctx, args) {
    const { message, conversationId, userId } = args;
    const saveMessage = await ctx.db.insert("messages", {
      message,
      conversationId,
      userId,
    });
    return;
  },
});

const createConversation = internalMutation({
  args: { message: v.string(), userId: v.id("users") },
  async handler(ctx, args) {
    const { message, userId } = args;
    await ctx.db.insert("conversations", {
      title: message,
      userId,
    });
  },
});

export const SendMessage = action({
  args: {
    message: v.string(),
  },
  async handler(ctx, args) {
    const { message } = args;
    const subject = ctx.auth.getUserIdentity();
    if (!subject) throw new Error("User is unauthorized");
    const chat = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });
    return;
  },
});
