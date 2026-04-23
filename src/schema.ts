import { z } from "zod";

export const SectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  content: z.array(z.string()),
  metric: z.object({
    label: z.string(),
    value: z.number(),
    unit: z.string(),
  }).optional(),
  code: z.object({
    before: z.string().optional(),
    after: z.string().optional(),
    language: z.string().default("salt"),
  }).optional(),
  axiom: z.number().int().min(1).max(3).optional(),
  html: z.string().optional(),
});

export type Section = z.infer<typeof SectionSchema>;
export const PresentationSchema = z.array(SectionSchema);
