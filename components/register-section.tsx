import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function RegisterSection() {
  return (
    <section id="register" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="w-full mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-mono mb-3 sm:mb-4">
            Join the Revolution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Ready to <span className="text-primary">Compete</span>?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Registrations are now open! Secure your spot in the ultimate robotics and coding showdown.
          </p>
        </div>

        <Card className="max-w-xl mx-auto bg-card border-border">
          <CardHeader className="text-center">
            <CardTitle>Official Registration</CardTitle>
            <CardDescription>Don&apos;t miss out on the action! Click below to fill out our official registration form.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center py-6">
            <div className="flex w-full flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-lg px-8 py-6">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfyL7NybUy-xQOUbQXgPRTEG9Iws00Rd64Izt2oyMHvqMp18A/viewform?fbzx=-5573617321677265007" target="_blank" rel="noopener noreferrer">
                  Register Now
                  <Send className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-border hover:bg-accent hover:text-accent-foreground">
                <a href="https://unstop.com/college-fests/metacognition-tech-venture-unifest-2026-galgotias-college-of-engineering-technology-gcet-greater-noida-454296" target="_blank" rel="noopener noreferrer">
                  Register on Unstop
                </a>
              </Button>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-6">
              Make sure to select all your desired events inside the form!
            </p>
          </CardContent>
        </Card>

        {/* FAQ Preview */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              question: "Who can participate?",
              answer: "Students from any college/university with a valid ID can participate in teams of 2-5 members.",
            },
            {
              question: "What's the registration fee?",
              answer: "Fees vary by event - please check the specific event cards above for accurate pricing.",
            },
            {
              question: "Do I need prior experience?",
              answer: "While helpful, it's not mandatory. We have events for all skill levels!",
            },
          ].map((faq) => (
            <div key={faq.question} className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-card border border-border">
              <h4 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-foreground">{faq.question}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
