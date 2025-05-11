import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAllInterviews = query({
  handler: async (context) => {
    const identity = await context.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const interviews = await context.db.query("interviews").collect();

    return interviews;
  },
});

export const getMyInterviews = query({
  handler: async (context) => {
    const identity = await context.auth.getUserIdentity();
    if (!identity) {
      return [];
    }

    const interviews = await context.db
      .query("interviews")
      .withIndex("by_candidate_id", (q) =>
        q.eq("candidateId", identity.subject)
      )
      .collect();

    return interviews;
  },
});

export const getInterviewByStreamId = query({
  args: { streamCallId: v.string() },
  handler: async (context, args) => {
    return await context.db
      .query("interviews")
      .withIndex("by_stream_call_id", (q) =>
        q.eq("streamCallId", args.streamCallId)
      )
      .first();
  },
});

export const createInterview = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    startTime: v.number(),
    status: v.string(),
    streamCallId: v.string(),
    candidateId: v.string(),
    interviewerIds: v.array(v.string()),
  },
  handler: async (context, args) => {
    const identity = await context.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    return await context.db.insert("interviews", {
      ...args,
    });
  },
});

export const updateInterviewStatus = mutation({
  args: { id: v.id("interviews"), status: v.string() },
  handler: async (context, args) => {
    return await context.db.patch(args.id, {
      status: args.status,
      ...(args.status === "completed" ? { endTime: Date.now() } : {}),
    });
  },
});
