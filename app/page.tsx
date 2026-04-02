import { SplashScreen } from "@/components/splash-screen"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EventsSection } from "@/components/events-section"
import { AboutSection } from "@/components/about-section"
import { TimelineSection } from "@/components/timeline-section"
import { RegisterSection } from "@/components/register-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SplashScreen />
      <Navigation />
      <HeroSection />
      <EventsSection />
      <AboutSection />
      <TimelineSection />
      <RegisterSection />
      <Footer />
    </main>
  )
}
