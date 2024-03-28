import { action } from "./_generated/server";
import { v } from "convex/values";
import { openai } from "../src/app/openai";

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

    console.log(chat);
    return;
  },
});
