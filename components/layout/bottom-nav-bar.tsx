"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home", icon: "dashboard" },
  { href: "/profiles", label: "Pets", icon: "pets" },
  { href: "/health", label: "Health", icon: "monitor_heart" },
  { href: "/shop", label: "Shop", icon: "shopping_bag" },
  { href: "/community", label: "Community", icon: "forum" },
]

export function BottomNavBar() {
  const pathname = usePathname()

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-50 flex items-center justify-around px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1",
              isActive ? "text-cyan-700" : "text-slate-400"
            )}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-bold">{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
