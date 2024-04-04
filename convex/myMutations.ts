import { mutation } from  "./_generated/server";
import { v } from "convex/values"


export const createNewConversation = mutation({


    args: {
        message: v.string(),
        userId: v.id('users'),
        conversationId: v.optional(v.id('conversations')),
    
    },
    async handler(ctx, args) {
        const { message, userId, conversationId } = args;
        if(!conversationId) {
            // conversation does not exist
            // create a new conversation
            const newConversation = await ctx.db.insert("conversations", { userId, title: message, });
            const newMessage = await ctx.db.insert("messages", { message, type: "user", conversationId: newConversation});
            console.log(newMessage)
            return;
        }

        // in this case we already have a conversation going on which means we have a conversation Id
        const newMessage = await ctx.db.insert("messages", {message, type: 'user', conversationId});
        return;
   }
   
})

