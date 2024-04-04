import { query } from "./_generated/server";
import { v } from "convex/values";

export const getConversations = query({
  args: { userId: v.string() },
  async handler(ctx, args) {
    const { userId } = args;

    const conversations = await ctx.db
      .query("conversations")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
    return conversations;
  },
});
