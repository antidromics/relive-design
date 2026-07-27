import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const commonSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  draft: z.boolean().default(false),
});

const atlas = defineCollection({
  loader: glob({
    base: "./src/content/atlas",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: commonSchema.extend({
    prefecture: z.string(),
    city: z.string(),
    status: z.enum(["planning", "surveying", "published"]).default("planning"),
  }),
});

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: commonSchema.extend({
    category: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const research = defineCollection({
  loader: glob({
    base: "./src/content/research",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: commonSchema.extend({
    kind: z.enum(["method", "paper", "note"]),
    authors: z.array(z.string()).default([]),
  }),
});

export const collections = { atlas, blog, research };
