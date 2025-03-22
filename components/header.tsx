"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import Link from "next/link"
import { useEffect } from "react"

export function Header() {
  const navItems = [
    { name: "私について", href: "#about" },
    { name: "プロジェクト", href: "#projects" },
    { name: "スキル", href: "#skills" },
    { name: "お問い合わせ", href: "#contact" },
  ]

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const href = target.getAttribute('href')
      
      if (href?.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80 // Adjust for header height
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleClick as EventListener)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick as EventListener)
      })
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" asChild>
                <Link 
                  href={item.href}
                  className="relative group"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </Button>
            </motion.div>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  )
}