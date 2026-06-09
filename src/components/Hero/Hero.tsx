import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Clock, Sparkles, Users } from 'lucide-react'
import heroProfile from '../../assets/hero-profile2.jpg'
import heroBackground from '../../assets/generated/hero-premium-background.png'
import { heroConfig } from '../../content/homeContent.js'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-custom relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div
            className="max-w-4xl min-w-0 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="eyebrow">AI Application Practitioner</div>
            <h1 className="font-display max-w-[11ch] sm:max-w-none text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.18] break-all sm:break-normal">
              {heroConfig.title}
            </h1>
            <p
              className="max-w-[22rem] sm:max-w-none text-sm sm:text-base md:text-lg leading-relaxed break-words"
              style={{ color: 'var(--foreground)' }}
            >
              {heroConfig.subtitle}
            </p>
            <p
              className="max-w-[22rem] sm:max-w-2xl text-sm sm:text-base leading-8 break-words"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {heroConfig.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href={heroConfig.primaryButtonLink} className="btn btn-primary">
                {heroConfig.primaryButtonText} <ArrowRight className="w-4 h-4" />
              </a>
              <a href={heroConfig.secondaryButtonLink} className="btn btn-secondary">
                <Users className="w-4 h-4" /> {heroConfig.secondaryButtonText}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual-stage lg:justify-self-end"
            style={{ backgroundImage: `linear-gradient(135deg, oklch(0.1 0.01 75 / 0.08), oklch(0.98 0.014 82 / 0.36)), url(${heroBackground})` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="hero-profile-orb">
              <img
                src={heroProfile}
                alt="Bin哥 - AI 应用实践者"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hero-visual-note">
              <div className="eyebrow mb-3">Professional Profile</div>
              <p className="font-display text-2xl mb-2">Bin哥</p>
              <p className="text-sm leading-7 mb-5 break-words" style={{ color: 'var(--muted-foreground)' }}>
                以工程背景、AI 原生工作方式和内容表达能力，把抽象 AI 能力转成可交付的方案。
              </p>
              <div className="grid gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 icon-accent" />
                  <span>6000+ 小时 AI 共生实践</span>
                </div>
                <div className="flex items-start gap-3">
                  <BriefcaseBusiness className="w-4 h-4 mt-1 icon-accent" />
                  <span>方法论、项目、内容三线并进</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 mt-1 icon-accent" />
                  <span>多模态审美服务于商业表达</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-caption">
              <span>AI Strategy</span>
              <span>Product Delivery</span>
              <span>Visual Craft</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="section-rule mt-14 grid gap-6 py-8 sm:grid-cols-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {heroConfig.stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline justify-between gap-4 sm:block">
              <p className="font-display text-4xl" style={{ color: 'var(--accent)' }}>{stat.value}</p>
              <p className="mt-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
