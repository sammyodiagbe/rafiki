import { internalMutation, internalQuery, mutation , } from "./_generated/server";
import { ConvexError, v } from "convex/values";

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

export const sendMessage = mutation({
  args: { message: v.string(), conversationId: v.string() },
  async handler(ctx, args) {
    const { message, conversationId } = args;
    const user = await ctx.auth.getUserIdentity();
    if(!user) throw new ConvexError("You are not authorized");

    const conversations = 


    await ctx.db.insert("messages", {
      message,
      conversationId,
      type: "user",
      userId: user.subject
    });

    
    return true;
    //  after a new messsage has been created then we wanna save the message in the db and now we can do anuthing we want with openai
  },
});


export const somemutation = internalMutation({
  args:{},
  async handler(ctx, args) {

    return;
  }
})
