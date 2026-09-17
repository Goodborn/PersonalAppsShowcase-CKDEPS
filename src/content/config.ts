import { defineCollection, z } from "astro:content";

const apps = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    category: z.string(),
    icon: z.string().default("default.svg"),
    screenshot: z.string().default("placeholder.svg"),
    source: z.string().optional(),
    install: z.string().optional(),
    website: z.string().optional(),
    repo: z.string().optional(),
    why: z.string(),
    alternatives: z.array(z.string()).optional(),
    features: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { apps };