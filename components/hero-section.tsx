"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-background py-20 md:py-40">
      {/* 背景のグラデーションエフェクト */}
      <div className="absolute inset-0 w-full h-full bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl"
        />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              FUJITA SHOMA
              <span className="text-primary">Portforio site</span>
              <br />で未来を創る
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
          >
            最新のテクノロジーとクリエイティブな発想で、
            <br className="hidden md:block" />
            革新的なソリューションを提供するフルスタックエンジニア
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="group">
              プロジェクトを見る
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">スクロールして詳細を見る</span>
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-1 h-6 rounded-full bg-primary/20"
            >
              <div className="w-full h-1/2 bg-primary rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}