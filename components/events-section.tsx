"use client"

import { useState } from "react"
import { Cpu, Gamepad2, ChefHat, Wrench, Users, Trophy, Clock, ArrowRight, IndianRupee } from "lucide-react"
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
    prize: "₹9,000+",
    entryFee: "₹200/team",
    highlights: ["Open Theme", "Mentor Round", "Live Demo", "Inter-College"],
    link: "/iothon",
  },
  {
    id: 2,
    title: "Robo Soccer",
    tagline: "Robot Soccer Championship",
    description: "1v1 team competition in a structured arena. Matches are 3-min halves; robots max 30x30x20cm & 3kg. Contacts: Vitthal (7068661172), Shikhar (9335586266).",
    icon: Gamepad2,
    color: "from-accent to-accent/50",
    teamSize: "2 members",
    duration: "Tournament Style",
    prize: "₹20,000 Pool",
    entryFee: "₹99/person",
    highlights: ["1st Prize: ₹12,000", "2nd Prize: ₹8,000", "1v1 Matches", "Strict Fouls"],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfyL7NybUy-xQOUbQXgPRTEG9Iws00Rd64Izt2oyMHvqMp18A/viewform?fbzx=-5573617321677265007",
    linkText: "Register Here",
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
    entryFee: "₹99/person",
    highlights: ["Random Components", "1st Prize: ₹5,000", "2nd Prize: ₹3,000", "No Pre-built Code"],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfyL7NybUy-xQOUbQXgPRTEG9Iws00Rd64Izt2oyMHvqMp18A/viewform?fbzx=-5573617321677265007",
    linkText: "Register Here",
  },
  {
    id: 4,
    title: "Bluetooth Grand Prix",
    tagline: "Tech-driven Racing Event",
    description: "A thrilling racing event where participants control electronic cars via Bluetooth in a closed arena. Compete in knockout rounds combining speed, precision, and control.",
    icon: Gamepad2,
    color: "from-destructive to-destructive/50",
    teamSize: "Individual/Team",
    duration: "Knockout Rounds",
    prize: "₹15,000 Pool",
    entryFee: "₹149/person",
    highlights: ["1st Prize: ₹10,000", "2nd Prize: ₹5,000", "Bluetooth Control", "Arena Racing"],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfyL7NybUy-xQOUbQXgPRTEG9Iws00Rd64Izt2oyMHvqMp18A/viewform?fbzx=-5573617321677265007",
    linkText: "Register Here",
  },
]

function EventCard({ event, isActive, onClick }: { event: typeof events[0]; isActive: boolean; onClick: () => void }) {
  const Icon = event.icon

  const cardContent = (
    <Card
      onClick={onClick}
      className={`cursor-pointer transition-all duration-500 bg-card border-border hover:border-primary/50 overflow-hidden group h-full ${
        isActive ? "border-primary shadow-lg shadow-primary/20" : ""
      }`}
    >
      <CardHeader className="pb-3 sm:pb-4">
        <div className={`w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 sm:h-7 w-6 sm:w-7 text-background" />
        </div>
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

        <div className="mt-4 pt-4 border-t border-border">
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="w-full mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16 px-2">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-mono mb-3 sm:mb-4">
            {"<"} Competitions {"/>"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            4 Events. <span className="text-primary">Infinite</span> Possibilities.
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
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            View All Rules & Guidelines
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
