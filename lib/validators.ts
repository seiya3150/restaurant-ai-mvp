import { z } from "zod";

export const eventSchema = z.object({
  storeId: z.string().min(1),
  eventType: z.enum(["page_view", "phone_click", "map_click", "line_click", "reservation_click"])
});

export const aiGenerateSchema = z.object({
  storeId: z.string().optional(),
  task: z.enum(["google_review_reply", "instagram_post", "line_broadcast", "menu_copy", "job_posting"]),
  storeInfo: z.string().min(1).max(4000),
  reviewBody: z.string().max(4000).optional().default(""),
  dishName: z.string().max(200).optional().default(""),
  purpose: z.string().max(500).optional().default(""),
  tone: z.string().max(100).optional().default("温かく誠実")
});

export const storeUpdateSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  reservation_url: z.string().url().or(z.literal("")),
  instagram_url: z.string().url().or(z.literal("")),
  line_url: z.string().url().or(z.literal("")),
  google_maps_embed_url: z.string().url().or(z.literal("")),
  regular_holiday: z.string(),
  opening_hours: z.record(z.string()),
  photos: z.array(z.string().url()).default([])
});

export const menuUpdateSchema = z.object({
  storeId: z.string().min(1),
  items: z.array(
    z.object({
      id: z.string().optional(),
      name: z.string().min(1),
      description: z.string().min(1),
      price: z.coerce.number().int().min(0),
      image_url: z.string().url().or(z.literal("")).optional(),
      is_recommended: z.boolean().default(false)
    })
  )
});
