"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, CheckCircle2, Circle } from "lucide-react"

const timeline = [
  {
    date: "Apr 1, 2026",
    title: "Registrations Open",
    description: "Early bird registration begins with discounted entry fees",
    status: "upcoming",
  },
  {
    date: "Apr 20, 2026",
    title: "Team Formation Deadline",
    description: "Final date to form teams and submit member details",
    status: "upcoming",
  },
  {
    date: "May 1, 2026",
    title: "Problem Statements Released",
    description: "IoT Innovation and RoboChef problem statements announced",
    status: "upcoming",
  },
  {
    date: "May 10, 2026",
    title: "Technical Workshop",
    description: "Pre-event workshop on robotics fundamentals and safety protocols",
    status: "upcoming",
  },
  {
    date: "May 15, 2026",
    title: "Day 1 - Inauguration",
    description: "Opening ceremony, team briefings, and IoT Innovation kickoff",
    status: "upcoming",
  },
  {
    date: "May 16, 2026",
    title: "Day 2 - Battle Day",
    description: "Rocket League RC and Robo Wars tournaments begin",
    status: "upcoming",
  },
  {
    date: "May 17, 2026",
    title: "Day 3 - Finals & Awards",
    description: "Grand finals, project presentations, and award ceremony",
    status: "upcoming",
  },
]

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex gap-3 sm:gap-6 pb-8 sm:pb-12 last:pb-0 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-20px]"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${
            item.status === "completed"
              ? "bg-primary text-primary-foreground"
              : "bg-card border-2 border-primary"
          }`}
        >
          {item.status === "completed" ? (
            <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5" />
          ) : (
            <Circle className="h-3 sm:h-4 w-3 sm:w-4 text-primary" />
          )}
        </div>
        {index < timeline.length - 1 && (
          <div className="w-0.5 flex-1 bg-border mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-2 sm:pb-4">
        <div className="flex items-center gap-2 mb-1 sm:mb-2">
          <Calendar className="h-3 sm:h-4 w-3 sm:w-4 text-primary" />
          <span className="text-xs sm:text-sm font-mono text-primary">{item.date}</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-foreground mb-0.5 sm:mb-1">{item.title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
      </div>
    </div>
  )
}

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16 px-2">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-mono mb-3 sm:mb-4">
            Event Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Mark Your <span className="text-primary">Calendar</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Key dates and milestones leading up to and during Enthiran 2026
          </p>
        </div>

        <div className="relative">
          {timeline.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Venue info */}
        <div className="mt-10 sm:mt-16 p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Venue</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Galgotias College of Engineering and Technology
                <br />
                Knowledge Park II, Greater Noida, Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
