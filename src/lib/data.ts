import { getCollection, type CollectionEntry } from "astro:content"

export async function getSets() {
  const sets = await getCollection("set")
  return sets
    .filter((set) => !set.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}
export type TSetMdx = CollectionEntry<"set">
