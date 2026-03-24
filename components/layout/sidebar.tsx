"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Dashboard", icon: "dashboard" },
  { href: "/profiles", label: "Pet Profiles", icon: "pets" },
  { href: "/health", label: "Health Monitor", icon: "monitor_heart" },
  { href: "/reminders", label: "Reminders", icon: "event_note" },
  { href: "/shop", label: "Shop", icon: "shopping_bag" },
  { href: "/vet-consult", label: "Vet Consult", icon: "medical_services" },
  { href: "/community", label: "Community", icon: "forum" },
]

const bottomItems = [
  { href: "/settings", label: "Settings", icon: "settings" },
  { href: "/support", label: "Support", icon: "contact_support" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex flex-col p-4 gap-y-2 h-screen w-64 fixed left-0 top-0 z-40 bg-surface-container-lowest border-r border-outline-variant text-sm font-medium">
      {/* Logo */}
      <div className="mb-8 px-2 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
            pets
          </span>
        </div>
        <div>
          <h1 className="text-lg font-black text-primary leading-none font-headline">
            PraniVerse
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Premium Care</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 transition-all duration-200",
                isActive
                  ? "bg-surface-container-high text-primary shadow-sm rounded-lg font-semibold"
                  : "text-on-surface-variant hover:text-primary hover:translate-x-1"
              )}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto pt-4 border-t border-outline-variant space-y-1">
        <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-lg font-semibold mb-4 text-center hover:shadow-lg hover:shadow-primary/20 transition-all">
          Book Consultation
        </button>
        {bottomItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  )
}
