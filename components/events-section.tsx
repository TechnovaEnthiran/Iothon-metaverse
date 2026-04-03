"use client"

import { useState } from "react"
import { Cpu, Gamepad2, ChefHat, Wrench, Users, Trophy, Clock, ArrowRight, IndianRupee } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const events = [
  {
    id: 1,
    title: "IOThon",
    tagline: "Build. Innovate. Impact.",
    description: "Open-theme IoT Innovation Hackathon. Create groundbreaking IoT solutions with sensors, microcontrollers, and automation. Hands-on prototyping with mentor guidance.",
    icon: Cpu,
    color: "from-primary to-primary/50",
    teamSize: "1-4 members",
    duration: "1 Day",
    prize: "₹60,000 Pool",
    entryFee: "₹499/team",
    highlights: ["Open Theme", "Mentor Round", "Live Demo", "Inter-College"],
    link: "/iothon",
    unstopLink: "https://unstop.com/hackathons/iothon-metacognition-tech-venture-unifest-2026-galgotias-college-of-engineering-technology-gcet-greater-noida-1666377",
    image: "/events/iothon.jpeg",
  },
  {
    id: 2,
    title: "Robo Sumo",
    tagline: "Brawl Rampage - Robo Sumo",
    description: "A high-intensity 1v1 robotics combat event where custom-built bots battle inside a circular Dohyo to push opponents out. The challenge emphasizes power, stability, precision control, and tactical strategy.",
    icon: Gamepad2,
    color: "from-accent to-accent/50",
    teamSize: "2 members",
    duration: "Knockout Format",  
    prize: "₹20,000 Pool",
    entryFee: "₹200/team",
    highlights: ["Dohyo Arena", "Technical Inspection", "1v1 Matches", "Lucky Draw Brackets"],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfyL7NybUy-xQOUbQXgPRTEG9Iws00Rd64Izt2oyMHvqMp18A/viewform?fbzx=-5573617321677265007",
    linkText: "Register Here",
    unstopLink: "https://unstop.com/competitions/brawl-rampage-robo-sumo-metacognition-tech-venture-unifest-2026-galgotias-college-of-engineering-technology-1668534",
    image: "/events/robosumo.jpeg",
  },
  {
    id: 3,
    title: "Robo Chef",
    tagline: "2-Hour Innovation Challenge",
    description: "Build a functional project using randomly provided components within 2 hours. Evaluated on innovation, functionality, technical complexity, design, and presentation. Contacts: Vitthal (7068661172), Naveen (8102619871).",
    icon: ChefHat,
    color: "from-chart-4 to-chart-4/50",
    teamSize: "2 members",
    duration: "2 hours",
    prize: "₹8,000 Pool",
    entryFee: "₹200/person",
    highlights: ["Random Components", "1st Prize: ₹5,000", "2nd Prize: ₹3,000", "No Pre-built Code"],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfyL7NybUy-xQOUbQXgPRTEG9Iws00Rd64Izt2oyMHvqMp18A/viewform?fbzx=-5573617321677265007",
    linkText: "Register Here",
    unstopLink: "https://unstop.com/hackathons/robo-chef-metacognition-tech-venture-unifest-2026-galgotias-college-of-engineering-technology-gcet-greater-no-1666382",
    image: "/events/robochef.jpeg",
  },
  {
    id: 4,
    title: "Robo Soccer",
    tagline: "1v1 Arena Football Robotics",
    description: "An exciting 1v1 robotics football competition where teams control their bots in a structured arena to score goals. The event tests precision handling, coordination, tactical gameplay, and quick decision-making under pressure.",
    icon: Gamepad2,
    color: "from-destructive to-destructive/50",
    teamSize: "2 members",
    duration: "Knockout Rounds",
    prize: "₹16,000 Pool",
    entryFee: "₹200/team",
    highlights: ["1v1 Matches", "2 x 3 Min Halves", "Center Restart", "Goal-Line Rules"],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfyL7NybUy-xQOUbQXgPRTEG9Iws00Rd64Izt2oyMHvqMp18A/viewform?fbzx=-5573617321677265007",
    linkText: "Register Here",
    unstopLink: "https://unstop.com/hackathons/robo-soccer-metacognition-tech-venture-unifest-2026-galgotias-college-of-engineering-technology-gcet-greater--1666201",
    image: "/events/robosoccer.jpeg",
  },
  {
    id: 5,
    title: "Robo Race",
    tagline: "Offroad Rampage (RoboRace)",
    description: "A high-speed all-terrain RoboRace designed to push student-built machines to their engineering limits. Bots must survive and perform across mud, gravel, steep inclines, and unpredictable obstacles.",
    icon: Gamepad2,
    color: "from-destructive to-destructive/50",
    teamSize: "Solo",
    duration: "Knockout Rounds",
    prize: "₹23,000 Pool",
    entryFee: "₹200/person",
    highlights: ["Technical Inspection", "All-Terrain Track", "Top 50% to Finale", "Grand Finale"],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfyL7NybUy-xQOUbQXgPRTEG9Iws00Rd64Izt2oyMHvqMp18A/viewform?fbzx=-5573617321677265007",
    linkText: "Register Here",
    unstopLink: "https://unstop.com/hackathons/bluetooth-grand-prix-metacognition-tech-venture-unifest-2026-galgotias-college-of-engineering-technology-gcet-1666374",
    image: "/events/roborace.jpeg",
  },
]

function EventCard({ event, isActive, onClick }: { event: typeof events[0]; isActive: boolean; onClick: () => void }) {
  const Icon = event.icon

  const cardContent = (
    <Card
      onClick={onClick}
      className={`cursor-pointer transition-all duration-500 bg-card border-border hover:border-primary/50 overflow-hidden group h-full ${isActive ? "border-primary shadow-lg shadow-primary/20" : ""
        }`}
    >
      <div className="relative aspect-16/10 overflow-hidden border-b border-border">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/25 to-transparent" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md">
          <div className={`w-8 h-8 rounded-full bg-linear-to-br ${event.color} flex items-center justify-center`}>
            <Icon className="h-4 w-4 text-background" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">Event</span>
        </div>
      </div>
      <CardHeader className="pb-3 sm:pb-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground">{event.title}</h3>
        <p className="text-xs sm:text-sm text-primary font-mono">{event.tagline}</p>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{event.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.highlights.map((highlight) => (
            <span key={highlight} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
              {highlight}
            </span>
          ))}
        </div>

        {"entryFee" in event && event.entryFee && (
          <div className="mb-4 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20 flex items-center gap-2">
            <IndianRupee className="h-4 w-4 text-accent" />
            <span className="text-sm text-accent font-medium">Entry: {event.entryFee}</span>
          </div>
        )}

        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border mt-auto">
          <div className="text-center">
            <Users className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{event.teamSize}</span>
          </div>
          <div className="text-center">
            <Clock className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{event.duration}</span>
          </div>
          <div className="text-center">
            <Trophy className="h-4 w-4 mx-auto mb-1 text-accent" />
            <span className="text-xs text-accent font-semibold">{event.prize}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
          {"unstopLink" in event && event.unstopLink && typeof event.unstopLink === "string" && (
            <Button
              variant="outline"
              size="sm"
              className="w-full bg-[#1c2128] border-[#30363d] text-white hover:bg-[#30363d] hover:text-white group border-2 font-bold"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(event.unstopLink as string, "_blank")
              }}
            >
              Register on Unstop
              <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}

          <span className="inline-flex items-center text-sm text-primary group-hover:underline">
            {"linkText" in event && typeof event.linkText === "string" ? event.linkText : "View Details"} <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </CardContent>
    </Card>
  )

  if (event.link) {
    return <Link href={event.link} className="block h-full">{cardContent}</Link>
  }

  return cardContent
}

export function EventsSection() {
  const [activeEvent, setActiveEvent] = useState(0)

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="w-full mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16 px-2">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-mono mb-3 sm:mb-4">
            {"<"} Competitions {"/>"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            5 Events. <span className="text-primary">Infinite</span> Possibilities.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Push the boundaries of robotics and coding. Choose your arena and prove your expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              isActive={activeEvent === index}
              onClick={() => setActiveEvent(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a
              href="https://drive.google.com/drive/folders/1ez2T5TmyBbhEffpDY_KGVtXo5eeFyOxY?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Rules & Guidelines
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
