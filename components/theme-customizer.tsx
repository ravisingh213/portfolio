"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Palette, X } from "lucide-react"

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false)

  const colors = [
    { name: "slate", value: "#64748b" },
    { name: "red", value: "#ef4444" },
    { name: "orange", value: "#f97316" },
    { name: "amber", value: "#f59e0b" },
    { name: "yellow", value: "#eab308" },
    { name: "lime", value: "#84cc16" },
    { name: "green", value: "#22c55e" },
    { name: "emerald", value: "#10b981" },
    { name: "teal", value: "#14b8a6" },
    { name: "cyan", value: "#06b6d4" },
    { name: "sky", value: "#0ea5e9" },
    { name: "blue", value: "#3b82f6" },
    { name: "indigo", value: "#6366f1" },
    { name: "violet", value: "#8b5cf6" },
    { name: "purple", value: "#a855f7" },
    { name: "fuchsia", value: "#d946ef" },
    { name: "pink", value: "#ec4899" },
    { name: "rose", value: "#f43f5e" },
    { name: "gehua", value: "#4f46e5" }, // Custom color
  ]

  const setThemeColor = (color: string) => {
    document.documentElement.style.setProperty("--primary", color)
    document.documentElement.style.setProperty("--primary-foreground", "#ffffff")
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 p-4 bg-background border rounded-lg shadow-lg w-64"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Theme Colors</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className="w-8 h-8 rounded-full border focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ backgroundColor: color.value }}
                  onClick={() => setThemeColor(color.value)}
                  aria-label={`Set theme color to ${color.name}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Palette className="h-5 w-5" />
      </Button>
    </div>
  )
}

