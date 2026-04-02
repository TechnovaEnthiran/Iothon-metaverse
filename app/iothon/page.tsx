"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Cpu,
  Users,
  Trophy,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Target,
  Presentation,
  CircuitBoard,
  Zap,
  Calendar,
  IndianRupee,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const schedule = [
  { time: "10:00 AM", event: "Registration & Instructions", icon: Users },
  { time: "10:30 AM", event: "Prototype Development Phase 1", icon: Wrench },
  { time: "12:30 PM", event: "Mentor Round", icon: Lightbulb },
  { time: "1:00 PM", event: "Model Development Phase 2", icon: CircuitBoard },
  { time: "3:30 PM", event: "Final Submission & Judging", icon: Presentation },
  { time: "Post-Eval", event: "Prize Distribution", icon: Trophy },
]

const judgingCriteria = [
  { title: "Innovation & Creativity", description: "Unique approach to solving real-world problems", icon: Lightbulb },
  { title: "Working Prototype", description: "Functional demonstration of your IoT solution", icon: Wrench },
  { title: "Hardware Integration", description: "Quality of sensor and microcontroller implementation", icon: CircuitBoard },
  { title: "Real-Life Impact", description: "Relevance and applicability to actual problems", icon: Target },
  { title: "Technical Presentation", description: "Clear explanation and demonstration skills", icon: Presentation },
  { title: "Team Collaboration", description: "Effective teamwork and communication", icon: Users },
]

const prizes = [
  { place: "1st", prize: "₹6,000", extra: "+ Trophy/Memento", color: "from-yellow-400 to-amber-500" },
  { place: "2nd", prize: "₹3,000", extra: "+ Trophy/Memento", color: "from-slate-300 to-slate-400" },
  { place: "3rd", prize: "Trophy", extra: "/Memento", color: "from-amber-600 to-amber-700" },
]

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return <span>{count.toLocaleString()}{suffix}</span>
}

export default function IothonPage() {
  const [activeScheduleItem, setActiveScheduleItem] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScheduleItem((prev) => (prev + 1) % schedule.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Circuit Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <CircuitBoard
                className="text-primary/20"
                style={{
                  width: `${40 + i * 10}px`,
                  height: `${40 + i * 10}px`,
                  transform: `rotate(${i * 45}deg)`
                }}
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono border border-primary/20">
              METAVERSE - UNIFEST 2026
            </span>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center animate-pulse">
              <Cpu className="h-12 w-12 text-background" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              IOTHON
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl text-muted-foreground font-light mb-4">
            IoT Innovation Hackathon
          </p>

          <p className="text-xl text-primary font-mono mb-8">
            Build. Innovate. Impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-foreground">1-4 Members</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <IndianRupee className="h-5 w-5 text-accent" />
              <span className="text-foreground">₹200/team</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-foreground">Inter-College</span>
            </div>
          </div>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfyL7NybUy-xQOUbQXgPRTEG9Iws00Rd64Izt2oyMHvqMp18A/viewform?fbzx=-5573617321677265007">
              Register Now
            </Link>
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About IOTHON</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              IOTHON is an open-theme IoT Innovation Hackathon organized by <span className="text-primary font-semibold">Enthiran - The Robotics & Coding Club</span> as part of Unifest 2026 at Galgotias College of Engineering and Technology. Teams compete to build innovative IoT prototypes that solve real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter target={200} suffix="+" />
                </div>
                <p className="text-muted-foreground">Expected Participants</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-accent mb-2">
                  ₹<AnimatedCounter target={9000} suffix="+" />
                </div>
                <p className="text-muted-foreground">Prize Pool</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <p className="text-muted-foreground">Day Event</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Participate?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Lightbulb, title: "Innovation in IoT", desc: "Work on cutting-edge IoT and embedded systems projects" },
              { icon: Wrench, title: "Hands-on Prototyping", desc: "Build real, working prototypes in a competitive environment" },
              { icon: CircuitBoard, title: "Technical Skills", desc: "Master sensors, microcontrollers, and automation systems" },
              { icon: Trophy, title: "Competitive Platform", desc: "Showcase your skills and win exciting prizes" },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border group hover:border-primary/50 transition-colors">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Event Schedule</h2>
          <p className="text-center text-muted-foreground mb-12">A full day of innovation and excitement</p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-6">
              {schedule.map((item, index) => {
                const Icon = item.icon
                const isActive = activeScheduleItem === index

                return (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-4 transition-all duration-500 ${isActive ? 'scale-105' : 'opacity-70'
                      }`}
                  >
                    <div className={`md:w-1/2 md:text-right ${index % 2 === 1 ? 'md:order-2 md:text-left' : ''}`}>
                      <span className="text-primary font-mono text-lg">{item.time}</span>
                    </div>

                    <div className={`w-14 h-14 rounded-full flex items-center justify-center z-10 transition-colors ${isActive ? 'bg-primary' : 'bg-card border-2 border-border'
                      }`}>
                      <Icon className={`h-6 w-6 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>

                    <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                      <span className={`text-lg font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {item.event}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Rounds */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Competition Rounds</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border overflow-hidden">
              <CardHeader className="bg-primary/10 border-b border-border">
                <CardTitle className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">1</span>
                  <span>Mentor Round</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Present your concept to experienced mentors who will review your approach and provide valuable guidance for the final round.
                </p>
                <ul className="space-y-2">
                  {["Concept Review", "Technical Guidance", "Feedback Session"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <CardHeader className="bg-accent/10 border-b border-border">
                <CardTitle className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">2</span>
                  <span>Final Judging Round</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Demonstrate your working prototype to the judging panel with a live demo and technical presentation.
                </p>
                <ul className="space-y-2">
                  {["Live Demo", "Technical Presentation", "Q&A Session"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Judging Criteria */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Judging Criteria</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {judgingCriteria.map((criteria, index) => {
              const Icon = criteria.icon
              return (
                <Card key={index} className="bg-card border-border group hover:border-primary/50 transition-all hover:-translate-y-1">
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{criteria.title}</h3>
                    <p className="text-sm text-muted-foreground">{criteria.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Prizes</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {prizes.map((prize, index) => (
              <Card
                key={index}
                className={`bg-card border-border overflow-hidden relative`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prize.color}`} />
                <CardContent className="pt-8 pb-8 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center mx-auto mb-4`}>
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg text-muted-foreground mb-2">{prize.place} Prize</p>
                  <p className="text-3xl font-bold text-foreground">{prize.prize}</p>
                  <p className="text-primary">{prize.extra}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-8">
            <Zap className="h-10 w-10 text-background" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Innovate?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Register your team now and be part of the biggest IoT hackathon at GCET!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <IndianRupee className="h-5 w-5 text-accent" />
              <span className="text-foreground">Entry Fee: ₹200/team</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-foreground">Team Size: 1-4 members</span>
            </div>
          </div>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6">
            Register Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary font-semibold mb-2">Enthiran - The Robotics & Coding Club</p>
          <p className="text-muted-foreground mb-4">Galgotias College of Engineering and Technology</p>
          <p className="text-sm text-muted-foreground">UNIFEST 2026</p>

          <div className="mt-8">
            <Link href="/" className="text-primary hover:underline">
              <ArrowLeft className="inline-block mr-2 h-4 w-4" />
              Back to All Events
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
