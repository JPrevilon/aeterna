import { z } from "zod";

const text = (min: number, max: number) => z.string().trim().min(min).max(max);
const slug = z.string().trim().min(2).max(120).regex(/^[a-z0-9-]+$/);
const optionalText = (max: number) =>
  z.preprocess(
    value => typeof value === "string" && value.trim() === "" ? undefined : value,
    z.string().trim().max(max).optional()
  );

export const leadSchema = z.object({
  name:text(2, 120),
  email:z.string().trim().email().max(160),
  phone:optionalText(40),
  interest:optionalText(120),
  message:text(2, 2000)
});
export const newsletterSchema = z.object({ email:z.string().trim().email().max(160), name:optionalText(120) });
const relativePathSchema = z.string().regex(/^\/(?!\/)/);
export const checkoutSchema = z.object({
  itemType:z.enum(["gift_card","product","membership","deposit"]).optional(),
  itemSlug:slug.optional(),
  amount:z.number().int().min(100).max(500000).optional(),
  name:optionalText(120),
  purchaseType:z.enum(["gift_card","membership","other"]).optional(),
  customerName:optionalText(120),
  customerEmail:z.string().trim().email().max(160).optional(),
  successPath:relativePathSchema.optional(),
  cancelPath:relativePathSchema.optional()
}).superRefine((data, ctx) => {
  const resolvedType =
    data.itemType ||
    (data.purchaseType === "gift_card" ? "gift_card" : data.purchaseType === "membership" ? "membership" : undefined);

  if (!resolvedType) {
    ctx.addIssue({ code:z.ZodIssueCode.custom, path:["itemType"], message:"Checkout item type is required" });
  }

  if (resolvedType === "gift_card" && !data.amount) {
    ctx.addIssue({ code:z.ZodIssueCode.custom, path:["amount"], message:"Gift card amount is required" });
  }

  if (resolvedType && resolvedType !== "gift_card" && !data.itemSlug) {
    ctx.addIssue({ code:z.ZodIssueCode.custom, path:["itemSlug"], message:"Item slug is required" });
  }
});
export const bookingSchema = z.object({
  name:text(2, 120),
  email:z.string().trim().email().max(160),
  phone:optionalText(40),
  serviceSlug:slug,
  preferredDuration:optionalText(80),
  preferredDate:optionalText(30),
  preferredTime:optionalText(40),
  earliestAvailable:z.boolean().default(false),
  addOns:z.array(z.string().trim().min(1).max(120)).max(12).default([]),
  notes:optionalText(2000),
  requestType:z.enum(["booking","consultation"]).default("booking"),
  clientType:z.enum(["new","returning"]).default("new"),
  consultationAcknowledgment:z.literal(true)
});
