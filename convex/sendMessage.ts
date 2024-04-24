import { action } from "./_generated/server";
import { ConvexError, v } from "convex/values";
import { openai } from "../src/app/openai";
import { internal } from "./_generated/api";
import { saveMessage } from "./myMutations";

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

    // const msgs = await ctx.runQuery(internal.myQuery.fetchMessages, {
    //   conversationId: conversationId,
    // });
    // console.log(msgs);

    // const ai = await openai.chat.completions.create({
    //   messages: [...msgs],
    //   model: "gpt-3.5-turbo",
    // });

    // const aiMessage = ai.choices[0].message.content!;

    // await ctx.runMutation(internal.myMutations.saveMessage, {
    //   message: aiMessage,
    //   conversationId,
    //   type: "assistant",
    // });

    return true;
    //  after a new messsage has been created then we wanna save the message in the db and now we can do anuthing we want with openai
  },
});
