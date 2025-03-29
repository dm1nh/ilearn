import type { TWord } from "@/lib/schemas/set"

import { Word } from "./Word"

export function Set({ words }: { words: TWord[] }) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {words.map((word, index) => (
        <Word key={index} word={word} />
      ))}
    </div>
  )
}
