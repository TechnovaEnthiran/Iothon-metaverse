"use client"

import { Bot, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

const quickLinks = [
  { name: "Events", href: "#events" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Register", href: "#register" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <a href="#" className="inline-flex items-center gap-3 mb-3 sm:mb-4">
              <div className="relative">
                <Bot className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                ENTHIRAN<span className="text-primary">.26</span>
              </span>
            </a>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-sm mx-auto sm:mx-0">
              The flagship robotics and coding event by Galgotias College of Engineering and Technology. Where innovation meets execution.
            </p>
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start justify-center sm:justify-start gap-2 sm:gap-3 text-muted-foreground">
                <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-left">Galgotias College of Engineering and Technology, Greater Noida, UP</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-muted-foreground">
                <Mail className="h-4 sm:h-5 w-4 sm:w-5 text-primary shrink-0" />
                <a href="mailto:enthiran@gcet.edu.in" className="text-xs sm:text-sm hover:text-primary transition-colors">
                  enthiran@gcet.edu.in
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-muted-foreground">
                <Phone className="h-4 sm:h-5 w-4 sm:w-5 text-primary shrink-0" />
                <span className="text-xs sm:text-sm">+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; 2026 Enthiran. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Made with <span className="text-primary">{"</>"}</span> by Robotics & Coding Club, GCET
          </p>
        </div>
      </div>
    </footer>
  )
}
