import { query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const getConversations = query({
  args: {},
  async handler(ctx, args) {
    const user = await ctx.auth.getUserIdentity();

    if(!user) throw new ConvexError("You are not authorized");

    const conversations = await ctx.db
      .query("conversations")
      .filter((q) => q.eq(q.field("userId"), user.tokenIdentifier))
      .collect();
    return conversations;
  },
});
