import { motion } from 'framer-motion'
import { Calendar, Mail } from 'lucide-react'

const ContactCTA = () => {
  return (
    <section className="section" id="contact" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card text-center p-8 md:p-12"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            如果你希望把 AI 变成结果，而不是热闹
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--muted-foreground)' }}>
            我们可以先聊 15 分钟
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="https://wj.qq.com/s2/25653939/5109/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Calendar className="mr-2 w-4 h-4" /> 预约 15 分钟沟通
            </a>
          </div>

          {/* 联系方式 */}
          <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: 'var(--muted-foreground)' }}>
            <a href="mailto:silence52168@gmail.com" className="flex items-center gap-2 hover:underline">
              <Mail className="w-4 h-4" /> silence52168@gmail.com
            </a>
            <span className="flex items-center gap-2">
              微信: silence52168
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA