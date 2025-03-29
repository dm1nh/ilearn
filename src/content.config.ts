import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const set = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/_content/english/sets",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().default(true),
    date: z.coerce.date(),
  }),
})

export const collections = { set }
