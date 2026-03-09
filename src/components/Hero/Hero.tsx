import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'
import heroProfile from '../../assets/hero-profile2.jpg'
import { heroConfig } from '../../content/homeContent.js'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full animate-float" style={{ backgroundColor: 'var(--accent)', opacity: 0.6 }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full animate-float" style={{ backgroundColor: 'var(--accent)', opacity: 0.4, animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 rounded-full animate-float" style={{ backgroundColor: 'var(--accent)', opacity: 0.8, animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 rounded-full animate-float" style={{ backgroundColor: 'var(--accent)', opacity: 0.5, animationDelay: '0.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 leading-tight">
              <span className="block">{heroConfig.title}</span>
            </h1>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
              style={{ color: 'oklch(0.42 0.02 240)' }}
            >
              {heroConfig.subtitle}
            </p>
            <p
              className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {heroConfig.description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href={heroConfig.primaryButtonLink} className="btn btn-primary">
              {heroConfig.primaryButtonText} <ArrowRight className="w-4 h-4" />
            </a>
            <a href={heroConfig.secondaryButtonLink} className="btn btn-secondary">
              <Users className="w-4 h-4" /> {heroConfig.secondaryButtonText}
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center mt-16 md:mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative w-48 h-48">
              <div className="w-full h-full rounded-full overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <img
                  src={heroProfile}
                  alt="梁斌 - AI 应用实践者"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)', opacity: 0.7 }}></div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)', opacity: 0.5, animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
