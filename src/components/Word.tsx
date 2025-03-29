import type { TWord } from "@/lib/schemas/set"
import { cn } from "@/lib/utils"
import { AudioLinesIcon } from "lucide-react"
import useSound from "use-sound"

export function Word({ word }: { word: TWord }) {
  const [play] = useSound(word.sound ?? "", {
    interrupt: false,
    playbackRate: 0.75,
  })

  return (
    <div className="flex flex-col gap-1 rounded-md border px-4 py-2 md:px-6">
      <div>
        <span className="text-lg font-medium">{word.term}</span>{" "}
        <span className="text-muted-foreground text-sm">{word.pos}</span>
      </div>
      <button
        className="hover:text-destructive flex cursor-pointer items-center gap-1 transition-colors duration-100"
        data-src={word.sound}
        onClick={() => play()}
        disabled={!word.sound}
      >
        <AudioLinesIcon
          className={cn("h-4 w-4", { "text-muted-foreground": !word.sound })}
        />
        <i>{word.ipa}</i>
      </button>
      <div className="text-muted-foreground">{word.definition}</div>
    </div>
  )
}
