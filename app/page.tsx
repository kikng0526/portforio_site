"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { HeroParallax } from "@/components/hero-parallax"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"

const products = [
  {
    title: "入社式",
    link: "#",
    thumbnail: "/images/1.jpeg",
  },
  {
    title: "海風に吹かれて",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/334032",
  },
  {
    title: "歌舞伎町の喧騒",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/504895",
  },
  {
    title: "大学の心得",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/333159",
  },
  {
    title: "データ分析ダッシュボード",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/509895",
  },
  {
    title: "ドラレコですかこれ？",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/509895",
  },
  {
    title: "スタバにて",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/509896",
  },
  {
    title: "新橋は人が多いなあ",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/509897",
  },
  {
    title: "フォースプッシュしちゃった",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/509898",
  },
  {
    title: "フィットネスアプリ",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "料理レシピアプリ",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "誰が板橋のスピルバーグやねん",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/507854",
  },
  {
    title: "2秒で飲みます",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/505998",
  },
  {
    title: "よくちいかわに似てるって言われます",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/505999",
  },
  {
    title: "タスク管理アプリ",
    link: "#",
    thumbnail: "https://image.lgtmoon.dev/509899",
  },
]

export default function Home() {
  const skillCategories = [
    {
      title: "フロントエンド開発",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      skills: [
        { 
          name: "React/Next.js", 
          level: 90, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
        },
        { 
          name: "TypeScript", 
          level: 85, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
        },
        { 
          name: "CSS/Tailwind", 
          level: 95, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
        }
      ]
    },
    {
      title: "バックエンド開発",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      skills: [
        { 
          name: "Node.js", 
          level: 88, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
        },
        { 
          name: "Python", 
          level: 82, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
        },
        { 
          name: "Express", 
          level: 85, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
        }
      ]
    },
    {
      title: "データベース",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      skills: [
        { 
          name: "PostgreSQL", 
          level: 85, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
        },
        { 
          name: "MongoDB", 
          level: 80, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
        },
        { 
          name: "Redis", 
          level: 75, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" 
        }
      ]
    },
    {
      title: "インフラ/DevOps",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      skills: [
        { 
          name: "Docker", 
          level: 85, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
        },
        { 
          name: "AWS", 
          level: 80, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" 
        },
        { 
          name: "GitHub Actions", 
          level: 85, 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
        }
      ]
    }
  ]

  const additionalSkills = [
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      label: "Git" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      label: "CLI" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      label: "UI/UX" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      label: "レスポンシブ" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
      label: "国際化" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      label: "パフォーマンス" 
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="relative w-full">
        <HeroParallax products={products} />
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">私について</h2>
            <div className="max-w-3xl w-full">
              <p className="text-lg text-muted-foreground mb-6 text-center">
                はじめまして、藤田です。Web開発者として、モダンなフロントエンド技術とバックエンド技術を使用して、ユーザーの問題を解決することに情熱を持っています。
                Nuxt.jsを主戦場に数々のアプリケーションを世に送り出してきました。最近はNext.jsとTypeScriptにも興味を持ち、新しい技術を学ぶことに努めています。
                Laravelを読むと蕁麻疹が出ます。趣味は写真撮影と旅行です。
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">主なプロジェクト</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ECサイト開発",
                description: "Next.js、TypeScript、Supabaseを使用したモダンなECサイト",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "SNSアプリケーション",
                description: "リアルタイム通信機能を実装したソーシャルネットワーク",
                image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "分析ダッシュボード",
                description: "データ可視化とレポート機能を備えた管理システム",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      プロジェクトを見る
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50">
              技術スキル
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-6 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-primary/10 group h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="p-2 rounded-lg bg-primary/10"
                    >
                      <Image
                        src={category.icon}
                        alt={category.title}
                        width={24}
                        height={24}
                      />
                    </motion.div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={16}
                            height={16}
                          />
                          <span className="text-sm text-muted-foreground">{skill.name}</span>
                          <span className="text-sm font-medium ml-auto">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                            className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
          >
            {additionalSkills.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-4 text-center hover:bg-primary/5 transition-colors duration-300 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={24}
                      height={24}
                      className="mx-auto mb-2"
                    />
                  </motion.div>
                  <span className="text-sm font-medium">{item.label}</span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
            <Card className="p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">お名前</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
                      placeholder="藤田 翔雅"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">メールアドレス</label>
                    <input
                      type="email"
                      className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">メッセージ</label>
                  <textarea
                    rows={4}
                    className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
                    placeholder="お問い合わせ内容をご記入ください"
                  ></textarea>
                </div>
                <Button className="w-full">送信する</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Shoma Fujita. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}