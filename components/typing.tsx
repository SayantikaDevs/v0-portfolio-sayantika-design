"use client"
import { useEffect, useState } from "react"

export function useTyping(words: string[], speed = 55, pause = 1200) {
  const [i, setI] = useState(0)
  const [txt, setTxt] = useState("")
  const [del, setDel] = useState(false)

  useEffect(() => {
    let t: number
    const word = words[i % words.length]
    const isDone = txt === word

    if (!del && !isDone) {
      t = window.setTimeout(() => setTxt(word.slice(0, txt.length + 1)), speed)
    } else if (!del && isDone) {
      t = window.setTimeout(() => setDel(true), pause)
    } else {
      t = window.setTimeout(() => {
        setTxt(word.slice(0, Math.max(0, txt.length - 1)))
        if (txt.length === 0) {
          setDel(false)
          setI((v) => (v + 1) % words.length)
        }
      }, speed / 2)
    }
    return () => clearTimeout(t)
  }, [words, i, txt, del, speed, pause])

  return txt
}

export default function Typing({ words }: { words: string[] }) {
  const value = useTyping(words)
  return (
    <span aria-live="polite" className="border-r-2 border-[#3B82F6] pr-1">
      {value}
    </span>
  )
}
