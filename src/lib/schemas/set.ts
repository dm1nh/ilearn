import { z } from "zod"

export const wordSchema = z.object({
  term: z.string(),
  pos: z.enum([
    "noun",
    "verb",
    "adjective",
    "adverb",
    "preposition",
    "determiner",
  ]),
  definition: z.string(),
  ipa: z.string().optional(),
  sound: z.string().url().optional(),
})

export type TWord = z.infer<typeof wordSchema>
