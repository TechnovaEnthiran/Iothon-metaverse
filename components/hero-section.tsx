"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowDown, Cpu, Zap, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

function TypeWriter({ text, delay = 100 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function FloatingIcon({ icon: Icon, className, delay }: { icon: React.ComponentType<{ className?: string }>; className: string; delay: number }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <div
      className={`absolute transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      <div className="relative">
        <Icon className="h-12 w-12 text-primary/60" />
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
      </div>
    </div>
  )
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []
    const particleCount = 80

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(74, 222, 128, 0.4)"
        ctx.fill()

        // Connect nearby particles
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(74, 222, 128, ${0.15 - dist / 800})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export function HeroSection() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const eventDate = new Date("2026-04-07T09:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const diff = eventDate - now

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Floating Icons - hidden on mobile */}
      <div className="hidden md:block">
        <FloatingIcon icon={Cpu} className="top-1/4 left-[15%] animate-bounce" delay={500} />
        <FloatingIcon icon={Zap} className="top-1/3 right-[20%] animate-pulse" delay={800} />
        <FloatingIcon icon={Code2} className="bottom-1/3 left-[25%] animate-bounce" delay={1100} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-mono text-primary">April 7, 2026</span>
        </div>

        <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6">
          <span className="text-foreground">METACOGNITION</span>
          <br />
          <span className="text-primary">
            <TypeWriter text="2026" delay={150} />
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
          Where <span className="text-primary font-semibold">machines</span> meet{" "}
          <span className="text-accent font-semibold">minds</span>. The ultimate robotics and coding
          showdown at Galgotias College of Engineering and Technology.
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-2 xs:gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {[
            { value: countdown.days, label: "Days" },
            { value: countdown.hours, label: "Hours" },
            { value: countdown.minutes, label: "Mins" },
            { value: countdown.seconds, label: "Secs" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-14 xs:w-16 sm:w-20 h-14 xs:h-16 sm:h-20 rounded-lg bg-card border border-border flex items-center justify-center mb-1 sm:mb-2">
                <span className="text-lg xs:text-xl sm:text-3xl font-bold font-mono text-primary">
                  {String(item.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-[10px] xs:text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
            Register Now
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
            View Events
          </Button>
        </div>
      </div>  
    </section>
  )
}
