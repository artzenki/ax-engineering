'use client'

import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  label: string
  delayMs?: number
  durationMs?: number
}

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  label,
  delayMs = 2100,
  durationMs = 1800,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [showLabel, setShowLabel] = useState(false)

  useEffect(() => {
    let startTimestamp: number | null = null
    let frameId: number

    const timeoutId = setTimeout(() => {
      setShowLabel(true)

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / durationMs, 1)

        // Ease-out cubic formula
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const currentCount = Math.floor(easeOut * value)

        setCount(currentCount)

        if (progress < 1) {
          frameId = requestAnimationFrame(step)
        } else {
          setCount(value)
        }
      }

      frameId = requestAnimationFrame(step)
    }, delayMs)

    return () => {
      clearTimeout(timeoutId)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [value, delayMs, durationMs])

  const formattedCount =
    value >= 1000 ? count.toLocaleString('en-US') : count.toString()

  return (
    <div className="space-y-1">
      <div className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-tight flex items-baseline">
        {prefix && <span>{prefix}</span>}
        <span className="tabular-nums">{formattedCount}</span>
        {suffix && <span className="ml-0.5">{suffix}</span>}
      </div>
      <p
        className={`hero-stat-label text-[10px] md:text-[11px] uppercase tracking-wider text-[#D4D4D8] font-normal transition-all duration-700 ${
          showLabel ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        {label}
      </p>
    </div>
  )
}
