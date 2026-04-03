"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Cpu, Users, Award, Sparkles, Rocket } from "lucide-react"

const stats = [
  { value: 500, suffix: "+", label: "Participants", icon: Users },
  { value: 50, suffix: "+", label: "Teams", icon: Code2 },
  { value: 5, suffix: "", label: "Competitions", icon: Cpu },
  { value: 1.2, suffix: "L+", label: "Prize Pool", icon: Award },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current * 100) / 100)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-mono">
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(2)}
      {suffix}
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-mono mb-3 sm:mb-4">
              About Metacognition
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Where <span className="text-primary">Innovation</span> Meets{" "}
              <span className="text-accent">Execution</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">Metacognition</span> - is the flagship technical event hosted by the Robotics & Coding Club of
                Galgotias College of Engineering and Technology.  
              </p>
              <p>
                Since our inception, we&apos;ve been at the forefront of fostering innovation, encouraging hands-on
                learning, and building a community of tech enthusiasts who dare to dream and build.
              </p>
              <p>
                Our events aren&apos;t just competitions - they&apos;re launchpads for the next generation of
                engineers, innovators, and problem-solvers.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary">
                <Sparkles className="h-3 sm:h-4 w-3 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm">Innovation First</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary">
                <Rocket className="h-3 sm:h-4 w-3 sm:w-4 text-accent" />
                <span className="text-xs sm:text-sm">Hands-on Learning</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary">
                <Users className="h-3 sm:h-4 w-3 sm:w-4 text-chart-4" />
                <span className="text-xs sm:text-sm">Community Driven</span>
              </div>
            </div>
          </div>

          {/* Right side - Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <Icon className="h-6 sm:h-8 w-6 sm:w-8 text-muted-foreground group-hover:text-primary transition-colors mb-2 sm:mb-4" />
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Skills showcase */}
        <div className="mt-12 sm:mt-24">
          <h3 className="text-center text-lg sm:text-xl font-semibold mb-4 sm:mb-8">Technologies We Work With</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {[
              "Arduino",
              "Raspberry Pi",
              "Python",
              "C++",
              "ROS",
              "TensorFlow",
              "OpenCV",
              "CAD Design",
              "3D Printing",
              "PCB Design",
              "MQTT",
              "Node-RED",
            ].map((tech) => (
              <div
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-default"
              >
                <span className="text-xs sm:text-sm font-mono">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
