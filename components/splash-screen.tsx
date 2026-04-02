"use client"

import { useState, useEffect } from "react"
import { Bot } from "lucide-react"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHiding, setIsHiding] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Fill progress bar smoothly
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 5
      })
    }, 50)

    // Hide animation after 1.5s
    const hideTimer = setTimeout(() => {
      setIsHiding(true)
    }, 1500)

    // Remove from DOM after transition (2s total)
    const removeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes screen-tear {
          0% { clip-path: inset(0 0 0 0); transform: translateX(0); opacity: 1; }
          5% { clip-path: inset(10% 0 70% 0); transform: translateX(-30px); opacity: 1; }
          10% { clip-path: inset(0 0 0 0); transform: translateX(0); opacity: 1; }
          15% { clip-path: inset(50% 0 30% 0); transform: translateX(30px); filter: hue-rotate(90deg); opacity: 1; }
          20% { clip-path: inset(0 0 0 0); transform: translateX(0); filter: hue-rotate(0deg); opacity: 1; }
          25% { clip-path: inset(80% 0 5% 0); transform: translateX(-40px); opacity: 1; }
          30% { clip-path: inset(0 0 0 0); transform: translateX(0); filter: invert(1); opacity: 1; }
          35% { clip-path: inset(20% 0 50% 0); transform: translateX(50px); opacity: 1; }
          40% { clip-path: inset(0 0 0 0); transform: translateX(0); filter: invert(0); opacity: 1; }
          45% { clip-path: inset(60% 0 10% 0); transform: translateX(-50px); opacity: 0.8; }
          50% { clip-path: inset(0 0 0 0); transform: translateX(0); opacity: 1; }
          60% { clip-path: inset(15% 0 65% 0); transform: translateX(80px) skewX(10deg); opacity: 0.6; }
          70% { clip-path: inset(0 0 0 0); transform: translateX(0) skewX(0); opacity: 0.8; }
          80% { clip-path: inset(75% 0 15% 0); transform: translateX(-100px) skewX(-10deg); opacity: 0.4; }
          90% { clip-path: inset(45% 0 45% 0); transform: translateX(200px); opacity: 0.2; }
          100% { clip-path: inset(50% 0 50% 0); transform: translateX(0); opacity: 0; }
        }
        .animate-screen-tear {
          animation: screen-tear 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}} />
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center ${isHiding ? "animate-screen-tear pointer-events-none bg-background" : "bg-background"
          }`}
      >
        <div className="relative flex flex-col items-center z-10">
          {/* Animated Bot Icon */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary/40 blur-[32px] rounded-full animate-pulse" />
            <Bot className="h-20 w-20 text-primary relative z-10 animate-bounce" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 font-mono flex items-center text-foreground">
            {"<"}METACOGNITION<span className="text-primary animate-pulse">.26</span>{"/>"}
          </h1>

          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-8 font-mono">
            System Initializing...
          </p>

          {/* Progress Bar Container */}
          <div className="w-64 h-1.5 bg-secondary/50 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/20 animate-pulse" />
            <div
              className="h-full bg-primary transition-all duration-75 ease-out relative z-10"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Background Decor */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute -bottom-[25%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]" />
        </div>
      </div>
    </>
  )
}
