"use client";
import React from 'react'
import { useTypewriter } from '@/hooks/useTypewriter'

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
}

export function Typewriter({ text, speed = 50, className = '' }: TypewriterProps) {
  const displayedText = useTypewriter(text, speed)

  return (
    <div className={`font-mono ${className}`}>
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  )
}

