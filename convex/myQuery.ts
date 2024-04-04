import { query } from "./_generated/server";
import { ConvexError } from "convex/values";

export const getConversations = query({
  args: {},
  async handler(ctx) {
    const user = await ctx.auth.getUserIdentity();

    if(!user) throw new ConvexError("You are not authorized");

    

    const conversations = await ctx.db
      .query("conversations")
      .filter((q) => q.eq(q.field("userId"), user.subject))
      .collect();
    return conversations;
  },
});
